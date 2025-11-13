import { X } from "lucide-react"

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
                    <button
                        onClick={onClose}
                        type="button"
                        aria-label="Close dialog"
                        title="Close"
                        className="text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-800 rounded-md text-sm w-9 h-9 inline-flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        <span className="sr-only">Close</span>
                        <X className="w-4 h-4" size={15} />
                    </button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Model