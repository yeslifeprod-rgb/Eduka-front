import { useState } from "react";
import { useModal } from "../../services/Context/ModalContext";
import { FakePost } from "./Faker";
import { NavLink } from "react-router-dom";

interface NavToggleProps {

}

export default function NavToggle({ }: NavToggleProps) {
    const [activeTab, setActiveTab] = useState<string>("Information");
    useModal();

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-4 my-4 lg:my-0 mb-4 md:mt-4 font-sans">
            {/* Titre de l'événement */}
            <h1 className="text-xl font-bold mb-2 md:text-2xl md:mb-4 text-center">{FakePost.title}</h1>
            {/* Date et heure de l'événement */}
            <div className="text-gray-600 flex flex-col md:flex-row md:items-center justify-center">
                <div className="mb-2 md:mb-0 md:mr-4 text-center">
                    <h2 className="mb-2">{FakePost.date}</h2>
                    <h3 className="mb-2 sm:mb-0">{FakePost.time}</h3>
                </div>
            </div>
            {/* Liens de bascule pour les onglets Information et Participants */}
            <div className="mt-4 mb-4 flex flex-col sm:flex-row justify-center">
                <div className="flex">
                    {/* Onglet Information */}
                    <NavLink
                        to="/event_private_page/information"
                        className={`nav-toggle-link mx-2 px-4 py-2 ${activeTab === "Information" ? "toggle_is_active" : "text-gray-500"}`}
                        onClick={() => handleTabChange("Information")}
                    >
                        <span>Information</span>
                    </NavLink>
                    {/* Onglet Participants */}
                    <NavLink
                        to="/event_private_page/participants"
                        className={`nav-toggle-link mx-2 px-4 py-2 ${activeTab === "Participants" ? "toggle_is_active" : "text-gray-500"}`}
                        onClick={() => handleTabChange("Participants")}
                    >
                        <span>Participants</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
