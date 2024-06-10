import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalConfirmLogOut } from "../Modals/ModalConfirmLogOut";

export const NavBarProfil = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClickModalLogOut = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" flex justify-between items-center py-5 px-4 border-b-2 ">
      <IconButton
        aria-label="delete"
        size="large"
        onClick={handleClickModalLogOut}
      >
        <LogoutOutlinedIcon
          style={{
            color: "#5f6369",
            fontSize: "2rem",
            transform: "rotate(180deg)",
          }}
        />
      </IconButton>
      <h2 className="text-2xl">Profil</h2>
      <NavLink className="mr-3 sm:mr-5 lg:mr-10" to={"/edit_my_profil"}>
        <SettingsOutlinedIcon
          style={{ color: "#5f6369", fontSize: "2.5rem" }}
        />
      </NavLink>
      {isModalOpen && <ModalConfirmLogOut onClose={handleCloseModal} />}
    </div>
  );
};
