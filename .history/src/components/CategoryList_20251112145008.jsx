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
                div.grid-cols-1
            )}

        </div>
    );
}

export default CategoryList