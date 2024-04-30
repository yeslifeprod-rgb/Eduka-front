import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useModal } from "../../services/Context/ModalContext";

interface NavTogglePropsInterface {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function NavToggle(props: NavTogglePropsInterface) {
  const { onTabChange, activeTab } = props;
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [hasSelectedCategories, setHasSelectedCategories] =
    useState<boolean>(false);
  const { openModal } = useModal();

  // Effet pour gérer le défilement de la fenêtre
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour vérifier les catégories sélectionnées lors du chargement initial
  useEffect(() => {
    const storedCategories = localStorage.getItem("selectedCategories");
    setHasSelectedCategories(
      !!storedCategories && JSON.parse(storedCategories).length > 0
    );
  }, []);

  // Effet pour vérifier les catégories sélectionnées lors de chaque changement de page
  useEffect(() => {
    const storedCategories = localStorage.getItem("selectedCategories");
    setHasSelectedCategories(
      !!storedCategories && JSON.parse(storedCategories).length > 0
    );
  }, [props.activeTab]);

  // Effet pour réinitialiser la couleur du filtre lors du changement d'URL
  useEffect(() => {
    setHasSelectedCategories(false);
  }, [location]); // Utilisation de history.location.pathname

  return (
    <nav
      className={`flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-8 border-gray-100 shadow-sm ${
        isFixed ? "z-50 fixed top-0 left-0 right-0" : ""
      }`}
    >
      {/* Section des onglets */}
      <section className="grid grid-cols-2 w-full text-center h-8 lg:flex gap-3">
        <a
          className={`nav-toggle-link mx-4 px-4 ${
            activeTab === "ForYou" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("ForYou")}
        >
          Pour vous
        </a>
        <a
          className={`nav-toggle-link mx-4 px-4 ${
            activeTab === "All" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("All")}
        >
          Tous
        </a>
      </section>

      {/* Section des boutons d'action */}
      <section className="hidden lg:flex gap-2 items-center">
        <IconButton aria-label="filter" size="large" onClick={openModal}>
          <FilterAltIcon
            fontSize="inherit"
            style={{ color: hasSelectedCategories ? "#0fa3b1" : "inherit" }}
          />
        </IconButton>
        <IconButton aria-label="filter" size="large">
          <ControlPointIcon fontSize="inherit" />
        </IconButton>
      </section>
    </nav>
  );
}
