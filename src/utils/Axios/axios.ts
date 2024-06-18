import {
  FakeEventsData,
  FakeProfilData,
  FakeSchoolNameData,
  FakeUserData,
  FakedisciplineData,
  receivedMessagesChatData,
} from "../Fakers/Fakers";
import {
  fakerEventTagsData,
  fakerEventsData,
  fakerTypeEventsData,
  fakerUserEventsData,
  fakerEventsPrivateData,
  fakerEventsPublicData,
  fakerUsersData,
  fakerOnChangeData,
  fakerLoginData,
  fakerUserByProfilEventsData,
  fakerUserParticipationProfilEventsData,
} from "../Fakers/Faker";

export const getFakerEventsData = async () => {
  try {
    const data = fakerEventsData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReceivedMessagesChatData = async () => {
  try {
    const data = receivedMessagesChatData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDisciplinesData = async () => {
  try {
    const data = FakedisciplineData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSchoolNameData = async () => {
  try {
    const data = FakeSchoolNameData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfilData = async () => {
  try {
    const data = FakeProfilData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async () => {
  try {
    const data = FakeUserData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFakeEventsData = async () => {
  try {
    const data = FakeEventsData;
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

export const getFakerPrivateEventData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerEventsPrivateData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
export const getFakerPublicEventData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerEventsPublicData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
export const getFakerUsersData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerUsersData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
export const getFakerOnChangeData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerOnChangeData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
export const getFakerLoginData = async () => {
  try {
    // Simule une attente de 1 seconde pour imiter une requête HTTP asynchrone
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = fakerLoginData;
    // Une fois l'attente terminée, retourne les données simulées
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};

export const getFakerUserByProfilEventsData = async () => {
  try {
    // Effectue une requête GET pour récupérer les données des événements
    const data = fakerUserByProfilEventsData;
    // Extrait les données de la réponse
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};

export const getFakerUserParticipationProfilEventsData = async () => {
  try {
    // Effectue une requête GET pour récupérer les données des événements
    const data = fakerUserParticipationProfilEventsData;
    // Extrait les données de la réponse
    return data;
  } catch (error) {
    console.error("Error fetching user events:", error);
    throw error; // Renvoie l'erreur pour être traitée à un niveau supérieur
  }
};
