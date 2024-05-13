import { useState } from "react";
import { FakePost } from "./Faker";

export default function NavToggle() {
    const [activeTab, setActiveTab] = useState("Information");

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-4 my-4 lg:my-0 mb-4 md:mt-4 font-inter sm:text-center sm:mx-auto">
            <h1 className="text-xl font-bold mb-2 md:text-2xl md:mb-4">{FakePost.title}</h1>
            <div className="text-gray-600 flex flex-col md:flex-row md:items-center justify-center">
                <div className="mb-2 md:mb-0 md:mr-4 text-center">
                    <h2 className="mb-2">{FakePost.date}</h2>
                    <h3 className="mb-2 sm:mb-0">{FakePost.time}</h3>
                </div>
            </div>
            <div className="mt-4 mb-4 flex flex-col sm:flex-row justify-center">
                <div className="flex">
                    <a
                        className={`nav-toggle-link mx-2 px-4 py-2 ${activeTab === "Information" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
                        onClick={() => handleTabChange("Information")}
                    >
                        Information
                    </a>
                    <a
                        href="/participants"
                        className={`nav-toggle-link mx-2 px-4 py-2 ${activeTab === "Participants" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
                        onClick={() => handleTabChange("Participants")}
                    >
                        Participants
                    </a>
                </div>
            </div>
        </div>
    );
}
