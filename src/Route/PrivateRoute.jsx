import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider)
    const location = useLocation()
 if(loading){
    return <p>loading....</p>
 }
 
    if(user){
        return children
    }
   
      return <div>
               <Navigate to="/login" state={{from: location}} replace></Navigate>
      </div> 


  
};

export default PrivateRoute;