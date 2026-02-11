import {Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute =({children})=>{
    const {isLogin} = useAuth();
    return isLogin ? children : <Navigate to= '/' replace/>
}
export default ProtectedRoute;