import { format } from "date-fns";
import { useEffect, useState } from "react";
import CardEvent from "../../components/Card/EventCard";
import { NavBarProfil } from "../../components/NavBar/NavBarProfil";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import { ProfilInterface } from "../../services/interfaces/ProfilInterface";
import { UserInterface } from "../../services/interfaces/UserInterface";
import {
  CardEventInterface,
  FormattedEventCardInterface,
} from "../../services/interfaces/event";
import {
  getFakerUserByProfilEventsData,
  getFakerUserParticipationProfilEventsData,
  getProfilData,
  getUserData,
} from "../../utils/Axios/axios";

export const ProfilPage = () => {
  const [profil, setProfil] = useState<ProfilInterface | null>(null);
  const [user, setUser] = useState<UserInterface | null>(null);
  const [userByProfilEvents, setFakeUserByProfilEvents] = useState<
    CardEventInterface[]
  >([]);
  const [userParticipationProfilEvents, setFakerUserParticipationProfilEvents] =
    useState<CardEventInterface[]>([]);

  const defaultImageUrl =
    "https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg";
  const [selectedTab, setSelectedTab] = useState<string>("MyEvents");
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const data = await getProfilData();
        if (data) {
          const userProfil = data.datas.find(
            (profil: ProfilInterface) => profil.user_id === "5678azdq"
          );
          setProfil(userProfil || null);
        }
      } catch (error) {
        console.error("Error fetching profil:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const data = await getUserData();
        if (data) {
          const userData = data.datas.find(
            (user: UserInterface) => user.id === "5678azdq"
          );
          setUser(userData || null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    // Récupérer les événements lors du chargement initial de la page
    const fetchFakerUserByProfilEvents = async () => {
      try {
        const data = await getFakerUserByProfilEventsData();
        if (data) {
          setFakeUserByProfilEvents(data.datas); // Mise à jour de fakeEvents
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };
    const fetchFakerUserParticipationProfilEvents = async () => {
      try {
        const data = await getFakerUserParticipationProfilEventsData();
        if (data) {
          setFakerUserParticipationProfilEvents(data.datas); // Mise à jour de fakeEvents
        }
      } catch (error) {
        console.error("Error fetching fake events:", error);
      }
    };

    fetchProfil();
    fetchUser();
    fetchFakerUserByProfilEvents();
    fetchFakerUserParticipationProfilEvents();
  }, []);

  const handleMyEventsClick = () => {
    setSelectedTab("MyEvents");
    console.log("Je suis dans Mes événements");
  };

  const handleParticipationsClick = () => {
    setSelectedTab("Participations");
    console.log("Je suis dans Participations");
  };

  return (
    <>
      <NavTopLarge />
      <NavBarProfil />
      {profil && user && (
        <div className="flex bg-white flex-col items-center gap-5 justify-center pt-5 sm:pt-10 lg:pt-16">
          <img
            src={profil.photo ? profil.photo : defaultImageUrl}
            alt="Profil"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-medium">
              {profil.firstName} {profil.lastName.toUpperCase()}
            </h2>
            <p className="text-sm">
              Inscrit depuis le{" "}
              <i>{format(new Date(user.created_at), "dd/MM/yyyy")}</i>
            </p>
          </div>
        </div>
      )}
      <nav
        className={`flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-8 border-gray-100 shadow-sm ${
          isFixed ? "z-50 fixed top-0 left-0 right-0" : ""
        }`}
      >
        <section className="grid grid-cols-2 w-full text-center h-8 lg:flex">
          <a
            className={`nav-toggle-link mx-4 px-4 ${
              selectedTab === "MyEvents" ? "toggle_is_active" : ""
            }`}
            onClick={handleMyEventsClick}
          >
            Mes événements
          </a>
          <a
            className={`nav-toggle-link mx-4 px-4 ${
              selectedTab === "Participations" ? "toggle_is_active" : ""
            }`}
            onClick={handleParticipationsClick}
          >
            Participations
          </a>
        </section>
      </nav>
      {selectedTab === "MyEvents" && (
        <div className="flex justify-center mx-2">
          <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {userByProfilEvents.map((event, index) => (
              <CardEvent
                key={index}
                event={event as FormattedEventCardInterface}
              />
            ))}
          </section>
        </div>
      )}
      {selectedTab === "Participations" && (
        <div className="flex justify-center mx-2">
          <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {userParticipationProfilEvents.map((event, index) => (
              <CardEvent
                key={index}
                event={event as FormattedEventCardInterface}
              />
            ))}
          </section>
        </div>
      )}
      <NavBottom />
    </>
  );
};
