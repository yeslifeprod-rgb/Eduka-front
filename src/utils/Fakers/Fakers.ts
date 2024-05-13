
import { EventDisciplineInterface } from "../../services/interfaces/EventDisciplineInterface";
import { EventInterface} from "../../services/interfaces/EventInterface";
import { MessageChatInterface } from "../../services/interfaces/MessageChatInterface";
import { ProfilInterface } from "../../services/interfaces/ProfilInterface";
import { UserInterface } from "../../services/interfaces/UserInterface";
import { FakeEventsInterface } from "../../services/interfaces/EventsInterface";

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
      createdAt: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
  ];
  export const fakeEventData = {
    datas : FakeEvent
  }

  const FakeSchoolName:string = "Jean-Baptiste de la Salle";

  export const FakeSchoolNameData = {
    datas : FakeSchoolName
  }

  const FakeProfil: ProfilInterface[] = [
    {
    id: "16vq8849ze",
    lastName: "Van Damme",
    firstName: "Jean-Claude",
    photo: "/profil2.png",
    adresse_id: "12 allée parlà-bas",
    user_id: "5678azdq",
  },
  {
    id: "47zg6143ab",
    lastName: "Lopez",
    firstName: "Jennifer",
    photo: "/profil3.png",
    adresse_id: "34 rue du Soleil",
    user_id: "1234bfec",
  },
  {
    id: "29ht7651cd",
    lastName: "Smith",
    firstName: "Will",
    photo: "/profil4.png",
    adresse_id: "56 boulevard des Artistes",
    user_id: "9087pokl",
  }
]
  export const FakeProfilData = {
    datas : FakeProfil
  }
  
  const FakeUser: UserInterface[] =[
    {
      id: "5678azdq",
      email:"JCVD@gmail.com",
      password:"Azerty@31",
      status:true,
      created_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      updated_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "1234bfec",
      email: "JLopez@gmail.com",
      password: "Password@123",
      status: true,
      created_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      updated_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "9087pokl",
      email: "WillSmith@gmail.com",
      password: "HelloWorld45",
      status: true,
      created_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      updated_At: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    }
  ]

  export const FakeUserData = {
    datas : FakeUser
  }

  const FakeEvents: FakeEventsInterface[] = [
    {
      id: "13a215d4a8ez",
      title: "Fête d'anniversaire de Pierre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Jean-Claude",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 10,
      is_public: true,
      category: ["anniversaire", "pierre"],
      image: "/public/event1.jpeg",
      address_id: "61a8fd4a3s2d",
      user_id: "6a85z4d3a",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "2d8za3a8dz1s",
      title: "Sortie au parc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Stéphan",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 15,
      is_public: true,
      category: ["sortie", "parc"],
      image: "/public/event2.jpeg",
      address_id: "7d6f1a3x9c4m",
      user_id: "5b7m3k9l2n",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "1a9z2e3r8c6t",
      title: "Match de football",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Carinne",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 20,
      is_public: true,
      category: ["match", "football"],
      image: "/public/event1.jpeg",
      address_id: "4b6n1z8q2m3s",
      user_id: "68z1ca8ze",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "8z6d4a2s1a3q",
      title: "Fête d'anniversaire de Pierre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Jean-Claude",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 10,
      is_public: true,
      category: ["anniversaire", "pierre"],
      image: "/public/event1.jpeg",
      address_id: "61a8fd4a3s2d",
      user_id: "6a85z4d3a",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "2s3e8d4f5g6h",
      title: "Sortie au parc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Aya",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 15,
      is_public: true,
      category: ["sortie", "parc"],
      image: "/public/event2.jpeg",
      address_id: "7d6f1a3x9c4m",
      user_id: "5b7m3k9l2n",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "1w3s4x5r2d6f",
      title: "Match de football",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Ayumi",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 20,
      is_public: true,
      category: ["match", "football"],
      image: "/public/event1.jpeg",
      address_id: "4b6n1z8q2m3s",
      user_id: "24sz45fz5",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "8e6d4a2s1f3g",
      title: "Fête d'anniversaire de Pierre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Farid",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 10,
      is_public: true,
      category: ["anniversaire", "pierre"],
      image: "/public/event1.jpeg",
      address_id: "61a8fd4a3s2d",
      user_id: "6a85z4d3a",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "2w3e4r5t6y7u",
      title: "Sortie au parc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Antoine",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 15,
      is_public: true,
      category: ["sortie", "parc"],
      image: "/public/event2.jpeg",
      address_id: "7d6f1a3x9c4m",
      user_id: "5b7m3k9l2n",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "1q2w3e4r5t6y",
      title: "Match de football",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Clara",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 20,
      is_public: true,
      category: ["match", "football"],
      image: "/public/event1.jpeg",
      address_id: "4b6n1z8q2m3s",
      user_id: "695zqd1f8a5ze",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "8u7y6t5r4e3w",
      title: "Fête d'anniversaire de Pierre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Van Damme",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 10,
      is_public: true,
      category: ["anniversaire", "pierre"],
      image: "/public/event1.jpeg",
      address_id: "61a8fd4a3s2d",
      user_id: "7r8a1e4b9v",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "2a3s4d5f6g7h",
      title: "Sortie au parc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Van Damme",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 15,
      is_public: true,
      category: ["sortie", "parc"],
      image: "/public/event2.jpeg",
      address_id: "7d6f1a3x9c4m",
      user_id: "7r8a1e4b9v",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
    {
      id: "1a2z3e4r5t6y",
      title: "Match de football",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
      name: "Van Damme",
      start_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      end_date: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      guest_limit: 20,
      is_public: true,
      category: ["match", "football"],
      image: "/public/event1.jpeg",
      address_id: "4b6n1z8q2m3s",
      user_id: "7r8a1e4b9v",
      status: "en cours",
      update_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
      created_at: new Date(new Date().getTime() - Math.floor(Math.random() * 15 + 15) * 24 * 60 * 60 * 1000),
    },
  ];

  export const FakeEventsData = {
    datas : FakeEvents
  }