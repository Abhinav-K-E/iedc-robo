export const getRequest = async () => {
  try {
    const response = await fetch(
      "https://kangaroo-tops-coral.ngrok-free.app/body_update?interacting=true",
      {
        headers: { "ngrok-skip-browser-warning": "69420" }, 
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data);  
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  // Log after the request has been completed (even if there's an error)
  console.log("hello");
};
