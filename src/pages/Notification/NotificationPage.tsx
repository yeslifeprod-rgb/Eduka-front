import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationCard from "../../components/Card/NotificationCard";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import eventOnChangeInterface from "../../services/interfaces/eventOnChange";
import { getFakerOnChangeData } from "../../utils/Axios/axios";

export default function NotificationPage() {
  const [eventsOnChange, setEventsOnChange] = useState<
    eventOnChangeInterface[]
  >([]);
  const [unreadEvents, setUnreadEvents] = useState<eventOnChangeInterface[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données des types d'événements via Axios
        const data = await getFakerOnChangeData();
        if (data) {
          setEventsOnChange(data.datas);
        }
      } catch (error) {
        console.error("Error fetching type events:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setUnreadEvents(eventsOnChange.filter((event) => !event.messageIsRead));
  }, [eventsOnChange]);

  function handleClear() {
    // Mettez à jour le messageIsRead de tous les événements
    const updatedEvents = eventsOnChange.map((event) => ({
      ...event,
      messageIsRead: true,
    }));

    // Mettez à jour les événements non lus
    setUnreadEvents([]);

    // Mettez à jour l'état des événements
    setEventsOnChange(updatedEvents);
  }

  return (
    <>
      <NavTopLarge />
      <div className="bg-white w-full flex items-center justify-between py-5 px-4 border-b">
        <h2 className="text-2xl text-gray-900 mx-auto">Notifications</h2>
        <NavLink to="#">
          <IconButton aria-label="delete" size="large">
            <PlaylistAddCheckIcon
              fontSize="inherit"
              onClick={() => {
                handleClear();
              }}
            />
          </IconButton>
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        {unreadEvents.map((event, index) => (
          <NotificationCard key={index} eventOnChange={event} />
        ))}
      </div>

      <NavBottom />
    </>
  );
}
