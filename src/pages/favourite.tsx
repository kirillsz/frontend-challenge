import CatList from "../components/CatList";
import { FavouriteCatsContext } from "../providers/favouriteCatsProvier";
import { useContext } from "react";
const Favourite = () => {
  const { favouriteCats } = useContext(FavouriteCatsContext);
  if (favouriteCats.length === 0)
    return <h3>У вас пока нет любимых котиков :(</h3>;
  return <CatList cats={favouriteCats} />;
};

export default Favourite;
