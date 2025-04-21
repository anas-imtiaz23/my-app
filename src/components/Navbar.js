// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-16">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <a href="/" className="hover:text-gray-200">
//             WallFlow
//           </a>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8">
//           <a
//             href="#home"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#categories"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             Categories
//           </a>
//           <a
//             href="#trending"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             Trending
//           </a>
//           <a
//             href="/Loginpge"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             Login
//           </a>
//           <a
//             href="#about"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-gray-200 transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Call to Action for Desktop */}
//         <div className="hidden md:flex">
//           <a
//             href="#get-started"
//             className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors duration-300"
//           >
//             Get Started
//           </a>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-2 py-2 px-4">
//           <a href="#home" className="hover:bg-gray-700 py-2 px-4 rounded-md">
//             Home
//           </a>
//           <a href="#categories" className="hover:bg-gray-700 py-2 px-4 rounded-md">
//             Categories
//           </a>
//           <a href="#trending" className="hover:bg-gray-700 py-2 px-4 rounded-md">
//             Trending
//           </a>
//           <a href="#about" className="hover:bg-gray-700 py-2 px-4 rounded-md">
//             About
//           </a>
//           <a href="#contact" className="hover:bg-gray-700 py-2 px-4 rounded-md">
//             Contact
//           </a>
//           <a
//             href="#get-started"
//             className="bg-yellow-400 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-300"
//           >
//             Get Started
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              WallpaperHub
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-400 hover:text-white"
              >
                <FaSearch className="h-5 w-5" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-gray-800 rounded-md shadow-lg z-10 p-2">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search wallpapers..."
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#home"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#categories"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Categories
            </a>
            <a
              href="#trending"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Trending
            </a>
            <a
              href="#premium"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Premium
            </a>

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="/login"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaUser className="mr-1" />
                Login
              </a>
              <a
                href="#get-started"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3">
          <div className="flex">
            <input
              type="text"
              placeholder="Search wallpapers..."
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#categories"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Categories
            </a>
            <a
              href="#trending"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Trending
            </a>
            <a
              href="#premium"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Premium
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/login"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <FaUser className="mr-2" />
              Login
            </a>
            <a
              href="#get-started"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;