import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    
    const [searchFilter, setSearchFilter] = useState();

    const [isSearched, setIsSearched] = useState();
    
    const value = {
        searchFilter, setSearchFilter,
        isSearched, setIsSearched
    };


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}