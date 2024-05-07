import { EventDisciplineInterface } from "../Interface/EventDisciplineInterface";
import { EventInterface} from "../Interface/EventInterface";
import { MessageChatInterface } from "../Interface/MessageChatInterface";
import { faker } from "@faker-js/faker";

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