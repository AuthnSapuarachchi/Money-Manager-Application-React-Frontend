const InfoCard = ({icon, label, value, color}) => {
    return (
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className={`w-14 h-14 flex items-center justify-center rounded-xl text-2xl ${color} shadow-lg`}> 
                {icon}
            </div>
            <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
                <p className="text-2xl font-bold text-gray-800">$ {value?.toLocaleString() || '0'}</p>
            </div>
        </div>
    )
}

export default InfoCard;