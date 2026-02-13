import { createContext, useCallback, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);
const AuthProvider=({children})=>{


    const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
}
    return(
        <AuthContext.Provider 
        // value={{isLogin,login,logout}}
        value={{ currentUser,loading, logout }}>
            {/* {children} */}
             {!loading && children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;