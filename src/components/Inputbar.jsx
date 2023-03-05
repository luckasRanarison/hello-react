import React, { useContext, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Context } from "./ContextProvider";

const Inputbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { createTask } = useContext(Context);

  const submitTask = () => {
    if (!inputValue) return;
    createTask(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <div className="pb-6 h-20 flex justify-between">
        <input
          type="text"
          placeholder="Enter your tasks here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") submitTask();
          }}
          className="mr-4 px-4 w-full text-dark bg-white shadow-sm dark:bg-light focus:outline-none"
        />

        <button
          className="pr-2 min-w-[128px] flex items-center justify-center text-white bg-dark transition ease-out duration-300 shadow-sm hover:text-white hover:bg-primary dark:bg-primary dark:hover:text-primary dark:hover:bg-white"
          onClick={submitTask}
        >
          <PlusIcon className="w-6" />
          <span className="font-bold">Add task</span>
        </button>
      </div>
    </div>
  );
};

export default Inputbar;
