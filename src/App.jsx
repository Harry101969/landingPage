import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="app-background">
      <div className="grid-overlay"></div>

      {/* Navbar at the top */}
      <Navbar isLoaded={isLoaded} />

      {/* Content below the navbar */}
      <div className="content"></div>
    </div>
  );
};

export default App;
