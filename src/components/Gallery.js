// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaDownload, FaShare, FaImage } from "react-icons/fa";

// function Gallery() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get('http://localhost:5000/api/auth/images');
//         setImages(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load images. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleDownload = async (url, filename = "wallpaper.jpg") => {
//     try {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       const blobURL = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = blobURL;
//       link.download = filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(blobURL);
//     } catch (error) {
//       console.error("Download failed:", error);
//       setError("Failed to download wallpaper");
//     }
//   };

//   const handleSetWallpaper = (url) => {
//     if (window.innerWidth <= 768) {
//       alert("Long press the image in the new tab and select 'Set as wallpaper'.");
//       window.open(url, "_blank");
//     } else {
//       handleDownload(url, "wallpaper.jpg");
//       alert("Wallpaper downloaded. Right-click the image and select 'Set as wallpaper'.");
//     }
//   };

//   const handleShare = async (url) => {
//     try {
//       if (navigator.share) {
//         await navigator.share({
//           title: "Check out this wallpaper!",
//           url: url,
//         });
//       } else {
//         await navigator.clipboard.writeText(url);
//         alert("Link copied to clipboard!");
//       }
//     } catch (error) {
//       console.error("Sharing failed:", error);
//       setError("Failed to share wallpaper");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-white text-xl">Loading images...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white p-4 rounded-lg">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 py-8 px-4">
//       <h1 className="text-3xl font-semibold text-white mb-8 text-center">Gallery</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {images.map((url, index) => (
//           <div key={index} className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition duration-500">
//             <img
//               src={url}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
//               <div className="w-full flex justify-center gap-3">
//                 <button
//                   onClick={() => handleShare(url)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
//                   title="Share"
//                 >
//                   <FaShare size={16} />
//                 </button>
//                 <button
//                   onClick={() => handleDownload(url, `gallery-wallpaper-${index}.jpg`)}
//                   className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md"
//                   title="Download"
//                 >
//                   <FaDownload size={16} />
//                 </button>
//                 <button
//                   onClick={() => handleSetWallpaper(url)}
//                   className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition shadow-md"
//                   title="Set as Wallpaper"
//                 >
//                   <FaImage size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaDownload, FaShare, FaImage } from "react-icons/fa";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:5000/api/auth/images');
        setImages(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDownload = async (url, filename = "wallpaper.jpg") => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = filename;
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-white text-xl">Loading images...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <h1 className="text-3xl font-semibold text-white mb-8 text-center">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((url, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition duration-500">
            <img
              src={url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <div className="w-full flex justify-center gap-3">
                <button
                  onClick={() => handleShare(url)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-md"
                  title="Share"
                >
                  <FaShare size={16} />
                </button>
                <button
                  onClick={() => handleDownload(url, `gallery-wallpaper-${index}.jpg`)}
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md"
                  title="Download"
                >
                  <FaDownload size={16} />
                </button>
                <button
                  onClick={() => handleSetWallpaper(url)}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition shadow-md"
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
  );
}

export default Gallery;
