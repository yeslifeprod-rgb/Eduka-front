import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ButtonAddTagsOrangeStyle, ButtonAddTagsStyle } from "./CustomButton";

export function ButtonAddTags() {
  return (
    <ButtonAddTagsStyle
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#0FA3B1" }} />}
    >
      Mot-clés
    </ButtonAddTagsStyle>
  );
}

export function ButtonAddTagsOrange() {
  return (
    <ButtonAddTagsOrangeStyle
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#F7A072" }} />}
    >
      Mot-clés
    </ButtonAddTagsOrangeStyle>
  );
}
