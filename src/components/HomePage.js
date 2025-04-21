import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiCall } from "./apiCall";
import { FaHeart, FaRegHeart, FaDownload, FaShare, FaImage, FaSearch } from "react-icons/fa";

// Sample static images
import wallpaper1 from "./images/wallpaper1.jpeg";
import wallpaper2 from "./images/wallpaper2.jpeg";
import wallpaper3 from "./images/wallpaper3.jpeg";
import wallpaper4 from "./images/wallpaper4.jpeg";

const API_BASE_URL = "http://localhost:5000/api/auth";

const HomePage = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = [
    "Nature", "Technology", "Abstract", "Minimal", 
    "Animals", "Architecture", "Space", "Sports", "Art"
  ];

  const fetchFavorites = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // No token means user isn't logged in, which is fine
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/favorites`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          // Token is invalid or expired
          localStorage.removeItem('token');
          setError("Session expired. Please login again.");
          return;
        }
        throw new Error(`Failed to fetch favorites: ${response.statusText}`);
      }
      
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      // Don't show error if it's just because user isn't logged in
      if (!error.message.includes("401")) {
        setError("Failed to load favorites. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleExploreWallpapers = async (category) => {
    setLoading(true);
    setError(null);
    setActiveCategory(category);

    try {
      const params = {
        q: category || "wallpapers",
        image_type: "photo",
        per_page: 20,
      };

      const result = await apiCall(params);
      
      if (result.success) {
        setWallpapers(result.data.hits);
      } else {
        throw new Error(result.msg || "Failed to fetch wallpapers");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    setActiveCategory(`Search: ${searchQuery}`);

    try {
      const params = {
        q: searchQuery,
        image_type: "photo",
        per_page: 20,
      };

      const result = await apiCall(params);
      
      if (result.success) {
        setWallpapers(result.data.hits);
      } else {
        throw new Error(result.msg || "Failed to fetch wallpapers");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = filename || "wallpaper.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobURL);
    } catch (error) {
      console.error("Download failed:", error);
      setError("Failed to download wallpaper");
    }
  };

  const handleSetWallpaper = (url) => {
    if (window.innerWidth <= 768) {
      alert("Long press the image in the new tab and select 'Set as wallpaper'.");
      window.open(url, "_blank");
    } else {
      handleDownload(url, "wallpaper.jpg");
      alert("Wallpaper downloaded. Right-click the image and select 'Set as wallpaper'.");
    }
  };

  const handleShare = async (url) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this wallpaper!",
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Sharing failed:", error);
      setError("Failed to share wallpaper");
    }
  };

  const toggleFavorite = async (wallpaper) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setShowLoginPrompt(true);
      setError("Please login to add favorites");
      return;
    }

    const isFavorite = favorites.some(fav => fav.wallpaperId === wallpaper.id.toString());
    
    try {
      const url = `${API_BASE_URL}/favorites${isFavorite ? `/${wallpaper.id}` : ''}`;
      const method = isFavorite ? 'DELETE' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: !isFavorite ? JSON.stringify({
          wallpaperId: wallpaper.id.toString(),
          webformatURL: wallpaper.webformatURL,
          largeImageURL: wallpaper.largeImageURL
        }) : undefined
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          setError('Session expired. Please login again.');
          navigate('/login');
          return;
        }
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      if (isFavorite) {
        setFavorites(favorites.filter(fav => fav.wallpaperId !== wallpaper.id.toString()));
      } else {
        setFavorites([...favorites, result]);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">Login Required</h3>
            <p className="mb-4 text-gray-300">You need to login to add favorites.</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowLoginPrompt(false)}
                className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center h-[500px] text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${wallpaper1})` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Stunning Wallpapers</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Find the perfect wallpaper to personalize your devices with our premium collection.</p>
          
          <form onSubmit={handleSearch} className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Search wallpapers..."
              className="w-full py-4 pl-12 pr-4 rounded-full bg-gray-800 bg-opacity-70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaSearch size={20} />
            </button>
          </form>
          
          <button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            onClick={() => handleExploreWallpapers("")}
            disabled={loading}
          >
            {loading ? "Loading..." : "Explore All Wallpapers"}
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 text-center bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white">Browse Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-3 px-6 rounded-full transition duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                onClick={() => handleExploreWallpapers(category)}
                disabled={loading}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white p-4 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
            {error.includes("login") && (
              <button 
                onClick={() => navigate('/login')}
                className="ml-4 text-blue-400 hover:text-blue-300 underline"
              >
                Go to Login
              </button>
            )}
          </div>
        </div>
      )}

      {/* Featured Wallpapers Section */}
      <section className="py-16 px-4 text-center bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-white">Featured Wallpapers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[wallpaper2, wallpaper3, wallpaper4, wallpaper1].map((wallpaper, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition duration-500">
                <img
                  src={wallpaper}
                  alt={`Featured Wallpaper ${index + 1}`}
                  className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <button
                    className="absolute top-4 right-4 text-red-500 bg-white/90 p-2 rounded-full hover:bg-white transition"
                    onClick={() => setShowLoginPrompt(true)}
                  >
                    <FaRegHeart size={18} />
                  </button>
                  <div className="w-full flex justify-center gap-3">
                    <button
                      onClick={() => handleDownload(wallpaper, `featured-wallpaper-${index}.jpg`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                      title="Download"
                    >
                      <FaDownload size={16} />
                    </button>
                    <button
                      onClick={() => handleSetWallpaper(wallpaper)}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md"
                      title="Set as Wallpaper"
                    >
                      <FaImage size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Wallpapers Section */}
      {wallpapers.length > 0 && (
        <section className="py-16 px-4 text-center bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-white">
              {activeCategory ? `${activeCategory} Wallpapers` : "Latest Wallpapers"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wallpapers.map((wallpaper) => {
                const isFavorite = favorites.some(fav => fav.wallpaperId === wallpaper.id.toString());
                
                return (
                  <div key={wallpaper.id} className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition duration-500">
                    <img
                      src={wallpaper.webformatURL}
                      alt={wallpaper.tags || "Wallpaper"}
                      className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-4">
                      <button
                        className="absolute top-4 right-4 text-red-500 bg-white/90 p-2 rounded-full hover:bg-white transition"
                        onClick={() => toggleFavorite(wallpaper)}
                      >
                        {isFavorite ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
                      </button>
                      
                      <div className="w-full flex justify-center gap-3">
                        <button
                          onClick={() => handleDownload(wallpaper.largeImageURL, `wallpaper-${wallpaper.id}.jpg`)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                          title="Download"
                        >
                          <FaDownload size={16} />
                        </button>
                        <button
                          onClick={() => handleSetWallpaper(wallpaper.largeImageURL)}
                          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md"
                          title="Set as Wallpaper"
                        >
                          <FaImage size={16} />
                        </button>
                        <button
                          onClick={() => handleShare(wallpaper.webformatURL)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                          title="Share"
                        >
                          <FaShare size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <section className="py-16 px-4 text-center bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-white">Your Favorites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((favorite) => (
                <div key={favorite._id} className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition duration-500">
                  <img
                    src={favorite.webformatURL}
                    alt="Favorite Wallpaper"
                    className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-4">
                    <button
                      className="absolute top-4 right-4 text-red-500 bg-white/90 p-2 rounded-full hover:bg-white transition"
                      onClick={() => toggleFavorite({
                        id: favorite.wallpaperId,
                        webformatURL: favorite.webformatURL,
                        largeImageURL: favorite.largeImageURL
                      })}
                    >
                      <FaHeart size={18} />
                    </button>
                    
                    <div className="w-full flex justify-center gap-3">
                      <button
                        onClick={() => handleDownload(favorite.largeImageURL, `wallpaper-${favorite.wallpaperId}.jpg`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                        title="Download"
                      >
                        <FaDownload size={16} />
                      </button>
                      <button
                        onClick={() => handleSetWallpaper(favorite.largeImageURL)}
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md"
                        title="Set as Wallpaper"
                      >
                        <FaImage size={16} />
                      </button>
                      <button
                        onClick={() => handleShare(favorite.webformatURL)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                        title="Share"
                      >
                        <FaShare size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your device?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of users who refresh their screens daily with our wallpapers.</p>
          <button
            onClick={() => handleExploreWallpapers("trending")}
            className="bg-white text-blue-900 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            Explore Trending Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
