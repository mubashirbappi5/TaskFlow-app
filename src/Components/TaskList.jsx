import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

const TaskList = ({ category = "default", tasks = [] }) => {
  return (
    <Droppable droppableId={category.toString()}>
      {(provided) => {  
        return (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-gray-100 p-4 rounded-md shadow-md min-h-[300px]"
          >
            <h2 className="text-lg font-bold mb-2">{category}</h2>

            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Draggable key={task._id.toString()} draggableId={task._id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mb-2 bg-white p-2 rounded-md shadow cursor-grab ${
                        snapshot.isDragging ? "bg-blue-100" : ""
                      }`}
                    >
                      <TaskCard task={task} />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <p className="text-gray-500">No tasks available</p>
            )}

            {provided.placeholder} 
          </div>
        );
      }}
    </Droppable>
  );
};

export default TaskList;
