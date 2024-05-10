import {
  fakerEventTagsData,
  fakerEventsData,
  fakerTypeEventsData,
  fakerUserEventsData,
} from "../Fakers/Faker";

export const getFakerEventsData = async () => {
  try {
    const data = fakerEventsData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFakerUserEventsData = async () => {
  try {
    // Effectue une requête GET pour récupérer les données des événements
    const data = fakerUserEventsData;
    // Extrait les données de la réponse
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};

export const getFakerTypeEventsData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerTypeEventsData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};

export const getFakerEventTagsData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerEventTagsData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
