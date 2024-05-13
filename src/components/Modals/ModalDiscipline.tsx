import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { BlueFullButton, BlueSelectedButton } from '../Button/CustomButton';
import { getDisciplinesData } from '../../utils/Axios/axios';
import { EventDisciplineInterface } from '../../services/interfaces/EventDisciplineInterface';

interface ModalTestProps {
  onClose: (selectedDisciplines: string[]) => void;
  selectedDisciplines: string[];
}

export const ModalDiscipline: FC<ModalTestProps> = ({ onClose, selectedDisciplines }) => {
  const [localSelectedDisciplines, setLocalSelectedDisciplines] = useState<string[]>(selectedDisciplines);
  const [eventDiscipline, setEventDiscipline] = useState<EventDisciplineInterface[]>([]);

  useEffect(() => {
    const fetchEventDiscipline = async () => {
      try {
        const data = await getDisciplinesData();
        if (data) {
          setEventDiscipline(data.datas);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchEventDiscipline();
  }, []);

  const toggleDiscipline = (discipline: string) => {
    if (localSelectedDisciplines.includes(discipline)) {
      setLocalSelectedDisciplines(localSelectedDisciplines.filter((item) => item !== discipline));
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
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-sm bg-opacity-20 bg-black">
      <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between py-2">
          <IconButton aria-label="delete" size="large" onClick={() => onClose(localSelectedDisciplines)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <h3 className="text-gray-900 font-medium mx-auto ml-6">Quel(s) filtre(s) voulez-vous appliquer?</h3>
        </div>
        <div className="bg-white w-full grid grid-cols-3 gap-5 items-center justify-center px-2 py-3 border-2 border-custom-blue rounded-lg">
          {eventDiscipline.map((discipline, index) => (
            <BlueSelectedButton
              key={index}
              onClick={() => toggleDiscipline(discipline.name)}
              className={isDisciplineSelected(discipline.name) ? "selected" : ""}
            >
              {discipline.name}
            </BlueSelectedButton>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <BlueFullButton onClick={() => onClose(localSelectedDisciplines)}>Valider</BlueFullButton>
        </div>
      </section>
    </Box>
  );
};