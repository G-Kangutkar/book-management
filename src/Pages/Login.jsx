import { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

    const {login} =useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate =useNavigate();

    const handleLogin= ()=>{
        if(login(email,password)){
            navigate('/dashboard')
        }
        else{
            alert('Invalid Password or Email')
        }

    }

    return(
        <div style={{  padding:'15px',alignContent:"center",justifyItems:'center'}}>
        <div style={{backgroundColor:'#cf4d19ff', width:'300px', marginLeft:'40%', padding:'15px',margin:'10px',alignContent:"center",textAlign:'center'}}>
            <input style={{ padding:'15px',margin:'10px'}}  type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input style={{ padding:'15px',margin:'10px'}} type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
            <button style={{backgroundColor:'#17c02eff', padding:'15px',margin:'5px', borderRadius:'10px',fontWeight:'bolder',border:'1px solid black', marginLeft:"10px"}}  onClick={handleLogin}>Login</button>
        </div>
        </div>
    )



}
export default Login;