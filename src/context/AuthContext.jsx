import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);
const AuthProvider=({children})=>{

    const [isLogin,setIsLogin]=useState(false);
    const navigate = useNavigate();

    const login = useCallback((email,password)=>{
        if(email === 'admin@gmail.com' && password === 'admin123'){
            setIsLogin(true);
            return true;
        }

    },[]);

    const logout = useCallback(()=>{
        setIsLogin(false);
        navigate('/');
    },[navigate]);

    return(
        <AuthContext.Provider value={{isLogin,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;