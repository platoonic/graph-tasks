/**
 * TasksBoard state reducer
 */

const tasksReducer = (state, action) => {
  // Perform a state copy
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "reorder":
      const { source, destination } = action;
      if (source.droppableId === destination.droppableId) {
        // Reordering in the same list
        const list = [...newState[source.droppableId]];
        const [reorderedItem] = list.splice(source.index, 1);
        list.splice(destination.index, 0, reorderedItem);
        newState[source.droppableId] = list;
      } else {
        // Moving card to different list
        const sourceList = [...newState[source.droppableId]];
        const destinationList = [...newState[destination.droppableId]];
        const [movedItem] = sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, movedItem);
        newState[source.droppableId] = sourceList;
        newState[destination.droppableId] = destinationList;
      }
      return newState;
    default:
      throw new Error(
        `Cannot apply action of type: ${action.type} on TasksReducer`
      );
  }
};

export default tasksReducer;
