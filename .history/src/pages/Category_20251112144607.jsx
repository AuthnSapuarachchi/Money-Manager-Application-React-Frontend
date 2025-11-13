import { Plus } from "lucide-react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import CategoryList from "../components/CategoryList";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";

const Category = () => {
    useUser();
    const [loading, setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openAddCategory, setOpenAddCategory] = useState(false);
    const [openEditCategory, setOpenEditCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchCategoryDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.getAllCategories);
            if (response.status === 200) {
                console.log("Categories:", response.data.categories);
                setCategoryData(response.data.categories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCategoryDetails();
    }, []);

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
                            </div>

            {/* Category List */}
            {loading ? (
                <div className="text-center py-8 text-gray-500">Loading categories...</div>
            ) : (
                <CategoryList 
                    categories={categoryData} 
                    onEditCategory={handleEditCategory}
                    onDeleteCategory={handleDeleteCategory}
                />
            )}
        </div>
    );
};

                {/* adding category model */}

                {/* edit category model */}

            </div>
        </Dashboard>
    )
}

export default Category;