import { Link } from "react-router-dom";

export const ConversationContent1 = () => {
  return (
    <div>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-white sm:right-0 sm:left-80 sm:top-14">
        {/* header */}
        <div className="fixed top-0 right-0 left-0 h-14 flex flex-row items-center border-b border-slate-300 sm:hidden">
          <Link to="/">
            <img
              src="./src/assets/img/back-ic.png"
              className="w-7 h-7 mx-1 hover:bg-slate-200 rounded-md"
            />
          </Link>
        </div>
        {/* Message content */}
        <div className="absolute w-full top-14 bottom-12 sm:top-0 sm:bottom-12 overflow-y-auto">
          <h1 className="m-2 mx-4">Conversation 1</h1>
        </div>
        {/* footer */}
        <div className="fixed bottom-0 flex flex-row items-center h-12 bg-white border-t border-slate-300 w-full sm:w-auto sm:left-80 sm:right-0">
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
            className="h-8 min-w-0 grow bg-slate-200 rounded-full px-3"
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
