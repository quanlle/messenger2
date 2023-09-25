import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ConversationList } from "./components/ConversationList";
import { Conversation } from "./types/conversation-item";
import { ConversationContent1 } from "./components/ConversationContent1";
import { ConversationContent2 } from "./components/ConversationContent2";
import { conMes } from "./types/conversation-mess";
import { Blank } from "./components/Blank";

const DUMMY_CONVERSATION: Conversation[] = [
  {
    id: "1",
    name: "Lorem Ipsum 1",
    conversation: conMes[0].conversation,
    avatar: "./src/assets/img/image.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "2",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "3",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "4",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "5",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "6",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
  {
    id: "7",
    name: "Lorem Ipsum 2",
    conversation: conMes[1].conversation,
    avatar: "./src/assets/img/image2.jpg",
    timestamp: Date.now(),
    read: true,
  },
];

function App() {
  return (
    <div className="card h-screen w-screen relative">
      <ConversationList conversations={DUMMY_CONVERSATION} />
      <Blank />
      <Routes>
        <Route
          path="/1"
          element={<ConversationContent1 conversations={DUMMY_CONVERSATION} />}
        />
        <Route
          path="/2"
          element={<ConversationContent2 conversations={DUMMY_CONVERSATION} />}
        />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
