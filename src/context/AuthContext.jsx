import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../services/Firebace.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {

    const provider = new GoogleAuthProvider();

  const googlelogin = ()=>{
    return signInWithPopup(auth, provider)
  }

    const authInfo = {
        name:'bappi',
        googlelogin 
    }
    return (
        <AuthProvider.Provider value={authInfo}>

     {children}

        </AuthProvider.Provider>
    );
};

export default AuthContext;