/* eslint-disable react/prop-types */


const TaskCard = ({ task, index }) => {
    const {title,description,timestamp}=task
  return (
   
        <div
        
          className="p-3 bg-white shadow rounded mt-2"
        >
          <h3 className="font-bold">{title}</h3>
          <h5>{timestamp}</h5>
          <p className="text-sm">{description}</p>

          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
     
  );
};

export default TaskCard;
