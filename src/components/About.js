import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <span className="font-semibold">Wallpaper Hub</span>, your ultimate destination for high-quality, stunning wallpapers.
          We believe that the right wallpaper can transform your device, adding a touch of beauty, creativity, and inspiration to your daily life.
        </p>
      </div>
      
      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          Our mission is to provide a seamless and enjoyable experience for wallpaper lovers worldwide. We offer a diverse
          collection of high-resolution images across various categories, ensuring that everyone finds something that suits their style.
        </p>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-blue-500">High-Quality Images</h3>
            <p className="text-gray-600 mt-2">Our wallpapers are carefully curated to ensure top-notch quality and resolution.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-green-500">Diverse Categories</h3>
            <p className="text-gray-600 mt-2">From nature to technology, we offer wallpapers in a wide range of categories.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-red-500">User-Friendly Experience</h3>
            <p className="text-gray-600 mt-2">Our platform is designed to be intuitive, making it easy to find and download wallpapers.</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-12 bg-blue-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">
          Become part of our growing community and stay updated with the latest wallpaper trends.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100">
          Explore Wallpapers
        </button>
      </div>
    </div>
  );
};

export default AboutPage;