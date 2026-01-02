import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        // Initialize user from localStorage if available
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {};
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        // Initialize from localStorage, default to true
        const saved = localStorage.getItem('sidebarOpen');
        return saved !== null ? JSON.parse(saved) : true;
    });

    // Save user to localStorage whenever it changes
    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Save sidebar state to localStorage
    useEffect(() => {
        localStorage.setItem('sidebarOpen', JSON.stringify(isSidebarOpen));
    }, [isSidebarOpen]);

    const clearUser = () => {
        setUser({});
        localStorage.removeItem('user');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const contextValue = {
        user,
        setUser,
        clearUser,
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
};