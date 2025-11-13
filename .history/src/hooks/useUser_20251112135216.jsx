import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const useUser = () => {
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user && Object.keys(user).length === 0) {
            navigate('/login');
        }
    }, [user, navigate])

    return { user, setUser };
}