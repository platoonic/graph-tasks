import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskCard from "../../TaskCard";

const DraggableItem = styled.div`
  margin-top: 20px;
`;

const ListItems = ({ tasks }) => {
  return tasks.map((task, index) => (
    <Draggable key={task.id} draggableId={String(task.id)} index={index}>
      {(provided) => (
        <DraggableItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <TaskCard {...task} />
        </DraggableItem>
      )}
    </Draggable>
  ));
};

export default ListItems;
