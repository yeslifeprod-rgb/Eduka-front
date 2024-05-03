import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import axios from 'axios'; // Import d'axios
import { BlueFullButton, ButtonAddDiscipline, ButtonDeleteChild, OrangeFullButton } from '../../components/Button/CustomButton';
import ButtonRemoveChild from '../../components/Button/ButtonRemoveChild';
import AddChildButton from '../../components/Button/ButtonAddChild';

// Interface pour les données d'un enfant
interface FormChildInterface {
    firstName: string; // Ajout du champ prénom pour les enfants
    name: string;
    birthday: string;
    class: string;
}

// Interface pour les données du parent
interface FormUserFLEInterface {
    firstName: string;
    lastName: string;
    email: string;
}

// Composant EditProfilBySchoolPage
export const EditProfilBySchoolPage: React.FC = () => {
    const [parents, setParents] = useState<FormUserFLEInterface>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [children, setChildren] = useState<FormChildInterface[]>([
        {
            firstName: '', // Initialisation du prénom de l'enfant
            name: '',
            birthday: '',
            class: ''
        },
    ]);

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showSuccessSaveModal, setShowSuccessSaveModal] = useState(false);
    const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

    useEffect(() => {
        // Fonction asynchrone pour récupérer les données de l'utilisateur lors du montage du composant
        const Data = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/3');
                const userData = response.data;
                setParents({
                    firstName: userData.name.split(' ')[0],
                    lastName: userData.name.split(' ')[1],
                    email: userData.email,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        Data(); // Appel de la fonction Data pour récupérer les données
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'lastName' || name === 'firstName' || name === 'email') {
            setParents(prevParents => ({ ...prevParents, [name]: value }));
            setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        } else {
            const childIndex = Number(name.split('_')[1]);
            const childField = name.split('_')[0];

            setChildren(prevChildren => prevChildren.map((child, index) => {
                if (index === childIndex) {
                    return { ...child, [childField]: value };
                }
                return child;
            }));

            setFormErrors(prevErrors => ({ ...prevErrors, [`child_${childIndex}_${childField}`]: '' }));
        }
    };

    const handleDateChange = (date: Date | null, index: number) => {
        setChildren(prevChildren => prevChildren.map((child, i) => {
            if (i === index) {
                return { ...child, birthday: date ? date.toISOString() : '' };
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
                    firstName: '', // Initialisation du prénom du nouvel enfant
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
            // Enregistrer les matières sélectionnées dans localStorage
            localStorage.setItem('selectedSubjects', JSON.stringify([...selectedSubjects, subject]));
        } else {
            // Afficher un message ou une notification indiquant que le nombre maximal de matières est atteint
            console.log("Vous ne pouvez pas sélectionner plus de trois matières.");
        }
    };


    const handleRemoveSelectedSubject = (index: number) => {
        const updatedSubjects = [...selectedSubjects];
        updatedSubjects.splice(index, 1);
        setSelectedSubjects(updatedSubjects);
        localStorage.setItem('selectedSubjects', JSON.stringify(updatedSubjects));
    };

    return (
        <div className="max-w-md mx-auto flex flex-col items-center justify-center">
            <div className="md:max-lg:flex" style={{ marginBottom: '5rem' }}></div>
            <img src="/public/profil.png" alt="Cindy Baker" className="w-35 h-35 rounded-full mb-8 md:mb-0 my-4 md:my-0" />
            <div className="mb-8 flex items-center"></div>

            <form className="w-full md:w-96 ml-4 mb-30" onSubmit={handleSubmit}>
                {showSuccessSaveModal && (
                    <div className="mb-4 bg-green-200 p-4 rounded-lg">Données enregistrées avec succès!</div>
                )}
                <div className="mb-4">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        name="lastName"
                        value={parents.lastName} // Ajout de la valeur du nom du parent
                        onChange={handleChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                    />
                    {formErrors.lastName && <p className="text-red-500">{formErrors.lastName}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        name="firstName"
                        value={parents.firstName} // Ajout de la valeur du prénom du parent
                        onChange={handleChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                    />
                    {formErrors.firstName && <p className="text-red-500">{formErrors.firstName}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={parents.email} // Ajout de la valeur de l'email du parent
                        onChange={handleChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                    />
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                </div>
                {children.map((child, index) => (
                    <div key={index}>
                        <div className="mb-4">
                            <label htmlFor={`firstNameChild${index + 1}`}>Prénom de l'enfant {index + 1}</label>
                            <input
                                type="text"
                                name={`firstName_${index}`}
                                value={parents.firstName}
                                onChange={handleChange}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                            />
                            {formErrors[`child_${index}_firstName`] && <p className="text-red-500">{formErrors[`child_${index}_firstName`]}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor={`nameChild${index + 1}`}>Nom de l'enfant {index + 1}</label>
                            <input
                                type="text"
                                name={`name_${index}`}
                                value={parents.lastName}
                                onChange={handleChange}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                            />
                            {formErrors[`child_${index}_name`] && <p className="text-red-500">{formErrors[`child_${index}_name`]}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor={`birthday${index + 1}`}>Date de naissance de l'enfant {index + 1}</label>
                            <DatePicker
                                selected={child.birthday ? new Date(child.birthday) : null}
                                onChange={(date) => handleDateChange(date, index)}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                            />
                            {formErrors[`child_${index}_birthday`] && <p className="text-red-500">{formErrors[`child_${index}_birthday`]}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor={`classChild${index + 1}`}>Classe de l'enfant {index + 1}</label>
                            <select
                                name={`class_${index}`}
                                value={child.class}
                                onChange={handleChange}
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
                            >
                                <option value="">Sélectionner une classe</option>
                                <option value="CP">CP</option>
                                <option value="CE1">CE1</option>
                                <option value="CE2">CE2</option>
                                <option value="CM1">CM1</option>
                                <option value="CM2">CM2</option>
                            </select>
                            {formErrors[`child_${index}_class`] && <p className="text-red-500">{formErrors[`child_${index}_class`]}</p>}
                        </div>
                        {index > 0 && (
                            <div onClick={() => handleRemoveChild(index)}>
                                <ButtonRemoveChild />
                            </div>
                        )}
                    </div>
                ))}
                {children.length < 4 && (
                    <div className="mt-6" onClick={handleAddChild}>
                        <AddChildButton />
                    </div>
                )}
                <div className="mt-10 mb-20">
                    <BlueFullButton onClick={handleOpenAddSubjectModal}>Ajouter une matière</BlueFullButton>
                </div>
                <div className="mt-4 flex justify-center">
                    {selectedSubjects.length > 0 && (
                        <div className="text-center">
                            <p className="text-blue-800 ">Matieres sélectionnées :</p>
                            <ul className="mt-2">
                                {selectedSubjects.map((subject, index) => (
                                    <li key={index} className="mb-2">
                                        <ButtonDeleteChild
                                            onClick={() => handleRemoveSelectedSubject(index)}
                                            className="text-red-500 flex items-center"
                                        >
                                            {subject} <FiMinusCircle className="ml-2" /> {/* Utilisation de l'icône FiMinusCircle */}
                                        </ButtonDeleteChild>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>



                <div className="mt-10 mb-20">
                    <BlueFullButton type="submit">VALIDER</BlueFullButton>
                </div>
                <div className="mt-10 mb-20">
                    <OrangeFullButton onClick={() => setShowDeleteModal(true)}>Supprimer le profil</OrangeFullButton >
                </div>
            </form >

            {showDeleteModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg md:max-w-md sm:max-w-sm w-full">
                        <p className="mb-4">Êtes-vous sûr de vouloir supprimer votre profil ?</p>
                        <div className="flex justify-between">
                            <OrangeFullButton
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
                                onClick={handleDeleteProfile}
                            >
                                Supprimer
                            </OrangeFullButton >
                            <div className="w-4"></div>
                            <BlueFullButton
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
                                onClick={() => setShowDeleteModal(false)}
                            > Annuler </BlueFullButton>
                        </div>
                    </div>
                </div>
            )}

            {
                showSuccessModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg md:max-w-md sm:max-w-sm w-full">
                            <p className="mb-4">Profil supprimé avec succès!</p>
                            <BlueFullButton
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                                onClick={() => setShowSuccessModal(false)}
                            >
                                OK
                            </BlueFullButton>
                        </div>
                    </div>
                )
            }

            {
                showAddSubjectModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg md:max-w-md sm:max-w-sm w-full border border-gray-400">
                            <p className="mb-2">Sélectionnez une matière :</p>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <ButtonAddDiscipline
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
                                    onClick={() => handleSelectSubject('Anglais')}
                                >
                                    <FiPlusCircle className="mr-2" /> Anglais
                                </ButtonAddDiscipline>
                                <ButtonAddDiscipline
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
                                    onClick={() => handleSelectSubject('Français')}
                                >
                                    <FiPlusCircle className="mr-2" /> Français
                                </ButtonAddDiscipline>
                                <ButtonAddDiscipline
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
                                    onClick={() => handleSelectSubject('Maths')}
                                >
                                    <FiPlusCircle className="mr-2" /> Maths
                                </ButtonAddDiscipline>
                            </div>
                            <BlueFullButton
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                                onClick={handleCloseAddSubjectModal}
                            >
                                Fermer
                            </BlueFullButton>
                        </div>
                    </div>
                )
            }



        </div >
    );
};
