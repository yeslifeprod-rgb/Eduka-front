export interface TypeInterface {
  type: string;
}
export interface CategoryInterface extends TypeInterface {
  category: string;
}

export interface TagsInterface {
  tags: string[];
}
export interface CardEventInterface {
  firstname_profil: string;
  title: string;
  date: Date;
  description: string;
  image: string | null;
  photo_profil?: string;
  address: string;
  tags?: string[] | null;
}

export interface EventInterface
  extends TypeInterface,
    CategoryInterface,
    CardEventInterface {
  id: string;
  startDate?: Date;
  endDate?: Date;
  created_at: Date;
  maxParticipants?: number;
  jackpotLink?: string;
  jackpotLimitDate?: Date;
  choices?: string[] | null;
  childrenList?: string[] | null;
}
