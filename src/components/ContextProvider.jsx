import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [openPopupId, setOpenPopupId] = useState();
  const [openListPopup, setOpenListPopup] = useState();
  const [editTask, setEditTask] = useState();

  const createTask = (task) => {
    const date = new Date().toLocaleString();
    const item = { id: taskList.length, date, content: task, completed: false };
    setTaskList([...taskList, item]);
  };

  const updateTask = (id, value) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.completed = value;
        }
        return task;
      })
    );
  };

  const renameTask = (id, value) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.content = value;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id != id));
  };

  const contextValue = {
    taskList,
    openPopupId,
    openListPopup,
    editTask,
    createTask,
    updateTask,
    renameTask,
    deleteTask,
    setOpenPopupId,
    setOpenListPopup,
    setEditTask,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
