import { useState, useEffect } from "react";
import { fetchLocations } from "../services/locationService";
import useDebounce from "./useDebounce";

/**
 * Custom hook for handling job location search with debounce optimization.
 * - Uses `useDebounce` to reduce API calls.
 * - Implements error handling.
 * - Cancels stale API calls to prevent race conditions.
 */
export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      setLocations([]); 
      return;
    }

    let isMounted = true;  
    const abortController = new AbortController();  
    setLoading(true);
    setError(null);

    const fetchResults = async () => {
      try {
        const results = await fetchLocations(debouncedQuery, abortController.signal);
        if (isMounted) setLocations(results);
      }catch (err) {
        const error = err as Error;  
        if (isMounted && error.name !== "AbortError") {
          setError("Failed to fetch locations");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchResults();

    return () => {
      isMounted = false;
      abortController.abort();  
    };
  }, [debouncedQuery]);

  return { query, setQuery, locations, loading, error };
};
