import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFakeEventsData } from "../../utils/Axios/axios";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { EventsInterface } from "../../services/interfaces/EventsInterface";


export const NavBarEvent = () => {
  const [fakeEvent, setFakeEvent] = useState<EventsInterface[]>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getFakeEventsData();
        if (data) {
          const specificEvent = data.datas.filter(event => event.id === "1q2w3e4r5t6y");
          setFakeEvent(specificEvent);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des événements :", error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div className="flex justify-between items-center py-5 px-4 border-b-2">
      <NavLink to="/home_page_parent"> {/*penser a rediriger où il faut @dev*/}
        <IconButton aria-label="delete" size="large">
          <CloseIcon />
        </IconButton>
      </NavLink>
      <div className="flex flex-col items-center justify-center text-center">
        {fakeEvent.map((event) => (
          <div className="mr-14" key={event.id}>
            <p className="text-2xl">{event.title}</p>
            <p className="">{format(new Date(event.created_at), "EEEE dd MMMM yyyy 'à' HH:mm", { locale: fr })}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};