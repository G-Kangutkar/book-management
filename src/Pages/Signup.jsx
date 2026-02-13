import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login')
            toast.success("➕ User Created Successfully!");
        } catch (error) {
            toast.error('🛠️ Enter valid email and password!');
        }
    };

    return (
        <section className="flex justify-center min-h-screen items-center px-4 sm:px-6 lg:px-8">
            <div className="bg-green-200 p-6 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 w-full sm:w-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg">
                <div className="w-full flex justify-center">
                    <div className="bg-green-800 w-full max-w-sm p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col items-center">
                        <form onSubmit={handleSignup}>
                            <h2 className="text-center font-bold mb-3 text-2xl">Sign Up</h2>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="p-3 mb-4 bg-amber-100 rounded w-full" />
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="p-3 mb-4 bg-amber-100 rounded w-full" />
                            <Link to="/login" className="text-white animate-bounce underline pl-10">already have a account? Login</Link>

                            <div className="flex justify-center">
                                <button
                                    className="bg-rose-300  p-2 w-28 rounded-2xl mt-3.5 font-bold hover:bg-rose-400 transition-colors"
                                    // onClick={handleLogin}
                                    type="submit"
                                >
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
