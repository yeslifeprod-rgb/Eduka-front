import { Box } from "@mui/material";
import { BlueButton, OrangeButton } from "../Button/CustomButton";
import { useState } from "react";
import { ModalLogOut } from "./ModalLogOut";

export const ModalConfirmLogOut = ({ onClose }: { onClose: () => void }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleConfirmLogoutAndClose = () => {
    setShowLogoutModal(true);
  };

  const handleCloseModals = () => {
    setShowLogoutModal(false);
    onClose();
  };

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-sm bg-opacity-20 bg-black">
      <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-gray-900 font-medium mb-4">
            Souhaitez-vous vous déconnecter ?
          </h3>
          <div className="flex flex-col gap-6">
            <BlueButton onClick={handleConfirmLogoutAndClose}>Oui</BlueButton>
            <OrangeButton onClick={onClose}>Non</OrangeButton>
          </div>
        </div>
      </section>
      {showLogoutModal && (
        <ModalLogOut onClose={handleCloseModals} />
      )}
    </Box>
  );
};