import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useModal } from "../../services/Context/ModalContext";

import { EventInterface } from "../../services/interfaces/event";
import { OrangeButton } from "../Button/CustomButton";

const PrivateEvents = [
  "Sortie loisirs",
  "Anniversaire",
  "Covoiturage",
  "Cours particuliers",
];
const handleEventSelection = (category: string) => {
  // Stocker la valeur de l'événement sélectionné dans le localStorage
  const storedDataString: string | null =
    localStorage.getItem("storedDataEvent");
  const storedDataEvent: EventInterface = storedDataString
    ? JSON.parse(storedDataString)
    : { category: "" };
  storedDataEvent.category = category; // Réinitialiser le tableau eventType avec le nouveau type d'événement
  localStorage.setItem("storedDataEvent", JSON.stringify(storedDataEvent)); // Stocker les données mises à jour dans le local storage
};
export default function TypeEventPage() {
  const { isCategoryPrivateEventOpen, closeCategoryPrivateEvent } = useModal();

  return (
    <Box>
      {isCategoryPrivateEventOpen && (
        <section className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-30"></section>
      )}
      {isCategoryPrivateEventOpen && (
        <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md  border rounded-lg shadow-sm m-auto ">
          <article className=" py-2 px-2">
            <IconButton className="py-2" aria-label="delete" size="large">
              <CloseIcon
                fontSize="inherit"
                onClick={closeCategoryPrivateEvent}
              />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto text-center">
              Quel type d’évènement voulez-vous créer ?
            </h3>
          </article>

          <article className="grid grid-cols-1 justify-center gap-4 m-10">
            {PrivateEvents.map((event) => (
              <NavLink
                to="/add_event_page"
                onClick={() => {
                  closeCategoryPrivateEvent();
                  handleEventSelection(event);
                }}
              >
                <OrangeButton>{event}</OrangeButton>
              </NavLink>
            ))}
          </article>
        </section>
      )}
    </Box>
  );
}
