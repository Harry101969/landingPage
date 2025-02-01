import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="app-background">
      <div className="grid-overlay"></div>
      <div className="ray-container">
        <div className="ray-effect"></div>
        <div className="ray-effect-1"></div>
        <div className="ray-effect-2"></div>
      </div>

      {/* Navbar at the top */}
      <Navbar isLoaded={isLoaded} />

      {/* Content below the navbar */}
      <div className="content">
        <Hero />
      </div>
    </div>
  );
};

export default App;
