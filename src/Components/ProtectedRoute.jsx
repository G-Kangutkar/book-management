import {Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute =({children})=>{
    const {currentUser,loading} = useAuth();
    if (loading) return null;
    if(!currentUser) return <Navigate to= '/' replace/>;
    return children
    // return currentUser ? children : <Navigate to= '/' replace/>
}
export default ProtectedRoute;