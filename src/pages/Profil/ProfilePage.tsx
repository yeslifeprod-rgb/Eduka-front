import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import ParsonalDataProfile from "../../components/PersonalData/PersonalDataProfile";

export default function ProfilePage() {
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

  return (
    <>
      <NavTopLarge />
      <div className="bg-white w-full flex items-center justify-between py-5 px-4 ">
        <h2 className="text-2xl text-gray-900 mx-auto">Profil</h2>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4"></div>
      <ParsonalDataProfile
        avatar={avatar}
        firstname={firstname}
        lastname={lastname}
        registerAtDate={registerAtDate}
      />
      <Tabs />
      <NavBottom />
    </>
  );
}
