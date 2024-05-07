import { NavBarNewProfil } from "../../components/NavBar/NavBarNewProfil"
import { FormAddTeacher } from "../../components/Form/FormAddTeacher";


export const TeacherSignUpPage = () => {

    return (
        <>
            <NavBarNewProfil />
            <div className='grid grid-col items-center justify-center mt-20'>
                <h2 className='text-xl font-semibold mb-3'>Remplissez les informations requises :</h2>
                <FormAddTeacher />
            </div>
        </>
    )
}