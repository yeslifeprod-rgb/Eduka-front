import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavTopLarge() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="hidden lg:block">
      <div className="h-20" />
      <nav
        className={`fixed text-sm top-0 bg-white left-0 right-0 w-full flex justify-between items-center py-5 px-10 transition-transform duration-300 ${
          visible
            ? "transform translate-y-0 z-10"
            : "transform -translate-y-full z-0"
        }`}
      >
        <section className=" flex  h-10 ">
          <img src="./public/logo.png" alt="eduka" />
        </section>
        <section className="hidden  text-gray-600 lg:flex justify-end items-center gap-8">
          <NavLink to="/home" className="nav-link flex  items-center gap-2">
            <HomeIcon className="nav-icon" sx={{ width: 32, height: 32 }} />

            <p className="nav-icon">Accueil</p>
          </NavLink>

          <NavLink
            to="/notification"
            className="nav-link flex items-center gap-2"
          >
            <NotificationsIcon
              className="nav-icon"
              sx={{ width: 32, height: 32 }}
            />
            <p className="nav-icon">Notifications</p>
          </NavLink>
          <NavLink
            to="/search"
            className="nav-link nav-icon flex items-center gap-2"
          >
            <SearchIcon className="nav-icon" sx={{ width: 32, height: 32 }} />
            <p className="nav-icon">Rechercher</p>
          </NavLink>
          <NavLink to="/profil" className="nav-link-avatar">
            <Avatar
              alt="Cindy Baker"
              src="/public/profil.png"
              className="nav-avatar"
            />
          </NavLink>
        </section>
        {/* <section>
          <IconButton aria-label="delete" size="large">
            <FilterAltIcon fontSize="inherit" />
          </IconButton>
        </section> */}
      </nav>
    </div>
  );
}
