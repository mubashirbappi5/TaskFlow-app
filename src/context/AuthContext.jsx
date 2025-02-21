import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../services/Firebace.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
  const [user, setuser] = useState();
  const [loading,setloading]=useState(true)
    const provider = new GoogleAuthProvider();

  const googlelogin = ()=>{
    setloading(true)
    return signInWithPopup(auth, provider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const signoutUser = () => {
    return signOut(auth);
  };


    const authInfo = {
        name:'bappi',
        googlelogin ,
        user,
        signoutUser,
        loading

    }
    return (
        <AuthProvider.Provider value={authInfo}>

     {children}

        </AuthProvider.Provider>
    );
};

export default AuthContext;