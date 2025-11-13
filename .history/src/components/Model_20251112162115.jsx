import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const Model = ({ isOpen, onClose, children, title }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayMouseDown = (e) => {
        if (e.target === overlayRef.current) onClose();
    };

    return (
        <div
            ref={overlayRef}
            onMouseDown={handleOverlayMouseDown}
            className="fixed inset-0 z-50 flex items-center justify-center w-full min-h-screen bg-black/40 backdrop-blur-sm p-4"
            role="presentation"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="max-w-3xl w-full bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden transform transition-all duration-200 scale-100"
            >
                <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100">
                    <h3 id="modal-title" className="text-lg md:text-xl font-semibold text-gray-800">
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

                <div className="p-5 md:p-6">{children}</div>

                <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-100 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Model;