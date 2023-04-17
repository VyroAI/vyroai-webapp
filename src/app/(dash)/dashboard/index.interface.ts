interface Chat {
  chat_id: number;
  title: string;
}

interface User {
  username: string;
  email: string;
  avatar_id: string;
  is_banned: boolean;
  is_email_confirmed: boolean;
  created_at: string;
}

export type { Chat, User };
