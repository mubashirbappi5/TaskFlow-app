

import TaskList from "../Components/TaskList ";

import { Link } from "react-router-dom";

import { IoMdAddCircleOutline } from "react-icons/io";

import useTasks from "../Hooks/useTasks";


const Home = () => {
   
    // const [tasks, setTasks] = useState([]);
    const [tasks] = useTasks();
//   useEffect(() => {
//     axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
    
   
//   }, []);

  
    return (
        <div>
        
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4 p-4">
          {["To-Do", "In Progress", "Done"].map((category) => (
            <TaskList key={category} category={category} tasks={tasks.filter((task) => task.category === category)} />
          ))}
        </div>
      
          <div className=" fixed bottom-20 right-6">
            <Link className="" to={'/add-task'}><IoMdAddCircleOutline  className="text-7xl font-bold"/></Link>
          </div>
        </div>
    );
};

export default Home;