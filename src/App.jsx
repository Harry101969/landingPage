// import { useState, useEffect } from "react";
// import Navbar from "./Components/Navbar";
// import "./App.css";
// import Hero from "./Components/Hero";
// import Circuit from "./Components/Circuit";
// import RayEffect from "./Components/RayEffect";

// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className="app-background">
//       <div className="grid-overlay"></div>
//       <RayEffect />

//       {/* Navbar at the top */}
//       <Navbar isLoaded={isLoaded} />

//       {/* Content below the navbar */}
//       <div className="content">
//         <Hero />
//       </div>
//       <Circuit />
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Circuit from "./Components/Circuit";
import RayEffect from "./Components/RayEffect";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // After all letters are animated (2.5s) + some extra time for visual effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const letters = "GCORE".split("");
  const letterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="loader-container"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-text">
              {letters.map((letter, index) => (
                <motion.span
                  key={letter}
                  className="loader-letter"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.3,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  );
};

export default App;
