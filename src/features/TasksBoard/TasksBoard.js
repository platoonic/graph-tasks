import { useState, useEffect } from "react";
import TaskCard from "../../shared/components/TaskCard";
import styled from "styled-components";

const BoardContainer = styled.div`
  padding: 50px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TasksBoard = () => {
  return (
    <BoardContainer>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </BoardContainer>
  );
};

export default TasksBoard;
