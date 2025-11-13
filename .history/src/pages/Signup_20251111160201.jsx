import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate =  userNavigate();

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blure */}
            <img src={assets.} alt="" />
        </div>
    )
}

export default Signup;