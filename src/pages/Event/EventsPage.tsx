import bbox from "@turf/bbox";
import { FeatureCollection, Point } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { fitBounds } from "viewport-mercator-project";
import CardEvent from "../../components/Card/EventCard";
import ModalFilterTags from "../../components/Modals/ModalFilterTags";
import {
  CardEventInterface,
  EventInterface,
} from "../../services/interfaces/event";
import { getFakerEventsData } from "../../utils/Axios/axios";
import markerIconUrl from "/public/markerIcon.svg";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow";

export default function EventsPage() {
  const [fakeEvents, setFakeEvents] = useState<CardEventInterface[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<CardEventInterface[]>(
    []
  );
  const [viewport, setViewport] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 4,
  });
  const [selectedEvent, setSelectedEvent] = useState<CardEventInterface | null>(
    null
  );

  useEffect(() => {
    const fetchFakeEvents = async () => {
      try {
        const data = await getFakerEventsData();
        if (data) {
          setFakeEvents(data.datas);
          updateEvents(data.datas);
          adjustViewport(data.datas);
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };

    fetchFakeEvents();
  }, []);

  const adjustViewport = (events: CardEventInterface[]) => {
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

  const updateEvents = (events: CardEventInterface[]) => {
    const storedTags = localStorage.getItem("selectedTags");
    if (storedTags) {
      const selectedTags = JSON.parse(storedTags);
      if (Array.isArray(selectedTags) && selectedTags.length === 0) {
        setFilteredEvents(events);
      } else {
        const updatedEvents = events.filter(
          (event) =>
            event.tags && event.tags.some((tag) => selectedTags.includes(tag))
        );
        setFilteredEvents(updatedEvents);
      }
    } else {
      setFilteredEvents(events);
    }
  };

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
    <div className="  flex flex-col-reverse gap-4 justify-center mx-2 mt-4 lg:grid grid-cols-3 ">
      <section className="col-span-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {filteredEvents.map((event, index) => (
          <CardEvent key={index} event={event as EventInterface} />
        ))}
        <ModalFilterTags updateEvents={handleCategorySelection} />
      </section>
      <section className="hidden lg:block">
        <div className=" col-span-1 lg:sticky lg:top-0 lg:h-screen">
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
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    style={{ width: "100%", height: "100%" }}
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
