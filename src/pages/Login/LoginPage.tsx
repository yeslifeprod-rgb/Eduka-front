import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import LoginInterface from "../../services/interfaces/Login";
import { getFakerUsersData } from "../../utils/Axios/axios";

export default function Login() {
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);
  

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("L'adresse email est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const [initialValues, setInitialValues] = useState<LoginInterface>({
    email: "",
    password: "",
    rememberMe: false,
  });

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

  const handleRememberMe =  (values: LoginInterface) => {
    if(values.rememberMe){
      localStorage.setItem("rememeberMeCredentials", JSON.stringify(values));
    }else{
      localStorage.removeItem("rememeberMeCredentials");
    }

  }

   const handleSubmit = async (values: LoginInterface) => {
    try {
      //Sauvegarde ou detruis l'email et le mot de passe pour le cas "se souvenir de moi"
      handleRememberMe(values);

      const response = await getFakerUsersData();

      const usersList = response.datas;

      const filteredUsers = usersList.filter((user: { email: string }) =>
        user.email.toLowerCase().includes(values.email.toLowerCase())
      );
      console.log(filteredUsers);

      if (filteredUsers && filteredUsers.length === 1 && values.password === filteredUsers[0].password) {
          console.log("vous etes bien authentifie");
          //Je suis authentifié
          sessionStorage.setItem("token", "true");
          //J'enregistre les infos de l'utilisateur courant/connecté
          localStorage.setItem("currentUser", JSON.stringify({...filteredUsers[0] }));
          setShouldNavigate(true);
    

      } else {
        console.log("Vous n'etes pas authorise");
        setShouldNavigate(false);
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
            <BlueFullButton type="submit" >Se Connecter</BlueFullButton>
          </div>
        </Form>
      </Formik>
      {shouldNavigate && <Navigate to="/home_page_parent" />}
    </>
  );
}
