import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider");
  }

  return context;
}

export default function AppContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(book) {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book)
    setFavorites(newFavorites)
  }

  function removeToFavorites(_id) {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter(book => book._id !== _id)
    setFavorites(newFavorites)}

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeToFavorites }}
    >
        {children}
    </AppContext.Provider>
  );
}
