import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function NavTopLargeTeacher() {
  const location = useLocation();

  return (
    <div className="hidden lg:flex justify-between items-center py-5 px-4 border-b-2">
      <nav className="flex items-center w-full justify-between mt-2 mb-2">
        <img src="./public/logo.png" alt="eduka" className="ml-5 h-10" />
        <section className="flex items-center gap-10 mr-5 text-gray-600">
          <NavLink to="/home_page_teacher" className="nav-link flex items-center gap-2">
            <HomeIcon className={`nav-icon ${location.pathname === "/home_page_teacher" ? "text-custom-blue" : ""}`} sx={{ width: 32, height: 32 }} />
            <p className={`nav-icon ${location.pathname === "/home_page_teacher" ? "text-custom-blue" : ""}`}>Accueil</p>
          </NavLink>
          <NavLink to={"/addEventTeacher"} className="nav-link flex items-center gap-2"> 
            <ControlPointIcon className={`nav-icon ${location.pathname === "/addEventTeacher" ? "text-custom-blue" : ""}`} sx={{ width: 32, height: 32 }} />
            <p className={`nav-icon ${location.pathname === "/addEventTeacher" ? "text-custom-blue" : ""}`}>Créer un évènement</p>
          </NavLink>
          <NavLink to="/notification" className="nav-link flex items-center gap-2">
            <NotificationsIcon className={`nav-icon ${location.pathname === "/notification" ? "text-custom-blue" : ""}`} sx={{ width: 32, height: 32 }} />
            <p className={`nav-icon ${location.pathname === "/notification" ? "text-custom-blue" : ""}`}>Notifications</p>
          </NavLink>
          <div className="flex items-center">
            <NavLink to="/profil" className="nav-link-avatar">
              <Avatar
                alt="Cindy Baker"
                src="/public/profil.png"
                className="nav-avatar"
              />
            </NavLink>
          </div>
        </section>
      </nav>
    </div>
  );
}