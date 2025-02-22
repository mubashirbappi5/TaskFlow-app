import { useContext } from 'react';
import img1 from '../assets/icons8-task-96.png'
import { AuthProvider } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const {googlelogin} = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation()
  const froms = location.state?.from?.pathname || '/';
    const handlelogin =async ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
             const userinfo = {
                UserId:res.user.uid,
                UserName:res.user.displayName,
                UserEmail:res.user.email

             }
             axios.post('http://localhost:5000/users',userinfo)
             .then(res=>{
                if(res.data.insertedId){
                    navigate(froms, { replace: true });
                    alert('login done')
                }
             })
             .catch(error=>{
                console.log(error)
             })
             console.log(userinfo)

           
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