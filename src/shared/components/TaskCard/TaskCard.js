import styled from "styled-components";
import PriorityIndicator from "./PriorityIndicator";
import Skeleton from "react-loading-skeleton";

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

const TaskCard = ({ loading, title, description, priority, ...rest }) => {
  return (
    <Container {...rest}>
      {!loading && <PriorityIndicator priority={priority} />}
      {!loading ? (
        <TaskTitle>{title}</TaskTitle>
      ) : (
        <Skeleton width="50%" height={25} />
      )}
      {!loading ? (
        <TaskDescription>{description}</TaskDescription>
      ) : (
        <Skeleton style={{ marginTop: 5 }} width="70%" />
      )}
    </Container>
  );
};

export default TaskCard;
