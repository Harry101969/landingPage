// // // import { useEffect, useState } from "react";
// // // import { Box, Grid, Cpu, Layout, Boxes } from "lucide-react";
// // // const Circuit = () => {
// // //   const [isLoaded, setIsLoaded] = useState(false);

// // //   useEffect(() => {
// // //     // Start the loading sequence
// // //     setIsLoaded(true);
// // //   }, []);
// // //   return (
// // //     <div
// // //       className={`relative transition-all duration-1000 delay-1200 ${
// // //         isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
// // //       }`}
// // //     >
// // //       <div className="absolute inset-0 " />

// // //       {/* SVG for connecting lines */}
// // //       <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
// // //         {/* Left connections */}
// // //         <line x1="33%" y1="20%" x2="50%" y2="50%" className="circuit-line" />
// // //         <line x1="33%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
// // //         <line x1="33%" y1="80%" x2="50%" y2="50%" className="circuit-line" />

// // //         {/* Right connections */}
// // //         <line x1="67%" y1="20%" x2="50%" y2="50%" className="circuit-line" />
// // //         <line x1="67%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
// // //         <line x1="67%" y1="80%" x2="50%" y2="50%" className="circuit-line" />
// // //       </svg>

// // //       <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto relative">
// // //         {/* Left icons */}
// // //         <div className="space-y-5">
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Box className="w-8 h-8" />
// // //           </div>
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Grid className="w-8 h-8" />
// // //           </div>
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Layout className="w-8 h-8" />
// // //           </div>
// // //         </div>

// // //         {/* Center AI icon */}
// // //         <div className="flex items-center justify-center">
// // //           <div className="bg-gray-900 p-6 rounded-lg shadow-glow-lg">
// // //             <Cpu className="w-16 h-16" />
// // //             <div className="mt-2 text-center font-bold">AI</div>
// // //           </div>
// // //         </div>

// // //         {/* Right icons */}
// // //         <div className="space-y-8">
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Boxes className="w-8 h-8" />
// // //           </div>
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Grid className="w-8 h-8" />
// // //           </div>
// // //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow">
// // //             <Layout className="w-8 h-8" />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Circuit;

// // import { useState, useEffect } from "react";

