import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-3 bg-white shadow rounded mt-2"
        >
          <h3 className="font-bold">testing task</h3>
          <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque beatae quaerat tempora saepe. Quia cumque alias reiciendis dolorem error fugit, laboriosam sit, architecto, ut assumenda pariatur commodi. Magnam, quasi quis.</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
