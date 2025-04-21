import React, { useState } from "react";

// Sample images for the homepage (static placeholders)
import wallpaper1 from "./images/wallpaper1.jpeg";
import wallpaper2 from "./images/wallpaper2.jpeg";
import wallpaper3 from "./images/wallpaper3.jpeg";
import wallpaper4 from "./images/wallpaper4.jpeg";

// Pixabay API Key
const API_KEY = "47078304-c3f049b27ce9e59b1bcf1e44e";

const HomePage = () => {
  const [wallpapers, setWallpapers] = useState([]); // Store wallpapers
  const [error, setError] = useState(null); // Store errors
  const [loading, setLoading] = useState(false); // Show loading state

  // Function to fetch wallpapers from Pixabay API
  const handleExploreWallpapers = async () => {
    setLoading(true); // Show loading
    setError(null); // Reset previous errors

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=wallpapers&image_type=photo&category=nature&page=1&per_page=15&safesearch=true`
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response from server:", errorText);
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      setWallpapers(data.hits); // Update wallpapers with API response
    } catch (err) {
      console.error("Error fetching wallpapers:", err.message);
      setError("Failed to fetch wallpapers. Please try again.");
    } finally {
      setLoading(false); // Hide loading
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] text-white relative"
        style={{ backgroundImage: `url(${wallpaper1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Discover Stunning Wallpapers</h1>
            <p className="text-xl mb-6">Find the perfect wallpaper to personalize your device.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
              onClick={handleExploreWallpapers}
            >
              Explore Wallpapers
            </button>
          </div>
        </div>
      </section>

      {/* Featured Wallpapers Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">Featured Wallpapers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[wallpaper2, wallpaper3, wallpaper4, wallpaper1].map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Wallpaper ${index + 1}`}
                className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">Wallpaper {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Wallpapers Section */}
      {loading && <p className="text-center py-6 text-blue-500">Loading wallpapers...</p>}

      {error && (
        <div className="text-red-500 text-center py-4">
          <p>{error}</p>
        </div>
      )}

      {wallpapers.length > 0 && (
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">Live Wallpapers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wallpapers.map((wallpaper) => (
              <div key={wallpaper.id} className="relative group rounded-lg overflow-hidden shadow-lg">
                <img
                  src={wallpaper.webformatURL}
                  alt={wallpaper.tags}
                  className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{wallpaper.tags}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Wallpaper Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
