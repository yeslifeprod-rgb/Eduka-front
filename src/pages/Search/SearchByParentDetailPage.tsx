import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchDetailProfiles } from "../../services/api/get_parents_profiles";
import { Child, userInterface } from "../../services/interfaces/user";
export default function MessageDetailPage() {
  const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis les paramètres d'URL
  const [user, setUser] = useState<userInterface | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        // Vérifier que l'ID n'est pas undefined
        try {
          // Récupérer les détails du profil utilisateur
          const data = await fetchDetailProfiles(id);
          console.log("🚀 ~ fetchData ~ data:", data);

          if (data) {
            setUser(data);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        console.warn("User ID is undefined");
      }
    };

    fetchData();
  }, [id]); // Dépendance sur id pour relancer la récupération des données si l'ID change

  return (
    <>
      {user ? (
        <>
          <div className="bg-white w-full flex justify-start items-center py-5 px-4">
            <NavLink to="/search_by_parent">
              <IconButton aria-label="delete" size="large">
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </NavLink>
          </div>
          <div className="max-w-md flex flex-col justify-center mx-auto items-center gap-5 py-32">
            <div className="flex gap-3 items-center">
              <Avatar
                src={user.profil_picture}
                sx={{ width: 112, height: 112 }}
              />
              <section>
                <p>{`${user.firstname} ${user.lastname}`}</p>
                <p>
                  Inscrit depuis le{" "}
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </section>
            </div>
            <p>
              Adresse :{" "}
              {` ${user.address.address_line_1}, ${user.address.city}, ${user.address.zip_code}`}
            </p>
            <p>Enfant(s) : </p>
            {user.children && user.children.length > 0 ? (
              user.children.map((child: Child, index: number) => (
                <div key={index}>
                  <p>{`${child.name} classe: ${child.class}`}</p>
                </div>
              ))
            ) : (
              <p>Aucun enfant trouvé</p> // Message si l'utilisateur n'a pas d'enfants
            )}
          </div>
        </>
      ) : (
        <div>Aucun profil sélectionné</div>
      )}
    </>
  );
}
