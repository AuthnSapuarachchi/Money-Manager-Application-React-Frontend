const Input = ({label, value, onChange, placeholder, type}) => {
    return (
        <div className="mb-4">
            <label className="text-[13px] text-slate-800 block mb-1" htmlFor={label}>
                {label}
            </label>
            <div className="relative">
                <input 
                className="w-full bg-transparent "
                    type={type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e)} />
            </div>
        </div>
    )
}

export default Input