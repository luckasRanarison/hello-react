import React, { useContext } from "react";
import {
  PencilIcon,
  TrashIcon,
  InformationCircleIcon as InfoIcon,
} from "@heroicons/react/20/solid";
import { Context } from "./ContextProvider";

const Separator = () => {
  return (
    <div className="border-b-[1px] border-light dark:border-[#6a707d]"></div>
  );
};

const Option = ({ value, handler, icon }) => {
  return (
    <div
      className={`px-4 py-3 flex justify-between items-center hover:text-white ${
        value === "Remove"
          ? "hover:bg-red"
          : "hover:bg-dark dark:hover:bg-primary"
      }`}
      onClick={handler}
    >
      <span>{value}</span>
      <span className="w-4 ml-2">{icon}</span>
    </div>
  );
};

const ListPopup = ({ taskId }) => {
  const { setEditTask, setOpenPopupId, deleteTask } = useContext(Context);

  return (
    <div className="fixed z-10">
      <div className="top-2 -right-6 absolute shadow-[0_0_5px_1px#e4e4e4] border-[1px] border-light animate-fade bg-white dark:border-[#6a707d] dark:bg-dark dark:shadow-[0_0_4px_1px#3b4252]">
        <Option
          value="Rename"
          icon={<PencilIcon />}
          handler={() => setEditTask(taskId)}
        />
        <Separator />
        <Option
          value="Details"
          icon={<InfoIcon />}
          handler={() => setOpenPopupId(taskId)}
        />
        <Separator />
        <Option
          value="Remove"
          icon={<TrashIcon />}
          handler={() => deleteTask(taskId)}
        />
      </div>
    </div>
  );
};

export default ListPopup;
