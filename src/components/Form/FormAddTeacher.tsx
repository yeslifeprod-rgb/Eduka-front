import { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { BlueFullButton } from '../Button/CustomButton';
import AddDisciplineButton from '../Button/ButtonAddDiscipline';
import { FormUserFLEInterface } from '../../utils/Interface/FormUseStateParentInterface';
import { ModalDiscipline } from '../Modal/ModalDiscipline';

interface TeacherFormInterface extends FormUserFLEInterface {
  selectedDisciplines: string[];
}

export const FormAddTeacher = () => {
  const [teachers, setTeachers] = useState<TeacherFormInterface>({
    firstName: '',
    lastName: '',
    email: '',
    selectedDisciplines: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   const storedDisciplines = localStorage.getItem("selectedDisciplines");
  //   if (storedDisciplines) {
  //     setTeachers(prevState => ({
  //       ...prevState,
  //       selectedDisciplines: JSON.parse(storedDisciplines)
  //     }));
  //   }
  // }, []);

  const userSchema = object({
    firstName: string().required('nom obligatoire').min(2, 'prénom trop court'),
    lastName: string().required('prénom obligatoire').min(2, 'nom trop court'),
    email: string().email('Invalid email address').required('email obligatoire'),
  })

  const formik = useFormik({
    initialValues: teachers,
    validationSchema: userSchema,
    onSubmit: values => {
       setTeachers({...teachers,
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email
      });
       formik.resetForm();
    },
  });

  const handleClickModalDiscipline = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = (selectedDisciplines: string[]) => {
    setIsModalOpen(false);
    setTeachers(prevState => ({
      ...prevState,
      selectedDisciplines: selectedDisciplines
    }));

  }

  return (
    <>
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
        <div className="mt-4 flex flex-wrap">
          {teachers.selectedDisciplines.map((discipline, index) => (
            <div key={index} className=" px-5 py-1 border-2 border-custom-blue rounded-lg mr-3 mb-2 mt-2">{discipline}</div>
          ))}
        </div>
        <div className='mt-5'>
          <BlueFullButton type="submit">VALIDER</BlueFullButton>
        </div>
      </form>

      {isModalOpen && (
        <ModalDiscipline onClose={handleCloseModal} selectedDisciplines={teachers.selectedDisciplines} />
      )}
    </>
  )
}