export interface userInterface {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  phone: string;
  address: string;
  createdAt : Date;
  children: [
    {
      first_name: string;
      last_name: string;
    }
  ];
}
