export default interface eventOnChangeInterface {
  firstname_parent: string;
  lastname_parent: string;
  firstname_teacher: string;
  lastname_teacher: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  address: string;
  isValidated: boolean;
  isParticipated: boolean;
  isCanceled: boolean;
  created_at: Date;
  messageIsRead: boolean;
}
