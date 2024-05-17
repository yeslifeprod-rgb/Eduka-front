

export interface MessageInterface {
    id : string;
    content : string;
    user_id : string;
    message_type : string;
    created_at : Date;
    updated_at : Date;
    file? : File;
  }
