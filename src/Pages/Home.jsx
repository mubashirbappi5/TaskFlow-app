import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";


const Home = () => {
    const {name}=useContext(AuthProvider)
    return (
        <div>
            <h1>this is home section {name}</h1>
        </div>
    );
};

export default Home;