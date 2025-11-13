import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'

const Input = ({label, value, onChange, placeholder, type, isSelect, options}) => {
   
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
                {}
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
                                size={20}
                                className="cursor-pointer"
                                onClick={toggleShowPassword} />
                            )}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Input