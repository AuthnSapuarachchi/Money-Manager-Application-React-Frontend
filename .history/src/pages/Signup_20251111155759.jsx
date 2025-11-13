import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate =  userNavigate();

    return (
        <div className="h-screen w-full relative">

        </div>
    )
}

export default Signup;