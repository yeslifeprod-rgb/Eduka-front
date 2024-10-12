import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import LoginInterface from "../../services/interfaces/Login";
import {useApi} from "../../hooks/useApi";
import {jwtDecode} from 'jwt-decode';
import {User} from "../../utils/PrivateRoute.tsx";

export default function Login() {

  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("L'adresse email est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const [initialValues, setInitialValues] = useState<LoginInterface>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate(); // Call the hook to get the navigate function
  const api = useApi();

  // Check if credentials are stored in localStorage on component mount
  useEffect(() => {
    const credentialsAsString = localStorage.getItem("rememeberMeCredentials");
    const credentials = credentialsAsString
      ? JSON.parse(credentialsAsString)
      : undefined;

    if (credentials) {
      // Update initial values based on localstorage
      setInitialValues({
        email: credentials.email,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
      });
    }
  }, []);

  useEffect(() => {
    // Redirect to Parent or School Welcome page according to the user's role
    if (redirectUrl) {
      navigate(redirectUrl); // Use the navigate function to redirect
    }
  }, [redirectUrl, navigate]); // Include navigate in the dependency array

  const handleRememberMe = (values: LoginInterface) => {
    if (values.rememberMe) {
      localStorage.setItem("rememeberMeCredentials", JSON.stringify(values));
    } else {
      localStorage.removeItem("rememeberMeCredentials");
    }
  };

  const handleSubmit = async (values: LoginInterface) => {
    try {
      //Sauvegarde ou detruis l'email et le mot de passe pour le cas "se souvenir de moi"
      handleRememberMe(values);

      const response = await api.post("/auth/signin",{"email":values.email,"password":values.password})

      const myToken = response.data.access_token;

      if (myToken) {//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJhbmlhQGVkdWthLmZyIiwicm9sZXMiOlsiUEFSRU5UIl0sImlhdCI6MTcyODc2MzA1MiwiZXhwIjoxNzI4NzY0ODUyfQ.mXxgwV_9joFyu-yrifxLhbVhSsW41x-ITSuZxUkSO1k
        console.log("vous etes bien authentifie");
        //Je suis authentifié
        sessionStorage.setItem("accessToken", myToken);

        const payload = jwtDecode(myToken);
        console.log(payload);
        //Je fais correspondre le champ sub à id de l'interface User
        const user:User = {
          id: payload.sub,
          role: payload.roles[0],
          email: payload.email,
          status: payload.status,
          created_at:payload.created_at,
          updated_at:payload.updated_at
        }

        //J'enregistre les infos de l'utilisateur courant/connecté
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        //Redirect either to Parent or School page depending of authenticated user role.
        setRedirectUrl('/');
        if (payload.roles.includes('PARENT')) {
          setRedirectUrl('/home_page_parent');
        }
        if (payload.roles.includes('SCHOOL')) {
          setRedirectUrl('/home_page_school');
        }

      } else {
        console.log("Vous n'etes pas authorise");
        setRedirectUrl(null);
        setErrorAuthentification(true);
      }

      //Handle successful login here, such as setting user state or redirecting to another page
    } catch (error) {
      console.error("Login failed:", error);
      //Handle login error, display error message, etc.
    }
  };


  return (
    <>
      {errorAuthentification && (
        <>
          <h2>I don't know you.</h2>
        </>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="grid grid-col items-center justify-center mt-20">
          <img
            className="h-48 m-auto"
            src="./public/logo_LoginPage.png"
            alt="eduka"
          />
          <h2 className="mt-10">Veuillez rentrer vos informations :</h2>
          <div className="mt-10">
            <label htmlFor="email">Email</label>
            <Field
              className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage
              component="div"
              className="text-red-500"
              name="email"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="password">Mot de Passe</label>
            <Field
              className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage
              component="div"
              className="text-red-500"
              name="password"
            />
          </div>
          <NavLink className="flex justify-end mt-10" to="/change_password">
            Mot de passe oublié ?
          </NavLink>
          <div className="flex justify-end items-center mt-2">
            <Field
              sx={{
                color: "#0fa3b1",
                "&.Mui-checked": {
                  color: "#0fa3b1",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label>Se souvenir de moi ?</label>
          </div>
          <div className="mt-8">
            <BlueFullButton type="submit">Se Connecter</BlueFullButton>
          </div>
        </Form>
      </Formik>

    </>
  );
}
