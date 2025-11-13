const Input = ({label, value, onChange, placeholder, type}) => {
    return (
        <div className="mb-4">
            <label className="text-[13px] text-slate-800 block mb-1" htmlFor={label}>
                {label}
            </label>
            <div className="relative">
                <input type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input