import { useContext } from "react";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);

    return (
        <div>Sidebar</div>
    )
}

export default Sidebar