import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserCardSchool from "../../components/Card/UserCardSchool";
import SearchBar from "../../components/SearchBar/SearchBar";
import { userInterface } from "../../services/interfaces/user";
import { getFakerUsersData } from "../../utils/Axios/axios";

export default function SearchBySchoolPage() {
  const [usersData, setUsersData] = useState<userInterface[]>([]);
  const [searchResults, setSearchResults] =
    useState<userInterface[]>(usersData);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données des types d'événements via Axios
        const data = await getFakerUsersData();
        if (data) {
          setUsersData(data.datas);
        }
      } catch (error) {
        console.error("Error fetching type events:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSearchResults([...usersData]);
  }, [usersData]);

  const searchUsers = (query: string) => {
    const filteredUsers = usersData.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filteredUsers);
    setSearchQuery(query);
  };
  return (
    <>
      {" "}
      <div className=" fixed bg-white  top-0 w-full flex justify-between items-center py-5 px-4  z-10">
        <NavLink to="/home_page_school">
          <IconButton aria-label="delete" size="large">
            <CloseIcon />
          </IconButton>
        </NavLink>
        <h2 className="mr-16 text-2xl">Rechercher</h2>
        <div></div>
      </div>
      <div className="mt-20">
        <SearchBar handleSearch={searchUsers} />
        <section className="flex flex-col md:flex-row gap-8 justify-center">
          {searchQuery && searchResults.length === 0 && (
            <p className="text-gray-500  text-center py-5">
              Aucun utilisateur ne correspond à votre recherche.
            </p>
          )}
          <article className="flex flex-wrap justify-center m-auto max-w-5xl">
            {searchResults.map((user, index) => (
              <UserCardSchool key={index} user={user} />
            ))}
          </article>
        </section>
      </div>
    </>
  );
}
