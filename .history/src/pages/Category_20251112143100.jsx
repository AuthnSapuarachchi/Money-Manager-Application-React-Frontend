import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Category = () => {
    useUser();
    return (
        <Dashboard activeLink="category">
            <div className="my-5 mx-auto">
                {/* Add button to add category */}
                <div className="flex jusitify-between items-center mb-5">
                    <h2 className="text-2xl font-semibold">All Categories</h2>
                    <button className="addibtn btn-primary">Add Category</button>
                </div>

                {/* List of categories */}

                {/* adding category model */}

                {/* edit category model */}

            </div>
        </Dashboard>
    )
}

export default Category;