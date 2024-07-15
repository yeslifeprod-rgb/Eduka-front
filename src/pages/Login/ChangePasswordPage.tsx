import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Modal, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import { useApi } from "../../hooks/useApi";
import { ChangePassword } from "../../services/api/change-password";

// Interface pour les valeurs du formulaire
interface FormValues {
  new_password: string;
  confirm_password: string;
}

// Fonction pour récupérer l'ID utilisateur à partir du token
const fetchUserIdFromToken = async (token: string) => {
  const api = useApi();
  try {
    const { data } = await api.get(
      `user/get-user-id-from-token?token=${token}`
    );
    return data.userId;
  } catch (error) {
    console.error("Failed to fetch user ID:", error);
    return null;
  }
};

export default function ChangePasswordPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const api = useApi();

  // Validation du schéma du mot de passe
  const validationSchema = Yup.object().shape({
    new_password: Yup.string()
      .required("Le mot de passe est requis")
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
      ),
    confirm_password: Yup.string()
      .required("La confirmation du mot de passe est requise")
      .oneOf(
        [Yup.ref("new_password")],
        "Les mots de passe doivent correspondre"
      ),
  });

  // Extraction du token et récupération de l'ID utilisateur
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      fetchUserIdFromToken(token).then(setUserId);
    }
  }, [location]);

  // Soumission du formulaire
  const handleSubmit = async (values: FormValues) => {
    if (!userId) {
      console.error("User ID not found.");
      return;
    }
    try {
      const response = await ChangePassword({
        userId: "1",
        newPassword: values.new_password,
      });
      if (!response.error) {
        console.log("Password has been changed:", response);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 5000);
      } else {
        console.error("Failed to change password:", response.error);
      }
    } catch (error) {
      console.error("Failed to change password:", error);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          new_password: "",
          confirm_password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="grid grid-col items-center justify-center mt-10 max-w-sm m-auto">
          <img
            className="h-48 m-auto"
            src="./public/logo_LoginPage.png"
            alt="eduka"
          />
          <div>
            <h2 className="mt-5 ">
              Veuillez renseigner un nouveau mot de passe
            </h2>
            <div className="mt-5 ">
              <label htmlFor="new_password">Nouveau mot de passe</label>
              <Field
                className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                type="password"
                id="new_password"
                name="new_password"
              />
              <ErrorMessage
                component="div"
                className="text-red-500"
                name="new_password"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="confirm_password">
                Confirmer le nouveau mot de passe
              </label>
              <Field
                className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                type="password"
                id="confirm_password"
                name="confirm_password"
              />
              <ErrorMessage
                component="div"
                className="text-red-500"
                name="confirm_password"
              />
            </div>
          </div>
          <div className="mt-10">
            <BlueFullButton type="submit">
              Changer le mot de passe
            </BlueFullButton>
          </div>
        </Form>
      </Formik>
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
            le mot de passe est bien modifié!
            <div className="flex justify-center mt-5">
              <TaskAltIcon transform="scale-150" fontSize="large" />
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
