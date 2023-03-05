import React from "react";
import Task from "./Task";

const TaskContainer = ({ items }) => {
  return (
    <div className="px-6 py-4 w-full h-full min-h-[300px] duration-300 overflow-scroll bg-white shadow-sm dark:bg-dark">
      {items.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
