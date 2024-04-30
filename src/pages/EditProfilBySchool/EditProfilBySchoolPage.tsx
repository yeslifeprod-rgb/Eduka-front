import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import { BlueButton, OrangeButton } from '../../components/Button/CustomButton';

const EditProfileBySchoolPage: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [children, setChildren] = useState<Child[]>([]);
    const [childToDeleteId, setChildToDeleteId] = useState<number | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    useEffect(() => {
        const storedChildren = localStorage.getItem('children');
        if (storedChildren) {
            setChildren(JSON.parse(storedChildren));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('children', JSON.stringify(children));
    }, [children]);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleConfirmModalOpen = () => {
        setConfirmModalOpen(true);
    };

    const handleConfirmModalClose = () => {
        setConfirmModalOpen(false);
    };

    const handleConfirmModalOk = () => {
        setConfirmModalOpen(false);
        window.location.reload();
    };

    const handleAddChild = (child: Child) => {
        if (children.length < 4) {
            setChildren([...children, child]);
        }
    };

    const handleDeleteChild = (id: number) => {
        setChildToDeleteId(id);
    };

    const handleConfirmDeleteChild = () => {
        if (childToDeleteId !== null) {
            const updatedChildren = children.filter(child => child.id !== childToDeleteId);
            setChildren(updatedChildren);
            setChildToDeleteId(null);
        }
    };

    const handleSubjectSelection = (subject: string) => {
        setSelectedSubject(subject);
        handleCloseModal();
    };

    const handleAddSubject = (childId: number, subject: string | null) => {
        if (childId && subject) {
            const updatedChildren = children.map(child => {
                if (child.id === childId) {
                    if (!child.matieres) {
                        child.matieres = [];
                    }
                    child.matieres.push(subject);
                }
                return child;
            });
            setChildren(updatedChildren);
            setSelectedSubject(null);
        }
    };

    return (
        <div className="max-w-md mx-auto flex flex-col items-center justify-center">
            <div className="md:max-lg:flex" style={{ marginBottom: '5rem' }}></div>

            <img src="/public/profil.png" alt="Profil" className="w-50 h-auto rounded-full mb-8 md:mb-0 my-4 md:my-0" />
            <div className="mb-8 flex items-center"></div>

            <Formik
                initialValues={{
                    nom: '',
                    prenom: '',
                    email: '',
                    childName: '',
                    dateOfBirth: '',
                    class: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    const newChild: Child = {
                        id: children.length + 1,
                        nom: values.nom,
                        prenom: values.prenom,
                        classe: values.class,
                        matieres: []
                    };
                    handleAddChild(newChild);
                    resetForm();
                }}
            >
                <Form className="w-full max-w-md space-y-4 md:space-y-8">
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <Field type="text" id="last-name" name="nom" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <Field type="text" id="first-name" name="prenom" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Field type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="child-name" className="block text-sm font-medium text-gray-700">Nom de l'enfant</label>
                        <Field type="text" id="child-name" name="childName" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700">Date de naissance de l'enfant</label>
                        <Field type="date" id="date-of-birth" name="dateOfBirth" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Classe de l'enfant</label>
                        <Field as="select" id="class" name="class" className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value="">Sélectionner la classe</option>
                            <option value="class1">Classe 1</option>
                            <option value="class2">Classe 2</option>
                            <option value="class3">Classe 3</option>
                        </Field>
                        <div className="md:hidden" style={{ marginBottom: '5rem' }}></div>
                    </div>
                    {children.map(child => (
                        <div key={child.id}>
                            <label htmlFor={`child-name-${child.id}`} className="block text-sm font-medium text-gray-700">Nom de l'enfant</label>
                            <input type="text" id={`child-name-${child.id}`} name={`nom-enfant-${child.id}`} value={child.nom} readOnly className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            <label htmlFor={`date-of-birth-${child.id}`} className="block text-sm font-medium text-gray-700">Date de naissance de l'enfant</label>
                            <input type="text" id={`date-of-birth-${child.id}`} name={`prenom-enfant-${child.id}`} value={child.dateOfBirth} readOnly className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            <label htmlFor={`class-${child.id}`} className="block text-sm font-medium text-gray-700">Classe de l'enfant</label>
                            <input type="text" id={`class-${child.id}`} name={`classe-enfant-${child.id}`} value={child.classe} readOnly className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            {child.matieres && child.matieres.map((matiere, index) => (
                                <div key={index}>{matiere}</div>
                            ))}
                            <Button variant="contained" style={{ backgroundColor: "#F7A072", color: "white" }} onClick={() => handleDeleteChild(child.id)}>
                                <DeleteIcon />
                                Supprimer l'enfant
                            </Button>
                            {selectedSubject && (
                                <Button variant="contained" style={{ backgroundColor: "#0FA3B1", color: "white" }} onClick={() => handleAddSubject(child.id, selectedSubject)}>
                                    <AddIcon />
                                    Ajouter une matière
                                </Button>
                            )}
                        </div>
                    ))}
                    {children.length < 4 && (
                        <div className="flex flex-col">
                            <Button type="submit" variant="contained" style={{ backgroundColor: "#0FA3B1", color: "white", marginBottom: '1rem' }}>
                                <AddIcon />
                                Ajouter un enfant
                            </Button>
                        </div>
                    )}

                    <Button variant="contained" style={{ backgroundColor: "#0FA3B1", color: "white", marginBottom: '1rem' }} onClick={handleOpenModal}>
                        Sélectionner une matière
                    </Button>
                    <Modal open={openModal} onClose={handleCloseModal} className="flex items-center justify-center">
                        <div className="bg-white p-8 rounded-md">
                            <h2 className="text-lg font-bold mb-4">Sélectionner une matière</h2>
                            <div className="flex flex-col">
                                <Button onClick={() => handleSubjectSelection("Anglais")} style={{ marginBottom: '1rem' }}>Anglais</Button>
                                <Button onClick={() => handleSubjectSelection("Français")} style={{ marginBottom: '1rem' }}>Français</Button>
                                <Button onClick={() => handleSubjectSelection("Mathématiques")}>Mathématiques</Button>
                            </div>
                        </div>
                    </Modal>

                </Form>
            </Formik>
            <div className="flex flex-col md:flex-row w-full md:items-center md:mt-8 space-y-4 md:space-y-0 md:space-x-4">
                <BlueButton variant="contained" style={{ backgroundColor: "#0FA3B1", color: "white" }}>Valider</BlueButton>
                <div className="md:hidden" style={{ width: '1rem' }}></div>
                <Button variant="contained" style={{ backgroundColor: "#F7A072", color: "white" }} onClick={handleOpenModal}>
                    <DeleteIcon />
                    Supprimer le profil
                </Button>
            </div>
            <Modal open={openModal} onClose={handleCloseModal} className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-md">
                    <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
                    <p className="text-sm mb-4">Êtes-vous sûr de vouloir supprimer le profil ? Cette action est irréversible.</p>
                    <div className="flex justify-end">
                        <OrangeButton onClick={handleCloseModal} style={{ marginRight: '8px', backgroundColor: "#F7A072", color: "white" }}>Annuler</OrangeButton>
                        <BlueButton onClick={handleConfirmModalOpen} style={{ backgroundColor: "#0FA3B1", color: "white" }}>Valider la suppression</BlueButton>
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
            <Modal open={childToDeleteId !== null} onClose={() => setChildToDeleteId(null)} className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-md">
                    <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
                    <p className="text-sm mb-4">Êtes-vous sûr de vouloir supprimer cet enfant ? Cette action est irréversible.</p>
                    <div className="flex justify-end">
                        <OrangeButton onClick={() => setChildToDeleteId(null)} style={{ marginRight: '8px', backgroundColor: "#F7A072", color: "white" }}>Annuler</OrangeButton>
                        <BlueButton onClick={handleConfirmDeleteChild} style={{ backgroundColor: "#0FA3B1", color: "white" }}>Confirmer la suppression</BlueButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EditProfileBySchoolPage;
