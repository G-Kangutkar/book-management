import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';

function Login() {

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (login(email, password)) {
            toast.success('🔐 Login Successfully!')
            navigate('/dashboard')
        }
        else {
            toast.error('🛠️ Invalid Password or Email!');
            // alert('Invalid Password or Email')
        }

    }

    return (


        <section className="flex justify-center min-h-screen items-center px-4 sm:px-6 lg:px-8">
            <div className="bg-green-200 p-6 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 w-full sm:w-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg">
                <div className="w-full flex justify-center">
                    <div className="bg-green-800 w-full max-w-sm p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col items-center">
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
                        <button
                            className="bg-rose-300 p-2 w-28 rounded-2xl font-bold hover:bg-rose-400 transition-colors"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )



}
export default Login;