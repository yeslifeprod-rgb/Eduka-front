import { NavBarNewProfil } from "../components/NavBar/NavBarNewProfil"
import { FormAddParent } from '../components/Form/FormAddParent';


export const ParentSignUpPage = () => {

    return (
        <>
            <NavBarNewProfil />
            <div className='grid grid-col items-center justify-center mt-20'>
                <h2 className='text-xl font-semibold mb-3'>Remplissez les informations requises :</h2>
            <FormAddParent />
            </div>
        </>
    )
}