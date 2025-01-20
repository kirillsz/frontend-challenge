// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, useRef, useEffect } from "react";
import CatList from "../components/CatList";
import { AllCatsContext } from "../providers/allCatsProvider";
const Home = () => {
  const { data, loading, error, fetchData } = useContext(AllCatsContext);
  const catLoader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      fetchData();
    }
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (catLoader.current) {
      observer.observe(catLoader.current);
    }
  }, []);

  return (
    <>
      {data.length !== 0 && <CatList cats={data} />}
      {loading && (
        <h3>
          Котики загружаются <span className="animate-ping">...</span>
        </h3>
      )}
      {error && (
        <h3>
          Котик, тут ошибка:{" "}
          <span className="text-red-500 font-semibold">{error}</span>
        </h3>
      )}
      <div ref={catLoader}>Еще котиков?</div>
    </>
  );
};

export default Home;
