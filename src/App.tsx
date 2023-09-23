import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ConversationList } from "./components/ConversationList";
import { Conversation } from "./types/conversation-item";
import { ConversationContent1 } from "./components/ConversationContent";
import { Blank } from "./components/Blank";

const DUMMY_CONVERSATION: Conversation[] = [
  {
    id: "1",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "2",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "3",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "4",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "5",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "6",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "7",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "8",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "9",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "10",
    name: "Lorem Ipsum",
    lastMessage: "Lorem Ipsum dolor sit amet",
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
];

function App() {
  return (
    <div className="card h-screen w-screen relative">
      <Header />
      <ConversationList conversations={DUMMY_CONVERSATION} />
      <Blank />
      <Routes>
        <Route path="/1" element={<ConversationContent1 />} />
      </Routes>
    </div>
  );
}

export default App;
