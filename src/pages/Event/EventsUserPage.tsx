import { useEffect, useState } from "react";
import CardEvent from "../../components/Card/EventCard";
import ModalCategory from "../../components/Modals/ModalCategory";
import eventInterface from "../../services/interfaces/event";

const events: eventInterface[] = [
  {
    name: "Jean-Claude",
    title: "Fête d'anniversaire de Pierre",
    description:
      "Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-15"),
    image: "/public/event1.jpeg",
    avatar_name: "./public/profil1.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
  {
    name: "Robert",
    title: "Sortie au parc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-20"),
    image: "/public/event2.jpeg",
    avatar_name: "./public/profil.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
  {
    name: "Bernadette",
    title: "Match de football",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-30"),
    image: "/public/event1.jpeg",
    avatar_name: "./public/profil2.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
  {
    name: "Jean-Claude",
    title: "Fête d'anniversaire de Pierre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-15"),
    image: "/public/event1.jpeg",
    avatar_name: "./public/profil1.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
  {
    name: "Robert",
    title: "Sortie au parc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-20"),
    image: "/public/event2.jpeg",
    avatar_name: "./public/profil.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
  {
    name: "Ania",
    title: "Fête d'anniversaire de Pierre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    date: new Date("2024-04-15"),
    image: "/public/event3.jpeg",
    avatar_name: "./public/profil.png",
    location: "Marseille",
    tags: ["Fête", "Musique"],
  },
];

export default function EventsUserPage() {
  const [filteredEvents, setFilteredEvents] =
    useState<eventInterface[]>(events);

  // Vérifier si les catégories sont déjà stockées dans le localStorage
  useEffect(() => {
    const storedCategories = localStorage.getItem("selectedCategories");
    if (storedCategories) {
      // Si des catégories sont déjà stockées, mettre à jour les événements en conséquence
      const selectedCategories = JSON.parse(storedCategories);
      updateEvents(selectedCategories);
    }
  }, []);

  // Fonction pour mettre à jour les événements en fonction des catégories sélectionnées
  const updateEvents = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setFilteredEvents(events);
    } else {
      const updatedEvents = events.filter((event) =>
        event.tags.some((tag) => selectedCategories.includes(tag))
      );
      setFilteredEvents(updatedEvents);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredEvents.map((event, index) => (
        <CardEvent key={index} event={event} />
      ))}
      <ModalCategory updateEvents={updateEvents} />
    </section>
  );
}
