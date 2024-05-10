import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { eventDiscipline } from "../../utils/Fakers/Faker";
import { BlueFullButton, BlueSelectedButton } from "../Button/CustomButton";

interface ModalTestProps {
  onClose: (selectedDisciplines: string[]) => void;
  selectedDisciplines: string[];
}

export const ModalDiscipline: React.FC<ModalTestProps> = ({
  onClose,
  selectedDisciplines,
}) => {
  const [localSelectedDisciplines, setLocalSelectedDisciplines] =
    useState(selectedDisciplines);

  // useEffect(() => {
  //     const storedDisciplines = localStorage.getItem("selectedDisciplines");
  //     if (storedDisciplines) {
  //         setLocalSelectedDisciplines(JSON.parse(storedDisciplines));
  //     }
  // }, []);

  const toggleDiscipline = (discipline: string) => {
    if (localSelectedDisciplines.includes(discipline)) {
      setLocalSelectedDisciplines(
        localSelectedDisciplines.filter((item) => item !== discipline)
      );
    } else {
      if (localSelectedDisciplines.length < 3) {
        setLocalSelectedDisciplines([...localSelectedDisciplines, discipline]);
      } else {
        console.log("Vous ne pouvez sélectionner que trois matières.");
      }
    }
  };
  const isDisciplineSelected = (discipline: string) => {
    return localSelectedDisciplines.includes(discipline);
  };

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm ">
      <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between py-2">
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => onClose(localSelectedDisciplines)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <h3 className="text-gray-900 font-medium mx-auto ml-6">
            Quel(s) filtre(s) voulez-vous appliquer?
          </h3>
        </div>
        <div className="bg-white w-full grid grid-cols-3 gap-5 items-center justify-center px-2 py-3 border-2 border-custom-blue rounded-lg">
          {eventDiscipline.map((discipline, index) => (
            <BlueSelectedButton
              key={index}
              onClick={() => toggleDiscipline(discipline)}
              className={isDisciplineSelected(discipline) ? "selected" : ""}
            >
              {discipline}
            </BlueSelectedButton>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <BlueFullButton onClick={() => onClose(localSelectedDisciplines)}>
            Valider
          </BlueFullButton>
        </div>
      </section>
    </Box>
  );
};
