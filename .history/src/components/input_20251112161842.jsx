import { useState } from "react";
import { Eye, EyeOff, ChevronsDown } from 'lucide-react'

const Input = ({label, value, onChange, placeholder, type = 'text', isSelect = false, options = []}) => {
   const [showPassword, setShowPassword] = useState(false);
   const toggleShowPassword = () => setShowPassword(s => !s);

   return (
       <div className="mb-4">
           <label className="text-sm text-slate-800 block mb-2" htmlFor={label}>
               {label}
           </label>

           <div className="relative">
               {isSelect ? (
                   <>
                       <select
                           className="appearance-none w-full bg-white border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
                           value={value}
                           onChange={(e) => onChange(e)}
                           aria-label={label}
                       >
                           {options.map((option) => (
                               <option key={option.value} value={option.value}>
                                   {option.label}
                               </option>
                           ))}
                       </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                           <ChevronsDown size={16} />
                       </div>
                   </>
               ) : (
                   <>
                       <input
                           className="w-full bg-white border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
                           type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                           placeholder={placeholder}
                           value={value}
                           onChange={(e) => onChange(e)}
                           aria-label={label}
                       />

                       {type === 'password' && (
                           <button
                               onClick={toggleShowPassword}
                               type="button"
                               aria-label={showPassword ? 'Hide password' : 'Show password'}
                               className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                           >
                               {showPassword ? (
                                   <Eye size={18} />
                               ) : (
                                   <EyeOff size={18} />
                               )}
                           </button>
                       )}
                   </>
               )}
           </div>
       </div>
   )
}

export default Input