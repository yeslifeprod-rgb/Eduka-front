import Button from "@mui/material/Button";
import { styled } from "@mui/system";

//Grand Bouton bleu
export const GreatBlueButton = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
  },
}) as typeof Button;

//Bouton bleu taille normale
export const BlueButton = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
  },
}) as typeof Button;

//Grand Bouton orange
export const GreatOrangeButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
  },
}) as typeof Button;

//Bouton orange taille normale
export const OrangeButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
  },
}) as typeof Button;

//Grand Bouton orange/bleu
export const GreatOrangeBleuButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderTopColor: "#F7A072",
  borderLeftColor: "#F7A072",
  borderBottomColor: "#00b4d8",
  borderRightColor: "#00b4d8",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    background: "linear-gradient(to bottom right, #F7A072 , #00b4d8 )",
    color: "white",
  },
}) as typeof Button;

//Bouton full orange
export const OrangeFullButton = styled(Button)({
  color: "white",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "384px",
  height: "40px",
  backgroundColor: "#F7A072",
  "&:hover": {
    backgroundColor: "#F7A072",
    borderColor: "#F7A072",
  },
}) as typeof Button;

//Bouton full bleu
export const BlueFullButton = styled(Button)({
  color: "white",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "384px",
  height: "40px",
  backgroundColor: "#0FA3B1",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    borderColor: "#0FA3B1",
  },
}) as typeof Button;

//Bouton bleu ajouter un enfant
export const ButtonAddChild = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;
export const ButtonAddChildOrange = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

//Bouton bleu ajouter une matière
export const ButtonAddDiscipline = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "190px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

export const ButtonAddTagsStyle = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "120px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

export const ButtonAddTagsOrangeStyle = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "5px",
  width: "120px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

//Bouton orange supprimer un enfant
export const ButtonDeleteChild = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

//Bouton Bleu selection d'une matière
export const BlueSelectedButton = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "120px",
  height: "50px",
  fontSize: "11px",
  "&.selected": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "&:hover": {
      backgroundColor: "#0FA3B1",
    },
  },
}) as typeof Button;

//@dev AK add an icon
export const OrangeFullButtonDeleteIcon = styled(Button)({
  color: "white",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "384px",
  height: "40px",
  backgroundColor: "#F7A072",
  '&:hover': {
    backgroundColor: "#F7A072", 
    borderColor: "#F7A072",
  },
}) as typeof Button;
