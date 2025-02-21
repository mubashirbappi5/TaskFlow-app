
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import useTasks from "../Hooks/useTasks";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";
import TaskList from "../Components/TaskList ";

const Home = () => {
  const [tasks, refetch] = useTasks();

  // Handle Drag & Drop
  const handleDragEnd = async (result) => {
    if (!result.destination) return; // If dropped outside, do nothing

    const { source, destination, draggableId } = result;

    // Find the dragged task
    const task = tasks.find((task) => task._id === draggableId);
    
    // If the category has changed, update the backend
    if (source.droppableId !== destination.droppableId) {
      await axios.put(`http://localhost:5000/tasks/${draggableId}`, {
        ...task,
        category: destination.droppableId, // Change category
      });

      refetch(); // Fetch updated tasks
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {["To-Do", "In Progress", "Done"].map((category) => (
          <TaskList key={category} category={category} tasks={tasks.filter((task) => task.category === category)} />
        ))}
      </div>

      <div className="fixed bottom-20 right-6">
        <Link to={'/add-task'}>
          <IoMdAddCircleOutline className="text-7xl font-bold" />
        </Link>
      </div>
    </DragDropContext>
  );
};

export default Home;
