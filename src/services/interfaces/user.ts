export interface Child {
  name: string;
  birthday: string;
  class: string;
}

export interface userInterface {
  id: number;
  firstname: string;
  lastname: string;
  profil_picture: string;
  phone: string;
  created_at: Date;
  address: {address_line_1: string; city: string; zip_code: string};
  children: Child[];
  email?: string;
  role?: string;
}

export interface userCardInterface {
  id: number;
  firstname: string;
  lastname: string;
  profil_picture: string;
}
