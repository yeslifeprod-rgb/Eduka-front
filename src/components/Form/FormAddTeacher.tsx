import { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { BlueFullButton } from '../Button/CustomButton';
import AddDisciplineButton from '../Button/ButtonAddDiscipline';
import { FormUserFLEInterface } from '../../utils/Interface/FormUseStateParentInterface';
import { ModalDiscipline } from '../Modals/ModalDiscipline';

// Définir l'interface pour les données du formulaire de l'enseignant
interface TeacherFormInterface extends FormUserFLEInterface {
  selectedDisciplines: string[];
}

export const FormAddTeacher = () => {
  // État local pour stocker les données du formulaire de l'enseignant
  const [teachers, setTeachers] = useState<TeacherFormInterface>({
    firstName: '',
    lastName: '',
    email: '',
    selectedDisciplines: []
  });

  // État local pour gérer l'ouverture et la fermeture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Schéma de validation du formulaire
  const userSchema = object({
    firstName: string().required('Nom obligatoire').min(2, 'Prénom trop court'),
    lastName: string().required('Prénom obligatoire').min(2, 'Nom trop court'),
    email: string().email('Adresse email invalide').required('Email obligatoire'),
  });

  // Initialiser formik avec les valeurs initiales, le schéma de validation et la fonction de soumission
  const formik = useFormik({
    initialValues: teachers,
    validationSchema: userSchema,
    onSubmit: values => {
      // Mettre à jour les valeurs de l'enseignant avec les valeurs soumises par le formulaire
      setTeachers({
        ...teachers,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email
      });
      // Réinitialiser le formulaire
      formik.resetForm();
    },
  });

  // Gérer l'ouverture de la modal des disciplines
  const handleClickModalDiscipline = () => {
    setIsModalOpen(true);
  }

  // Gérer la fermeture de la modal des disciplines et mettre à jour les disciplines sélectionnées
  const handleCloseModal = (selectedDisciplines: string[]) => {
    setIsModalOpen(false);
    setTeachers(prevState => ({ // je récupère les disciplines de manière asynchrone, donc je m'assure de les prendre correctement avec prevState
      ...prevState,
      selectedDisciplines: selectedDisciplines
    }));
  }

  return (
    <>
      {/* Formulaire d'ajout d'enseignant */}
      <form className="mb-4 sm:w-96 w-full" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="lastname">Nom</label>
          <input type="text" onChange={formik.handleChange}
            value={formik.values.lastName} name='lastName' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue" />
          <small>{formik.errors.lastName}</small>
        </div>
        <div className="mb-4">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" onChange={formik.handleChange}
            value={formik.values.firstName} name='firstName' className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue" />
          <small>{formik.errors.firstName}</small>
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={formik.handleChange}
            value={formik.values.email} name="email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue" />
          <small>{formik.errors.email}</small>
        </div>
        <div className='mt-10' onClick={handleClickModalDiscipline}>
          <AddDisciplineButton />
        </div>
        {/* Afficher les disciplines sélectionnées */}
        <div className="mt-4 flex flex-wrap">
          {teachers.selectedDisciplines.map((discipline, index) => (
            <div key={index} className=" px-5 py-1 border-2 border-custom-blue rounded-lg mr-3 mb-2 mt-2">{discipline}</div>
          ))}
        </div>
        <div className='mt-5'>
          <BlueFullButton type="submit">VALIDER</BlueFullButton>
        </div>
      </form>

      {/* Afficher la modal des disciplines si isModalOpen est vrai */}
      {isModalOpen && (
        <ModalDiscipline onClose={handleCloseModal} selectedDisciplines={teachers.selectedDisciplines} />
      )}
    </>
  );
}