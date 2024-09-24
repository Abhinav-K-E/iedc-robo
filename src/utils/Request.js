export const getRequest = async () => {
  try {
    const response = await fetch(
      "https://kangaroo-tops-coral.ngrok-free.app/body_update?interacting=true",
      {
        headers: { "ngrok-skip-browser-warning": "69420" },
      }
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log("hello");
};
