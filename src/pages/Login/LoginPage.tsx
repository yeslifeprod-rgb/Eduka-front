import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import { useUser } from "../../services/Context/UserContext";
import { signin } from "../../services/api/auth";
import LoginInterface from "../../services/interfaces/Login";

const LoginPage: React.FC = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);
  const { setUser } = useUser();

  const initialValues: LoginInterface = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'adresse email est requise"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const handleSubmit = async (values: LoginInterface) => {
    console.log("handleSubmit appelé avec les valeurs :", values);
    try {
      const response = await signin(values);

      if (response && response.access_token) {
        localStorage.setItem("accessToken", response.access_token);
        if (response.refresh_token) {
          localStorage.setItem("refreshToken", response.refresh_token);
        }
        setUser(response.user);
        if (values.rememberMe) {
          localStorage.setItem("rememberMeCredentials", JSON.stringify(values));
        } else {
          localStorage.removeItem("rememberMeCredentials");
        }
        setRedirectUrl(response.redirect_url);
      } else {
        setErrorAuthentification(true);
      }
    } catch (error) {
      console.error("Échec de la connexion :", error);
      setErrorAuthentification(true);
    }
  };
  console.log("redirectUrl :", redirectUrl);
  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="grid grid-col items-center justify-center mt-10 ">
          <img className="h-48 m-auto" src="logo_LoginPage.png" alt="eduka" />
          <h2 className="mt-5">Veuillez rentrer vos informations :</h2>
          <div className="mt-5">
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
          <div className="mt-5">
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
            <p className="text-red-500">Vous n'êtes pas autorisé.</p>
          )}
          <NavLink className="flex justify-end mt-5" to="/send_email">
            Mot de passe oublié ?
          </NavLink>
          <div className="flex justify-end items-center mt-2">
            <Field type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="ml-2" htmlFor="rememberMe">
              Se souvenir de moi ?
            </label>
          </div>
          <div className="mt-5">
            <BlueFullButton type="submit">Se Connecter</BlueFullButton>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;
