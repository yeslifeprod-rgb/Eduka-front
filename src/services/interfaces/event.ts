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
  name: string;
  title: string;
  date?: Date;
  description: string;
  image: string | null;
  avatar_name?: string;
  location: string;
  tags?: string[] | null;
}

export interface EventInterface
  extends TypeInterface,
    CategoryInterface,
    CardEventInterface {
  id: string;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  maxParticipants?: number;
  jackpotLink?: string;
  jackpotLimitDate?: Date;
  choices?: string[] | null;
  childrenList?: string[] | null;
}
