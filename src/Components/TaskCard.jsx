/* eslint-disable react/prop-types */

import axios from 'axios';
import moment from 'moment';
import { MdDelete, MdEdit } from 'react-icons/md';


const TaskCard = ({ task, index }) => {
    const {title,description,timestamp,_id}=task
    const handleDelete = ()=>{
        axios.delete(`http://localhost:5000/tasks/${_id}`)
    }
    
  return (
   
        <div
        
          className="p-3 w-full md:w-72 bg-white shadow rounded mt-2 flex justify-between"
        >
          <div>
          <h3 className="font-bold">{title}</h3>
          <h5>{moment(timestamp).add(10, 'days').calendar()}</h5>
          <p className="text-sm">{description}</p>
          </div>

          <div className='flex flex-col gap-3'>
            <button className='cursor-pointer text-blue-500'><MdEdit/></button>
            <button onClick={handleDelete} className='cursor-pointer text-red-500'><MdDelete /></button>
          </div>
        </div>
     
  );
};

export default TaskCard;
