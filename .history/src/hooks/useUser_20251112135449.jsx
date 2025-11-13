import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const useUser = () => {
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user ) {
            return;
        }

        let isMounted = true;

        const fetchUserInfo = async () => {
            try {
                const response = await axiosConfig.get(API_ENDPOINTS.getUserInfo);
                if (isMounted) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();

    })

    return { user, setUser };
}