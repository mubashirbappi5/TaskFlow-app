import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";


const Root = () => {
    return (
        <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-4 lg:col-span-2">
          <Sidebar />
        </div>
  
        <div className="col-span-12 md:col-span-8 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    );
};

export default Root;