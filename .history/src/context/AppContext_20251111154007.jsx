import { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const []

    const contextValue = {


    };

    return (
        <AppContext.Provider value={{contextValue}}>
            {children}
        </AppContext.Provider>
    )
};