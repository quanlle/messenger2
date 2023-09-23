import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { atom, useAtom } from "jotai";

const curMesAtom = atom("");
const mesAtom = atom([
  "alo",
  "alo",
  "alo",
  "Kính đề nghị các Thầy/Cô cố vấn học tập rà soát những trường hợp sinh viên còn thiếu Chuẩn đầu ra ngoai ngu",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
  "alo",
]);

export const ConversationContent1 = () => {
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
      return "max-w-xs h-fit px-3 py-1 rounded-2xl bg-slate-200";
    } else {
      return "max-w-xs h-fit px-3 py-1 rounded-2xl bg-blue-600";
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
        <div
          className="absolute w-full top-14 bottom-14 sm:top-0 sm:bottom-14 overflow-y-auto"
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
        <div className="fixed bottom-0 flex flex-row items-center h-14 bg-white w-full sm:w-auto sm:left-80 sm:right-0">
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
      {void console.log("Re-render ConversationComponent")}
    </div>
  );
};
