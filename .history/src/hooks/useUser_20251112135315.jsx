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

        const fet

    })

    return { user, setUser };
}