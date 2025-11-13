import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Input from "../components/input.jsx";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: add real signup logic (API call) here
        navigate('/login');
    }

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blure */}
            <img src={assets.login_bg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover blur-sm" />

            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-semibold text-center">Create an account</h2>
                        <p>Start tracking your expenses by joining us</p>
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
                            <div>
                                <Input
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                type="password"
                            />
                            </div>

                       </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup;