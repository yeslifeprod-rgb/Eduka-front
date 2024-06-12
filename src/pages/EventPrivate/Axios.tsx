import axios from "axios";

// Fonction pour récupérer les utilisateurs depuis l'API
export const fetchUsers = async () => {
    try {
        const response = await axios.get("http://localhost:3000/users");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
};

// Fonction pour envoyer les noms sélectionnés à l'API
export const postSelectedNames = async (selectedNames: string[]) => {
    try {
        await axios.post("http://localhost:3000/users", { selectedNames });
        console.log("Noms sélectionnés envoyés avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'envoi des noms sélectionnés :", error);
    }
};
