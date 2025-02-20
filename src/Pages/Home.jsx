import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import Header from "../Components/Header";


const Home = () => {
    const {name}=useContext(AuthProvider)
    return (
        <div>
            <Header/>
            <h1>this is home section {name}</h1>
        </div>
    );
};

export default Home;