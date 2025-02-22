import axios from "axios";
import { useContext, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddTask = () => {
  const [loading, setLoading] = useState(false); 
  const  navigate = useNavigate()
const{user}=useContext(AuthProvider)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    const newTask = {
      title,
      description,
      category,
      UserId:user?.uid,

      timestamp: new Date().toISOString(),
    };

    try {
      const res = await axios.post("https://task-flow-server-theta.vercel.app/tasks", newTask);

      if (res.data.insertedId) {
        toast.success("Task added successfully!");
        form.reset(); 
        navigate('/')
      } else {
        toast.error("Failed to add task. Please try again.");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("An error occurred. Please check the console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          name="title"
          required
          maxLength={50}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Task Description (optional)"
          name="description"
          maxLength={200}
          className="w-full p-2 border rounded"
        ></textarea>
        <select name="category" className="w-full p-2 border rounded">
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
