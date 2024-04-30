import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ButtonAddDiscipline } from './CustomButton';

export default function AddDisciplineButton() {
  return (
    <ButtonAddDiscipline
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#0FA3B1" }} />}
    >
      Ajouter une matière
    </ButtonAddDiscipline>
  );
}