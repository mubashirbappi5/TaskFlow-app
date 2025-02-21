
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, category }) => {
  return (

       
        <div>
              <h2 className="text-lg font-bold">{category}</h2>
          {tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} />
          ))}
        </div>
        
      
    

  );
};

export default TaskList;
