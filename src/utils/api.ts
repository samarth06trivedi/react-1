import { TATIANA_API } from "../constant/api"; // Import base API URL
// import dotenv from "dotenv";
// dotenv.config();
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL; 


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
