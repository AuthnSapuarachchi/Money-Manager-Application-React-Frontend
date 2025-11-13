import { Plus } from "lucide-react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import CategoryList from "../components/CategoryList";

const Category = () => {
    useUser();
    const [loading, setLoading] = useState(false);
    cons

    const fetchCategoryDetails = async () => {

    }

    return (
        <Dashboard activeLink="category">
            <div className="my-5 mx-auto">
                {/* Add button to add category */}
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-semibold">All Categories</h2>
                    <button className="add-btn flex items-center gap-1">
                        <Plus size={15} />
                        Add Category
                    </button>
                </div>

                {/* List of categories */}
                <CategoryList  />

                {/* adding category model */}

                {/* edit category model */}

            </div>
        </Dashboard>
    )
}

export default Category;