// interface pour les données du Faker
interface FakePost {
    id: number;
    title: string;
    date: string;
    time: string;
    image: string;
    description: string;
    location: string;
    tags: string[];
    participants: number;
}

interface FakeData {
    data: FakePost;
}

// Data du Faker
const FakePost: FakePost = {
    id: 1,
    title: "Sortie à DisneyLand Paris",
    date: "Vendredi 13 juin 2025",
    time: "8h00",
    image: "/public/ParcDisney.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    location: "Disneyland Paris",
    tags: ["#Parc", "#Sortie", "#Fêtes"],
    participants: 3,
};

const FakeData: FakeData = {
    data: FakePost,
};

export { FakeData, FakePost };




