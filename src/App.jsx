import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Circuit from "./Components/Circuit";
import RayEffect from "./Components/RayEffect";
import Loader from "./Components/Loader";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      <div className="app-background">
        <div className="grid-overlay"></div>
        <RayEffect />
        <Navbar isLoaded={isLoaded} />
        <div className="content">
          <Hero />
        </div>
        <Circuit />
      </div>
    </>
  );
};

export default App;
