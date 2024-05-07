import eventInterface from "../../services/interfaces/event";
import { EventDisciplineInterface } from "../Interface/EventDisciplineInterface";
import { EventInterface} from "../Interface/EventInterface";
import { MessageChatInterface } from "../Interface/MessageChatInterface";
import { faker } from "@faker-js/faker";
import { ProfilInterface } from "../Interface/ProfilInterface";
import { UserInterface } from "../Interface/UserInterface";

export const FakeEventDiscipline: EventDisciplineInterface[] = [
  { name: "Mathématiques" },
  { name: "Arts plastiques" },
  { name: "Français" },
  { name: "Anglais" },
  { name: "Physique" },
  { name: "Musique" },
  { name: "Histoire" },
  { name: "Technologie" },
  { name: "Chimie" },
  { name: "Education civique" },
  { name: "Philosophie" },
  { name: "Biologie" },
];

export const FakedisciplineData = {
  datas: FakeEventDiscipline,
};
  
  const receivedMessagesChat: MessageChatInterface[] = [
    {
      firstName: "Ania",
      message: "Bonjour",
      createdAt: new Date(Date.now() - 15 * 60 * 1000) // il y a 15 minutes
    },
    {
      firstName: "Ilyes",
      message: "Salut",
      createdAt: new Date(Date.now() - 7 * 60 * 1000) // il y a 7 minutes
    },
    {
      firstName: "Julien",
      message: "Comment ça va?",
      createdAt: new Date(Date.now() - 1 * 60 * 1000) // il y a 1 minute
    },
    
  ];

  export const receivedMessagesChatData = {
    datas : receivedMessagesChat
  }

  const FakeEvent:EventInterface[] = [
    {
      id: 1,
      title: "Sortie au parc",
      createdAt: faker.date.recent(),
    },
  ];
  export const fakeEventData = {
    datas : FakeEvent
  }

  const FakeSchoolName:string = "Jean-Baptiste de la Salle";

  export const FakeSchoolNameData = {
    datas : FakeSchoolName
  }

  const FakeProfil: ProfilInterface = {
    id: 12345,
    lastName: "Van Damme",
    firstName: "Jean-Claude",
    photo: "",
    adresse_id: "12 allée parlà-bas",
    user_id: 6789,
  };

  export const FakeProfilData = {
    datas : FakeProfil
  }
  
  const FakeUser: UserInterface ={
      id: 6789,
      email:"JCVD@gmail.com",
      password:"Azerty@31",
      status:true,
      created_At: faker.date.recent(),
      updated_dAt: faker.date.recent(),
    }

  export const FakeUserData = {
    datas : FakeUser
  }

  