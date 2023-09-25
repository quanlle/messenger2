export interface Conversation {
  id: string;
  avatar: string;
  name: string;
  conversation: string[];
  timestamp: number;
  read: boolean;
}