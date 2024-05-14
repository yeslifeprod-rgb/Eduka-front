import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useModal } from "../../services/Context/ModalContext";
import { EventInterface } from "../../services/interfaces/event";
import { BlueButton } from "../Button/CustomButton";
import {useEffect, useState} from "react";
import {getFakerPublicEventData} from "../../utils/Axios/axios.ts";

export default function TypeEventPage() {
  const { isCategoryPublicEventOpen, closeCategoryPublicEvent } = useModal();
  const [publicEvents, setPublicEvents] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données des types d'événements via Axios
        const data = await getFakerPublicEventData();
        if (data) {
          setPublicEvents(data.datas);
        }
      } catch (error) {
        console.error("Error fetching type events:", error);
      }
    };

    fetchData();
  }, []);


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

  return (
    <Box>
      {isCategoryPublicEventOpen && (
        <section className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-[800]"></section>
      )}
      {isCategoryPublicEventOpen && (
        <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[900] w-full max-w-md  border rounded-lg shadow-sm m-auto ">
          <article className=" py-2 px-2">
            <IconButton className="py-2" aria-label="delete" size="large">
              <CloseIcon
                fontSize="inherit"
                onClick={closeCategoryPublicEvent}
              />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto text-center">
              Quel type d’évènement voulez-vous créer ?
            </h3>
          </article>

          <article className="grid grid-cols-1 justify-center gap-4 m-10">
            {publicEvents.map((event) => (
              <NavLink
                to="/add_event_page"
                onClick={() => {
                  closeCategoryPublicEvent();
                  handleEventSelection(event);
                }}
              >
                <BlueButton>{event}</BlueButton>
              </NavLink>
            ))}
          </article>
        </section>
      )}
    </Box>
  );
}
