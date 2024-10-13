import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {
    BlueFullButton,
} from "../../components/Button/CustomButton";

import { FaTimes } from "react-icons/fa";
import { AddChildButton } from "../../components/Button/ButtonAddChild";
import ChildForm from "./ChildForm";
import ParentForm from "./ParentForm";
import {fetchDetailProfile} from "../../services/api/ProfilesApi.ts";

interface FormChildInterface {
    id: string;
    name: string;
    birthday: string;
    class: string;
}

interface FormUserFLEInterface {
    firstname: string;
    lastname: string;
    email: string;
    profile_picture: string;
    registerAtDate: string;
    children: [];
}

export const EditMyParentProfil: React.FC = () => {
    const [parent, setParent] = useState<FormUserFLEInterface>({
        profile_picture: "",
        firstname: "",
        lastname: "",
        email: "",
        registerAtDate: "",
        children: []
    });

    const [children, setChildren] = useState<FormChildInterface[]>([]);

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [showSuccessSaveModal, setShowSuccessSaveModal] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const data = await fetchDetailProfile();
                if (data) {
                    // Format the birthdate for each child to "YYYY-MM-DD"
                    const formattedChildren = data.children.map((child: any) => ({
                        ...child,
                        birthday: new Date(child.birthday).toISOString().substring(0, 10), // Extract "YYYY-MM-DD"
                    }));
                    setParent({
                        profile_picture: data.profil_picture,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        registerAtDate: data.created_at,
                        children: formattedChildren,
                    });
                    setChildren(formattedChildren)
                }
            } catch (error) {
                console.error("Error Detail data profile:", error);
            }
        };

        fetchProfileData();
    }, []);


    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "lastName" || name === "firstName" || name === "email") {
            setParent((prevParents) => ({ ...prevParents, [name]: value }));
            setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        } else {
            const [field, index] = name.split("_");
            const childIndex = Number(index);

            setChildren((prevChildren) =>
                prevChildren.map((child, i) => {
                    if (i === childIndex) {
                        return { ...child, [field]: value };
                    }
                    return child;
                })
            );

            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [`child_${childIndex}_${field}`]: "",
            }));
        }
    };

    const handleDateChange = (date: Date | null, index: number) => {
        setChildren((prevChildren) =>
            prevChildren.map((child, i) => {
                if (i === index) {
                    return {
                        ...child,
                        birthday: date ? date.toISOString().substring(0, 10) : "",
                    };
                }
                return child;
            })
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: { [key: string]: string } = {};

        if (!parent.firstname.trim()) {
            errors.firstName = "Le prénom est requis.";
        } else if (parent.firstname.trim().length < 2) {
            errors.firstName = "Le prénom doit contenir au moins 2 caractères.";
        }

        if (!parent.lastname.trim()) {
            errors.lastName = "Le nom est requis.";
        } else if (parent.lastname.trim().length < 2) {
            errors.lastName = "Le nom doit contenir au moins 2 caractères.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!parent.email.trim()) {
            errors.email = "L'email est requis.";
        } else if (!emailRegex.test(parent.email.trim())) {
            errors.email = "L'email est invalide.";
        }

        children.forEach((child, index) => {
            if (!child.name.trim()) {
                errors[`child_${index}_name`] = "Le prénom de l'enfant est requis.";
            } else if (child.name.trim().length < 2) {
                errors[`child_${index}_name`] =
                    "Le nom de l'enfant doit contenir au moins 2 caractères.";
            }

            if (!child.birthday.trim()) {
                errors[`child_${index}_birthday`] =
                    "La date de naissance de l'enfant est requise.";
            }

            if (!child.class.trim()) {
                errors[`child_${index}_class`] = "La classe de l'enfant est requise.";
            }
        });

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            //Call Save Profil endPoint
            setShowSuccessSaveModal(true);
        }
    };

    const handleAddChild = () => {
        if (children.length < 4) {
            setChildren((prevChildren) => [
                ...prevChildren,
                {
                    id: "",
                    name: "",
                    birthday: "",
                    class: "",
                },
            ]);
        }
    };

    const handleRemoveChild = (index: number) => {
        setChildren((prevChildren) => prevChildren.filter((_, i) => i !== index));
    };

    return (
        <div className="relative max-w-md mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <NavLink to="/home_page_parent" className="absolute top-4 left-4 text-xl">
                <FaTimes className="cursor-pointer" />
            </NavLink>
            <img
                src={parent.profile_picture}
                alt="Cindy Baker"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-8 mt-10"
            />

            <form className="w-full sm:w-96 mb-10" onSubmit={handleSubmit}>
                {showSuccessSaveModal && (
                    <div className="mb-4 bg-green-200 p-4 rounded-lg">
                        Données enregistrées avec succès!
                    </div>
                )}
                <ParentForm
                    parent={parent}
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
                <div className="mt-6 mb-4 flex flex-col items-center gap-5">
                    <BlueFullButton type="submit">VALIDER</BlueFullButton>
                </div>
            </form>
        </div>
    );
};
