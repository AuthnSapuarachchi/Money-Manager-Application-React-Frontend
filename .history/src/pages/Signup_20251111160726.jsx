import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blure */}
            <img src={assets.login_bg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover blur-sm" />

            <div className="relative z-10 w-full max-w-lg px-6">
                div.bg-white.bg-opacity-95.backdrop-blure-sm.rounded-lg.shadow
            </div>

        </div>
    )
}

export default Signup;