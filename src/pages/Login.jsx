import { useContext, useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { toast } from 'react-hot-toast'
import { validateEmail } from "../util/vlidation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { AppContext } from "../context/AppContext.jsx";
import { LoaderCircle } from "lucide-react";

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
            const response = await axiosConfig.post(API_ENDPOINTS.login, {
                email,
                password,
            });
            const {token, user} = response.data;
            console.log("Login response - Full data:", response.data);
            console.log("Login response - User object:", user);
            console.log("Login response - Profile image URL:", user?.profileImageUrl);
            
            if (token) {
                localStorage.setItem('token', token);
                setUser(user);
                toast.success('Logged in successfully');
                navigate('/dashboard');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message || 'Invalid email or password.');
                toast.error(error.response.data.message || 'Invalid email or password.');
            } else {
                console.error("Something went wrong", error);
                setError('Something went wrong, please try again later.');
                toast.error('Something went wrong, please try again later.');
            }
            
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-md">
                {/* Logo and Title */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={assets.logo} alt="logo" className="h-10 w-10"/>
                        <h1 className="text-2xl font-semibold text-gray-900">Smart Money Manager</h1>
                    </div>
                    <h2 className="text-xl font-medium text-gray-800 mb-1">Welcome Back</h2>
                    <p className="text-sm text-gray-500">Sign in to continue</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Email"
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

                    {error && (
                        <div className="bg-red-50 text-red-600 px-4 py-3 rounded text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`w-full bg-gray-900 text-white py-3 rounded font-medium transition-all ${
                            isLoading 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-gray-800'
                        }`}
                    >
                        {isLoading ? (
                            <span className="inline-flex items-center justify-center">
                                <LoaderCircle className="animate-spin w-5 h-5 mr-2" />
                                <span>Signing in...</span>
                            </span>
                        ) : (
                            "Sign In"
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;