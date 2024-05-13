import { useEffect, useState } from "react";
import { NavBarProfil } from "../../components/NavBar/NavBarProfil";
import { getFakeEventsData, getProfilData, getUserData } from "../../utils/Axios/axios";
import { ProfilInterface } from "../../services/interfaces/ProfilInterface";
import { UserInterface } from "../../services/interfaces/UserInterface";
import { format, formatDistanceToNow } from "date-fns";
import { NavBarBottomFix } from "../../components/NavBar/NavBarBottomFix";
import { FakeEventsInterface } from "../../services/interfaces/EventsInterface";
import { Avatar, Button, Card, IconButton } from "@mui/material";
import { fr } from "date-fns/locale";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const ProfilPage = () => {
  const [profil, setProfil] = useState<ProfilInterface | null>(null);
  const [user, setUser] = useState<UserInterface | null>(null);
  const [events, setEvents] = useState<FakeEventsInterface[] | null>(null);
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
          const userProfile = data.datas.find((profile) => profile.user_id === "5678azdq");
          setProfil(userProfile);
        }
      } catch (error) {
        console.error("Error fetching profil:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const data = await getUserData();
        if (data) {
          const userData = data.datas.find((user) => user.id === "5678azdq");
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const data = await getFakeEventsData();
        if (data) {
          setEvents(data.datas);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchProfil();
    fetchUser();
    fetchEvents();
  }, []);

  const handleMyEventsClick = () => {
    setSelectedTab("MyEvents");
    console.log("Je suis dans Mes événements");
  };

  const handleParticipationsClick = () => {
    setSelectedTab("Participations");
    console.log("Je suis dans Participations");
  };

  const userEvents = events?.filter((event) => event.user_id === "7r8a1e4b9v");

  return (
    <>
      <NavBarProfil />
      {profil && user && (
        <div className="flex items-center gap-5 justify-center mt-5 sm:mt-10 lg:mt-16">
          <img src={profil.photo ? profil.photo : defaultImageUrl} alt="Profil" style={{
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
              <i>{format(new Date(user.created_At), "dd/MM/yyyy")}</i>
            </p>
          </div>
        </div>
      )}
      <nav
        className={`flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-8 border-gray-100 shadow-sm ${isFixed ? "z-50 fixed top-0 left-0 right-0" : ""
          }`}
      >
        <section className="grid grid-cols-2 w-full text-center h-8">
          <a
            className={`nav-toggle-link mx-4 px-4 ${selectedTab === "MyEvents" ? "toggle_is_active" : ""
              }`}
            onClick={handleMyEventsClick}
          >
            Mes événements
          </a>
          <a
            className={`nav-toggle-link mx-4 px-4 ${selectedTab === "Participations" ? "toggle_is_active" : ""
              }`}
            onClick={handleParticipationsClick}
          >
            Participations
          </a>
        </section>
      </nav>
      {selectedTab === "MyEvents" && userEvents && (
        <section className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {userEvents.map((event, index) => (
            <div key={index}  className="relative shadow-md m-2 p-2">
              <div className="flex gap-3 pb-2">
                <img
                  className="hidden lg:block w-32 h-32 object-cover rounded-lg shadow-md"
                  src={event.image}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 ">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center">
                  <IconButton aria-label="delete" size="small">
                    <Avatar
                      alt="Cindy Baker"
                      src={profil?.photo}
                      sx={{ width: 24, height: 24 }}
                    />
                  </IconButton>
                  <p>de {event.name}</p>
                </div>
                <p>{formatDistanceToNow(new Date(event.created_at), { locale: fr, addSuffix: true }).replace("environ", "")}</p>
                <div className="hidden lg:block">
                  <Button variant="contained" style={{ backgroundColor: "#0fa3b1", color: "#fff", fontSize: 12 }}>
                    Voir
                  </Button>
                </div>
              </div>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 lg:hidden">
                <IconButton aria-label="delete" size="small">
                  <ArrowForwardIosIcon fontSize="inherit" />
                </IconButton>
              </div>
            </div>
          ))}
        </section>
      )}
      {selectedTab === "Participations" && events && (
        <section className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {events.map((event, index) => (
            <Card key={index} variant="outlined" className="relative shadow-md m-2 p-2">
              <div className="flex gap-3 pb-2">
                <img
                  className="hidden lg:block w-32 h-32 object-cover rounded-lg shadow-md"
                  src={event.image}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 ">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center">
                  <IconButton aria-label="delete" size="small">
                    <Avatar
                      alt="Cindy Baker"
                      // comment faire pour les photos profil avec id unique ?
                      src={profil?.photo}
                      sx={{ width: 24, height: 24 }}
                    />
                  </IconButton>
                  <p>de {event.name}</p>
                </div>
                <p>{formatDistanceToNow(new Date(event.created_at), { locale: fr, addSuffix: true }).replace("environ", "")}</p>
                <div className="hidden lg:block">
                  <Button variant="contained" style={{ backgroundColor: "#0fa3b1", color: "#fff", fontSize: 12 }}>
                    Voir
                  </Button>
                </div>
              </div>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 lg:hidden">
                <IconButton aria-label="delete" size="small">
                  <ArrowForwardIosIcon fontSize="inherit" />
                </IconButton>
              </div>
            </Card>
          ))}
        </section>
      )}
      <NavBarBottomFix />
    </>
  );
};