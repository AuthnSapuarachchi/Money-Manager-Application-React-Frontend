import { useContext } from "react";

export const useUser = () => {
    const { user, setUser } = useContext(AppContext);
}