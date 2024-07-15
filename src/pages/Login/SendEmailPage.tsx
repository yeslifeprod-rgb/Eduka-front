import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Modal, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";
import { sendEmail } from "../../services/api/send_email";

// Interface pour les valeurs du formulaire
interface FormValues {
  email: string;
}

export default function SendEmailPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'adresse email est requise"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await sendEmail({ email: values.email });
      if (!response.error) {
        console.log("Password reset email request sent:", response);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 5000);
      } else {
        console.error("Failed to send password reset email:", response.error);
      }
    } catch (error) {
      console.error("Failed to send password reset email:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="grid grid-col items-center justify-center mt-20 max-w-sm m-auto">
          <img
            className="h-48 m-auto"
            src="./public/logo_LoginPage.png"
            alt="eduka"
          />
          <div>
            <h2 className="mt-10 ">
              Veuillez renseigner un nouveau mot de passe
            </h2>
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
          </div>
          <div className="mt-32">
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
            Si votre email est bien enregistré vous recevrez un email de
            réinitialisation!
            <div className="flex justify-center mt-5">
              <TaskAltIcon transform="scale-150" fontSize="large" />
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
