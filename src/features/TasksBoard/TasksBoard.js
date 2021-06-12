import { useReducer } from "react";
import TasksList from "../../shared/components/TasksList";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import tasksReducer from "./TasksReducer";

const BoardContainer = styled.div`
  padding: 50px;
  display: flex;
  flex: 1;
  justify-content: stretch;
`;

const TasksBoard = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, {
    status: "IDLE",
    todo: [
      {
        id: 1,
        index: 0,
        title: "As a User I should be able to login",
        description: "Implement login functionality..",
        priority: "LOW",
      },
      {
        id: 2,
        index: 1,
        title: "As a Manager I should be able to view Tasks",
        description: "",
        priority: "LOW",
      },
    ],
    inProgress: [
      {
        id: 3,
        index: 0,
        title: "As a Customer I should be able to view my cart",
        description: "Implement cart in both backend/frontend",
        priority: "LOW",
      },
    ],
    done: [
      {
        id: 4,
        index: 0,
        title: "As a Customer I should be able to remove items from my cart",
        description: "Implement items removal from cart",
        priority: "LOW",
      },
    ],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch({ type: "reorder", source, destination });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        <TasksList id="todo" title="TODO" tasks={tasks.todo} />
        <TasksList
          id="inProgress"
          title="IN PROGRESS"
          tasks={tasks.inProgress}
        />
        <TasksList id="done" title="DONE" tasks={tasks.done} />
      </BoardContainer>
    </DragDropContext>
  );
};

export default TasksBoard;
