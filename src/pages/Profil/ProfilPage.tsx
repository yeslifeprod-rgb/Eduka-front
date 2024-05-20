import { Tabs } from "flowbite-react";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import ParsonalDataProfile from "../../components/PersonalData/PersonalDataProfile"
import { useEffect, useState } from "react";

export default function ProfilPage() {

  const [avatar, setAvatar]= useState<string | undefined >(undefined);
  const [firstname, setFirstname]= useState<string>('');
  const [lastname, setLastname]= useState<string>('');

  useEffect(() => {
      const credentialsAsString = localStorage.getItem("currentUser");
      const credentials = credentialsAsString
        ? JSON.parse(credentialsAsString)
        : undefined;
  
        if (credentials) {
            setFirstname(credentials.first_name);
            setLastname(credentials.last_name);
            setAvatar(credentials.avatar);
      }
},[]);

  return (
    <>
      <NavTopLarge />
      <ParsonalDataProfile avatar={avatar} firstname={firstname} lastname={lastname}/>
      <Tabs />
      <NavBottom />
    </>
  );
}
