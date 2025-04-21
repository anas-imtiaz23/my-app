// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-700 text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
//         {/* Logo & About */}
//         <div>
//           <h2 className="text-2xl font-bold">WallpaperHub</h2>
//           <p className="text-gray-400 mt-2">
//             Discover and download high-quality wallpapers for your devices. Personalize your screen with stunning visuals.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold">Quick Links</h3>
//           <ul className="mt-3 space-y-2">
//             <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
//             <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
//             <li><a href="/categories" className="text-gray-400 hover:text-white">Categories</a></li>
//             <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Newsletter & Social Media */}
//         <div>
//           <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
//           <p className="text-gray-400 mt-2">Get the latest wallpapers and updates straight to your inbox.</p>
//           <div className="mt-3 flex">
//             <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-md text-gray-900" />
//             <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">Subscribe</button>
//           </div>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
//             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
//             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
//             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
//         &copy; 2024 WallpaperHub. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            WallpaperHub
          </h2>
          <p className="text-gray-400">
            Discover and download high-quality wallpapers for your devices. Personalize your screen with stunning visuals.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xl transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xl transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Explore</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="/" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Home
              </a>
            </li>
            <li>
              <a 
                href="/trending" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Trending
              </a>
            </li>
            <li>
              <a 
                href="/categories" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Categories
              </a>
            </li>
            <li>
              <a 
                href="/favorites" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Favorites
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Company</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="/about" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Blog
              </a>
            </li>
            <li>
              <a 
                href="/careers" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Careers
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-gray-400 hover:text-white flex items-center transition-colors group"
              >
                <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Get weekly updates on new wallpapers and exclusive content.
          </p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WallpaperHub. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;