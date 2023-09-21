import { Link } from "react-router-dom";

export const ConversationContent = () => {
  return <div className="bg-slate-600 grow">Conversaition-content</div>;
};

export const ConversationContent1 = () => {
  return (
    <div>
      <div className="h-screen">
        {/* header */}
        <div className="fixed top-0 right-0 left-0 h-14 flex flex-row items-center border-b border-slate-300">
          <Link to="/">
            <img
              src="./src/assets/img/back-ic.png"
              className="w-7 h-7 mx-1 hover:bg-slate-200 rounded-md"
            />
          </Link>
        </div>
        {/* Message content */}
        <div className="absolute w-full top-14 bottom-10">
          <h1 className="m-2">Conversation 1</h1>
        </div>
        {/* footer */}
        <div className="fixed bottom-0 flex flex-row items-center w-full h-12 bg-white border-t border-slate-300">
          <img
            src="./src/assets/img/plus-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md ml-3"
          />
          <img
            src="./src/assets/img/image-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md"
          />
          <img
            src="./src/assets/img/sticker-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md"
          />
          <img
            src="./src/assets/img/gif-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md mr-3"
          />
          <input
            placeholder="Aa"
            className="h-8 min1 grow bg-slate-200 rounded-full px-3"
          ></input>
          <img
            src="./src/assets/img/send-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md mx-2"
          />
        </div>
      </div>
    </div>
  );
};
