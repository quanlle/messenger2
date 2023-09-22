import { Link } from "react-router-dom";
import { Conversation } from "../types/conversation-item";

export interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = (props: ConversationListProps) => {
  return (
    <div className="absolute w-full bottom-0 top-14 sm:w-80 sm:border-r sm:border-slate-300 sm:bottom-0 overflow-y-auto">
      {props.conversations.map((convo) => (
        <div key={convo.id} className="hover:bg-gray-100 cursor-pointer p-2">
          <Link to={`/${convo.id}`}>
            <div className="flex flex-row justify-start items-center gap-3">
              <div>
                <img src={convo.avatar} className="w-14 h-14 rounded-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="font-bold text-lg">{convo.name}</div>
                <div className="text-md italic">{convo.lastMessage}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
