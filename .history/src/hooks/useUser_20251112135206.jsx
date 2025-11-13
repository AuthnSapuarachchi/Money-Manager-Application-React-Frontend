import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useUser = () => {
    const { user, setUser } = useContext(AppContext);

    const nav
}