import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationCard from "../../components/Card/NotificationCard";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";

export default function NotificationPage() {
  const [eventsOnChange, setEventsOnChange] = useState([
    {
      first_name_parent: "Sophie",
      last_name_parent: "Martin",
      first_name_teacher: "David",
      last_name_teacher: "Johnson",
      title: "Réunion de parents-enseignants",
      description:
        "Discussion sur les progrès académiques des élèves et les activités à venir.",
      date: "2024-04-28",
      image: "lien_vers_image.jpg",
      location: "École primaire de Maple",
      isValidated: false,
      isParticipated: true,
      isCanceled: false,
      createdAt: new Date("2024-04-01"),
      messageIsRead: false,
    },
    {
      first_name_parent: "Thomas",
      last_name_parent: "Garcia",
      first_name_teacher: "Emily",
      last_name_teacher: "White",
      title: "Atelier sur l'éducation numérique",
      description:
        "Démonstration des outils et des ressources numériques utilisés en classe.",
      date: "2024-06-02",
      image: "lien_vers_image.jpg",
      location: "École secondaire de Willow",
      isValidated: false,
      isParticipated: false,
      isCanceled: false,
      createdAt: new Date(),
      messageIsRead: false,
    },
    {
      first_name_parent: "Jessica",
      last_name_parent: "Lopez",
      first_name_teacher: "Michael",
      last_name_teacher: "Davis",
      title: "Sortie éducative au musée",
      description:
        "Exploration des expositions sur l'histoire locale et les sciences.",
      date: "2024-05-18",
      image: "lien_vers_image.jpg",
      location: "Musée de la ville",
      isValidated: true,
      isParticipated: true,
      isCanceled: false,
      createdAt: new Date(),
      messageIsRead: false,
    },
    {
      first_name_parent: "Alexandre",
      last_name_parent: "Dubois",
      first_name_teacher: "Sophie",
      last_name_teacher: "Clark",
      title: "Spectacle de talents des élèves",
      description:
        "Présentation des talents artistiques des élèves de l'école.",
      date: "2024-06-15",
      image: "lien_vers_image.jpg",
      location: "Gymnase de l'école élémentaire Oak",
      isValidated: false,
      isParticipated: false,
      isCanceled: false,
      createdAt: new Date(),
      messageIsRead: false,
    },
    {
      first_name_parent: "Eva",
      last_name_parent: "Bernard",
      first_name_teacher: "Daniel",
      last_name_teacher: "Robinson",
      title: "Atelier sur la préparation aux examens",
      description:
        "Conseils pratiques pour aider les élèves à se préparer aux examens finaux.",
      date: "2024-05-25",
      image: "lien_vers_image.jpg",
      location: "Bibliothèque municipale",
      isValidated: false,
      isParticipated: false,
      isCanceled: false,
      createdAt: new Date(),
      messageIsRead: false,
    },
  ]);

  const [unreadEvents, setUnreadEvents] = useState(
    eventsOnChange.filter((event) => !event.messageIsRead)
  );

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
        <h2 className="text-2xl text-gray-900 mx-auto">Nouveau Profil</h2>
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
