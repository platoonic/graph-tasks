import styled from "styled-components";
import PriorityIndicator from "./components/PriorityIndicator";
import Skeleton from "react-loading-skeleton";
import TextInput from "../TextInput";

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;

const TaskTitle = styled.h4`
  line-height: 1.4rem;
  font-size: 1.2rem;
`;

const TaskDescription = styled.p`
  color: black;
  padding-top: 5px;
  color: #696969;
`;

const DraftingTag = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #bf4141;
  font-size: 0.9rem;
  font-weight: bold;
`;

const TaskCard = ({ loading, title, description, priority, form, ...rest }) => {
  if (form) {
    return (
      <Container {...rest}>
        <TextInput
          placeholder="Task title goes here..."
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: 0,
            boxShadow: "none",
          }}
        />
        <TextInput
          placeholder="Task description goes here..."
          style={{ marginTop: 2, padding: 0, boxShadow: "none" }}
        />
        <DraftingTag>Preview</DraftingTag>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container {...rest}>
        <Skeleton width="50%" height={22} />
        <Skeleton style={{ marginTop: 5 }} width="70%" height={16} />
      </Container>
    );
  }
  return (
    <Container {...rest}>
      <PriorityIndicator priority={priority} />
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </Container>
  );
};

export default TaskCard;
