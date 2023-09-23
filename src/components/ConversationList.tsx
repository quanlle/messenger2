import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Conversation } from "../types/conversation-item";

export interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = (props: ConversationListProps) => {
  const location = useLocation().pathname;
  var locationId = Number(location.slice(1)) - 1;
  const [state, changeState] = useState(locationId);

  useEffect(() => {
    if (location == "/") {
      changeState(-1);
    }
  }, [location]);

  const handleClick = (index: number) => {
    changeState(index);
    toggleActive(index);
  };

  const toggleActive = (index: number) => {
    if (state != index) {
      return "hover:bg-gray-100 cursor-pointer p-2";
    } else {
      return "hover:bg-gray-100 cursor-pointer p-2 sm:bg-slate-200";
    }
  };

  return (
    <div className="absolute w-full bottom-0 top-14 sm:w-80 sm:border-r sm:border-slate-300 sm:bottom-0 overflow-y-auto">
      {props.conversations.map((convo, index) => (
        <div
          key={convo.id}
          className={toggleActive(index)}
          onClick={() => handleClick(index)}
        >
          <Link to={`/${convo.id}`}>
            <div className="flex flex-row justify-start items-center gap-3">
              <div>
                <img src={convo.avatar} className="w-14 h-14 rounded-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="font-bold text-lg">{convo.name}</div>
                <div className="text-md italic text-black/60">
                  {convo.lastMessage}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
