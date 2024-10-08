import { baseUrl } from "../contants";

export const getRequest = async () => {
  try {
    const response = await fetch(`${baseUrl}/body_update?interacting=true`, {
      headers: { "ngrok-skip-browser-warning": "69420" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Log after the request has been completed (even if there's an error)
  console.log("hello");
};


export const clearHead = async () => {
  try {
    const response = await fetch(`${baseUrl}/body_update?interacting=false`, {
      headers: { "ngrok-skip-browser-warning": "69420" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Log after the request has been completed (even if there's an error)
  console.log("hello");
};