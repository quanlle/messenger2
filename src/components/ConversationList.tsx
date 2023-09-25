import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Conversation } from "../types/conversation-item";
import { BeforeList } from "./BeforeList";

export interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = (props: ConversationListProps) => {
  const location = useLocation().pathname;
  var locationId = Number(location.slice(1)) - 1;
  const [activeId, changeActiveId] = useState(locationId);

  useEffect(() => {
    if (location == "/") {
      changeActiveId(-1);
    }
  }, [location]);

  const handleClick = (index: number) => {
    changeActiveId(index);
    toggleActive(index);
  };

  const toggleActive = (index: number) => {
    if (activeId != index) {
      return "hover:bg-gray-100 cursor-pointer p-2";
    } else {
      return "hover:bg-gray-100 cursor-pointer p-2 sm:bg-slate-200";
    }
  };

  return (
    <div className="absolute w-full top-0 bottom-0 sm:top-14 sm:w-[360px] sm:border-r sm:border-slate-200 sm:bottom-0">
      <BeforeList />
      <div className="w-full bottom-0 overflow-y-auto absolute top-[150px] sm:border-t">
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
                    {convo.conversation[convo.conversation.length - 1]}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
