import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlueFullButton } from "../../components/Button/CustomButton";
import { FakePost } from "./Faker";
import NavToggleEvent from "./NavToggleEvent";

import { NavLink } from "react-router-dom";
import MapBoxComponent from "../../components/Mapbox/Mapbox";

export default function EventPrivatePage() {
  const [responseText, setResponseText] = useState<string>(
    "Vous n'avez pas encore répondu"
  );
  const [showChatCard, setShowChatCard] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [remainingSpots, setRemainingSpots] = useState<number>(
    FakePost.participants
  );

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get("./Faker");
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'événement :",
          error
        );
      }
    }
    fetchData();
  }, []);

  // Gestion du clic sur le bouton d'inscription
  const handleButtonClick = () => {
    setIsRegistered(!isRegistered);
    setResponseText(isRegistered ? "Vous êtes absent" : "Vous êtes présent");
    setShowChatCard(!isRegistered);
    setRemainingSpots((prevSpots) => prevSpots + (isRegistered ? 1 : -1)); // Augmentation/diminution du nombre de places restantes
  };

  return (
    <>
      {/* Composant NavToggleEvent pour la navigation */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-auto  ">
        <NavToggleEvent />
      </div>

      {/* Affichage de l'image de l'événement */}
      <div className="flex justify-center items-center max-w-md mx-auto mt-9 mb-9 ">
        <img
          src={FakePost.image}
          alt=""
          className="mx-auto my-auto rounded-md sm:justify-center sm:block max-w-sm"
        />
      </div>

      {/* Affichage des tags de l'événement */}
      <div className="flex justify-center items-center max-w-md mx-auto mt-9 mb-9 gap-10 text-sm ">
        {FakePost.tags.map((tag, index) => (
          <div key={index} className="bg-white rounded-full p-2 shadow-md px-5">
            <p className="text-black text-center">{tag}</p>
          </div>
        ))}
      </div>

      {/* Section de description de l'événement */}
      <div className="mb-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md ">
          <div>
            <p className="text-lg font-semibold mb-4">Description : </p>
            <p className="text-gray-700">{FakePost.description}</p>
          </div>
        </div>
      </div>

      {/* Section des participants et de l'inscription */}
      <div className="mb-6 font-sans">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">Participants</p>
          <p className="text-lg mb-4">{responseText}</p>
          <p className="text-m font-semi mb-4 ">
            Place(s) restante(s) {remainingSpots}
          </p>
          <div className="flex justify-between items-center space-x-4">
            {/* Bouton d'inscription/désinscription */}
            <BlueFullButton
              onClick={handleButtonClick}
              className="btn-status bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isRegistered ? "Je me désinscris" : "Je m'inscris"}
            </BlueFullButton>
          </div>
        </div>
      </div>

      {/* Affichage de la carte de chat */}
      {showChatCard && (
        <div className="mb-6">
          <div className="bg-white shadow-md rounded-md p-4 sm:p-6 max-w-md mx-auto">
            <p className="text-lg font-semibold mb-4">Salon de chat</p>
            <p className="text-lg mb-4">
              Salon de chat permet de communiquer avec les participants et le
              créateur de l'événement
            </p>
            {/* Bouton pour accéder au salon de discussion */}
            <NavLink to={"/chat"}>
              <Button
                variant="contained"
                className="text-sm sm:text-base py-2 px-3 sm:px-4 mt-4 sm:mt-0"
                style={{
                  backgroundColor: "#0FA3B1",
                  color: "white",
                  border: "2px solid #0FA3B1",
                  borderRadius: "10px",
                  width: "100%",
                  maxWidth: "384px",
                  height: "40px",
                }}
              >
                Voir le salon de discussion
              </Button>
            </NavLink>
          </div>
        </div>
      )}

      {/* Affichage du lieu de l'événement avec une carte */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6 font-sans max-w-md mx-auto">
        <label className="font-semibold mb-4">Lieu de l'événement</label>
        <p className="text-gray-800 mb-4 ">{FakePost.location}</p>
        <div className="mb-6">
          <MapBoxComponent location={FakePost.location} />
        </div>
      </div>
    </>
  );
}
