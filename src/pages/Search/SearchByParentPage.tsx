import { faker, fakerFR } from "@faker-js/faker";
import { useState } from "react";
import UserCard from "../../components/Card/UserCard";
import NavBottom from "../../components/NavBar/NavBottom";
import NavTopLarge from "../../components/NavBar/NavTopLarge";
import SearchBar from "../../components/SearchBar/SearchBar";
import { userInterface } from "../../services/interfaces/user";
const users: userInterface[] = [
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
  {
    id: 1,
    first_name: fakerFR.name.firstName(),
    last_name: fakerFR.name.lastName(),
    avatar: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    phone: fakerFR.phone.number(),
    createdAt: faker.date.past(),
    children: [
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
  },
];

export default function SearchByParentPage() {
  const [searchResults, setSearchResults] = useState<userInterface[]>(users);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchUsers = (query: string) => {
    const filteredUsers = users.filter((user) => {
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
