export const fetchTatianaData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tatiana");
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    } catch (error) {
      console.error("Error fetching Tatiana's data:", error);
      return null;
    }
  };
  