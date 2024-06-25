import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BlueFullButton,
  OrangeFullButton,
} from "../../components/Button/CustomButton";
import NavToggleEvent from "../EventPrivate/NavToggleEvent";

import { NavLink } from "react-router-dom";
import MapBoxComponent from "../../components/Mapbox/Mapbox";
import { ModalChildren } from "../../components/ModalChildren/ModalChildren";
import { FakePost } from "../EventPrivate/Faker";

interface FormData {}

export default function EventPrivatePage() {
  const [formData, setFormData] = useState<FormData>({});
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const [responseText, setResponseText] = useState<string>(
    "Vous n'avez pas encore répondu"
  );
  const [showChatCard, setShowChatCard] = useState<boolean>(false);
  const [showDonationCard, setShowDonationCard] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("./Faker");
        setFormData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'événement :",
          error
        );
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Données soumises avec succès :", formData);
      setResponseText(isPresent ? "Je suis présent" : "Je suis absent");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  const handlePresentClick = () => {
    setIsPresent(true);
    setResponseText("Vous êtes présent");
    setShowChatCard(true);
    setShowDonationCard(true);
  };

  const handleAbsentClick = () => {
    setIsPresent(false);
    setResponseText("Vous êtes absent");
    setShowChatCard(false);
    setShowDonationCard(false);
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
      {/* Section de description de l'événement */}
      <div className="mb-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md ">
          <div>
            <p className="text-lg font-semibold mb-4">Description : </p>
            <p className="text-gray-700">{FakePost.description}</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">Ma présence</p>
          <p className="text-lg mb-4">{responseText}</p>
          <div className="flex justify-between items-center space-x-4">
            <BlueFullButton
              onClick={handlePresentClick}
              className="btn-status bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Je suis Présent
            </BlueFullButton>

            <OrangeFullButton
              onClick={handleAbsentClick}
              className="btn-status bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Je suis Absent
            </OrangeFullButton>
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
      {/* Affichage de la carte donnation */}
      {showDonationCard && FakePost.Donation && (
        <div className="mb-6">
          <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
            <p className="text-lg font-semibold mb-4">Cagnotte</p>
            <p className="text-lg mb-4">
              Soutenez l'événement en contribuant à la cagnotte.
            </p>
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
              <a href="http://paypal.com">Contribuer à la cagnotte</a>
            </Button>
          </div>
        </div>
      )}
      {/* Affichage du lieu de l'événement avec une carte */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6 max-w-md mx-auto">
        <label className="font-semibold mb-4">Lieu de l'événement</label>
        <p className="text-gray-800 mb-4 ">{FakePost.location}</p>
        <div className="mb-6">
          <MapBoxComponent location={FakePost.location} />
        </div>
      </div>
      {isPresent && (
        <ModalChildren onClose={() => setIsPresent(false)} selectedNames={[]} />
      )}{" "}
      {/* Affichage d'une modal si l'utilisateur est présent */}
    </>
  );
}
