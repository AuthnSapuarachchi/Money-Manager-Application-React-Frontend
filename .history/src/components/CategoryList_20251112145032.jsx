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
                <div className="grid-cols-1 sm:grid-cols-2 md-grid-cols-3"></div>
            )}

        </div>
    );
}

export default CategoryList