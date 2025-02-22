import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTasks = () => {
  const [tasks, setTasks] = useState([]); 

  const { data, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/tasks");
      setTasks(res.data); 
      return res.data;
    },
  });

  return [tasks, setTasks, refetch]; 
};

export default useTasks;
