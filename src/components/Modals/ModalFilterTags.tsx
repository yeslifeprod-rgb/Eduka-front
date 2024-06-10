import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { useModal } from "../../services/Context/ModalContext";
import { getFakerEventTagsData } from "../../utils/Axios/axios";

export interface ModalCategoryProps {
  updateEvents: (selectedTags: string[]) => void;
}

export default function ModalFilterTags(props: ModalCategoryProps) {
  const { updateEvents } = props;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { isModalOpen, closeModal } = useModal();
  const [tagsEvent, setTagsEvent] = useState<string[]>([]);

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

  useEffect(() => {
    const storedTags = localStorage.getItem("selectedTags");
    if (storedTags) {
      const parsedTags = JSON.parse(storedTags);
      setSelectedTags(parsedTags);
    }
  }, [isModalOpen]); // Mettre à jour les catégories sélectionnées à chaque ouverture de la modal

  const handleToggleCategory = (category: string): void => {
    const index = selectedTags.indexOf(category);
    if (index === -1) {
      setSelectedTags([...selectedTags, category]);
    } else {
      const newSelectedTags = [...selectedTags];
      newSelectedTags.splice(index, 1);
      setSelectedTags(newSelectedTags);
    }
  };

  function handleSubmit(): void {
    updateEvents(selectedTags);
    localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
    closeModal();
  }

  return (
    <Box>
      {isModalOpen && (
        <section className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-opacity-20 bg-black"></section>
      )}
      {isModalOpen && (
        <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md  border rounded-lg shadow-sm m-auto ">
          <div className=" w-full flex items-center justify-between py-2 px-2">
            <IconButton aria-label="delete" size="large">
              <CloseIcon fontSize="inherit" onClick={closeModal} />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto mr-16">
              Quel(s) filtre(s) voulez-vous appliquer?
            </h3>
          </div>
          <div className="grid grid-cols-3 justify-center border-2 border-custom-blue rounded-lg mx-2 p-2">
            {tagsEvent.map((category) => (
              <button
                key={category}
                className={`flex border items-center justify-center border-custom-blue m-2 py-3 px-0 rounded-lg ${
                  selectedTags.includes(category)
                    ? "bg-custom-blue text-white"
                    : ""
                }`}
                onClick={() => handleToggleCategory(category)}
              >
                <p className="text-xs">{category}</p>
              </button>
            ))}
          </div>
          <div className="bg-white w-full  flex flex-col gap-3 items-center justify-between  mx-auto px-2 py-3">
            <h3 className=" text-gray-900 mx-auto py-2 px-2 ">
              Souhaitez-vous une géolocalisation ?
            </h3>
            <article className=" w-full border-2 border-custom-blue rounded-lg mx-4">
              <div className="grid grid-cols-2 justify-center ">
                <div className="flex border items-center justify-center border-custom-blue m-2 py-3 px-0 rounded-lg">
                  <button className="text-sm">Ecole de référence</button>
                </div>
                <div className="flex border items-center justify-center border-custom-blue m-2 py-3 px-0 rounded-lg">
                  <button className="text-sm">Mon adresse</button>
                </div>
              </div>
              <div className="mx-3 ">
                <Slider
                  className="slider-custom"
                  aria-label="Temperature"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
              </div>
            </article>
            <button
              onClick={handleSubmit}
              className="w-full border items-center justify-center border-custom-blue bg-custom-blue text-white m-2 py-3 px-0 rounded-lg"
            >
              Valider
            </button>
          </div>
        </section>
      )}
    </Box>
  );
}
