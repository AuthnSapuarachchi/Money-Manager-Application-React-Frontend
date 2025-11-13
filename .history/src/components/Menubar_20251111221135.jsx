import { useState, useRef, useContext } from "react";
import {A}

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user } = useContext(AppContext);

    return <div>Menubar</div>;
}

export default Menubar