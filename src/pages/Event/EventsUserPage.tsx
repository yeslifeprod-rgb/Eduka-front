import bbox from "@turf/bbox";
import { FeatureCollection, Point } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { fitBounds } from "viewport-mercator-project";
import CardEvent from "../../components/Card/EventCard";
import ModalFilterTags from "../../components/Modals/ModalFilterTags";
import { fetchPublicEvents } from "../../services/api/events";
import { FormattedEventCardInterface } from "../../services/interfaces/event";
import markerIconUrl from "/public/markerIcon.svg";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow";

export default function EventsPage() {
  const [UserEvents, setUserEvents] = useState<FormattedEventCardInterface[]>(
    []
  );
  const [filteredEvents, setFilteredEvents] = useState<
    FormattedEventCardInterface[]
  >([]);
  const [viewport, setViewport] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 4,
  });
  const [selectedEvent, setSelectedEvent] =
    useState<FormattedEventCardInterface | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await fetchPublicEvents();
        if (data) {
          const formattedEvents = data.events.map((event: any) => ({
            ...event,
            latitude: event.location.lat,
            longitude: event.location.long,
          }));
          setUserEvents(formattedEvents);
          updateEvents(formattedEvents);
          adjustViewport(formattedEvents);
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };

    fetchEvents();
  }, []);

  const adjustViewport = (events: FormattedEventCardInterface[]) => {
    const features: FeatureCollection<Point> = {
      type: "FeatureCollection",
      features: events.map((event) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [event.longitude, event.latitude],
        },
        properties: {},
      })),
    };

    const [minLng, minLat, maxLng, maxLat] = bbox(features);
    const { longitude, latitude, zoom } = fitBounds({
      width: window.innerWidth,
      height: window.innerHeight,
      bounds: [
        [minLng, minLat],
        [maxLng, maxLat],
      ],
    });

    setViewport({ longitude, latitude, zoom });
  };

  const removeAccents = (str: string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const updateEvents = (UserEvents: FormattedEventCardInterface[]) => {
    const storedTags = localStorage.getItem("selectedTags");
    if (storedTags) {
      const selectedTags = JSON.parse(storedTags);
      if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        setFilteredEvents(UserEvents);
      } else {
        const updatedEvents = UserEvents.filter((event) =>
          event.tags.some((tag) =>
            selectedTags.some(
              (selectedTag: string) =>
                removeAccents(tag.toLowerCase()) ===
                removeAccents(selectedTag.toLowerCase())
            )
          )
        );
        setFilteredEvents(updatedEvents);
      }
    } else {
      setFilteredEvents(UserEvents);
    }
  };

  const handleCategorySelection = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredEvents(UserEvents);
    } else {
      const updatedEvents = UserEvents.filter((event) =>
        event.tags.some((tag) =>
          selectedTags.some(
            (selectedTag: string) =>
              removeAccents(tag.toLowerCase()) ===
              removeAccents(selectedTag.toLowerCase())
          )
        )
      );
      setFilteredEvents(updatedEvents);
    }
  };

  return (
    <div className="  flex flex-col-reverse gap-4 justify-center mx-2 mt-4 lg:grid grid-cols-3 ">
      <section className="col-span-2  max-w-screen-xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {filteredEvents.map((event, index) => (
          <CardEvent key={index} event={event as FormattedEventCardInterface} />
        ))}
        <ModalFilterTags updateEvents={handleCategorySelection} />
      </section>
      <section className="hidden lg:block">
        <div className=" col-span-1 lg:sticky lg:top-0 bottom-0 lg:h-screen">
          <Map
            initialViewState={viewport}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            onMove={(evt) => setViewport(evt.viewState)}
          >
            {filteredEvents.map(
              (event, index) =>
                event.latitude &&
                event.longitude && (
                  <Marker
                    key={index}
                    longitude={event.longitude}
                    latitude={event.latitude}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundImage: `url(${markerIconUrl})`,
                        backgroundSize: "cover",
                        cursor: "pointer",
                      }}
                    />
                  </Marker>
                )
            )}
            {selectedEvent && (
              <Popup
                longitude={selectedEvent.longitude}
                latitude={selectedEvent.latitude}
                onClose={() => setSelectedEvent(null)}
                closeOnClick={false}
              >
                <div>
                  <img
                    src={selectedEvent.event_picture}
                    alt={selectedEvent.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h3>{selectedEvent.title}</h3>
                </div>
              </Popup>
            )}
          </Map>
        </div>
      </section>
    </div>
  );
}
