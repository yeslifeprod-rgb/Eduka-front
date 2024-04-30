import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function MessageDetailPage() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <>
      {user ? (
        <>
          <div className=" bg-white w-full flex justify-start items-center py-5 px-4 ">
            <NavLink to="/search_by_parent">
              <IconButton aria-label="delete" size="large">
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </NavLink>
          </div>
          <div className="max-w-md flex flex-col justify-center mx-auto items-center gap-5 py-32">
            <div className="flex gap-3 items-center">
              <Avatar src={user.avatar} sx={{ width: 112, height: 112 }} />
              <section>
                <p>{`${user.first_name} ${user.last_name}`}</p>
                <p>
                  Inscrit depuis le{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </section>
            </div>
            <p>Téléphone: {` ${user.phone}`}</p>
            <p>Adresse : {` ${user.address}`}</p>
          </div>
        </>
      ) : (
        <div>Aucun profil sélectionné</div>
      )}
    </>
  );
}
