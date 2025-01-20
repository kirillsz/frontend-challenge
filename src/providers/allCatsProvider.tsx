// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createContext, type FC, type PropsWithChildren } from "react";
import useFetch from "../hooks/useFetch";

export const AllCatsContext = createContext({
  data: [],
  loading: true,
  error: "",
  fetchData: () => undefined,
});

export const AllCatsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, loading, error, fetchData } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10",
  );
  return (
    <AllCatsContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </AllCatsContext.Provider>
  );
};
