import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export const ModalLogOut = () => {
  console.log("modal du logOut");
  
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate("/");
  };

setTimeout(redirectToLoginPage, 4000);

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <section className="bg-white w-full max-w-md border-2 rounded-lg shadow-sm p-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-gray-900 font-medium h-16">
            Vous êtes déconnecté
          </h3>
          <div className="flex flex-col items-center justify-center">
            <CircleLoader color="#0FA3B1" />
            <p className="text-sm text-gray-500 mb-6">Redirection en cours...</p>
          </div>
        </div>
      </section>
    </Box>
  );
};