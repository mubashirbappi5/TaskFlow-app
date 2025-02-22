import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateTask = () => {
const [loading, setLoading] = useState(false);
const data = useLoaderData()
const  Navigate = useNavigate()
console.log(data._id)
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);
    
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
    
        const UpdateTask = {
          title,
          description,
          category,
          timestamp: new Date().toISOString(),
        };
        console.log(UpdateTask)
        try {
            const res = await axios.patch(`http://localhost:5000/tasks/${data._id}`, UpdateTask);
               
            if (res.data.modifiedCount >= 1) {
              toast.success("Task Updated successfully!");
              form.reset(); 
              Navigate('/')
            } 
          } catch (error) {
            console.error("Error adding task:", error);
            toast.error("An error occurred. Please check the console.");
          } finally {
            setLoading(false);
          }
         };

    

    return (
        <div>

<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Update Your Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Change Task Title"
          name="title"
         defaultValue={data.title}
          maxLength={50}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Change Task Description (optional)"
          name="description"
          defaultValue={data.description}
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
            
        </div>
    );
};

export default UpdateTask;