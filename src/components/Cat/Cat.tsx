import FavouriteIcon from "../Icons/FavouriteIcon";
import { FavouriteCatsContext } from "../../providers/favouriteCatsProvier";
import { useContext } from "react";
import styles from "./Cat.module.css";
import classNames from "classnames";
export type CatType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

interface CatProps {
  cat: CatType;
}
const Cat = ({ cat }: CatProps) => {
  const { favouriteCats, addFavouriteCat, removeFavouriteCat } =
    useContext(FavouriteCatsContext);
  const { id, url, width, height } = cat;
  const isFavourite = favouriteCats.find((cat: CatType) => cat.id === id);
  const toggleFavouriteCats = () => {
    if (isFavourite) {
      removeFavouriteCat(id);
      return;
    }
    addFavouriteCat(cat);
  };
  return (
    <article className={classNames(styles.container, "group")}>
      <img
        className={classNames(
          styles.img,
          "group-hover:shadow-md group-hover:scale-105 lg:group-hover:scale-110",
        )}
        src={url}
        alt={`Img of cat with id=${id}`}
        loading="lazy"
        width={width}
        height={height}
      />
      <button
        className={classNames(styles.button, "group-hover:block")}
        onClick={() => toggleFavouriteCats()}
      >
        <FavouriteIcon isFavourite={isFavourite} />
      </button>
    </article>
  );
};

export default Cat;
