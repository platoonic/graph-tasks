import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard";
import ListTitle from "./components/ListTitle";
import ListItems from "./components/ListItems";
import ListItemsLoading from "./components/ListItemsLoading";

const ListContainer = styled.div`
  border-radius: 5px;
  background-color: #14203d;
  padding: 20px;
  margin-right: 20px;
  margin-left: 20px;
  flex-grow: 1;
  flex-basis: 33.333333%;
`;

const TasksList = ({ id, title, tasks, canAddTasks, onTaskAdded, status }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  return (
    // Droppable Area
    <Droppable droppableId={id}>
      {(provided) => (
        <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {/* List Title */}
          {canAddTasks ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ListTitle title={title}>{title}</ListTitle>
              {status !== "LOADING" &&
                (!showTaskForm ? (
                  <Button
                    outline
                    onClick={() =>
                      setShowTaskForm((showTaskForm) => !showTaskForm)
                    }
                  >
                    ADD TASK
                  </Button>
                ) : (
                  <>
                    <Button
                      danger
                      onClick={() =>
                        setShowTaskForm((showTaskForm) => !showTaskForm)
                      }
                      style={{ marginRight: 10 }}
                    >
                      CANCEL
                    </Button>
                    <Button
                      success
                      onClick={() =>
                        setShowTaskForm((showTaskForm) => !showTaskForm)
                      }
                    >
                      SAVE
                    </Button>
                  </>
                ))}
            </div>
          ) : (
            <ListTitle title={title}>{title}</ListTitle>
          )}
          {/* Task Form */}
          {showTaskForm && <TaskCard form style={{ marginTop: 20 }} />}
          {/* 
              Show loading cards skeleton (if loading)
              or Draggable List Task items (if fetched) 
          */}
          {status === "LOADING" ? (
            <ListItemsLoading />
          ) : (
            <ListItems tasks={tasks} />
          )}

          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TasksList;
