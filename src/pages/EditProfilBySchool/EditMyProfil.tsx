import React, { ChangeEvent, FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BlueFullButton,
  OrangeButton,
} from "../../components/Button/CustomButton";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Typography } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { AddChildButton } from "../../components/Button/ButtonAddChild";
import ChildForm from "./ChildForm";
import fakeData from "./Faker";
import ParentForm from "./ParentForm";
import SubjectSelection from "./SubjectSelection";

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

export const EditMyProfil: React.FC = () => {
  const [parents, setParents] = useState<FormUserFLEInterface>(
    fakeData.parents
  );
  const [children, setChildren] = useState<FormChildInterface[]>(
    fakeData.child
  );
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessSaveModal, setShowSuccessSaveModal] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    fakeData.selectedSubjects
  );

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "lastName" || name === "firstName" || name === "email") {
      setParents((prevParents) => ({ ...prevParents, [name]: value }));
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

    if (!parents.firstName.trim()) {
      errors.firstName = "Le prénom est requis.";
    } else if (parents.firstName.trim().length < 2) {
      errors.firstName = "Le prénom doit contenir au moins 2 caractères.";
    }

    if (!parents.lastName.trim()) {
      errors.lastName = "Le nom est requis.";
    } else if (parents.lastName.trim().length < 2) {
      errors.lastName = "Le nom doit contenir au moins 2 caractères.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!parents.email.trim()) {
      errors.email = "L'email est requis.";
    } else if (!emailRegex.test(parents.email.trim())) {
      errors.email = "L'email est invalide.";
    }

    children.forEach((child, index) => {
      if (!child.firstName.trim()) {
        errors[`child_${index}_firstName`] =
          "Le prénom de l'enfant est requis.";
      } else if (child.firstName.trim().length < 2) {
        errors[`child_${index}_firstName`] =
          "Le prénom de l'enfant doit contenir au moins 2 caractères.";
      }

      if (!child.name.trim()) {
        errors[`child_${index}_name`] = "Le nom de l'enfant est requis.";
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
      localStorage.setItem("parents", JSON.stringify(parents));
      localStorage.setItem("children", JSON.stringify(children));
      setShowSuccessSaveModal(true);
    }
  };

  const handleAddChild = () => {
    if (children.length < 4) {
      setChildren((prevChildren) => [
        ...prevChildren,
        {
          firstName: "",
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

  const handleDeleteProfile = () => {
    localStorage.clear();
    setShowDeleteModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleOpenAddSubjectModal = () => {
    setShowAddSubjectModal(true);
  };

  const handleCloseAddSubjectModal = () => {
    setShowAddSubjectModal(false);
  };

  const handleSelectSubject = (subject: string) => {
    if (selectedSubjects.length < 3) {
      setSelectedSubjects((prevSubjects) => [...prevSubjects, subject]);
      localStorage.setItem(
        "selectedSubjects",
        JSON.stringify([...selectedSubjects, subject])
      );
    } else {
      console.log("Vous ne pouvez pas sélectionner plus de trois matières.");
    }
  };

  const handleRemoveSelectedSubject = (index: number) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects.splice(index, 1);
    setSelectedSubjects(updatedSubjects);
    localStorage.setItem("selectedSubjects", JSON.stringify(updatedSubjects));
  };

  const allSubjects = ["Anglais", "Français", "Maths"];
  const availableSubjects = allSubjects.filter(
    (subject) => !selectedSubjects.includes(subject)
  );

  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <NavLink to="/home_page_parent" className="absolute top-4 left-4 text-xl">
        <FaTimes className="cursor-pointer" />
      </NavLink>
      <img
        src="/public/profil.png"
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
          <OrangeButton onClick={() => setShowDeleteModal(true)}>
            Supprimer le profil
          </OrangeButton>
        </div>
      </form>

      {showDeleteModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <p className="mb-2">
              Êtes-vous sûr de vouloir supprimer votre profil ?
            </p>
            <p className="mb-4 text-gray-600 text-sm">
              Toutes vos données seront perdues
            </p>
            <div className="flex flex-col gap-4 ">
              <OrangeButton onClick={handleDeleteProfile}>
                Supprimer votre profil
              </OrangeButton>
              <BlueFullButton onClick={() => setShowDeleteModal(false)}>
                Annuler
              </BlueFullButton>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <Box className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-[8000]">
          <Typography
            className="absolute bg-white p-8 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md  border rounded-lg shadow-sm m-auto "
            id="modal-modal-title"
            component="p"
          >
            Votre compte est bien supprimé !
            <div className="flex justify-center mt-5">
              <TaskAltIcon transform="scale-150" fontSize="large" />
            </div>
          </Typography>
        </Box>
      )}
    </div>
  );
};

{
  /* <Modal
  open={showSuccessModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-[8000]">
    <Typography
      className="absolute bg-white p-8 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md  border rounded-lg shadow-sm m-auto "
      id="modal-modal-title"
      component="p"
    >
      L'événement est bien enregistré!
      <div className="flex justify-center mt-5">
        <TaskAltIcon transform="scale-150" fontSize="large" />
      </div>
    </Typography>
  </Box>
</Modal>; */
}
