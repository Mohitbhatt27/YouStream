import { useEffect, useState } from "react";

export const useDebounce = (data, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(data);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(data);
    }, delay);

    return () => clearTimeout(handler);
  }, [data, delay]);

  return debouncedValue;
};
