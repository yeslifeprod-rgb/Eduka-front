import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import { signin } from "../../services/api/auth";
import LoginInterface from "../../services/interfaces/Login";

const Login: React.FC = () => {
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);

  const initialValues: LoginInterface = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("L'adresse email est requise"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const handleSubmit = async (values: LoginInterface) => {
    console.log("handleSubmit called with values:", values);
    try {
      const response = await signin(values);
      console.log("API response:", response);

      if (response && response.access_token) {
        localStorage.setItem("accessToken", response.access_token);
        if (values.rememberMe) {
          localStorage.setItem("rememberMeCredentials", JSON.stringify(values));
        } else {
          localStorage.removeItem("rememberMeCredentials");
        }
        setShouldNavigate(true);
      } else {
        setShouldNavigate(false);
        setErrorAuthentification(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorAuthentification(true);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="grid grid-col items-center justify-center mt-20">
          <img className="h-48 m-auto" src="logo_LoginPage.png" alt="eduka" />
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
          {errorAuthentification && (
            <p className="text-red-500">
              l'email et password ne correspondent pas
            </p>
          )}
          <NavLink className="flex justify-end mt-10" to="/change_password">
            Mot de passe oublié ?
          </NavLink>
          <div className="flex justify-end items-center mt-2">
            <Field type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="ml-2" htmlFor="rememberMe">
              Se souvenir de moi ?
            </label>
          </div>
          <div className="mt-8">
            <BlueFullButton type="submit">Se Connecter</BlueFullButton>
          </div>
        </Form>
      </Formik>
      {shouldNavigate && <Navigate to="/home_page_parent" />}
    </>
  );
};

export default Login;
