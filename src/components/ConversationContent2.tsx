import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { conMes } from "../types/conversation-mess";
import { ConversationListProps } from "./ConversationList";

const curMesAtom = atom("");
const mesAtom = atom(conMes[1].conversation);

export const ConversationContent2 = (props: ConversationListProps) => {
  const [curMes, setCurMes] = useAtom(curMesAtom);
  const [mes, setMes] = useAtom(mesAtom);

  const handleAddMes = () => {
    setMes([...mes, curMes]);
    setCurMes("");
  };

  const flipMes = (index: number) => {
    if (index % 2 == 0) {
      return "w-full h-fit mb-2 flex flex-row justify-start";
    } else {
      return "w-full h-fit mb-2 flex flex-row text-white justify-end";
    }
  };

  const flipMesBg = (index: number) => {
    if (index % 2 == 0) {
      return "max-w-xs h-fit px-3 py-1 pb-1.5 rounded-3xl bg-slate-200";
    } else {
      return "max-w-xs h-fit px-3 py-1 pb-1.5 rounded-3xl bg-blue-600";
    }
  };

  useEffect(() => {
    if (mes.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [mes.length]);

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-white sm:right-0 sm:left-[360px] sm:top-14">
        {/* header */}
        <div className="fixed top-0 right-0 left-0 h-16 border-b flex flex-row items-center sm:left-[360px] sm:top-14 shadow-md shadow-slate-100">
          <Link to="/">
            <img
              src="./src/assets/img/back-ic.png"
              className="w-7 h-7 ml-4 hover:bg-slate-200 rounded-md sm:hidden"
            />
          </Link>
          <div className="flex flex-row grow items-center">
            <img
              src={props.conversations[1].avatar}
              className="w-10 h-10 ml-4 rounded-full"
            ></img>
            <div className="ml-2 flex flex-col">
              <div className="text-base font-bold">
                {props.conversations[1].name}
              </div>
              <div className="text-xs opacity-50">
                {props.conversations[1].timestamp}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mr-4">
            <img src="./src/assets/img/call-ic.png" className="w-5 h-5 mx-2" />
            <img
              src="./src/assets/img/vidcall-ic.png"
              className="w-5 h-5 mx-2"
            />
            <img src="./src/assets/img/info-ic.png" className="w-5 h-5 mx-2" />
          </div>
        </div>
        {/* Message content */}
        <div
          className="absolute w-full top-16 bottom-14 sm:top-16 sm:bottom-14 overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="absolute top-2 bottom-2 left-2 right-2 h-fit">
            {mes.map((mes, index) => {
              return (
                <div key={index} className={flipMes(index)}>
                  <h1 className={flipMesBg(index)}>{mes}</h1>
                </div>
              );
            })}
            <div ref={ref}></div>
          </div>
        </div>
        {/* footer */}
        <div className="fixed bottom-0 flex flex-row items-center h-14 bg-white w-full sm:w-auto sm:left-[360px] sm:right-0">
          <img
            src="./src/assets/img/plus-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md cursor-pointer ml-3"
          />
          <img
            src="./src/assets/img/image-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md cursor-pointer"
          />
          <img
            src="./src/assets/img/sticker-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md cursor-pointer"
          />
          <img
            src="./src/assets/img/gif-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md cursor-pointer mr-3"
          />
          <input
            ref={inputRef}
            autoFocus
            spellCheck="false"
            autoComplete="off"
            id="input"
            type="text"
            value={curMes}
            placeholder="Aa"
            className="h-9 min-w-0 grow bg-slate-200 rounded-full px-3 focus:outline-none"
            onChange={(e) => setCurMes(e.target.value)}
            onKeyDown={(e) => (e.key == "Enter" ? handleAddMes() : null)}
          ></input>
          <img
            src="./src/assets/img/send-ic.png"
            className="w-7 h-7 p-1 hover:bg-slate-200 rounded-md cursor-pointer mx-2"
            onClick={handleAddMes}
          />
        </div>
      </div>
      {/* {void console.log("Re-render ConversationComponent")} */}
    </div>
  );
};
