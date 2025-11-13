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
                <div className="text-center py-12">
                    <Layers2 className="mx-auto mb-4 text-gray-300" size={48} />
                    <p className="text-gray-500 text-lg">No categories found.</p>
                    <p className="text-gray-400 text-sm mt-2">Create your first category to get started</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {categories.map((category, index) => (
                        <div 
                            key={category.id || category._id || index} 
                            className="group relative bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer"
                        >
                            {/* Icon display with gradient background */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="relative">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300 shadow-sm">
                                        {category.icon ? (
                                            <span className="text-3xl">
                                                {category.icon}
                                            </span>
                                        ) : (
                                            <Layers2 className="text-indigo-600" size={28} />
                                        )}
                                    </div>
                                    {/* Decorative dot */}
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-white"></div>
                                </div>
                                
                                {/* Action buttons */}
                                <button
                                    onClick={() => onEditCategory(category)}
                                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                                    title="Edit category"
                                >
                                    <Pencil size={18} className="text-blue-600" />
                                </button>
                            </div>

                            {/* Category Details */}
                            <div>
                                {/* Category name */}
                                <h5 className="font-semibold text-gray-800 mb-2 text-lg group-hover:text-blue-700 transition-colors">
                                    {category.name}
                                </h5>
                                
                                {/* Category type badge */}
                                <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full ${
                                        category.type === 'INCOME' 
                                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                                            : 'bg-rose-100 text-rose-700 border border-rose-200'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                            category.type === 'INCOME' ? 'bg-emerald-500' : 'bg-rose-500'
                                        }`}></span>
                                        {category.type}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-5 ${
                                category.type === 'INCOME' ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}></div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CategoryList