import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchLocations = async (query: string, signal?: AbortSignal) => {
  if (query.length < 2) return [];

  try {
    const response = await axios.get(`${API_BASE_URL}/locations?q=${query}`, { signal });
    return response.data.map((loc: { label: string }) => loc.label);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.name === "CanceledError") {
        console.log("Request aborted:", error.message);
        return [];
      }
      console.error("Error fetching locations:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return [];
  }
};
