import { useState } from "react";
import { ModalConfirmLogOut } from "../../components/Modals/ModalConfirmLogOut";
import { NavBarProfil } from "../../components/NavBar/NavBarProfil";
import NavBottom from "../../components/NavBar/NavBottom";
import NavToggleProfil from "../../components/NavBar/NavToggleProfil";
import PersonalDataProfile from "../../components/PersonalData/PersonalDataProfile";
import MyEventsPage from "../Event/MyEventsPage";
import MyParticipationEventsPage from "../Event/MyparticipationEventsPage";

export default function HomePageParent() {
  const [selectedTab, setSelectedTab] = useState<string>("my_events");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <NavBarProfil />
      <div className="pb-20 ">
        <PersonalDataProfile />
        <NavToggleProfil
          onTabChange={handleTabChange}
          activeTab={selectedTab}
        />
        {selectedTab === "my_events" ? (
          <MyEventsPage />
        ) : (
          <MyParticipationEventsPage />
        )}
      </div>

      <NavBottom />
      <ModalConfirmLogOut />
    </>
  );
}
