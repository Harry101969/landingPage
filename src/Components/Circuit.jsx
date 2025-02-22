import { motion } from "framer-motion";
import { Brain, Mail, MessageSquare, Grid } from "lucide-react";
import { useState, useEffect } from "react";
const CircuitDiagram = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  // const centerX = 400;
  // const centerY = 300;
  // const leftX = -150;
  // const rightX = 900;
  // const topY = 120;
  // const middleY = 400;
  // const bottomY = 510;
  // const curveOffset = 60;

  // const createCurvedPath = (startX, startY, endX, endY, isRight) => {
  //   const midX = isRight
  //     ? Math.min(startX + curveOffset, endX - curveOffset)
  //     : Math.max(startX - curveOffset, endX + curveOffset);
  //   return `M ${startX} ${startY} L ${midX} ${startY} Q ${
  //     midX + (isRight ? curveOffset : -curveOffset)
  //   } ${startY} ${midX + (isRight ? curveOffset : -curveOffset)} ${
  //     startY + (endY > startY ? curveOffset : -curveOffset)
  //   } L ${endX} ${endY}`;
  // };

  // const pulseVariants = {
  //   initial: { pathLength: 0 },
  //   animate: {
  //     pathLength: 1,
  //     transition: {
  //       duration: 1.5,
  //       repeat: Infinity,
  //       ease: "linear",
  //       repeatDelay: 1,
  //     },
  //   },
  // };

  // const paths = [
  //   createCurvedPath(centerX, centerY, leftX + 34, topY, true),
  //   createCurvedPath(centerX + 240, centerY, leftX, middleY, false),
  //   createCurvedPath(centerX + 240, centerY, leftX, bottomY, false),
  //   createCurvedPath(centerX, centerY, rightX + 260, true),
  //   createCurvedPath(centerX + 210, centerY, rightX + 296, middleY, true),
  //   createCurvedPath(centerX + 210, centerY, rightX + 314, bottomY, true),
  // ];

  return (
    <motion.div
      className="relative z-10 w-full max-w-[1300px] mx-auto h-[350px] p-3 md:p-6 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-5 overflow-hidden">
        <motion.div
          className="w-20 h-20 rounded-lg ml-10 bg-black border border-white flex items-center justify-center"
          variants={containerVariants}
        >
          <MessageSquare className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div
          className="w-14 h-14 rounded-lg border bg-black border-white flex items-center justify-center"
          variants={containerVariants}
        >
          <Grid className="w-7 h-7 text-white" />
        </motion.div>
        <motion.div
          className="w-20 h-20 rounded-lg ml-10 border bg-black border-white flex items-center justify-center"
          variants={containerVariants}
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-5 overflow-hidden">
        <motion.div
          className="w-20 h-20 rounded-lg border border-white bg-black flex items-center justify-center"
          variants={containerVariants}
        >
          <MessageSquare className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div
          className="w-14 h-14 rounded-lg ml-10  flex items-center border border-white bg-black justify-center"
          variants={containerVariants}
        >
          <Grid className="w-7 h-7 text-white" />
        </motion.div>
        <motion.div
          className="w-20 h-20 rounded-lg  flex items-center border border-white bg-black justify-center"
          variants={containerVariants}
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      {/* <svg
        className="absolute inset-0 top-1/4 transform -translate-y-1/2 w-full h-[600px] flex items-center justify-center pl-12 overflow-hidden z-[-1] paths"
        style={{ pointerEvents: "none" }}
      >
        {paths.map((d, i) => (
          <motion.path
            key={`line-${i}`}
            d={d}
            stroke="rgba(156, 163, 175, 0.5)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 2 }}
            transition={{ duration: 1, delay: 0.3 * i }}
          />
        ))}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={`pulse-${i}`}
            d={path}
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ pathLength: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </svg> */}

      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 ml-7 rounded-xl border border-white bg-black flex items-center justify-center shadow-lg z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Brain className="w-10 h-10 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default CircuitDiagram;
