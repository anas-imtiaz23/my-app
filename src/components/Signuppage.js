// import React, { useState } from "react";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     acceptTerms: false,
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     const payload = {
//       name: formData.name.trim(),
//       email: formData.email.trim(),
//       password: formData.password.trim(),
//     };

//     console.log("📤 Sending request with:", payload);

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();
//       console.log("📩 Server response:", data);

//       if (!response.ok) {
//         throw new Error(data.message || "Signup failed");
//       }

//       setSuccess("🎉 Signup successful! Welcome to Wallpaper Hub.");
//       setFormData({ name: "", email: "", password: "", acceptTerms: false });
//     } catch (err) {
//       console.error("❌ Signup error:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-center mb-4">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">Name</label>
//             <div className="flex items-center border rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaUser /></span>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border-l outline-none"
//                 placeholder="Enter your name"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">Email</label>
//             <div className="flex items-center border rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaEnvelope /></span>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border-l outline-none"
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">Password</label>
//             <div className="flex items-center border rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaLock /></span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border-l outline-none"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 className="px-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "👁" : "🙈"}
//               </button>
//             </div>
//           </div>

//           {/* Terms & Conditions */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               name="acceptTerms"
//               checked={formData.acceptTerms}
//               onChange={handleChange}
//               required
//               className="mr-2"
//             />
//             <span className="text-gray-600">I agree to the Terms & Conditions</span>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Already have an account? */}
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <a href="/login" className="text-blue-500">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      setSuccess("🎉 Signup successful! Welcome to Wallpaper Hub.");
      setFormData({ name: "", email: "", password: "", acceptTerms: false });
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl max-w-md w-full z-10 mx-4 backdrop-blur-sm border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
          <p className="text-gray-300">Join our community today</p>
        </div>

        {error && (
          <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-900 bg-opacity-70 border border-green-700 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                className="w-full pl-10 pr-3 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                className="w-full pl-10 pr-3 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full pl-10 pr-10 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400 hover:text-white transition duration-200" />
                ) : (
                  <FaEye className="text-gray-400 hover:text-white transition duration-200" />
                )}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-gray-800"
            />
            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-300">
              I agree to the <a href="#" className="text-blue-400 hover:text-blue-300">Terms and Conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
