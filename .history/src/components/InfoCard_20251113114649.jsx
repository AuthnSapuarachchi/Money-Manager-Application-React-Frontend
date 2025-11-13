const InfoCard = ({icon,label, value, color}) => {
    return (
        <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl ${color} rounded-full drop-shadow-xl`}> 
                {icon}
            </div>
            <div>
                h
            </div>
        </div>
    )
}