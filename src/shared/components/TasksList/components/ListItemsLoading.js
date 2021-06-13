import TaskCard from "../../TaskCard";

const ListItemsLoading = () => {
  return [...Array(3)].map((card, index) => (
    <TaskCard key={index} loading style={{ marginTop: 20 }} />
  ));
};

export default ListItemsLoading;
