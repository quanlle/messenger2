import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ConversationList } from "./components/ConversationList";
import { Conversation } from "./types/conversation-item";
import { ConversationContent1 } from "./components/ConversationContent1";
import { ConversationContent2 } from "./components/ConversationContent2";
import { Blank } from "./components/Blank";
import { conMes } from "./types/conversation-mess";

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
];

function App() {
  return (
    <div className="card h-screen w-screen relative">
      <Header />
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
    </div>
  );
}

export default App;
