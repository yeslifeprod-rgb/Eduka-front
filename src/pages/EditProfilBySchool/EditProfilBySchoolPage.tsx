import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BlueButton, OrangeButton } from '../../components/Button/CustomButton';

const EditProfilBySchoolPage: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleConfirmModalOpen = () => {
        setConfirmModalOpen(true);
        setTimeout(() => {
            setConfirmModalOpen(false);
        }, 5000);
    };

    const handleConfirmModalClose = () => {
        setConfirmModalOpen(false);
    };

    const handleConfirmModalOk = () => {
        setConfirmModalOpen(false);
        window.location.reload();
    };

    return (
        <div className="max-w-md mx-auto flex flex-col items-center justify-center">
            <div className="md:max-lg:flex" style={{ marginBottom: '5rem' }}></div> {/* Espace desktop uniquement */}

            <img src="/public/profil.png" alt="Profil" className="w-50 h-auto rounded-full mb-8 md:mb-0 my-4 md:my-0" />
            <div className="mb-8 flex items-center"></div>

            <form className="w-full max-w-md space-y-4 md:space-y-8">

                {/* Champs du formulaire */}
                {/* Nom */}
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" id="nom" name="nom" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                {/* Prénom */}
                <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                    <input type="text" id="prenom" name="prenom" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                {/* Nom de l'enfant */}
                <div>
                    <label htmlFor="nom-enfant" className="block text-sm font-medium text-gray-700">Nom de l'enfant</label>
                    <input type="text" id="nom-enfant" name="nom-enfant" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                {/* Date de naissance de l'enfant */}
                <div>
                    <label htmlFor="date-naissance" className="block text-sm font-medium text-gray-700">Date de naissance de l'enfant</label>
                    <input type="date" id="date-naissance" name="date-naissance" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                {/* Classe de l'enfant */}
                <div>
                    <label htmlFor="classe" className="block text-sm font-medium text-gray-700">Classe de l'enfant</label>
                    <select id="classe" name="classe" className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                        <option value="">Sélectionner la classe</option>
                        <option value="classe1">Classe 1</option>
                        <option value="classe2">Classe 2</option>
                        <option value="classe3">Classe 3</option>
                    </select>
                    <div className="md:hidden" style={{ marginBottom: '5rem' }}></div> {/* Espace mobile uniquement */}
                </div>
            </form>
            <div className="flex flex-col md:flex-row w-full md:items-center md:mt-8 mb-4 space-y-4 md:space-y-0 md:space-x-4">
                <BlueButton variant="contained" style={{ backgroundColor: "#0FA3B1", color: "white" }}>Valider</BlueButton>
                <div className="hidden md:block" style={{ width: '1rem' }}></div> {/* Espace entre les boutons sur desktop */}
                <Button variant="contained" style={{ backgroundColor: "#F7A072", color: "white" }} onClick={handleOpenModal}>
                    <DeleteIcon />
                    Supprimer le profil
                </Button>
            </div>
            <div className="md:hidden" style={{ marginBottom: '5rem' }}></div> {/* Espace mobile uniquement */}
            <Modal open={openModal} onClose={handleCloseModal} className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-md">
                    <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
                    <p className="text-sm mb-4">Êtes-vous sûr de vouloir supprimer le profil ? Cette action est irréversible.</p>
                    <div className="flex justify-end">
                        <OrangeButton onClick={handleCloseModal} style={{ marginRight: '8px', backgroundColor: "#F7A072", color: "white" }}>Annuler</  OrangeButton>
                        <BlueButton onClick={handleConfirmModalOpen} style={{ backgroundColor: "#0FA3B1", color: "white" }}>Valider la suppression</ BlueButton>
                    </div>
                </div>
            </Modal>
            <Modal open={confirmModalOpen} onClose={handleConfirmModalClose} className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-md">
                    <h2 className="text-lg font-bold mb-4">Compte supprimé</h2>
                    <p className="text-sm mb-4">Le compte a été supprimé avec succès.</p>
                    <div className="flex justify-end">
                        <BlueButton onClick={handleConfirmModalOk} style={{ backgroundColor: "#0FA3B1", color: "white" }}>
                            <CheckCircleOutlineIcon />
                            OK
                        </BlueButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EditProfilBySchoolPage;
