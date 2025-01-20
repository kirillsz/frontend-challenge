// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";

export default function useFetch(url: string | URL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(u = url) {
    try {
      setLoading(true);
      const res = await fetch(u);
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      const fetchedData = await res.json();
      setData((prevData) => [...prevData, ...fetchedData]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, loading, fetchData };
}
