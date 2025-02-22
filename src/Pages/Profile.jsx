import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { FaUserAlt, FaEnvelope, FaIdBadge } from "react-icons/fa"; 
import toast from "react-hot-toast";

const Profile = () => {
  const { user, signoutUser } = useContext(AuthProvider); 
  const handleLogOut = ()=>{
    signoutUser()
    .then(()=>{
        toast.success('LogOut successfully! ')
    })
  }
  return (
    <div className="flex justify-center   bg-gray-50">
      <div className="bg-white p-8 rounded-xl border-b-2 border-blue-400 shadow-lg max-w-md w-full">
     
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center">
            <FaUserAlt className="text-white text-4xl" />
          </div>
        </div>

        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{user?.displayName}</h2>
          <div className="flex justify-center items-center gap-2 text-gray-600"><FaEnvelope/> {user?.email}</div>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <FaIdBadge className="text-xl" />
            <span className="text-sm">{user?.uid}</span>
          </div>
        </div>

        <div className="mt-6 hidden md:flex justify-center gap-4">
          
          <button onClick={handleLogOut} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
