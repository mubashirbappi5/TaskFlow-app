import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";


const Root = () => {
    return (
        <div>
            <Sidebar/>
            <h1>this is root</h1>
            <Outlet/>
        </div>
    );
};

export default Root;