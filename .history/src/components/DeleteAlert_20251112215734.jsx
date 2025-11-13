import { AlertTriangle, LoaderCircle } from "lucide-react";
import { useState } from "react";

const DeleteAlert = ({ data, onClose, onDelete }) => {
    
    const [loading, setLoading] = useState(false);
    
    const handleDelete = async () => {
        try{
            setLoading(true);
            await onDelete(data.id);
            onClose();
        } catch (error) {
            console.error('Error deleting income:', error);
        } finally {
            setLoading(false);
        }
    };

    

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Confirm Delete</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Are you sure you want to delete this income? This action cannot be undone.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4">
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
                >
                    Cancel
                </button>
                <button
                    disabled={loading}
                    onClick={handleDelete}
                    type="button"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    {loading ? (
                        <LoaderCircle className="animate-spin" size={20} />
                        De
                    ): (
                        <span>Delete</span>
                    )}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteAlert;
