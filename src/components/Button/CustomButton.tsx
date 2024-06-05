import Button from '@mui/material/Button';
import { styled } from '@mui/system';


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

// Bouton full orange
export const OrangeFullButton = styled(Button)`
  color: white;
  border: 2px solid #F7A072;
  border-radius: 10px;
  width: 300px; /* Taille par défaut pour les écrans de taille moyenne */
  height: 40px;
  background-color: #F7A072;

  &:hover {
    background-color: #F7A072;
    border-color: #F7A072;
  }

  @media (max-width: 640px) { /* sm breakpoint */
    width: 100%;
  }

  @media (min-width: 641px) and (max-width: 1024px) { /* md breakpoint */
    width: 384px;
  }
`;
//Bouton BlueFullButton
export const BlueFullButton = styled(Button)`
  color: white;
  border: 2px solid #0FA3B1;
  border-radius: 10px;
  width: 300px; /* Taille par défaut pour les écrans de taille moyenne */
  height: 40px;
  background-color: #0FA3B1;

  &:hover {
    background-color: #0FA3B1;
    border-color: #0FA3B1;
  }

  @media (max-width: 640px) { /* sm breakpoint */
    width: 100%;
  }

  @media (min-width: 641px) and (max-width: 1024px) { /* md breakpoint */
    width: 384px;
  }
`;


//Bouton bleu ajouter un enfant
export const ButtonAddChild = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: 'none',
  '& .MuiSvgIcon-root': {
    transition: 'color 0.3s',
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    '& .MuiSvgIcon-root': {
      color: 'white',
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
  textTransform: 'none',
  '& .MuiSvgIcon-root': {
    transition: 'color 0.3s',
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    '& .MuiSvgIcon-root': {
      color: 'white',
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
  textTransform: 'none',
  '& .MuiSvgIcon-root': {
    transition: 'color 0.3s',
  },
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
    '& .MuiSvgIcon-root': {
      color: 'white',
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
    '&:hover': {
      backgroundColor: "#0FA3B1",
    },
  }
}) as typeof Button;


