import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes/ItemTypes";
 
const TaskCard = ({ task }) => {
    console.log(task)
const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK, id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>Status: {task.status}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
