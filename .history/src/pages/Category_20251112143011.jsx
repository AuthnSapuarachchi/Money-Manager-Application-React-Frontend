import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Category = () => {
    useUser();
    return (
        <Dashboard activeLink="category">
            <div className="my-5 mx-auto">
                {/* Add button to add category */}

                {/* List of categories */}

                {/* adding category model */}

                

            </div>
        </Dashboard>
    )
}

export default Category;