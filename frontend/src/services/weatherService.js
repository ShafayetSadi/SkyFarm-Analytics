// services/weatherService.js
export const getWeatherAlerts = async () => {
  try {
    const response = await fetch("YOUR_API_ENDPOINT_URL_HERE"); // Replace with actual API URL

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather alerts:", error);
    // Return empty alerts array if there's an error
    return { alerts: [] };
  }
};
