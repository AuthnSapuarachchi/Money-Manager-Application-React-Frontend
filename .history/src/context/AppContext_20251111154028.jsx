import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const contextValue = {
        user,
        setUser
    };

    return (
        <AppContext.Provider value={{contextValue}}>
            {children}
        </AppContext.Provider>
    )
};