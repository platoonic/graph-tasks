import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard";
import ListTitle from "./ListTitle";

const ListContainer = styled.div`
  border-radius: 5px;
  background-color: #14203d;
  padding: 20px;
  margin-right: 20px;
  margin-left: 20px;
  flex-grow: 1;
  flex-basis: 33.333333%;
`;

const DraggableItem = styled.div`
  margin-top: 20px;
`;

const TasksList = ({ id, title, tasks }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {/* List Title */}
          <ListTitle title={title}>{title}</ListTitle>
          {/* Draggable List Task items */}
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={String(task.id)}
              index={index}
            >
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
          ))}
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TasksList;
