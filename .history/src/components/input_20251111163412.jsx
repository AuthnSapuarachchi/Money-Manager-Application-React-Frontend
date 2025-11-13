import { useState } from "react";

const Input = ({label, value, onChange, placeholder, type}) => {
   
    const [showPassword, setShowPassword] = useState(false);
   
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="mb-4">
            <label className="text-[13px] text-slate-800 block mb-1" htmlFor={label}>
                {label}
            </label>
            <div className="relative">
                <input 
                    className="w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e)} />

                {type === 'password' && (
                    <span 
                        className="absolute top-0 right-0 h-full px-3 py-2 text-gray-600 focus:outline-none">
                            {showPassword ? (
                                <Eye 
                                  size={20} 
                                  className="cursor-pointer"
                                  onClick={toggleShowPassword}
                                />
                            ) : (
                                <EyeOff
                                 />
                            )}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Input