import { faker, fakerFR } from "@faker-js/faker";
import { CardEventInterface } from "../../services/interfaces/event";
import eventOnChangeInterface from "../../services/interfaces/eventOnChange";
import { userInterface } from "../../services/interfaces/user";

export const eventDiscipline = [
  "Mathématiques",
  "Arts plastiques",
  "Français",
  "Anglais",
  "Physique",
  "Musique",
  "histoire",
  "Technologie",
  "Chimie",
  "Education-civique",
  "Philosophie",
  "Biologie",
];

const fakerEvents: CardEventInterface[] = [
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
];

export const fakerEventsData = {
  datas: fakerEvents,
};

const fakerUserEvents: CardEventInterface[] = [
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },

  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "children", true),
    photo_profil: faker.image.people(),
    address: fakerFR.location.city(),
    tags: ["anniversaire", "Cagnotte"],
  },
  {
    firstname_profil: faker.person.fullName(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraphs(),
    date: faker.date.future(),
    image: faker.image.imageUrl(300, 300, "sports", true),
    photo_profil: faker.image.avatarLegacy(),
    address: fakerFR.location.city(),
    tags: ["sortie", "pierre"],
  },
];

export const fakerUserEventsData = {
  datas: fakerUserEvents,
};

const fakerTypeEvents: string[] = ["Public", "Privé"];

export const fakerTypeEventsData = {
  datas: fakerTypeEvents,
};

const fakeEventTags: string[] = [
  "Cagnotte",
  "Sport",
  "Parc",
  "Sortie",
  "Fête",
  "Musique",
  "Association",
  "Cours",
  "Sondage",
  "Covoiturage",
  "Musée",
  "Devoir",
  "foot",
];
export const fakerEventTagsData = {
  datas: fakeEventTags,
};
const privateEventsFaker: string[] = [
  "Sortie loisirs",
  "Anniversaire",
  "Covoiturage",
  "Cours particuliers",
];
export const fakerEventsPrivateData = {
  datas: privateEventsFaker,
};
const publicEventsFaker: string[] = [
  "Sortie loisirs",
  "Cagnotte",
  "Covoiturage",
  "Cours particuliers",
  "Sondage",
];
export const fakerEventsPublicData = {
  datas: publicEventsFaker,
};

const fakerUsers: userInterface[] = [
  {
    id: 1,
    first_name: "Ania",
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: 'ania@eduka.fr',
    password: 'eduka2024'
  },
  {
    id: 2,
    first_name: 'Julien',
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: 'julien@eduka.fr',
    password: 'eduka2024'

  },
  {
    id: 3,
    first_name: 'Sylvain',
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
    email: 'sylvain@eduka.fr',
    password: 'eduka2024'
  },
  {
    id: 4,
    first_name: 'Ilyes',
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: 'ilyes@eduka.fr',
    password: 'eduka2024'
  },
  {
    id: 5,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 6,
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 7,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 8,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 9,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 10,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 11,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 12,
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 13,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  
  {
    id: 14,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 15,
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
      {
        first_name: fakerFR.name.firstName(),
        last_name: fakerFR.name.lastName(),
      },
    ],
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 16,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 17,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 18,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 19,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 20,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
  {
    id: 21,
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
    email: `${faker.internet.userName()}@${faker.internet.domainName()}`,
    password: 'eduka2024'
  },
];
export const fakerUsersData = {
  datas: fakerUsers,
};

const fakerOnChange: eventOnChangeInterface[] = [
  {
    firstname_parent: "Sophie",
    lastname_parent: "Martin",
    firstname_teacher: "David",
    lastname_teacher: "Johnson",
    title: "Réunion de parents-enseignants",
    description:
      "Discussion sur les progrès académiques des élèves et les activités à venir.",
    date: new Date("2024-04-28"),
    image: "lien_vers_image.jpg",
    address: "École primaire de Maple",
    isValidated: false,
    isParticipated: true,
    isCanceled: false,
    created_at: new Date("2024-04-01"),
    messageIsRead: false,
  },
  {
    firstname_parent: "Thomas",
    lastname_parent: "Garcia",
    firstname_teacher: "Emily",
    lastname_teacher: "White",
    title: "Atelier sur l'éducation numérique",
    description:
      "Démonstration des outils et des ressources numériques utilisés en classe.",
    date: new Date("2024-06-02"),
    image: "lien_vers_image.jpg",
    address: "École secondaire de Willow",
    isValidated: false,
    isParticipated: false,
    isCanceled: false,
    created_at: new Date(),
    messageIsRead: false,
  },
  {
    firstname_parent: "Jessica",
    lastname_parent: "Lopez",
    firstname_teacher: "Michael",
    lastname_teacher: "Davis",
    title: "Sortie éducative au musée",
    description:
      "Exploration des expositions sur l'histoire locale et les sciences.",
    date: new Date("2024-05-18"),
    image: "lien_vers_image.jpg",
    address: "Musée de la ville",
    isValidated: true,
    isParticipated: true,
    isCanceled: false,
    created_at: new Date(),
    messageIsRead: false,
  },
  {
    firstname_parent: "Alexandre",
    lastname_parent: "Dubois",
    firstname_teacher: "Sophie",
    lastname_teacher: "Clark",
    title: "Spectacle de talents des élèves",
    description: "Présentation des talents artistiques des élèves de l'école.",
    date: new Date("2024-06-15"),
    image: "lien_vers_image.jpg",
    address: "Gymnase de l'école élémentaire Oak",
    isValidated: false,
    isParticipated: false,
    isCanceled: false,
    created_at: new Date(),
    messageIsRead: false,
  },
  {
    firstname_parent: "Eva",
    lastname_parent: "Bernard",
    firstname_teacher: "Daniel",
    lastname_teacher: "Robinson",
    title: "Atelier sur la préparation aux examens",
    description:
      "Conseils pratiques pour aider les élèves à se préparer aux examens finaux.",
    date: new Date("2024-05-25"),
    image: "lien_vers_image.jpg",
    address: "Bibliothèque municipale",
    isValidated: false,
    isParticipated: false,
    isCanceled: false,
    created_at: new Date(),
    messageIsRead: false,
  },
];
export const fakerOnChangeData = {
  datas: fakerOnChange,
};
