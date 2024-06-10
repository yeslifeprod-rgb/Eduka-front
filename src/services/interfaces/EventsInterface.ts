export interface EventsInterface {
    id: string;
    title: string;
    description: string;
    name: string;
    start_date: Date;
    end_date: Date;
    guest_limit: number;
    is_public: boolean;
    category: string[];
    image: string;
    address_id: string;
    user_id: string;
    status: string;
    update_at: Date;
    created_at: Date;
  }