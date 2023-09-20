import { Conversation } from "../types/conversation-item";

export interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = (props: ConversationListProps) => {
  return (
    <div className="flex flex-col">
      {props.conversations.map((convo) => (
        <div key={convo.id} className="hover:bg-gray-100 cursor-pointer p-2">
          <div className="flex flex-row justify-start items-center gap-3">
            <div>
              <img src={convo.avatar} className="w-14 h-14 rounded-full" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="font-bold text-lg">{convo.name}</div>
              <div className="text-md italic">{convo.lastMessage}</div>
              <div className="">{convo.timestamp}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
