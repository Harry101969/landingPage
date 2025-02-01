import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Circuit from "./Components/Circuit";
import RayEffect from "./Components/RayEffect";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="app-background">
      <div className="grid-overlay"></div>
      <RayEffect />

      {/* Navbar at the top */}
      <Navbar isLoaded={isLoaded} />

      {/* Content below the navbar */}
      <div className="content">
        <Hero />
      </div>
      <Circuit />
    </div>
  );
};

export default App;
