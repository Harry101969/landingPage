// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 500); // Adjust delay time as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-32">
//         {/* Beta release badge */}
//         <div
//           className={`flex justify-center mb-6 transition-all duration-500 delay-700 ${
//             isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
//           }`}
//         >
//           <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
//             <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
//             Beta release
//           </span>
//         </div>

//         {/* Hero content */}
//         <div className="text-center mb-12">
//           <h1
//             className={`text-5xl md:text-6xl font-bold mb-10 overflow-hidden bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-500 delay-900 ${
//               isLoaded
//                 ? "translate-y-0 opacity-100"
//                 : "-translate-y-10 opacity-0"
//             }`}
//           >
//             Inference at the Edge
//           </h1>
//           <p
//             className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 transition-all duration-500 delay-1000 ${
//               isLoaded
//                 ? "translate-y-0 opacity-100"
//                 : "-translate-y-10 opacity-0"
//             }`}
//           >
//             Boost your AI Applications speed and efficiency globally by bringing
//             inference closer to your users. Enjoy customization and
//             cost-efficiency for a best-in-class inference experience.
//           </p>
//           <div
//             className={`flex justify-center gap-4 transition-all duration-500 delay-1100 ${
//               isLoaded
//                 ? "translate-y-0 opacity-100"
//                 : "-translate-y-10 opacity-0"
//             }`}
//           >
//             <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
//               Get started
//             </button>
//             <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-md hover:border-gray-600 transition-colors">
//               Book a demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 ">
        {/* Beta release badge */}
        <div
          className={`flex justify-center transition-all duration-500 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-transparent border border-gray-700 text-gray-300">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
            Beta release
          </span>
        </div>
        {/* Hero content */}
        <div className="text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-3 leading-tight md:leading-tight overflow-hidden bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-500 delay-900 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <span className="block pb-1">Inference at the Edge</span>
          </h1>
          <p
            className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 transition-all duration-500 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            Boost your AI Applications speed and efficiency globally by bringing
            inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference experience.
          </p>
          <div
            className={`flex justify-center gap-4 transition-all duration-500 delay-1100 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors cursor-pointer">
              Get started
            </button>
            <button className="px-6 py-2 border border-gray-700 text-gray-300 rounded-full hover:border-gray-600 transition-colors cursor-pointer">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
