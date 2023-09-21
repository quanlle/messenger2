// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ConversationList } from "./components/ConversationList";
import { Conversation } from "./types/conversation-item";
import { ConversationContent1 } from "./components/ConversationContent";

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
];

function App() {
  return (
    <div className="card relative min-w-max">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <ConversationList conversations={DUMMY_CONVERSATION} />
            </div>
          }
        ></Route>
        <Route path="/1" element={<ConversationContent1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// 1. Phân chia lại nơi lưu trữ component
// 2. Tách ConversationContent (của từng người) ra file nhỏ hơn
// 3. Nên hay không nên dùng chung footer và header của trang ConversationContent ?
