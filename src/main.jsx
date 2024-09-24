import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Events from "./pages/Events/Events.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </BrowserRouter>
);
