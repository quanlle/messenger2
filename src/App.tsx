// import { useState } from "react";
import "./App.css";
import { ConversationList } from "./components/ConversationList";
import { Conversation } from "./types/conversation-item";

const DUMMY_CONVERSATION: Conversation[] = [
  {
    id: "1",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "2",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "3",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "4",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
];

function App() {
  return (
    <>
      <div className="card">
        <ConversationList conversations={DUMMY_CONVERSATION} />
      </div>
    </>
  );
}

export default App;
