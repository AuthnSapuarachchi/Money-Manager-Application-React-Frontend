import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import { assets } from "../assets/assets.js";
import Input from "../components/input.jsx";
import validateEmail  from "../util/vlidation.js";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // simple client-side validation
        if (!fullName.trim()) {
            const msg = 'Please fill out all fields.';
            setError(msg);
            toast.error(msg);
            return;
        }

        if (!validateEmail(email)) {
            const msg = 'Please enter a valid email address.';
            setError(msg);
            toast.error(msg);
            return;
        }

        if (!password.trim()) {
            const msg = 'Please enter a password.';
            setError(msg);
            toast.error(msg);
            return;
        }

        


        // TODO: replace with real signup API call (axios/fetch)
        try {
            setError('');
            // simulate network delay
            await new Promise((res) => setTimeout(res, 600));
            toast.success('Account created — you can now log in');
            // clear form (do not navigate automatically)
            setFullName('');
            setEmail('');
            setPassword('');
        } catch (err) {
            const msg = 'Signup failed. Please try again.';
            setError(msg);
            toast.error(msg);
        }
    }

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blure */}
            <img src={assets.login_bg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover blur-sm" />

            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-semibold text-center">Create an account</h2>
                        <p className="text-center">Start tracking your expenses by joining us</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                       <div className="flex justify-center mb-6">
                            {/* Profile image */}
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            <Input
                                label="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                            />
                            <Input
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                            <div className="col-span-2">
                                <Input
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                type="password"
                            />
                            </div>
                       </div>
                       {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}
                       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Sign Up
                        </button>
                        <p className="text-sm text-center">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:underline"> Log in</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup;