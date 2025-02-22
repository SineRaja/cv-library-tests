import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value.
 * Ensures minimal re-renders and efficient delay management.
 *
 * @param value The value to debounce.
 * @param delay The debounce delay in milliseconds (default: 300ms).
 * @returns The debounced value.
 */

export default function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (debouncedValue === value) return; 

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, debouncedValue]); 

  return debouncedValue;
}
