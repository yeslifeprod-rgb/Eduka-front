import { ChangeEvent, FormEvent, useState } from "react";
import { OrangeFullButton } from "../Button/CustomButton";

import { FormChildInterface } from "../../utils/Interface/FormUseStateChildInterface";
import { FormUserFLEInterface } from "../../utils/Interface/FormUseStateParentInterface";
import { AddChildButton } from "../Button/ButtonAddChild";
import ButtonRemoveChild from "../Button/ButtonRemoveChild";

export const FormAddParent = () => {
  const [parents, setParents] = useState<FormUserFLEInterface>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [children, setChildren] = useState<FormChildInterface[]>([
    {
      name: "",
      birthday: "",
      class: "",
    },
  ]);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //extraction du nom [name] et la valeur du champ de formulaire qui a déclenché l'événement de changement.
    const { name, value } = e.target;

    if (name === "lastName" || name === "firstName" || name === "email") {
      // met à jour les informations des parents dans l'état et efface les erreurs de formulaire pour ce champ.
      setParents((prevParents) => ({ ...prevParents, [name]: value }));
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      // Si le champ de formulaire modifié est un champ pour un enfant :
      //extraction de l'index de l'enfant de l'attribut [name] du champ de formulaire modifié.
      const childIndex = Number(name.split("_")[1]);
      //Extraction du nom du champ de l'attribut [name] du champ de formulaire modifié.
      const childField = name.split("_")[0];

      // Met à jour les informations de l'enfant correspondant dans l'état des enfants.
      setChildren((prevChildren) =>
        prevChildren.map((child, index) => {
          if (index === childIndex) {
            return { ...child, [childField]: value };
          }
          return child;
        })
      );

      // Efface les erreurs de formulaire pour le champ d'enfant modifié.
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [`child_${childIndex}_${childField}`]: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    // Validation des champs du parent
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

    // Validation des champs des enfants
    children.forEach((child, index) => {
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
      console.log("🚀 ~ handleSubmit ~ children:", children);
      console.log("🚀 ~ handleSubmit ~ parents:", parents);
    }
  };

  const handleAddChild = () => {
    if (children.length < 4) {
      setChildren((prevChildren) => [
        ...prevChildren,
        {
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
    <>
      <form className="mb-4 sm:w-96 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
          />
          {formErrors.lastName && (
            <p className="text-custom-orange">{formErrors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
          />
          {formErrors.firstName && (
            <p className="text-custom-orange">{formErrors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
          />
          {formErrors.email && (
            <p className="text-custom-orange">{formErrors.email}</p>
          )}
        </div>
        {children.map((child, index) => (
          <div key={index}>
            <div className="mb-4">
              <label htmlFor={`nameChild${index + 1}`}>
                Nom de l'enfant {index + 1}
              </label>
              <input
                type="text"
                name={`name_${index}`}
                value={child.name}
                onChange={handleChange}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
              />
              {formErrors[`child_${index}_name`] && (
                <p className="text-custom-orange">
                  {formErrors[`child_${index}_name`]}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor={`birthday${index + 1}`}>
                Date de naissance de l'enfant {index + 1}
              </label>
              <input
                type="text"
                name={`birthday_${index}`}
                value={child.birthday}
                onChange={handleChange}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
              />
              {formErrors[`child_${index}_birthday`] && (
                <p className="text-custom-orange">
                  {formErrors[`child_${index}_birthday`]}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor={`classChild${index + 1}`}>
                Classe de l'enfant {index + 1}
              </label>
              <input
                type="text"
                name={`class_${index}`}
                value={child.class}
                onChange={handleChange}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange"
              />
              {formErrors[`child_${index}_class`] && (
                <p className="text-custom-orange">
                  {formErrors[`child_${index}_class`]}
                </p>
              )}
            </div>
            {index > 0 && (
              <div onClick={() => handleRemoveChild(index)}>
                <ButtonRemoveChild />
              </div>
            )}
          </div>
        ))}
        <div className="mt-6" onClick={handleAddChild}>
          <AddChildButton />
        </div>
        <div className="mt-10">
          <OrangeFullButton type="submit">VALIDER</OrangeFullButton>
        </div>
      </form>
    </>
  );
};
