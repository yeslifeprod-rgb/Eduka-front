import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { BlueFullButton } from "../../components/Button/CustomButton";
import { FaTimes } from "react-icons/fa";
import { AddChildButton } from "../../components/Button/ButtonAddChild";
import ChildForm from "./ChildForm";
import ParentForm from "./ParentForm";
import { fetchDetailProfile, updateProfile } from "../../services/api/ProfilesApi.ts";

export const EditMyParentProfil: React.FC = () => {
    const [parent, setParent] = useState({
        id: "",
        profile_picture: "",
        firstname: "",
        lastname: "",
        email: "",
        registerAtDate: "",
        children: []
    });

    const [showSuccessSaveModal, setShowSuccessSaveModal] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const data = await fetchDetailProfile();
                if (data) {
                    const formattedChildren = data.children.map((child: any) => ({
                        ...child,
                        birthday: new Date(child.birthday).toISOString().substring(0, 10), // "YYYY-MM-DD"
                    }));
                    setParent({
                        id: data.id,
                        profile_picture: data.profil_picture,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        registerAtDate: data.created_at,
                        children: formattedChildren,
                    });
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(2, "Le prénom doit contenir au moins 2 caractères.").required("Le prénom est requis."),
        lastname: Yup.string().min(2, "Le nom doit contenir au moins 2 caractères.").required("Le nom est requis."),
        email: Yup.string().email("L'email est invalide.").required("L'email est requis."),
        children: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().min(2, "Le prénom de l'enfant doit contenir au moins 2 caractères.").required("Le prénom de l'enfant est requis."),
                birthday: Yup.date().required("La date de naissance de l'enfant est requise."),
                class: Yup.string().required("La classe de l'enfant est requise."),
            })
        ),
    });

    return (
        <div className="relative max-w-md mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <NavLink to="/home_page_parent" className="absolute top-4 left-4 text-xl">
                <FaTimes className="cursor-pointer" />
            </NavLink>
            <img
                src={parent.profile_picture}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-8 mt-10"
            />

            <Formik
                initialValues={parent}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    try {
                        await updateProfile(values.id, values); // Update profile info
                        setShowSuccessSaveModal(true);
                    } catch (error) {
                        console.error("Failed to update profile:", error);
                    }
                }}
                enableReinitialize={true}
            >
                {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                    <form className="grid grid-col items-center justify-center mt-20" onSubmit={handleSubmit}>
                        {showSuccessSaveModal && (
                            <div className="mb-4 bg-green-200 p-4 rounded-lg">
                                Données enregistrées avec succès!
                            </div>
                        )}

                        {/* Parent Form */}
                        <ParentForm parent={values} formErrors={errors} touched={touched} />

                        {/* Children Form */}
                        <FieldArray name="children">
                            {(arrayHelpers) => (
                                <>
                                    {values.children.map((child, index) => (
                                        <ChildForm
                                            key={index}
                                            child={child}
                                            index={index}
                                            formErrors={errors}
                                            touched={touched}
                                            handleDateChange={(date) =>
                                                setFieldValue(`children.${index}.birthday`, date)
                                            }
                                            handleRemoveChild={() => arrayHelpers.remove(index)}
                                        />
                                    ))}

                                    {values.children.length < 4 && (
                                        <div className="mt-6" onClick={() => arrayHelpers.push({ id: "", name: "", birthday: "", class: "" })}>
                                            <AddChildButton />
                                        </div>
                                    )}
                                </>
                            )}
                        </FieldArray>

                        <div className="mt-6 mb-4 flex flex-col items-center gap-5">
                            <BlueFullButton type="submit">VALIDER</BlueFullButton>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};
