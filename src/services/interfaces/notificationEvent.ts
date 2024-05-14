export interface notificationEventInterface {
  id: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  maxParticipants: number;
  choices: string[] | null;
  childrenList: string[] | null;
}
