import { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const conte

    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};