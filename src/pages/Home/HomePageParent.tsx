import { useState } from "react";
import ModalCategoryIsPrivateEvent from "../../components/Modals/ModalCategoryIsPrivateEvent";
import ModalCategoryIsPublicEvent from "../../components/Modals/ModalCategoryIsPublicEvent";
import ModalTypeEvent from "../../components/Modals/ModalTypeEvent";
import NavBottom from "../../components/NavBar/NavBottom";
import NavToggle from "../../components/NavBar/NavToggle";
import NavTop from "../../components/NavBar/NavTop";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import EventsPage from "../Event/EventsPage";
import EventsUserPage from "../Event/EventsUserPage";

export default function HomePageParent() {
  const [selectedTab, setSelectedTab] = useState<string>("ForYou");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <NavTopLarge />
      <NavTop />
      <div className="pb-20 ">
        <NavToggle onTabChange={handleTabChange} activeTab={selectedTab} />
        {selectedTab === "ForYou" ? <EventsUserPage /> : <EventsPage />}
      </div>
      <NavBottom />
      <ModalTypeEvent />
      <ModalCategoryIsPrivateEvent />
      <ModalCategoryIsPublicEvent />
    </>
  );
}
