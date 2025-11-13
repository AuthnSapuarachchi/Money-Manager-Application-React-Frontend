import { Pencil } from "lucide-react";

const CategoryList = ({categories, onEditCategory, onDeleteCategory}) => {
    return (
        <div className="card p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Category Sources</h4>
            </div>

            {/*Category List */}
            {categories.length === 0 ? (
                <p className="text-gray-600">No categories found.</p>
            ) : (
                <div className="grid-cols-1 sm:grid-cols-2 md-grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div key={category._id} className="bg-white p-4 rounded shadow mb-4">
                            {/* Emoji dosplay */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-3xl text-gray-600 mb-2">
                                {category.icon ? (
                                    <span className="text-2xl">
                                        <img src={category.icon} alt={category.name} className="h-5 w-5" />
                                    </span>
                                ): (
                                    <Pencil className="text-primary" size={2} />
                                )}
                            </div>

                            {/*Category Details */}

                                {/*Category name and type */}

                                {/*Action buttons */}
                            
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CategoryList