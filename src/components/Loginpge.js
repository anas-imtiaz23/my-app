// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { jwtDecode } from "jwt-decode";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const isTokenValid = (token) => {
//     if (!token) return false;
//     try {
//       const decoded = jwtDecode(token);
//       return decoded.exp > Date.now() / 1000;
//     } catch (err) {
//       return false;
//     }
//   };

//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError("");

//     const token = localStorage.getItem("token");
//     if (token && isTokenValid(token)) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         if (response.status === 401) {
//           throw new Error("Invalid email or password");
//         }
//         throw new Error(data.message || "Login failed. Please try again.");
//       }

//       const authToken = data.token || data.authtoken;
//       const userName = data.name || data.username || data.user?.name;

//       if (!authToken) {
//         throw new Error("Authentication token missing in response");
//       }

//       localStorage.setItem("token", authToken);
//       if (userName) {
//         localStorage.setItem("userName", userName);
//       }

//       const storedToken = localStorage.getItem("token");
//       if (!storedToken || storedToken !== authToken) {
//         throw new Error("Failed to store authentication token");
//       }

//       navigate("/");
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(err.message);
//       localStorage.removeItem("token");
//       localStorage.removeItem("userName");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
//       <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-2xl max-w-md w-full z-10 mx-4 backdrop-blur-sm border border-gray-700">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//           <p className="text-gray-300">Please enter your credentials to login</p>
//         </div>

//         {error && (
//           <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//             <span>{error}</span>
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUser className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 className="w-full pl-10 pr-3 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 autoComplete="username"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="w-full pl-10 pr-10 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 autoComplete="current-password"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 onClick={() => setShowPassword(!showPassword)}
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? (
//                   <FaEyeSlash className="text-gray-400 hover:text-white transition duration-200" />
//                 ) : (
//                   <FaEye className="text-gray-400 hover:text-white transition duration-200" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-gray-800"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <button
//                 type="button"
//                 className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
//                 onClick={() => {/* Handle forgot password */}}
//               >
//                 Forgot password?
//               </button>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${
//                 loading ? "opacity-75 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </>
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </div>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-400">
//             Don't have an account?{" "}
//             <button
//               onClick={() => navigate("/signup")}
//               className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
//             >
//               Sign up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isTokenValid = (token) => {
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      return decoded.exp > Date.now() / 1000;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (token && isTokenValid(token)) {
      navigate(location.state?.from || "/", { replace: true });
    }
  }, [navigate, location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid email or password");
        }
        throw new Error(data.message || "Login failed. Please try again.");
      }

      const authToken = data.token || data.authtoken;
      const userName = data.name || data.username || data.user?.name;

      if (!authToken) {
        throw new Error("Authentication token missing in response");
      }

      // Store authentication data
      localStorage.setItem("authtoken", authToken);
      localStorage.setItem("username", userName);
      
      // Dispatch storage event to notify other tabs
      window.dispatchEvent(new Event("storage"));

      navigate(location.state?.from || "/", { replace: true });

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
      localStorage.removeItem("authtoken");
      localStorage.removeItem("username");
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">Please enter your credentials to login</p>
        </div>

        {error && (
          <div className="bg-red-900 bg-opacity-70 border border-red-700 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-3 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-gray-800"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button
                type="button"
                className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>

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
                  Processing...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;