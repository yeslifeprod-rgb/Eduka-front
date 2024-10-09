import { useEffect, useState } from "react";
import { ModalConfirmLogOut } from "../../components/Modals/ModalConfirmLogOut";
import { NavBarProfil } from "../../components/NavBar/NavBarProfil";
import NavBottom from "../../components/NavBar/NavBottom";
import NavToggleProfil from "../../components/NavBar/NavToggleProfil";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import ParsonalDataProfile from "../../components/PersonalData/PersonalDataProfile";
import MyEventsPage from "../Event/MyEventsPage";
import MyParticipationEventsPage from "../Event/MyparticipationEventsPage";

export default function HomePageParent() {
  const [selectedTab, setSelectedTab] = useState<string>("my_events");
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [registerAtDate, setRegisterAtDate] = useState("");

  useEffect(() => {
    const credentialsAsString = localStorage.getItem("currentUser");
    const credentials = credentialsAsString
      ? JSON.parse(credentialsAsString)
      : undefined;

    if (credentials) {
      setFirstname(credentials.first_name);
      setLastname(credentials.last_name);
      setAvatar(credentials.avatar);
      setRegisterAtDate(credentials.createdAt);
    }
  }, []);
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <NavTopLarge />
      <NavBarProfil />
      <div className="pb-20 ">
        <ParsonalDataProfile
          avatar={avatar}
          firstname={firstname}
          lastname={lastname}
          registerAtDate={registerAtDate}
        />
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
