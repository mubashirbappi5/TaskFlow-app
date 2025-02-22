import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthProvider } from "../context/AuthContext";

const useTasks = () => {
  const [tasks, setTasks] = useState([]); 
const {user}=useContext(AuthProvider)
console.log(user.uid)
  const { data, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(`https://task-flow-server-theta.vercel.app/tasks/user/${user?.uid}`);
      setTasks(res.data); 
      return res.data;
    },
  });

  return [tasks, setTasks, refetch]; 
};

export default useTasks;
