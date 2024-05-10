import { useEffect, useState } from "react";
import CardEvent from "../../components/Card/EventCard";
import ModalFilterTags from "../../components/Modals/ModalFilterTags";
import { CardEventInterface } from "../../services/interfaces/event";
import { getFakerUserEventsData } from "../../utils/Axios/axios";

export default function EventsPage() {
  const [fakeUserEvents, setFakeUserEvents] = useState<CardEventInterface[]>(
    []
  );
  const [filteredEvents, setFilteredEvents] = useState<CardEventInterface[]>(
    []
  );

  // Récupérer les événements lors du chargement initial de la page
  useEffect(() => {
    const fetchFakeUserEvents = async () => {
      try {
        const data = await getFakerUserEventsData();
        if (data) {
          setFakeUserEvents(data.datas); // Mise à jour de FakeUserEvents
          updateEvents(data.datas); // Appel de updateEvents avec les nouvelles données
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };

    fetchFakeUserEvents();
  }, []);

  // Fonction pour mettre à jour les événements en fonction des catégories sélectionnées
  const updateEvents = (events: CardEventInterface[]) => {
    const storedTags = localStorage.getItem("selectedTags");
    if (storedTags) {
      const selectedTags = JSON.parse(storedTags);
      if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        setFilteredEvents(events);
      } else {
        const updatedEvents = events.filter((event) =>
          event.tags.some((tag) => selectedTags.includes(tag))
        );
        setFilteredEvents(updatedEvents);
      }
    } else {
      setFilteredEvents(events);
    }
  };

  // Fonction de mise à jour des événements lors de la sélection de catégories
  const handleCategorySelection = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredEvents(fakeUserEvents);
    } else {
      const updatedEvents = fakeUserEvents.filter((event) =>
        event.tags.some((tag) => selectedTags.includes(tag))
      );
      setFilteredEvents(updatedEvents);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredEvents.map((event, index) => (
        <CardEvent key={index} event={event} />
      ))}
      <ModalFilterTags updateEvents={handleCategorySelection} />
    </section>
  );
}
