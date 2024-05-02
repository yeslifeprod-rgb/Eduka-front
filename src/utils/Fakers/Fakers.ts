import { MessageChatInterface } from "../Interface/MessageChatInterface";
import { faker } from "@faker-js/faker";

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
  export const disciplineData = {
    datas : eventDiscipline
  }
  
  const receivedMessagesChat: MessageChatInterface[] = [
    {
      firstName: "Ania",
      message: "Bonjour",
      date: new Date(Date.now() - 15 * 60 * 1000) // il y a 15 minutes
    },
    {
      firstName: "Ilyes",
      message: "Salut",
      date: new Date(Date.now() - 7 * 60 * 1000) // il y a 7 minutes
    },
    {
      firstName: "Julien",
      message: "Comment ça va?",
      date: new Date(Date.now() - 1 * 60 * 1000) // il y a 1 minute
    },
    
  ];

  export const receivedMessagesChatData = {
    datas : receivedMessagesChat
  }


  export const FakeEvent = [
    {
      id: 1,
      title: "Sortie au parc",
      createdAt: faker.date.recent(),
    },
  ];
  export const fakeEventData = {
    datas : FakeEvent
  }