import styled from "styled-components";
import PriorityIndicator from "./PriorityIndicator";

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

const TaskCard = ({ title, description, priority, ...rest }) => {
  return (
    <Container {...rest}>
      <PriorityIndicator priority={priority} />
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </Container>
  );
};

export default TaskCard;
