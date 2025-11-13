const Model = ({isOpen, onClose, children, title}) => {
    
    if  (!isOpen) return null
    
    return (
       <div className="fixed inset-0 z-50 flex justify-center items-center w-full overflow-hidden bg-black/40 background-blur-sm">
        <div className="relative p-4 w-full max-w-2xl border border-gray-200">
            {/*Model header */}
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100">
                {/*Model body  */}
                <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 rounded-t-xl">
                    <h3 className="text-xl font-semibold text-gray-800">
                        {title}
                    </h3>
                    button.text-gray-500.bg-gray-50
                </div>
            </div>
        </div>
       </div>
    )
}

export default Model