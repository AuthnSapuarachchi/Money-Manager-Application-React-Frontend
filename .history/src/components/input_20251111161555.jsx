const Input = ({label, value, onChange, placeholder, type}) => {
    return (
        <div className="mb-4">
            <label className="text-[13px] text-slate" htmlFor={label}>
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input