// import { useEffect } from "react";
// import { useState } from "react";

// const RayEffect = () => {
//   const [loaded, isLoaded] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       isLoaded(true);
//     }, 3500);
//   }, []);

//   if (!loaded) return null;
//   return (
//     <div className="ray-container">
//       <div className="ray-effect"></div>
//       <div className="ray-effect-1"></div>
//       <div className="ray-effect-2"></div>
//     </div>
//   );
// };

// export default RayEffect;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RayEffect = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3500);
  }, []);

  if (!loaded) return null;

  const rayVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="ray-container">
      <motion.div
        className="ray-effect"
        initial="hidden"
        animate="visible"
        variants={rayVariants}
        style={{ transformOrigin: "top right" }}
      ></motion.div>
      <motion.div
        className="ray-effect-1"
        initial="hidden"
        animate="visible"
        variants={rayVariants}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        style={{ transformOrigin: "top right" }}
      ></motion.div>
      <motion.div
        className="ray-effect-2"
        initial="hidden"
        animate="visible"
        variants={rayVariants}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        style={{ transformOrigin: "top right" }}
      ></motion.div>
    </div>
  );
};

export default RayEffect;
