import TasksBoard from "./features/TasksBoard";
import styled from "styled-components";

const Page = styled.div`
  background-color: #213259;
  min-height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const AppTitle = styled.h1`
  padding-top: 15px;
  color: rgb(230, 49, 172);
`;
const AppDescription = styled.h3`
  padding-top: 10px;
  color: white;
`;

const Header = styled.header`
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Page>
      <Header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
          alt="GraphQL"
          width="150"
          height="150"
        />
        <AppTitle>Graph Tasks</AppTitle>
        <AppDescription>
          Drag&Drop Todo List based on ReactJS/GraphQL/Express
        </AppDescription>
      </Header>
      <TasksBoard />
    </Page>
  );
}

export default App;
