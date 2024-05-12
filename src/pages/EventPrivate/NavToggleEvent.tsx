import { SetStateAction, useEffect, useState } from "react";
import { useModal } from "../../services/Context/ModalContext";
import { FakePost } from "./Faker";

export default function NavToggle() {
    const [activeTab, setActiveTab] = useState("Information");
    const [, setHasSelectedCategories] = useState(false);
    useModal();

    // Effet pour réinitialiser la couleur du filtre lors du changement d'URL
    useEffect(() => {
        setHasSelectedCategories(false);
    }, [location]); // Utilisation de history.location.pathname

    const handleTabChange = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full lg:w-auto flex flex-col items-center justify-center mx-4 my-4 lg:my-0 mb-4 md:mt-4 font-sans">
            <h1 className="text-xl font-bold mb-2 md:text-2xl md:mb-4 text-center">{FakePost.title}</h1>
            <div className="text-gray-600 flex flex-col md:flex-row md:items-center justify-center">
                <div className="mb-2 md:mb-0 md:mr-4 text-center">
                    <h2 className="mb-2">{FakePost.date}</h2>
                    <h3 className="mb-2 sm:mb-0">{FakePost.time}</h3>
                </div>
            </div>
            <div className="mt-4 mb-4 flex flex-col sm:flex-row justify-center">
                <div className="flex">
                    <a
                        className={`nav-toggle-link mx-2 px-4 py-2 relative ${activeTab === "Information" ? "text-blue-500" : "text-gray-500"}`}
                        onClick={() => handleTabChange("Information")}
                    >
                        <span>Information</span>
                        {activeTab === "Information" && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>}
                    </a>
                    <a
                        href="/information"    /*LINK LA PAGE PARTICIPANTS ICI */
                        className="nav-toggle-link mx-2 px-4 py-2 text-gray-500"
                    >
                        Participants
                    </a>
                </div>
            </div>
        </div>
    );
}
