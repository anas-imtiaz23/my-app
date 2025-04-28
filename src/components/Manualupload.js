// import React, { useState } from 'react';
// import axios from 'axios';

// function ManualUpload() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) return alert('Please select an image');

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/upload/image', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       alert('Wallpaper uploaded successfully!');
//       setImage(null);
//       setPreview(null);
//     } catch (err) {
//       console.error(err);
//       alert('Upload failed');
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Upload Wallpaper</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         {preview && <img src={preview} alt="Preview" className="h-48 object-cover" />}
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default ManualUpload;
import React, { useState } from 'react';
import axios from 'axios';

function ManualUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return alert('Please select an image');

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/upload/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Wallpaper uploaded successfully!');
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="p-6 bg-gray-800 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Upload Wallpaper</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-white"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-48 object-cover rounded-lg border border-gray-700"
            />
          )}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManualUpload;
