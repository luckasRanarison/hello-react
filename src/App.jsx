import React, { useContext } from "react";
import { Context } from "./components/ContextProvider";
import {
  Container,
  Inputbar,
  TaskContainer,
  ThemeButton,
  DetailsPopoup,
} from "./components";

const App = () => {
  const { taskList, openPopupId } = useContext(Context);

  return (
    <Container>
      <Inputbar />
      <TaskContainer items={taskList} />
      <ThemeButton />
      {openPopupId !== undefined ? (
        <DetailsPopoup task={taskList[openPopupId]} />
      ) : undefined}
    </Container>
  );
};

export default App;
