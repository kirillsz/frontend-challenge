import {
  createContext,
  useState,
  useEffect,
  type FC,
  type PropsWithChildren,
} from "react";
import { CatType } from "../components/Cat/Cat";

export const FavouriteCatsContext = createContext({
  favouriteCats: [],
  addFavouriteCat: (cat: CatType) => {},
  removeFavouriteCat: (id: string) => {},
});

export const FavouriteCatsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favouriteCats, setState] = useState(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      return JSON.parse(savedState);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(favouriteCats));
  }, [favouriteCats]);

  const addFavouriteCat = (newCat: CatType) => {
    setState([...favouriteCats, newCat]);
  };
  const removeFavouriteCat = (id: string) => {
    const filteredCats = favouriteCats.filter((cat: CatType) => cat.id !== id);
    setState(filteredCats);
  };

  return (
    <FavouriteCatsContext.Provider
      value={{ favouriteCats, addFavouriteCat, removeFavouriteCat }}
    >
      {children}
    </FavouriteCatsContext.Provider>
  );
};
