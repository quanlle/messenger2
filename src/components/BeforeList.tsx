export const BeforeList = () => {
  return (
    <div className="h-[150px] w-full fixed sm:absolute">
      <div className="h-14 flex flex-row items-center w-full">
        <h1 className="text-2xl font-bold ml-4">Chat</h1>
        <div className="flex flex-row justify-end grow">
          <img
            src="./src/assets/img/3dot-ic.png"
            className="w-8 h-8 bg-slate-200 hover:cursor-pointer rounded-full border-[9px] border-slate-200 hover:bg-slate-300 hover:border-slate-300"
          ></img>
          <img
            src="./src/assets/img/write-ic.png"
            className="w-8 h-8 bg-slate-200 hover:cursor-pointer rounded-full border-4 border-slate-200 hover:bg-slate-300 hover:border-slate-300 mx-2 mr-4"
          ></img>
        </div>
      </div>
      <div className="h-12 w-full flex items-center">
        <div className="h-9 w-full mx-4 rounded-full bg-slate-100 flex flex-row items-center">
          <img
            src="./src/assets/img/find-ic.png"
            className="w-4 h-4 ml-3 opacity-60"
          ></img>
          <input
            className="h-9 focus:outline-none bg-slate-100 ml-2 mr-5 grow"
            type="text"
            placeholder="Tìm kiếm trên Messenger"
          />
        </div>
      </div>
      <div className="mt-0.5 h-9 flex flex-row mx-4 items-center">
        <h1 className="hover:bg-slate-200 hover:cursor-pointer h-full rounded-full px-3 flex items-center font-semibold text-sm mr-2 bg-blue-50 text-blue-700">
          Hộp thư
        </h1>
        <h1 className="hover:bg-slate-200 hover:cursor-pointer h-full rounded-full px-3 flex items-center font-semibold text-sm">
          Cộng đồng
        </h1>
      </div>
    </div>
  );
};
