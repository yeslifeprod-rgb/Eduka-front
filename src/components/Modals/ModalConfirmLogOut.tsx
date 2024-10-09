import { Box } from "@mui/material";
import { useState } from "react";
import { useModal } from "../../services/Context/ModalContext";
import { BlueButton, OrangeButton } from "../Button/CustomButton";
import ModalLogOut from "./ModalLogOut";

export const ModalConfirmLogOut = () => {
  const { isLogOutOpen, closeLogOut } = useModal();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleConfirmLogoutAndClose = () => {
    setShowLogoutModal(true);
  };

  const handleCloseModals = () => {
    setShowLogoutModal(false);
    closeLogOut();
  };

  return (
    <Box>
      {isLogOutOpen && (
        <>
          {/* Overlay */}
          <section className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm z-30"></section>

          {/* Modal content */}
          <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md border rounded-lg shadow-sm m-auto">
            <h3 className="text-gray-900 mx-auto text-center">
              Souhaitez-vous vous déconnecter ?
            </h3>
            <div className="grid grid-cols-1 justify-items-center gap-4 m-10">
              <BlueButton onClick={handleConfirmLogoutAndClose}>Oui</BlueButton>
              <OrangeButton onClick={closeLogOut}>Non</OrangeButton>
            </div>
          </section>

          {/* Modal for logout confirmation */}
          {showLogoutModal && (
            <ModalLogOut open={showLogoutModal} onClose={handleCloseModals} />
          )}
        </>
      )}
    </Box>
  );
};
