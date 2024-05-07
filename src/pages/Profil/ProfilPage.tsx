import { useEffect, useState } from "react"
import { NavBarProfil } from "../../components/NavBar/NavBarProfil"
import NavBottom from "../../components/NavBar/NavBottom"
import { getProfilData, getUserData } from "../../utils/Axios/axios";
import { ProfilInterface } from "../../utils/Interface/ProfilInterface";
import { UserInterface } from "../../utils/Interface/UserInterface";
import { format } from "date-fns";


export const ProfilPage = () => {
    const [profil, setProfil] = useState<ProfilInterface | null>(null);
    const [user, setUser] = useState<UserInterface | null>(null);
    const defaultImageUrl = "https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg"
    
    useEffect(() => {
      const fetchProfil = async () => {
        try {
          const data = await getProfilData();
          if (data) {
            setProfil(data.datas);
          }
        } catch (error) {
          console.error("Error fetching profil:", error);
        }
      };

      const fetchUser = async () => {
        try {
          const data = await getUserData();
          if (data) {
            setUser(data.datas);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
  
      fetchProfil();
      fetchUser(); 

    }, []);
  
    return (
      <>
        <NavBarProfil />
        {profil && user && (
          <div className="flex items-center gap-5 justify-center mt-5 sm:mt-10 lg:mt-16">
            <img src={profil.photo ? profil.photo : defaultImageUrl} alt="Profil" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <div className="flex flex-col">
            <h2 className="text-lg font-medium">{profil.firstName} {profil.lastName.toUpperCase()}</h2>
            <p className="text-sm">Inscrit depuis le <i>{format(new Date(user.created_At), "dd/MM/yyyy")}</i></p>
            </div>
          </div>
        )}
        <NavBottom />
      </>
    );
};