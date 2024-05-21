import Checkbox from "@mui/material/Checkbox";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import LoginInterface from "../../services/interfaces/Login";
import { getFakerLoginData } from "../../utils/Axios/axios";

export default function Login() {
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [redirectTo, setRedirectTo] = useState<string>("");
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);
  const [fakeLogin, setFakeLogin] = useState<LoginInterface[]>([]);

  useEffect(() => {
    const fetchFakeLoginData = async () => {
      try {
        const data = await getFakerLoginData();
        if (data) {
          setFakeLogin(data.datas);
        }
      } catch (error) {
        console.error("Error fetching fake login data:", error);
      }
    };

    fetchFakeLoginData();
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const initialValues: LoginInterface = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleSubmit = async (values: LoginInterface) => {
    const filteredUsers = fakeLogin.filter(
      (user) =>
        user.email.toLowerCase() === values.email.toLowerCase() &&
        user.password === values.password
    );

    if (filteredUsers.length === 1) {
      const user = filteredUsers[0];
      sessionStorage.setItem("token", "true");

      let redirectPath = "";
      switch (user.role) {
        case "school_admin":
          redirectPath = "/home_page_school";
          break;
        case "parent":
          redirectPath = "/home_page_parent";
          break;
        case "teacher":
          redirectPath = "/home_page_teacher";
          break;
        default:
          break;
      }

      setRedirectTo(redirectPath);
      setShouldNavigate(true);
    } else {
      setShouldNavigate(false);
      setErrorAuthentification(true);
    }
  };

  if (shouldNavigate) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <>
      {errorAuthentification && <h2>I don't know you so go.</h2>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
            <Checkbox
              sx={{
                color: "#0fa3b1",
                "&.Mui-checked": {
                  color: "#0fa3b1",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
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
