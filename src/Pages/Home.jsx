import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import useTasks from "../Hooks/useTasks";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";
import TaskList from "../Components/TaskList ";

const Home = () => {
  const [tasks, refetch] = useTasks();
  const categories = ["To-Do", "In Progress", "Done"];

  // Handle Drag & Drop
  const handleDragEnd = async (result) => {
    if (!result.destination) return; // If dropped outside, do nothing

    const { source, destination, draggableId } = result;

    // Update UI first (Optimistic Update)
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex((task) => task._id.toString() === draggableId);
    if (taskIndex === -1) return;

    updatedTasks[taskIndex].category = destination.droppableId;
    refetch(); // Refresh UI

    // Update backend
    await axios.put(`http://localhost:5000/tasks/${draggableId}`, {
      category: destination.droppableId,
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {categories.map((category) => (
          <TaskList key={category} category={category} tasks={tasks.filter((task) => task.category === category)} />
        ))}
      </div>

      <div className="fixed bottom-14 right-6">
        <Link to={'/add-task'}>
          <IoMdAddCircleOutline className="text-7xl font-bold" />
        </Link>
      </div>
    </DragDropContext>
  );
};

export default Home;
