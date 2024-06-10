import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ButtonAddChild, ButtonAddChildOrange } from "./CustomButton";

export function AddChildButton() {
  return (
    <ButtonAddChild
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#0FA3B1" }} />}
    >
      Ajouter un enfant
    </ButtonAddChild>
  );
}
export function AddChildButtonOrange() {
  return (
    <ButtonAddChildOrange
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#F7A072" }} />}
    >
      Ajouter un enfant
    </ButtonAddChildOrange>
  );
}
