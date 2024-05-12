import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { BlueFullButton, OrangeFullButton } from "../../components/Button/CustomButton";
import { fetchUsers, postSelectedNames } from "../../pages/EventPrivate/Axios";

interface Name {
    firstName: string;
}

interface ModalTestProps {
    onClose: (selectedNames: string[]) => void;
    selectedNames: string[];
}

export const ModalChildren: React.FC<ModalTestProps> = ({ onClose }) => {
    // State pour stocker les noms et les noms sélectionnés localement
    const [names, setNames] = useState<Name[]>([]);
    const [localSelectedNames, setLocalSelectedNames] = useState<string[]>([]);
    const [selectedNamesDisplay, setSelectedNamesDisplay] = useState<string[]>([]);

    // Récupération des noms depuis l'API au chargement du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUsers();
                setNames(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };
        fetchData();
    }, []);

    // Fonction pour basculer l'état de sélection d'un nom
    const toggleName = (name: string) => {
        const updatedSelectedNames = localSelectedNames.includes(name)
            ? localSelectedNames.filter(n => n !== name)
            : [...localSelectedNames, name];

        setLocalSelectedNames(updatedSelectedNames); // Mise à jour des noms sélectionnés localement
        setSelectedNamesDisplay(updatedSelectedNames); // Mise à jour de l'affichage des noms sélectionnés
        console.log("Noms sélectionnés :", updatedSelectedNames);
    };

    // Vérifier si un nom est sélectionné
    const isNameSelected = (name: string) => localSelectedNames.includes(name);

    // Soumettre les noms sélectionnés à l'API
    const handleSubmit = async () => {
        try {
            await postSelectedNames(localSelectedNames);
            console.log("Noms sélectionnés envoyés avec succès !");
            console.log("La base de données a bien reçu la requête.");
            onClose(localSelectedNames);
        } catch (error) {
            console.error("Erreur lors de l'envoi des noms sélectionnés :", error);
        }
    };

    return (
        <Box
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-80 bg-black"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4">
                {/* Affichage de la liste des noms et boutons de sélection */}
                <p className="text-center font-semibold mb-3">Qui sera présent</p>
                <div className="bg-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 items-center justify-center px-2 py-3 border-2" style={{ borderColor: "#0FA3B1" }}>
                    {names.map((name, index) => (
                        name.firstName && (
                            <Button
                                key={index}
                                onClick={() => toggleName(name.firstName)}
                                variant="outlined"
                                color="primary"
                                style={{
                                    width: "100%",
                                    border: `2px solid ${isNameSelected(name.firstName) ? "#0FA3B1" : "#0FA3B1"}`,
                                    backgroundColor: isNameSelected(name.firstName) ? "#0FA3B1" : "transparent",
                                    color: isNameSelected(name.firstName) ? "white" : "#0FA3B1",
                                    borderRadius: "5px",
                                    padding: "8px",
                                }}
                            >
                                {name.firstName}
                            </Button>
                        )
                    ))}
                </div>

                {/* Affichage des noms sélectionnés */}
                <div className="mt-3">
                    <p>Noms sélectionnés :</p>
                    <ul>
                        {selectedNamesDisplay.filter(name => name !== '').map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>

                {/* Boutons pour valider ou annuler la sélection */}
                <div className="flex justify-between mt-3 gap-5">
                    <BlueFullButton onClick={handleSubmit} size="small">Valider</BlueFullButton>
                    <OrangeFullButton onClick={() => onClose([])} size="small">Annuler</OrangeFullButton>
                </div>
            </section>
        </Box>
    );
};
