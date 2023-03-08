import React, { useContext, useEffect, useState } from "react";
import { EllipsisHorizontalIcon as Dots } from "@heroicons/react/20/solid";
import ListPopup from "./ListPopup";
import { Context } from "./ContextProvider";

const Task = ({ id, content, completed }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [input, setInput] = useState(content);
  const {
    openListPopup,
    setOpenListPopup,
    renameTask,
    updateTask,
    editTask,
    setEditTask,
  } = useContext(Context);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setOpenListPopup(isPopupOpen ? null : id);
  };

  useEffect(() => {
    setIsPopupOpen(openListPopup === id);
  }, [openListPopup]);

  // Edit mode
  if (editTask === id) {
    return (
      <input
        type="text"
        className="my-1 px-2 w-full border-2 border-primary rounded-sm text-dark font-bold dark:border-none focus:outline-none"
        value={input}
        autoFocus
        onBlur={() => setEditTask(null)}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (!input) return;
            renameTask(id, input);
            setEditTask(null);
            setOpenListPopup(null);
          }
        }}
      />
    );
  }

  return (
    <div className="py-2 flex justify-between items-center text-dark dark:text-light">
      <span
        className="max-w-[90%] flex items-center font-semibold truncate cursor-default"
        title={content}
      >
        <input
          type="checkbox"
          className="styled-checkbox"
          onChange={(e) => updateTask(id, e.target.checked)}
        />
        <span className={completed ? "line-through decoration-2" : ""}>
          {content}
        </span>
      </span>
      <button>
        <Dots
          className={`w-6 duration-200 hover:scale-150 ${
            isPopupOpen && openListPopup === id && "scale-150"
          }`}
          onClick={togglePopup}
        />
        {isPopupOpen && openListPopup === id && <ListPopup taskId={id} />}
      </button>
    </div>
  );
};

export default Task;
