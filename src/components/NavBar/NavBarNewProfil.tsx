import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBarNewProfil = () => {
    return (
        <div className='flex justify-between items-center py-5 px-4 border-b-2'>
            <NavLink to="/">
            <IconButton aria-label="delete" size="large">
                <CloseIcon/>
                </IconButton>
            </NavLink>
            <h2 className="mr-16 text-2xl">Nouveau Profil</h2>
            <div></div>
        </div>
    )
}

