// interface pour les données du Faker
interface FakePost {

    title: string;
    date: string;
    time: string;
    image: string;
    description: string;
    isPresent: boolean;
    Donation: boolean;
    location: string;
}


interface FakeData {
    data: FakePost;
}

// Data du Faker
const FakePost: FakePost = {
    title: "Fête d'anniversaire de Himad",
    date: "Mardi 10 mars 2025",
    time: "11h00",
    image: "/public/anniversaire-himad.avif",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis sed purus sed congue. Duis pharetra eget ipsum quis dignissim. Nullam consequat sem eu massa dignissim sagittis. Vivamus vehicula augue sem, vel auctor mauris vulputate sed. Ut vel mauris a ipsum eleifend aliquet ornare eu augue. Donec ultrices justo nec arcu sodales, in eleifend odio pulvinar. Proin finibus ligula nec malesuada fermentum. Etiam pretium cursus cursus. Donec vitae metus eu ex aliquam pulvinar. Sed et nulla sit amet tortor cursus varius eu vel tortor. Mauris pellentesque ipsum vel faucibus elementum. Donec erat libero, facilisis in euismod ut, auctor non tortor. In consequat justo vitae nibh ultricies consectetur.",
    isPresent: true,
    Donation: true,
    location: "JUMEIRAH BEACH",

};


const FakeData: FakeData = {
    data: FakePost,
};

export { FakeData, FakePost };


// Dans le terminal pour simuler les requêtes HTTP POST et GET avec Axios pour récupérer les prénoms : json-server --watch src/pages/EventPrivate/db.json --port 3000
