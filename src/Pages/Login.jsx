import { useContext } from 'react';
import img1 from '../assets/icons8-task-96.png'
import { AuthProvider } from '../context/AuthContext';
const Login = () => {
    const {googlelogin} = useContext(AuthProvider)
    const handlelogin = ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="flex justify-center items-center">
           <div className="text-center flex justify-center items-center flex-col gap-4 my-20">
            <img src={img1} alt="" />
           {/* <h1>Your Productivity Starts Here!</h1>
            <p>Sign in to take control of your tasks and stay ahead.</p> */}
            <button onClick={handlelogin} className="bg-[#4A90E2] px-5 py-2 rounded-lg font-semibold text-white cursor-pointer">Google Login</button>
           </div>
        </div>
    );
};

export default Login;