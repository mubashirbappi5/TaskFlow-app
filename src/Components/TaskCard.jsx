/* eslint-disable react/prop-types */
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import useTasks from "../Hooks/useTasks";
import axios from "axios";
import toast from "react-hot-toast";

const TaskCard = ({ task }) => {
  const { title, description, timestamp, _id } = task;
  const [tasks, setTasks, refetch] = useTasks(); 

  const handleDelete = async () => {
    try {
      await axios.delete(`https://task-flow-server-theta.vercel.app/tasks/${_id}`);
      setTasks(tasks.filter((task) => task._id !== _id));

      
      refetch();
      
      toast.success('Task delete successfully!')
      
    } catch (error) {
      toast.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="p-3 w-full bg-white shadow rounded mt-2 flex justify-between">
      <div>
        <h3 className="font-bold">{title}</h3>
        <h5>{moment(timestamp).calendar()}</h5>
        <p className="text-sm">{description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Link to={`/updateTask/${_id}`} className="cursor-pointer text-blue-500">
          <MdEdit />
        </Link>
        <button onClick={handleDelete} className="cursor-pointer text-red-500">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
