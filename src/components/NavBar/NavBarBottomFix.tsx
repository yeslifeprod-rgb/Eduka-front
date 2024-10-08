import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBarBottomFix = () => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  useEffect(() => {
    const credentialsAsString = localStorage.getItem("user");
    const credentials = credentialsAsString
      ? JSON.parse(credentialsAsString)
      : undefined;

    if (credentials && credentials.photo) {
      setAvatar(credentials.photo); // Utilise 'photo' à la place de 'avatar'
    }
  }, []);
  return (
    <nav className="fixed bottom-0 bg-white flex justify-between lg:justify-center lg:gap-40 w-full py-2 px-10 items-center border-t border-gray-100">
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
        <Avatar alt="profile_photo" src={avatar} className="nav-avatar" />
      </NavLink>
    </nav>
  );
};
