import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

function Login() {

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
       toast.success('🔐 Login Successfully!')
             navigate('/dashboard')
    } catch (error) {
      toast.error('🛠️ Invalid Password or Email!');
    }
  };

    return (


        <section className="flex justify-center min-h-screen items-center px-4 sm:px-6 lg:px-8">
            <div className="bg-green-200 p-6 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 w-full sm:w-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg">
                <div className="w-full flex justify-center">
                    <div className="bg-green-800 text-center w-full max-w-sm p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col items-center">
                        <form onSubmit={handleLogin}>
                            <h2 className="text-center font-bold mb-3 text-2xl">Login Form</h2>
                            <input
                            className="p-3 mb-4 bg-amber-100 rounded w-full"
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="p-3 mb-6 bg-amber-100 rounded w-full"
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link to="/" className="text-white  animate-bounce underline ">Don't have a account? Signup</Link>
                        <div className="flex justify-center">
                        <button
                            className="bg-rose-300 mt-3.5  p-2 w-28 rounded-2xl font-bold hover:bg-rose-400 transition-colors"
                            type="submit"
                        >
                            Login
                        </button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>

    )



}
export default Login;