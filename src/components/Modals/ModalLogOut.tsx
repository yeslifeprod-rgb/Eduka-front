import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

interface ModalLogOutProps {
  open: boolean;
  onClose: () => void;
}

const ModalLogOut: React.FC<ModalLogOutProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
        navigate("/");
      }, 3000);

      // Cleanup the timer if the component is unmounted or open is changed
      return () => clearTimeout(timer);
    }
  }, [open, navigate, onClose]);

  if (!open) return null;

  return (
    <Box className="z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4 pt-12">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-gray-900 font-medium h-16">
            Vous êtes déconnecté
          </h3>
          <div className="flex flex-col items-center justify-center">
            <CircleLoader color="#0FA3B1" />
            <p className="text-sm text-gray-500 mb-6">
              Redirection en cours...
            </p>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default ModalLogOut;
