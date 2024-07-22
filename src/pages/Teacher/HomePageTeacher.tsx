import { useEffect, useState } from "react";
import { getFakeEventsData, getProfilData } from "../../utils/Axios/axios";
import { EventsInterface } from "../../services/interfaces/EventsInterface";
import { NavBarProfilTeacher } from "../../components/NavBar/NavBarProfilTeacher";
import { Avatar, Button, Card, IconButton } from "@mui/material";
import { ProfilInterface } from "../../services/interfaces/ProfilInterface";
import { formatDistanceToNow } from "date-fns";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { fr } from "date-fns/locale";
import NavBottomTeacher from "../../components/NavBar/NavBottomTeacher";
import NavTopLargeTeacher from "../../components/NavBar/NavTopLargeTeacher";

export const HomePageTeacher = () => {
  const [events, setEvents] = useState<EventsInterface[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("MyEvents");
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [profil, setProfil] = useState<ProfilInterface | null>(null);

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
          setProfil(userProfile as ProfilInterface);
        }
      } catch (error) {
        console.error("Error fetching profil:", error);
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

    fetchEvents();
    fetchProfil();
  }, []);

  const handleMyEventsClick = () => {
    setSelectedTab("MyEvents");
    console.log("Je suis dans Mes événements");
  };

  const handleParticipationsClick = () => {
    setSelectedTab("Participations");
    console.log("Je suis dans Participations");
  };

  const ongoingEvents = events?.filter((event) => event.status === "ongoing");
  const pendingEvents = events?.filter((event) => event.status === "pending");

  return (
    <>
      <NavBarProfilTeacher />
      <NavTopLargeTeacher />
      <nav
        className={`flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-8 border-gray-100 shadow-sm ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <section className="grid grid-cols-2 w-full text-center h-8">
          <a
            className={`nav-toggle-link mx-4 px-4 ${selectedTab === "MyEvents" ? "toggle_is_active" : ""}`}
            onClick={handleMyEventsClick}
          >
            En cours
          </a>
          <a
            className={`nav-toggle-link mx-4 px-4 ${selectedTab === "Participations" ? "toggle_is_active" : ""}`}
            onClick={handleParticipationsClick}
          >
            En attente
          </a>
        </section>
      </nav>
      {selectedTab === "MyEvents" && ongoingEvents && (
        <section className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {ongoingEvents.map((event, index) => (
            <div key={index} className="relative shadow-md m-2 p-2">
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
                    <Avatar alt="Profil" src={profil?.photo} sx={{ width: 24, height: 24 }} />
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
      {selectedTab === "Participations" && pendingEvents && (
        <section className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {pendingEvents.map((event, index) => (
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
                    <Avatar alt="Profil" src={profil?.photo} sx={{ width: 24, height: 24 }} />
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
      <NavBottomTeacher />
      
    </>
  );
};