import { useFormik } from "formik";
import { BlueFullButton } from "../../components/Button/CustomButton";
import { object, ref, string } from "yup";
import { useState } from "react";
import { ModalConfirmPassword } from "../../components/Modals/ModalConfirmPassword";


export const ChangePassword = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validationSchema: object({
      password: string().min(8, "  Le mot de passe doit contenir au minimum 8 caractères").required("Le mot de passe est requis")
      .matches(
        /^(?=.*[a-z])/,
        "  Le mot de passe doit contenir une majuscule"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "  Le mot de passe doit contenir une minuscule"
      )
      .matches(
        /^(?=.*[0-9])/,
        "  Le mot de passe doit contenir un chiffre"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Le mot de passe doit contenir un caractère spécial"
      ),
      confirmPassword: string().label('confirmPassword').required("Le mot de passe est requis").oneOf([ref('password'), null], "  Les mots de passe doivent être identiques"),
    }),

    onSubmit: values => {
      console.log("🚀 ~ ChangePassword ~ values:", values)
      handleClickModalConfirmPassword();
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickModalConfirmPassword = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <>
      <form className="grid grid-col items-center justify-center mt-20" onSubmit={formik.handleSubmit}>
        <img
          className="h-48 m-auto"
          src="./public/logo_LoginPage.png"
          alt="eduka"
        />
        <h2 className="mt-10 mb-8">Veuillez changer votre mot de passe :</h2>
        <div className="mb-10">
          <label htmlFor="password">Nouveau mot de passe</label>
          <input type="password"
            name='password' className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue" onChange={formik.handleChange}
            value={formik.values.password} />
            <small>{formik.errors.password}</small>
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
          <input type="password" name='confirmPassword' className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue" onChange={formik.handleChange}
            value={formik.values.confirmPassword} />
            <small>{formik.errors.confirmPassword}</small>
        </div>
        <div className='mt-10'>
          <BlueFullButton type="submit">VALIDER</BlueFullButton>
        </div>
      </form>
      {isModalOpen && (
        <ModalConfirmPassword onClose={handleCloseModal} />
      )}
    </>
  );
};