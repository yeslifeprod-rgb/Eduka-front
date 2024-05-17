import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/Button";

// Interface pour les valeurs du formulaire
interface FormValues {
  new_password: string;
  confirm_password: string;
}

export default function ChangePassword() {
  const navigate = useNavigate();
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

  // Initialisation des valeurs du formulaire avec useState

  // Fonction de soumission du formulaire
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: FormValues, actions: any) => {
    // Actions de mise à jour des données du backend (à remplacer par la logique réelle)
    console.log("Nouveau mot de passe soumis :", values.new_password);
    console.log(
      "Confirmation du mot de passe soumise :",
      values.confirm_password
    );

    // Réinitialiser les valeurs du formulaire après la soumission (à adapter selon les besoins)
    actions.resetForm();
    navigate("/");
  };

  return (
    <div>
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
              <div className="mt-10 ">
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
              <div className="mt-10">
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
            <div className="mt-32">
              <BlueFullButton type="submit">
                Changer le mot de passe
              </BlueFullButton>
            </div>
          </Form>
        </Formik>
      </>
    </div>
  );
}
