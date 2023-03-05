import React, { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { Context } from "./ContextProvider";

const DetailsPopoup = ({ task }) => {
  const { setOpenPopupId } = useContext(Context);

  return (
    <div className="z-20 absolute inset-0 w-screen h-screen flex items-center justify-center bg-dark opacity-95">
      <div className="py-2 px-4 max-w-[360px] w-5/6 h-56 relative text-dark bg-light overflow-y-scroll">
        <button
          className="w-8 absolute top-1 right-1 text-red"
          onClick={() => setOpenPopupId()}
          children={<XCircleIcon />}
        ></button>
        <p>Added on {task.date}</p>
        <p>Description: {task.content}</p>
        <p>Status: {task.completed ? "Done" : "Unfinished"}</p>
      </div>
    </div>
  );
};

export default DetailsPopoup;
