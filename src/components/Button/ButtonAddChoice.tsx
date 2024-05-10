import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ButtonAddChoice } from "./Button";

export default function ButtonAddTags() {
  return (
    <ButtonAddChoice
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#0FA3B1" }} />}
    >
      Ajouter un choix
    </ButtonAddChoice>
  );
}
