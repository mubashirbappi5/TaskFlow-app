import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskList = ({ category, tasks }) => {
  return (
    <Droppable droppableId={category}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-100 p-4 rounded-md shadow-md min-h-[300px]"
        >
          <h2 className="text-lg font-bold mb-2">{category}</h2>

          {tasks.map((task, index) => (
            <Draggable key={task._id} draggableId={task._id.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef} // Moved ref inside the Draggable div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="mb-2 bg-white p-2 rounded-md shadow cursor-grab"
                >
                  <TaskCard task={task} />
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder} {/* Required for correct spacing */}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
