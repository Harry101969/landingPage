import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Loader;
