import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext();
// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    const authInfo = {
        name:'bappi'
    }
    return (
        <AuthProvider.Provider value={authInfo}>

     {children}

        </AuthProvider.Provider>
    );
};

export default AuthContext;