// // const CircuitDiagram = () => {
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   useEffect(() => {
// //     setIsLoaded(true);
// //   }, []);

// //   // Define the positions for the icons
// //   const icons = [
// //     { id: "top-left", symbol: "A", x: 10, y: 10 },
// //     { id: "middle-left", symbol: "G", x: 10, y: 50 },
// //     { id: "bottom-left", symbol: "M", x: 10, y: 90 },
// //     { id: "top-right", symbol: "S", x: 90, y: 10 },
// //     { id: "middle-right", symbol: "#", x: 90, y: 50 },
// //     { id: "bottom-right", symbol: "◎", x: 90, y: 90 },
// //   ];

// //   return (
// //     <div className="w-[400px] h-[300px] bg-black relative overflow-hidden">
// //       <svg className="absolute inset-0 w-full h-full">
// //         <defs>
// //           {icons.map((icon, index) => (
// //             <linearGradient
// //               key={`gradient-${icon.id}`}
// //               id={`line-gradient-${icon.id}`}
// //               gradientUnits="userSpaceOnUse"
// //             >
// //               <stop offset="0%" stopColor="#4b5563" />
// //               <stop offset="50%" stopColor="#4b5563">
// //                 <animate
// //                   attributeName="offset"
// //                   values="0;1"
// //                   dur={`${2 + index * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //               </stop>
// //               <stop offset="50%" stopColor="#f97316">
// //                 <animate
// //                   attributeName="offset"
// //                   values="0;1"
// //                   dur={`${2 + index * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //               </stop>
// //               <stop offset="100%" stopColor="#4b5563" />
// //             </linearGradient>
// //           ))}
// //         </defs>

// //         {/* Connection Lines */}
// //         {icons.map((icon, index) => (
// //           <path
// //             key={`path-${icon.id}`}
// //             d={`M ${icon.x}% 50% L 50% 50%`}
// //             className={`transition-all duration-1000`}
// //             style={{
// //               stroke: `url(#line-gradient-${icon.id})`,
// //               strokeWidth: 2,
// //               fill: "none",
// //               opacity: isLoaded ? 1 : 0,
// //               transitionDelay: `${index * 100}ms`,
// //             }}
// //           />
// //         ))}
// //       </svg>

// //       {/* Central AI Node */}
// //       <div
// //         className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ${
// //           isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
// //         }`}
// //       >
// //         AI
// //       </div>

// //       {/* Peripheral Nodes */}
// //       {icons.map((icon, index) => (
// //         <div
// //           key={icon.id}
// //           className={`absolute w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ${
// //             isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
// //           }`}
// //           style={{
// //             left: `${icon.x}%`,
// //             top: `${icon.y}%`,
// //             transform: "translate(-50%, -50%)",
// //             transitionDelay: `${index * 100}ms`,
// //           }}
// //         >
// //           {icon.symbol}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CircuitDiagram;

// // import { useState, useEffect } from "react";

// // const CircuitDiagram = () => {
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   useEffect(() => {
// //     setIsLoaded(true);
// //   }, []);

// //   // Define the positions for the icons with more spread
// //   const icons = [
// //     { id: "top-left", symbol: "A", x: 20, y: 20 },
// //     { id: "middle-left", symbol: "G", x: 20, y: 50 },
// //     { id: "bottom-left", symbol: "M", x: 20, y: 80 },
// //     { id: "top-right", symbol: "S", x: 80, y: 20 },
// //     { id: "middle-right", symbol: "#", x: 80, y: 50 },
// //     { id: "bottom-right", symbol: "◎", x: 80, y: 80 },
// //   ];

// //   // Helper function to create connection paths
// //   const getConnectionPath = (icon) => {
// //     const centerX = 50;
// //     const centerY = 50;

// //     // Create slightly curved paths for non-middle icons
// //     if (icon.y !== 50) {
// //       const controlX = icon.x < 50 ? 35 : 65;
// //       return `M ${icon.x} ${icon.y} Q ${controlX} ${icon.y}, ${centerX} ${centerY}`;
// //     }
// //     // Straight lines for middle icons
// //     return `M ${icon.x} ${icon.y} L ${centerX} ${centerY}`;
// //   };

// //   return (
// //     <div className="h-[300px] bg-transparent relative overflow-hidden">
// //       {/* Base connection lines */}
// //       <svg className="absolute inset-0 w-full h-full">
// //         {icons.map((icon) => (
// //           <path
// //             key={`base-${icon.id}`}
// //             d={getConnectionPath(icon)}
// //             className="stroke-gray-600"
// //             style={{
// //               strokeWidth: 1,
// //               fill: "none",
// //             }}
// //           />
// //         ))}
// //       </svg>

// //       {/* Animated glow effect */}
// //       <svg className="absolute inset-0 w-full h-full">
// //         <defs>
// //           {icons.map((icon, index) => (
// //             <linearGradient
// //               key={`gradient-${icon.id}`}
// //               id={`line-gradient-${icon.id}`}
// //               gradientUnits="userSpaceOnUse"
// //             >
// //               <stop offset="0%" stopColor="#4b5563" />
// //               <stop offset="50%" stopColor="#4b5563">
// //                 <animate
// //                   attributeName="offset"
// //                   values="0;1"
// //                   dur={`${2 + index * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //               </stop>
// //               <stop offset="50%" stopColor="#f97316">
// //                 <animate
// //                   attributeName="offset"
// //                   values="0;1"
// //                   dur={`${2 + index * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //               </stop>
// //               <stop offset="100%" stopColor="#4b5563" />
// //             </linearGradient>
// //           ))}
// //         </defs>

// //         {icons.map((icon, index) => (
// //           <path
// //             key={`glow-${icon.id}`}
// //             d={getConnectionPath(icon)}
// //             className={`transition-all duration-1000`}
// //             style={{
// //               stroke: `url(#line-gradient-${icon.id})`,
// //               strokeWidth: 2,
// //               fill: "none",
// //               opacity: isLoaded ? 0.5 : 0,
// //               filter: "drop-shadow(0 0 1px #f97316)",
// //               transitionDelay: `${index * 100}ms`,
// //             }}
// //           />
// //         ))}
// //       </svg>

// //       {/* Central AI Node */}
// //       <div
// //         className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ${
// //           isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
// //         } shadow-lg`}
// //       >
// //         AI
// //       </div>

// //       {/* Peripheral Nodes */}
// //       {icons.map((icon, index) => (
// //         <div
// //           key={icon.id}
// //           className={`absolute w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-1000 ${
// //             isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
// //           } shadow-lg`}
// //           style={{
// //             left: `${icon.x}%`,
// //             top: `${icon.y}%`,
// //             transform: "translate(-50%, -50%)",
// //             transitionDelay: `${index * 100}ms`,
// //           }}
// //         >
// //           {icon.symbol}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CircuitDiagram;
// // import { Box, Grid, Cpu, Layout, Boxes } from "lucide-react";
// // import "../../src/App.css";
// // import { motion } from "framer-motion";

// // const Circuit = () => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 1, delay: 1 }}
// //       className="circuit-container bg-transparent mt-2 h-1/2 w-full flex items-center justify-center"
// //     >
// //       <div className="flex items-center space-x-16">
// //         {/* The left side */}
// //         <div className="flex flex-col items-center space-y-16">
// //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
// //             <Box className="w-8 h-8 text-white" />
// //           </div>
// //           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex justify-end mr-120">
// //             <Grid className="w-8 h-8 text-white" />
// //           </div>
// //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
// //             <Layout className="w-8 h-8 text-white" />
// //           </div>
// //         </div>

// //         {/* The central AI icon */}
// //         <div className="relative">
// //           <div className="flex items-center justify-center bg-gray-900 rounded-full shadow-glow h-20 w-20">
// //             <Cpu className="w-10 h-10" style={{ fill: "url(#gradient)" }} />
// //             <svg width="0" height="0">
// //               <defs>
// //                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
// //                   <stop
// //                     offset="0%"
// //                     style={{ stopColor: "white", stopOpacity: 1 }}
// //                   />
// //                   <stop
// //                     offset="100%"
// //                     style={{ stopColor: "steelgray", stopOpacity: 1 }}
// //                   />
// //                 </linearGradient>
// //               </defs>
// //             </svg>
// //           </div>
// //         </div>

// //         {/* The right side */}
// //         <div className="flex flex-col items-center space-y-16">
// //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-end">
// //             <Boxes className="w-8 h-8 text-white" />
// //           </div>
// //           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex items-center ml-120 justify-center">
// //             <Grid className="w-8 h-8 text-white" />
// //           </div>
// //           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-center">
// //             <Layout className="w-8 h-8 text-white" />
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Circuit;

// import { Box, Grid, Cpu, Layout, Boxes } from "lucide-react";
// import { motion } from "framer-motion";
// import "../../src/App.css";

// const Circuit = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="relative circuit-container bg-transparent mt-2 h-1/2 w-full flex items-center justify-center"
//     >
//       {/* SVG for Circuit Lines */}
//       <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
//         {/* Left connections */}
//         <line x1="3%" y1="10%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="3%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="3%" y1="90%" x2="50%" y2="50%" className="circuit-line" />

//         {/* Right connections */}
//         <line x1="97%" y1="10%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="97%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="97%" y1="90%" x2="50%" y2="50%" className="circuit-line" />
//       </svg>

//       <div className="flex items-center space-x-32 relative">
//         {/* Left Side Icons */}
//         <div className="flex flex-col items-center space-y-16">
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
//             <Box className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex justify-end mr-120">
//             <Grid className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
//             <Layout className="w-8 h-8 text-white" />
//           </div>
//         </div>

//         {/* Central AI Icon */}
//         <div className="relative">
//           <div className="flex items-center justify-center bg-gray-900 rounded-full shadow-glow h-20 w-20 relative">
//             <Cpu className="w-10 h-10 text-gradient" />
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex flex-col items-center space-y-16">
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-end">
//             <Boxes className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex items-center ml-120 justify-center">
//             <Grid className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-center">
//             <Layout className="w-8 h-8 text-white" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Circuit;

// import { Box, Grid, Cpu, Layout, Boxes } from "lucide-react";
// import { motion } from "framer-motion";
// import "../../src/App.css";

// const Circuit = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="relative circuit-container bg-transparent mt-2 h-1/2 w-full flex items-center justify-center"
//     >
//       {/* SVG for Circuit Lines */}
//       <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
//         {/* Left connections */}
//         <line x1="3%" y1="10%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="3%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="3%" y1="90%" x2="50%" y2="50%" className="circuit-line" />

//         {/* Right connections */}
//         <line x1="97%" y1="10%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="97%" y1="50%" x2="50%" y2="50%" className="circuit-line" />
//         <line x1="97%" y1="90%" x2="50%" y2="50%" className="circuit-line" />
//       </svg>

//       <div className="flex items-center space-x-32 relative">
//         {/* Left Side Icons */}
//         <div className="flex flex-col items-center space-y-16">
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
//             <Box className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex justify-end mr-120">
//             <Grid className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center mr-110 justify-center">
//             <Layout className="w-8 h-8 text-white" />
//           </div>
//         </div>

//         {/* Central AI Icon */}
//         <div className="relative">
//           <div className="flex items-center justify-center bg-gray-900 rounded-full shadow-glow h-20 w-20 relative">
//             <Cpu className="w-10 h-10 text-gradient" />
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex flex-col items-center space-y-16">
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-end">
//             <Boxes className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-2 rounded-lg shadow-glow flex items-center ml-120 justify-center">
//             <Grid className="w-8 h-8 text-white" />
//           </div>
//           <div className="bg-gray-900 p-4 rounded-lg shadow-glow flex items-center ml-110 justify-center">
//             <Layout className="w-8 h-8 text-white" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Circuit;
