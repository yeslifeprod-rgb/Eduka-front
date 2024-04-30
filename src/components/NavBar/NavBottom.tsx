import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavBottom() {
  return (
    <nav className="fixed bottom-0 bg-white flex justify-between w-full py-2 px-10 items-center border-t border-gray-100 lg:hidden">
      <NavLink to="/home_page_parent" className="nav-link">
        <IconButton aria-label="home" size="large">
          <HomeIcon className="nav-icon" sx={{ width: 32, height: 32 }} />
        </IconButton>
      </NavLink>
      <NavLink to="/notification" className="nav-link">
        <IconButton aria-label="notif" size="large">
          <NotificationsIcon
            className="nav-icon"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </NavLink>
      <NavLink to="/search_by_parent" className="nav-link ">
        <IconButton aria-label="search" size="large">
          <SearchIcon className="nav-icon" sx={{ width: 32, height: 32 }} />
        </IconButton>
      </NavLink>
      <NavLink to="/profil" className="nav-link-avatar">
        <Avatar
          alt="Cindy Baker"
          src="/public/profil.png"
          className="nav-avatar"
        />
      </NavLink>
    </nav>
  );
}
