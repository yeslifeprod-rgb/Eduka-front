import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";

interface ModalAddTagsProps {
  open: boolean;
  onClose: () => void;
  Tags: string[];
  onSelect: (Tags: string[]) => void; // Mettre à jour la signature de la fonction onSelect pour accepter un tableau de tags
}

const ModalAddTags: React.FC<ModalAddTagsProps> = ({
  open,
  onClose,
  Tags,
  onSelect,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Réinitialiser les tags sélectionnés à chaque ouverture de la modal
    setSelectedTags([]);
  }, [open]);

  useEffect(() => {
    // Mettre à jour le local storage avec les tags sélectionnés
    localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
  }, [selectedTags]);

  const handleTagSelect = (tag: string) => {
    if (selectedTags.length < 3 || selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
      setErrorMessage("");
    } else {
      setErrorMessage("Vous avez atteint le nombre maximal de tags (3)");
    }
  };

  const handleTagDeselect = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

  const handleValidate = () => {
    if (selectedTags.length === 0) {
      setErrorMessage("Veuillez sélectionner au moins un tag");
      return;
    }

    onSelect(selectedTags); // Envoyer les tags sélectionnés au formulaire
    onClose(); // Fermer la modal
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <section className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-[8000]"></section>
        <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md  border rounded-lg shadow-sm m-auto ">
          <div className=" w-full flex items-center justify-between py-2 px-2">
            <IconButton aria-label="delete" size="large">
              <CloseIcon fontSize="inherit" onClick={onClose} />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto mr-16">
              Quel(s) filtre(s) voulez-vous appliquer?
            </h3>
          </div>
          <div className="grid grid-cols-3 justify-center border-2 border-custom-blue rounded-lg mx-2 p-2">
            {Tags.map((category) => (
              <button
                key={category}
                onClick={() =>
                  selectedTags.includes(category)
                    ? handleTagDeselect(category)
                    : handleTagSelect(category)
                }
                className={`flex border items-center justify-center border-custom-blue m-2 py-3 px-0 rounded-lg ${
                  selectedTags.includes(category)
                    ? "bg-custom-blue text-white"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Afficher le message d'erreur */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {errorMessage}
            </p>
          )}
          {/* Bouton Valider pour renvoyer les tags sélectionnés */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleValidate}
              className="w-full border items-center justify-center border-custom-blue bg-custom-blue text-white m-2 py-3 px-0 rounded-lg"
            >
              Valider
            </button>
          </div>
        </section>
      </Box>
    </Modal>
  );
};

export default ModalAddTags;
