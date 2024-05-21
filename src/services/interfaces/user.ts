export interface Child {
  first_name: string;
  last_name: string;
}

export interface userInterface {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  phone: string;
  address: string;
  createdAt: Date;
  children: Child[];
  email: string;
  password: string;
}
