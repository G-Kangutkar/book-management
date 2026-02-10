import {Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute =({childern})=>{
    const {isLogin} = useAuth();
    return isLogin ? childern : <Navigate to= '/'/>
}
export default ProtectedRoute;