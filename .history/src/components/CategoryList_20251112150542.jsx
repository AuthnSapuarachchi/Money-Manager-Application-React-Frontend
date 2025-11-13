import { Layers2, Pencil } from "lucide-react";

const CategoryList = ({categories = [], onEditCategory, onDeleteCategory}) => {
    console.log("🎨 CategoryList received categories:", categories);
    console.log("🔢 Categories count:", categories?.length);
    
    return (
        <div className="card p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Category Sources</h4>
            </div>

            {/*Category List */}
            {!categories || categories.length === 0 ? (
                <p className="text-gray-600">No categories found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category, index) => (
                        <div key={category.id || category._id || index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
                            {/* Icon display */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                                    {category.icon ? (
                                        <span className="text-2xl">
                                            {category.icon}
                                        </span>
                                    ) : (
                                        <Layers2 className="text-primary" size={24} />
                                    )}
                                </div>
                                
                                {/* Action buttons */}
                                <button
                                    onClick={() => onEditCategory(category)}
                                    className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                                    title="Edit category"
                                >
                                    <Pencil size={16} className="text-gray-600" />
                                </button>
                            </div>

                            {/* Category Details */}
                            <div>
                                {/* Category name */}
                                <h5 className="font-semibold text-gray-800 mb-1">
                                    {category.name}
                                </h5>
                                
                                {/* Category type */}
                                <span className={`inline-block px-2 py-1 text-xs rounded ${
                                    category.type === 'INCOME' 
                                        ? 'bg-green-100 text-green-700' 
                                        : 'bg-red-100 text-red-700'
                                }`}>
                                    {category.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CategoryList