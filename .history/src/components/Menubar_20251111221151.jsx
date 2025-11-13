import { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user } = useContext(AppContext);

    return (
        
    )
}

export default Menubar