import { useState, useEffect, useContext } from "react";
import {  CircleUserRound, House, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";



export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
const {user,signoutUser} = useContext(AuthProvider)
const handlelogout = ()=>{
  signoutUser()
  .then(()=>{
    alert('logout done')
  })
  .catch(error=>{
    console.log(error)
  })
}
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        <aside className="flex flex-col h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
          <Link className="text-4xl font-semibold" to={'/'}>
           Task<span className="text-[#4A90E2]">Flow</span>
          </Link>
          <nav className="mt-6 space-y-3">
          
          <Link to={'/'} className="flex gap-2 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700">    <House />Home</Link>
            {
              user?<div>
                <h2 className="flex gap-2 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700" ><CircleUserRound /> {user?.displayName}</h2>
                <button className="flex gap-2 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700" onClick={handlelogout}><LogOut />Log Out</button>
              </div>:<Link to={'/login'} className="flex gap-2 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700">  <CircleUserRound />Login</Link>
            }
          </nav>
        </aside>
      ) : (
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-2">
         
            <Link to={'/'} href="#" className="flex flex-col items-center text-gray-600 dark:text-gray-200 hover:text-gray-700">
            <House />
              <span className="text-xs">Home</span>
            </Link>
         {
          user?<><Link  className="flex flex-col items-center text-gray-600 dark:text-gray-200 hover:text-gray-700">  <CircleUserRound /><span className="text-xs">{user?.displayName}</span></Link>
          <button className="cursor-pointer" onClick={handlelogout}>  <LogOut /></button></> 
        :<Link className="flex flex-col items-center text-gray-600 dark:text-gray-200 hover:text-gray-700">  <CircleUserRound /><span className="text-xs">Login</span></Link>
         }
           
          

        </nav>
      )}
    </>
  );
}
