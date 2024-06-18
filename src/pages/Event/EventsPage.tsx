import { useEffect, useState } from "react";
import CardEvent from "../../components/Card/EventCard";
import ModalFilterTags from "../../components/Modals/ModalFilterTags";
import {
  CardEventInterface,
  EventInterface,
} from "../../services/interfaces/event";
import { getFakerEventsData } from "../../utils/Axios/axios";

export default function EventsPage() {
  const [fakeEvents, setFakeEvents] = useState<CardEventInterface[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<CardEventInterface[]>(
    []
  );

  // Récupérer les événements lors du chargement initial de la page
  useEffect(() => {
    const fetchFakeEvents = async () => {
      try {
        const data = await getFakerEventsData();
        if (data) {
          setFakeEvents(data.datas); // Mise à jour de fakeEvents
          updateEvents(data.datas); // Appel de updateEvents avec les nouvelles données
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };

    fetchFakeEvents();
  }, []);

  // Fonction pour mettre à jour les événements en fonction des catégories sélectionnées
  const updateEvents = (events: CardEventInterface[]) => {
    const storedTags = localStorage.getItem("selectedTags");
    if (storedTags) {
      const selectedTags = JSON.parse(storedTags);
      if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        setFilteredEvents(events);
      } else {
        const updatedEvents = fakeEvents.filter(
          (event) =>
            event.tags && event.tags.some((tag) => selectedTags.includes(tag))
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
      setFilteredEvents(fakeEvents);
    } else {
      const updatedEvents = fakeEvents.filter(
        (event) =>
          event.tags && event.tags.some((tag) => selectedTags.includes(tag))
      );
      setFilteredEvents(updatedEvents);
    }
  };

  return (
    <div className="flex justify-center mx-2">
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredEvents.map((event, index) => (
          <CardEvent key={index} event={event as EventInterface} />
        ))}
        <ModalFilterTags updateEvents={handleCategorySelection} />
      </section>
    </div>
  );
}
