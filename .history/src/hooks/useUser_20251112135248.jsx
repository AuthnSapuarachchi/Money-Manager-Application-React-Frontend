import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const useUser = () => {
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user ) {
            return;
        }

        let 

    }

    return { user, setUser };
}