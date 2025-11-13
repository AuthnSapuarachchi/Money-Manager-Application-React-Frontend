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
                            <h5 className="text-lg font-semibold mb-2">{category.name}</h5>
                            <p className="text-gray-600">{category.description}</p>
                            <div className="mt-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                                    onClick={() => onEditCategory(category)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                    onClick={() => onDeleteCategory(category._id)}
                                >
                                    Delete
                                </button>
                            </div>
                </div>
            )}

        </div>
    );
}

export default CategoryList