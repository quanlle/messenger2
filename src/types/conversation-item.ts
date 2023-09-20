export interface Conversation {
  id: string;
  avatar: string;
  name: string;
  lastMessage: string;
  timestamp: number;
  read: boolean;
}