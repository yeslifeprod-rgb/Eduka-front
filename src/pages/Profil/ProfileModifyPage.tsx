import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  BlueFullButton,
  OrangeFullButtonDeleteIcon,
} from "../../components/Button/CustomButton";
import ProfilModifyInterface from "../../services/interfaces/ProfileModify";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ProfileModifyInterface from "../../services/interfaces/ProfileModify";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Le prenom doit contenir au moins 2 caractères")
    .required("Le prenom est requis"),
  lastname: Yup.string()
    .min(2, "Le nom de famille doit contenir au moins 2 caractères")
    .required("Le nom de famille est requis"),
  address: Yup.string().required("L'adresse est requise"),
  phone: Yup.string().required("Le numéro de téléphone est requis"),
  //TODO ADD missing fields....
});

export default function ProfileModifyPage() {
  const [initialValues, setInitialValues] = useState<ProfileModifyInterface>({
    avatar: "",
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    password: "",
    email: "",
  });
  const [avatar, setAvatar] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const credentialsAsString = localStorage.getItem("currentUser");
    const credentials = credentialsAsString
      ? JSON.parse(credentialsAsString)
      : undefined;

    if (credentials) {
      if (credentials.avatar) {
        setAvatar(credentials.avatar);
      }

      //credentials IS NOT NULL
      // Update initial values based on localstorage
      setInitialValues({
        avatar: "",
        firstname: credentials.first_name,
        lastname: credentials.last_name,
        address: credentials.address,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
      });
    }
  }, []);

  const handleSaveProfil = async (values: ProfileModifyInterface) => {
    try {
      if (avatar) {
        values.avatar = avatar;
      }
      localStorage.setItem("currentUser", JSON.stringify(values));
      values.avatar = ""; //@dev workarround to fix because of Formik error:Uncaught DOMException: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/home_page_parent");
      }, 2000);
    } catch (error) {
      console.error("Saving Profile failed:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        const avatarDataUrl = event.target.result.toString();
        setAvatar(avatarDataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className=" fixed bg-white  top-0 w-full flex justify-between items-center py-5 px-4 z-10">
        <NavLink to="/home_page_parent">
          <IconButton aria-label="delete" size="large">
            <CloseIcon />
          </IconButton>
        </NavLink>
      </div>
      <section className="flex flex-col gap-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSaveProfil}
          enableReinitialize
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="grid grid-col items-center justify-center mt-20 vh-100">
              <div
                className="md:max-lg:flex"
                style={{ marginBottom: "5rem" }}
              ></div>
              <div className="flex justify-between items-center py-4 gap-4 ">
                {avatar && (
                  <img
                    src={avatar}
                    alt="Uploaded"
                    className=" max-w-48 rounded-xl"
                  />
                )}

                <Field
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="avatar/*"
                  placeholder="Modifier mon avatar"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue 
                      : "border-gray-300"
                  }`}
                  onChange={handleUploadAvatar}
                />
              </div>
              <div className="mb-8 flex items-center"></div>
              <div className="mb-4">
                <label htmlFor="firstname">Prénom</label>
                <Field
                  id="firstname"
                  name="firstname"
                  type="text"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.firstname && touched.firstname
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname">Nom</label>
                <Field
                  id="lastname"
                  name="lastname"
                  type="text"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.lastname && touched.lastname
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address">Adresse</label>
                <Field
                  id="address"
                  name="address"
                  type="text"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.address && touched.address
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Téléphone</label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.phone && touched.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Mot de passe</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mt-10">
                <BlueFullButton type="submit" disabled={isSubmitting}>
                  Sauvegarder
                </BlueFullButton>
              </div>
              <div className="mt-10">
                <Link to="/home_page_parent">
                  <OrangeFullButtonDeleteIcon disabled={isSubmitting}>
                    Supprimer
                  </OrangeFullButtonDeleteIcon>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-[8000]">
          <Typography
            className="absolute bg-white p-8 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md  border rounded-lg shadow-sm m-auto "
            id="modal-modal-title"
            component="p"
          >
            Votre profil a bien été enregistré!
            <div className="flex justify-center mt-5">
              <TaskAltIcon transform="scale-150" fontSize="large" />
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
