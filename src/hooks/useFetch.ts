import { useEffect, useState } from "react";

export function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return; // no fetch yet
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
