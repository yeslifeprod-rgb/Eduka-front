import { useEffect, useState } from "react";
import UserCard from "../../components/Card/UserCard";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import SearchBar from "../../components/SearchBar/SearchBar";
import { userInterface } from "../../services/interfaces/user";
import { getFakerUsersData } from "../../utils/Axios/axios";

export default function SearchByParentPage() {
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
      <NavTopLarge />
      <SearchBar handleSearch={searchUsers} />
      <section className="flex flex-col md:flex-row gap-8 justify-center">
        {searchQuery && searchResults.length === 0 && (
          <p className="text-gray-500  text-center py-5">
            Aucun utilisateur ne correspond à votre recherche.
          </p>
        )}
        <article className="flex flex-wrap justify-center m-auto max-w-5xl">
          {searchResults.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </article>
      </section>
      <NavBottom />
    </>
  );
}
