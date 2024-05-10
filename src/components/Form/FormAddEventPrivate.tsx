import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Modal, Typography } from "@mui/material";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { EventInterface } from "../../services/interfaces/event";
import { getFakerEventTagsData } from "../../utils/Axios/axios";

import CounterInputOrange from "../../utils/CounterInputOrange";
import { OrangeFullButton } from "../Button/Button";
import ButtonAddChoice from "../Button/ButtonAddChoice";

import { faker } from "@faker-js/faker/locale/fr";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AddChildButtonOrange } from "../Button/ButtonAddChild";
import { ButtonAddTagsOrange } from "../Button/ButtonAddTags";
import ModalAddTagsPrivate from "../Modals/ModalAddTagsPrivate";

interface FormEventPropsInterface {
  onSubmit: (data: EventInterface) => void;
}

export default function FormAddEventPrivate({
  onSubmit,
}: FormEventPropsInterface) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [counterValue, setCounterValue] = useState(0);
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagsEvent, setTagsEvent] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>(["", ""]);
  const id = crypto.randomUUID();
  const childrenList = Array.from({ length: 20 }, () =>
    faker.person.firstName()
  );


  const [selectedChild, setSelectedChild] = useState("");
  const [selectedChildren, setSelectedChildren] = useState<string[]>([]);
  const [selectedChildLabel, setSelectedChildLabel] = useState(
    "Sélectionner un enfant"
  );

  const handleChildSelect = (e: React.ChangeEvent<HTMLSelectElement>) :void => {
    const selectedValue = e.target.value;
    setSelectedChild(selectedValue);
    setSelectedChildLabel(selectedValue); // Mettre à jour le libellé de l'option sélectionnée
  };

  const handleAddChild = () => {
    if (selectedChild) {
      setSelectedChildren([...selectedChildren, selectedChild]);
      setSelectedChildLabel("Sélectionner un enfant"); // Réinitialiser le libellé de l'option sélectionnée
      setSelectedChild(""); // Réinitialiser la sélection

      console.log(selectedChild);
    }
  };
  useEffect(() => {
    // Enregistrer les enfants sélectionnés dans le local storage
    localStorage.setItem("selectedChildren", JSON.stringify(selectedChildren));
  }, [selectedChildren]); // Déclencher l'effet chaque fois que selectedChildren change

  const handleRemoveChild = (index: number) => {
    const updatedChildren = [...selectedChildren];
    updatedChildren.splice(index, 1);
    setSelectedChildren(updatedChildren);
    // Enregistrer les enfants mis à jour dans le local storage
    localStorage.setItem("selectedChildren", JSON.stringify(updatedChildren));
    {
      /* Mettez à jour la liste des enfants sélectionnés après suppression */
    }
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Le titre doit contenir au moins 2 caractères")
      .required("Le titre est requis"),
    description: Yup.string()
      .min(2, "La description doit contenir au moins 2 caractères")
      .required("La description est requise"),
    startDate:
      category !== "Sondage" && category !== "Cagnotte"
        ? Yup.string().required("La date de début est requise")
        : Yup.string(),
    endDate:
      category !== "Sondage"
        ? Yup.string().required("La date de fin est requise")
        : Yup.string(),
    location:
      category !== "Sondage" && category !== "Cagnotte"
        ? Yup.string().required("L'adresse est requise")
        : Yup.string(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données des types d'événements via Axios
        const data = await getFakerEventTagsData();
        if (data) {
          setTagsEvent(data.datas);
        }
      } catch (error) {
        console.error("Error fetching type events:", error);
      }
    };

    fetchData();
  }, []);
  const handleCounterChange = (value: number) => {
    setCounterValue(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Fonction pour gérer la sélection de tags

  useEffect(() => {
    // Récupérer les tags sélectionnés à partir de localStorage
    const storedSelectedTags = localStorage.getItem("selectedTags");
    if (storedSelectedTags) {
      setSelectedTags(JSON.parse(storedSelectedTags));
    }
  }, []);

  useEffect(() => {
    // Récupérer les données du localStorage
    const storedDataString = localStorage.getItem("storedDataEvent");

    // Vérifier si des données ont été trouvées dans le localStorage
    if (storedDataString) {
      // Convertir les données en objet JavaScript
      const storedDataEvent = JSON.parse(storedDataString);

      // Mettre à jour la valeur de la catégorie
      setCategory(storedDataEvent.category);
    } else {
      console.log("Aucune donnée trouvée dans le localStorage.");
    }
  }, []); // Cette fonction ne dépend d'aucune variable, elle ne sera donc exécutée qu'une fois au montage du composant.
  useEffect(() => {
    // Récupérer les données du localStorage
    const storedDataString = localStorage.getItem("storedDataEvent");

    // Vérifier si des données ont été trouvées dans le localStorage
    if (storedDataString) {
      // Convertir les données en objet JavaScript
      const storedDataEvent = JSON.parse(storedDataString);

      // Afficher les données dans la console
      console.log("Données récupérées du localStorage :", storedDataEvent);
    } else {
      console.log("Aucune donnée trouvée dans le localStorage.");
    }
  }, []); // Cette fonction ne dépend d'aucune variable, elle ne sera donc exécutée qu'une fois au montage du composant.

  const saveToLocalStorage = (data: EventInterface) => {
    const storedDataString = localStorage.getItem("storedDataEvent");
    if (storedDataString) {
      const storedDataEvent: EventInterface = JSON.parse(storedDataString);
      storedDataEvent.title = data.title;
      storedDataEvent.description = data.description;
      storedDataEvent.startDate = data.startDate;
      storedDataEvent.endDate = data.endDate;
      storedDataEvent.location = data.location;
      storedDataEvent.maxParticipants = data.maxParticipants;
      storedDataEvent.jackpotLink = data.jackpotLink;
      storedDataEvent.tags = data.tags; // Inclure les tags sélectionnés
      storedDataEvent.choices = data.choices; // Inclure les choix de sondage
      storedDataEvent.id = data.id;
      storedDataEvent.createdAt = data.createdAt;
      storedDataEvent.childrenList = data.childrenList;

      if (image) {
        storedDataEvent.image = image;
      }
      localStorage.setItem("storedDataEvent", JSON.stringify(storedDataEvent));
    } else {
      const newData: EventInterface = {
        ...data,
        image: image ? image : null,
        choices: data.choices, // Inclure les choix dans newData
        childrenList: data.childrenList,
      };
      localStorage.setItem("storedDataEvent", JSON.stringify(newData));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        const imageDataUrl = event.target.result.toString();
        setImage(imageDataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <section className="flex flex-col gap-5 max-w-xs sm:max-w-md justify-start bg-transparent">
        <Formik
          initialValues={{
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            location: "",
            jackpotLink: "",
            tags: [] as string[],
            choices: [],
            childrenList: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const eventData: EventInterface = {
              ...values,
              tags: selectedTags,
              maxParticipants: counterValue,
              createdAt: new Date(),
              id: id,
              choices: choices,
              childrenList: selectedChildren,
              type: "",
              category: "",
              name: "",
              image: null,
            };
            onSubmit({
              ...eventData,
              tags: selectedTags,
              choices: choices,
              maxParticipants: counterValue,
              createdAt: new Date(),
            }); // Inclure les tags sélectionnés dans l'objet de données
            saveToLocalStorage(eventData);

            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
              resetForm();
              navigate("/home_page_parent");
            }, 2000);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="mb-4 max-w-96 w-full flex flex-col ">
              <div className="mb-4 flex">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="image">
                  <img
                    src="/tabler_photo-plus.svg"
                    alt="Add photo"
                    className="h-12 w-12"
                  />
                </label>
                {image && (
                  <img
                    src={image}
                    alt="Uploaded"
                    className=" max-w-48 rounded-xl"
                  />
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="title">Titre</label>
                <Field
                  id="title"
                  name="title"
                  type="text"
                  className={`block w-full ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                    errors.title && touched.title
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description">Description</label>
                <Field
                  id="description"
                  name="description"
                  as="textarea"
                  rows={4}
                  className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                    errors.title && touched.title
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {category !== "Sondage" && category !== "Cagnotte" && (
                <div className="mb-4">
                  {category === "Covoiturage" ? (
                    <label htmlFor="startDate">Heure de départ</label>
                  ) : (
                    <label htmlFor="startDate">Date de début</label>
                  )}
                  <Field
                    id="startDate"
                    name="startDate"
                    type="datetime-local"
                    className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                      errors.startDate && touched.startDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="starDate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}
              {category !== "Sondage" && (
                <div className="mb-4">
                  {category === "Covoiturage" ? (
                    <label htmlFor="endDate">Heure d'arrivée</label>
                  ) : category === "Cagnotte" ? (
                    <label htmlFor="endDate">Date limite de la cagnotte</label>
                  ) : (
                    <label htmlFor="endDate">Date de fin</label>
                  )}
                  <Field
                    id="endDate"
                    name="endDate"
                    type="datetime-local"
                    className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                      errors.endDate && touched.endDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="starDate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}
              {category !== "Sondage" && category !== "Cagnotte" && (
                <div className="mb-4">
                  {category === "Covoiturage" ? (
                    <label htmlFor="location">Lieu de covoiturage</label>
                  ) : (
                    <label htmlFor="location">Adresse</label>
                  )}
                  <Field
                    id="location"
                    name="location"
                    type="text"
                    className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                      errors.location && touched.location
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}
              {/* Limite de participants */}
              {category === "Sortie loisirs" && (
                <div className="mb-4 flex flex-col">
                  <div className="mb-4 flex justify-between items-center">
                    <label htmlFor="nbMax">Limite de participants</label>
                    <CounterInputOrange
                      value={counterValue}
                      onCounterChange={handleCounterChange}
                    />
                  </div>
                  <p
                    id="helper-text-explanation"
                    className="mb-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    Merci de sélectionner un nombre de 1 à 20. Si vous n’avez
                    pas de limite, laissez ce champ à 0.
                  </p>
                </div>
              )}

              {category === "Covoiturage" && (
                <div className="mb-4 flex flex-col">
                  <div className="mb-4 flex justify-between items-center">
                    <label htmlFor="nbMax">Limite de participants</label>
                    <CounterInputOrange
                      value={counterValue}
                      onCounterChange={handleCounterChange}
                    />
                  </div>
                  <p
                    id="helper-text-explanation"
                    className="mb-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    Merci de sélectionner un nombre de 1 à 20. Si vous n’avez
                    pas de limite, laissez ce champ à 0.
                  </p>
                </div>
              )}
              {/* Affichage lien cagnotte */}
              {category === "Cagnotte" ||
                (category === "Anniversaire" && (
                  <div className="mb-4">
                    <label htmlFor="jackpotLink">Lien Cagnotte</label>
                    <Field
                      id="jackpotLink"
                      name="jackpotLink"
                      type="text"
                      className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                        errors.jackpotLink && touched.jackpotLink
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="jackpotLink"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              {/*Ajouter des enfants */}
              <section className="flex flex-col">
                <div className="mb-4">
                  <label htmlFor="childrenList">Sélectionner un enfant :</label>
                  <Field
                    as="select"
                    id="childrenList"
                    name="childrenList"
                    onChange={handleChildSelect}
                    value={selectedChild}
                    className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                      errors.childrenList && touched.childrenList
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">{selectedChildLabel}</option>
                    {childrenList.map((child, index) => (
                      <option key={index} value={child}>
                        {child}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="ChildrenList"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div onClick={handleAddChild} className="flex justify-end">
                  <AddChildButtonOrange />
                </div>
              </section>
              <section className="mb-4 ">
                <ul className="mt-4 flex flex-wrap text-sm">
                  {selectedChildren.map((child, index) => (
                    <li
                      key={index}
                      className=" flex justify-between items-center gap-2 px-5 py-1 border-2 border-custom-orange rounded-lg mr-3 mb-2 mt-2"
                    >
                      {child}
                      <button onClick={() => handleRemoveChild(index)}>
                        <HighlightOffIcon className="text-custom-orange" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
              {/* Affichage le sondage  */}

              {category === "Sondage" && (
                <div className="mb-4">
                  <label htmlFor="choices">
                    Ajouter les réponse possibles au sondage
                  </label>
                  <FieldArray name="choices">
                    {(arrayHelpers) => (
                      <div className="my-4">
                        {/* Affichage des champs d'entrée pour les choix du sondage */}
                        {choices.map((choice, index) => (
                          <div className="mb-4" key={index}>
                            <label htmlFor={`choices.${index}`}>{`Choix n° ${
                              index + 1
                            }`}</label>
                            <input
                              className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange ${
                                errors.choices && touched.choices
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              name={`choices.${index}`}
                              value={choice}
                              onChange={(e) => {
                                const newChoices = [...choices];
                                newChoices[index] = e.target.value;
                                setChoices(newChoices);
                              }}
                            />
                            {/* Affichage du message d'erreur si le nombre maximal de choix est atteint */}
                            {choices.length === 4 && index === 3 && (
                              <p className="text-red-500 text-sm">
                                Vous avez atteint le nombre maximal de choix
                              </p>
                            )}
                            {/* Bouton pour supprimer un choix */}
                            {(choices.length > 2 ||
                              (choices.length === 2 && index === 1)) && (
                              <button
                                type="button"
                                onClick={() => {
                                  if (choices.length > 2) {
                                    arrayHelpers.remove(index);
                                    const newChoices = [...choices];
                                    newChoices.splice(index, 1);
                                    setChoices(newChoices);
                                  }
                                }}
                              >
                                Supprimer
                              </button>
                            )}
                            {/* Affichage du message d'erreur si moins de deux choix restent */}
                            {choices.length === 2 && index === 1 && (
                              <p className="text-red-500 text-sm">
                                Vous devez avoir au moins deux choix.
                              </p>
                            )}
                          </div>
                        ))}
                        {/* Bouton pour ajouter un nouveau choix */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              if (choices.length < 4) {
                                arrayHelpers.push("");
                                setChoices([...choices, ""]);
                              }
                            }}
                          >
                            <ButtonAddChoice />
                          </button>
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </div>
              )}
              {/* Bouton pour ouvrir la modal */}
              <div className="mb-4 " onClick={openModal}>
                <ButtonAddTagsOrange />
              </div>

              {/* Modal pour sélectionner les tags */}
              <ModalAddTagsPrivate
                open={isModalOpen}
                onClose={closeModal}
                Tags={tagsEvent}
                onSelect={(tags) => setSelectedTags(tags)}
              />

              {/* Afficher les tags sélectionnés */}
              <div className="mt-4 flex flex-wrap">
                {selectedTags.map((tag) => (
                  <div
                    key={tag}
                    className=" px-5 py-1 border-2 border-custom-orange rounded-lg mr-3 mb-2 mt-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <OrangeFullButton type="submit" disabled={isSubmitting}>
                  Valider
                </OrangeFullButton>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <Modal
        open={showModal}
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
      </Modal>
    </>
  );
}
