import TasksBoard from "./features/TasksBoard";
import styled from "styled-components";

const Page = styled.div`
  background-color: #213259;
  min-height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

function App() {
  return (
    <Page>
      <TasksBoard />
    </Page>
  );
}

export default App;
