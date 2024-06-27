export interface FormChildInterface {
  firstName: string;
  name: string;
  birthday: string;
  class: string;
}

export interface FormUserFLEInterface {
  firstName: string;
  lastName: string;
  email: string;
}

const fakeData = {
  parents: {
    firstName: "Véronique",
    lastName: "Dupont",
    email: "Veronique.dupont@gmail.com",
  },
  children: [
    {
      firstName: "Sarah",
      name: "Dupont",
      birthday: "2010-01-01",
      class: "CM1",
    },
    {
      firstName: "Paul",
      name: "Dupont",
      birthday: "2012-05-01",
      class: "CE2",
    },
  ],
  selectedSubjects: ["Maths", "Anglais"],
};

export default fakeData;
