import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { BlueFullButton, OrangeFullButton } from '../../components/Button/CustomButton';
import AddChildButton from '../../components/Button/ButtonAddChild';
import fakeData from './Faker';
import { FaTimes } from 'react-icons/fa';
import ParentForm from './ParentForm';
import ChildForm from './ChildForm';
import SubjectSelection from './SubjectSelection';

interface FormChildInterface {
    firstName: string;
    name: string;
    birthday: string;
    class: string;
}

interface FormUserFLEInterface {
    firstName: string;
    lastName: string;
    email: string;
}

export const EditProfilBySchoolPage: React.FC = () => {
    const [parents, setParents] = useState<FormUserFLEInterface>(fakeData.parents);
    const [children, setChildren] = useState<FormChildInterface[]>(fakeData.child);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showSuccessSaveModal, setShowSuccessSaveModal] = useState(false);
    const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(fakeData.selectedSubjects);

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'lastName' || name === 'firstName' || name === 'email') {
            setParents(prevParents => ({ ...prevParents, [name]: value }));
            setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        } else {
            const [field, index] = name.split('_');
            const childIndex = Number(index);

            setChildren(prevChildren => prevChildren.map((child, i) => {
                if (i === childIndex) {
                    return { ...child, [field]: value };
                }
                return child;
            }));

            setFormErrors(prevErrors => ({ ...prevErrors, [`child_${childIndex}_${field}`]: '' }));
        }
    };

    const handleDateChange = (date: Date | null, index: number) => {
        setChildren(prevChildren => prevChildren.map((child, i) => {
            if (i === index) {
                return { ...child, birthday: date ? date.toISOString().substring(0, 10) : '' };
            }
            return child;
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: { [key: string]: string } = {};

        if (!parents.firstName.trim()) {
            errors.firstName = 'Le prénom est requis.';
        } else if (parents.firstName.trim().length < 2) {
            errors.firstName = 'Le prénom doit contenir au moins 2 caractères.';
        }

        if (!parents.lastName.trim()) {
            errors.lastName = 'Le nom est requis.';
        } else if (parents.lastName.trim().length < 2) {
            errors.lastName = 'Le nom doit contenir au moins 2 caractères.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!parents.email.trim()) {
            errors.email = 'L\'email est requis.';
        } else if (!emailRegex.test(parents.email.trim())) {
            errors.email = 'L\'email est invalide.';
        }

        children.forEach((child, index) => {
            if (!child.firstName.trim()) {
                errors[`child_${index}_firstName`] = 'Le prénom de l\'enfant est requis.';
            } else if (child.firstName.trim().length < 2) {
                errors[`child_${index}_firstName`] = 'Le prénom de l\'enfant doit contenir au moins 2 caractères.';
            }

            if (!child.name.trim()) {
                errors[`child_${index}_name`] = 'Le nom de l\'enfant est requis.';
            } else if (child.name.trim().length < 2) {
                errors[`child_${index}_name`] = 'Le nom de l\'enfant doit contenir au moins 2 caractères.';
            }

            if (!child.birthday.trim()) {
                errors[`child_${index}_birthday`] = 'La date de naissance de l\'enfant est requise.';
            }

            if (!child.class.trim()) {
                errors[`child_${index}_class`] = 'La classe de l\'enfant est requise.';
            }
        });

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            localStorage.setItem('parents', JSON.stringify(parents));
            localStorage.setItem('children', JSON.stringify(children));
            setShowSuccessSaveModal(true);
        }
    };

    const handleAddChild = () => {
        if (children.length < 4) {
            setChildren(prevChildren => [
                ...prevChildren,
                {
                    firstName: '',
                    name: '',
                    birthday: '',
                    class: '',
                },
            ]);
        }
    };

    const handleRemoveChild = (index: number) => {
        setChildren(prevChildren => prevChildren.filter((_, i) => i !== index));
    };

    const handleDeleteProfile = () => {
        localStorage.clear();
        setShowDeleteModal(false);
        setShowSuccessModal(true);
        setTimeout(() => {
            navigate('/parent_sign_up_page');
        }, 1000);
    };

    const handleOpenAddSubjectModal = () => {
        setShowAddSubjectModal(true);
    };

    const handleCloseAddSubjectModal = () => {
        setShowAddSubjectModal(false);
    };

    const handleSelectSubject = (subject: string) => {
        if (selectedSubjects.length < 3) {
            setSelectedSubjects(prevSubjects => [...prevSubjects, subject]);
            localStorage.setItem('selectedSubjects', JSON.stringify([...selectedSubjects, subject]));
        } else {
            console.log("Vous ne pouvez pas sélectionner plus de trois matières.");
        }
    };

    const handleRemoveSelectedSubject = (index: number) => {
        const updatedSubjects = [...selectedSubjects];
        updatedSubjects.splice(index, 1);
        setSelectedSubjects(updatedSubjects);
        localStorage.setItem('selectedSubjects', JSON.stringify(updatedSubjects));
    };

    const allSubjects = ["Anglais", "Français", "Maths"];
    const availableSubjects = allSubjects.filter(subject => !selectedSubjects.includes(subject));

    return (
        <div className="relative max-w-md mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <NavLink to="/home_page_parent" className="absolute top-4 left-4 text-xl">
                <FaTimes className="cursor-pointer" />
            </NavLink>
            <img src="/public/profil.png" alt="Cindy Baker" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-8 mt-10" />

            <form className="w-full sm:w-96 mb-10" onSubmit={handleSubmit}>
                {showSuccessSaveModal && (
                    <div className="mb-4 bg-green-200 p-4 rounded-lg">Données enregistrées avec succès!</div>
                )}
                <ParentForm
                    parents={parents}
                    formErrors={formErrors}
                    handleChange={handleChange}
                />
                {children.map((child, index) => (
                    <ChildForm
                        key={index}
                        child={child}
                        index={index}
                        formErrors={formErrors}
                        handleChange={handleChange}
                        handleDateChange={handleDateChange}
                        handleRemoveChild={handleRemoveChild}
                    />
                ))}
                {children.length < 4 && (
                    <div className="mt-6" onClick={handleAddChild}>
                        <AddChildButton />
                    </div>
                )}
                <SubjectSelection
                    selectedSubjects={selectedSubjects}
                    availableSubjects={availableSubjects}
                    handleSelectSubject={handleSelectSubject}
                    handleRemoveSelectedSubject={handleRemoveSelectedSubject}
                    handleOpenAddSubjectModal={handleOpenAddSubjectModal}
                    handleCloseAddSubjectModal={handleCloseAddSubjectModal}
                    showAddSubjectModal={showAddSubjectModal}
                />
                <div className="mt-6 mb-4 flex flex-col items-center gap-5">
                    <BlueFullButton type="submit">VALIDER</BlueFullButton>
                    <OrangeFullButton onClick={() => setShowDeleteModal(true)}>Supprimer le profil</OrangeFullButton>
                </div>
            </form>

            {showDeleteModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <p className="mb-4">Êtes-vous sûr de vouloir supprimer votre profil ?</p>
                        <div className="flex justify-between">
                            <OrangeFullButton
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                                onClick={handleDeleteProfile}
                            >
                                Supprimer
                            </OrangeFullButton>
                            <div className="w-4"></div>
                            <BlueFullButton
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Annuler
                            </BlueFullButton>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <p className="mb-4">Profil supprimé avec succès!</p>
                        <BlueFullButton
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            OK
                        </BlueFullButton>
                    </div>
                </div>
            )}
        </div>
    );
};
