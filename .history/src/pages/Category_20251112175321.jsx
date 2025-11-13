import { Plus } from "lucide-react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import CategoryList from "../components/CategoryList";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import Model from "../components/Model";
import AddCategoryForm from "../components/AddCategoryForm";

const Category = () => {
    useUser();
    const [loading, setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openAddCategorymodel, setOpenAddCategoryModel] = useState(false);
    const [openEditCategory, setOpenEditCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const fetchCategoryDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.getAllCategories);
            
            
            if (response.status === 200) {
                const categories = response.data.categories || response.data;
                setCategoryData(categories);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    }

    const handleEditCategory = (categoryToEdit) => {
        console.log('Edit category:', categoryToEdit);
        setSelectedCategory(categoryToEdit);
        setOpenEditCategory(true);
    };

    const handleDeleteCategory = async (categoryId) => {
        // TODO: Implement delete functionality
        console.log('Delete category:', categoryId);
    };

    useEffect(() => {
        fetchCategoryDetails();
    }, []);

    const handleAddCategory = async (category) => {
        const { name, type, icon } = category;
        
        if (!name || !type) {
            toast.error("Please fill in name and type.");
            return;
        }
        
        if (!icon) {
            toast.error("Please select an icon.");
            return;
        }

        //check if category already exists
        const isDuplicate = categoryData.some((category) => {
            return category.name.toLowerCase() === name.trim().toLowerCase();

        })

        if (isDuplicate) {
            toast.error(`A category named "${name}" already exists. Please use a different name.`);
            return;
        }

        try{
            // Try to match the backend's expected format
            const payload = { 
                name: name.trim(),
                type: type.toUpperCase(), // Ensure uppercase
                icon: icon 
            };
            
            const response = await axiosConfig.post(API_ENDPOINTS.addCategorys, payload);
            
            
            if (response.status === 200 || response.status === 201) {
                toast.success("Category added successfully!");
                setOpenAddCategoryModel(false);
                // Reset form
                fetchCategoryDetails();
            }
        } catch (error) {
            
            // Handle specific error messages
            let errorMessage = "Failed to add category";
            
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            // Show user-friendly message for duplicate category
            if (errorMessage.toLowerCase().includes('already exists')) {
                toast.error(`A category named "${name}" already exists. Please use a different name.`);
            } else {
                toast.error(errorMessage);
            }
        }
    };


    return (
        <Dashboard activeLink="category">
            <div className="my-5 mx-auto">
                {/* Add button to add category */}
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-semibold">All Categories</h2>
                    <button
                        className="inline-flex items-center gap-2 bg-green-300 hover:bg-green-400 text-white-50 px-3 py-2 rounded-md shadow-sm transition-colors"
                        onClick={() => setOpenAddCategoryModel(true)}
                        aria-label="Add Category"
                    >
                        <Plus size={15} />
                        Add Category
                    </button>
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

                {/* adding category model */}
                <Model
                    isOpen={openAddCategorymodel}
                    onClose={() => setOpenAddCategoryModel(false)}
                    title="Add Category"
                >
                    <AddCategoryForm onAddCategory={handleAddCategory} />
                </Model>

                {/* edit category model */}
                <Model
                    isOpen={openEditCategory}
                    onClose={() => 
                        setOpenEditCategory(false)
                        setSelectedCategory(null)
                    }
                    title="Edit Category"
                >
                    <AddCategoryForm
                </Model>


                {/* TODO: Edit category modal */}
            </div>
        </Dashboard>
    );
};

export default Category;