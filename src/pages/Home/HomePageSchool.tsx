import { NavLink } from "react-router-dom";
import {
  GreatBlueButton,
  GreatOrangeButton,
} from "../../components/Button/CustomButton";
import { useEffect, useState } from "react";
import { getSchoolNameData } from "../../utils/Axios/axios";

export const HomePageSchool = () => {
  const [SchoolName, setSchoolName] = useState<string>([]);
  useEffect(() => {
    const fetchReceivedMessages = async () => {
      try {
        const data = await getSchoolNameData();
        if (data) {
          setSchoolName(data.datas);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchReceivedMessages();
  }, []);
  
  return (
    <>
      <nav>
        <section className="flex justify-center mt-5 mb-4 z-50 h-12 lg:h-16">
          <img src="./public/logo.png" alt="eduka" />
        </section>
        <h3 className="flex justify-center">{`Établissement scolaire ${SchoolName}`}</h3>
      </nav>
      <div className="flex flex-col items-center justify-center mt-44 gap-10">
        <h2 className="text-xl font-semibold">Que souhaitez-vous faire ?</h2>
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
          <NavLink to="/school_create_user">
            <GreatBlueButton>Créer un profil</GreatBlueButton>
          </NavLink>

          <NavLink to="/search_by_school">
            <GreatOrangeButton>Modifier un profil</GreatOrangeButton>
          </NavLink>
        </div>
      </div>
    </>
  );
};
