import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import FormAddEventPrivate from "../../components/Form/FormAddEventPrivate";
import FormAddEventPublic from "../../components/Form/FormAddEventPublic";
import { CategoryInterface } from "../../services/interfaces/event";

export const AddEventPage = () => {
  const storedDataString: string | null =
    localStorage.getItem("storedDataEvent");
  const storedDataEvent: CategoryInterface | null = storedDataString
    ? JSON.parse(storedDataString)
    : null;

  return (
    <>
      <div className=" fixed bg-white  top-0 w-full flex justify-between items-center py-5 px-4 border-b-2 z-10">
        <NavLink to="/home_page_parent">
          <IconButton aria-label="delete" size="large">
            <CloseIcon />
          </IconButton>
        </NavLink>
        <h2 className="mr-16 text-2xl">{storedDataEvent?.category}</h2>
        <div></div>
      </div>
      <div className="mt-32 grid grid-col items-center justify-center">
        {storedDataEvent?.is_public === true ? (
          <FormAddEventPublic onSubmit={() => {}} />
        ) : (
          <FormAddEventPrivate onSubmit={() => {}} />
        )}
      </div>
    </>
  );
};
