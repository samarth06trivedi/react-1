import { BASE_API_URL } from "../constant/config"; // Import base API URL

const TATIANA_API = import.meta.env.VITE_TATIANA_API; // Get endpoint from .env

export const fetchTatianaData = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}${TATIANA_API}`); // Combine base URL & endpoint
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.error("Error fetching Tatiana's data:", error);
    return null;
  }
};
