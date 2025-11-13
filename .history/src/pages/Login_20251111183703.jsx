import { useContext, useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Input from "../components/input.jsx";
import { toast } from 'react-hot-toast'
import { validateEmail } from "../util/vlidation.js";
import axios from "axios";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { AppContext } from "../context/AppContext.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(AppContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        //basic validation
        if (!validateEmail(email) ) {
            const msg = 'Please Enter valid email';
            setError(msg);
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            const msg = 'Please enter a password.';
            setError(msg);
            setIsLoading(false);
            return;
        }

        try {
            const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
                email,
                password,
            });
            const {token, user} = response.data;
            if (token) {
                localStorage.setItem('token', token);
                setUser(user);
                navigate('/da');
            }
        } catch (err) {
            const msg = 'Login failed. Please try again.';
            setError(msg);
            toast.error(msg);
        }
    }

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            <img src={assets.login_bg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover blur-sm" />

            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
                    <p className="text-center">Sign in to continue managing your money</p>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <Input
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />

                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />

                        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Log in
                        </button>

                        <p className="text-sm text-center">
                            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline"> Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;