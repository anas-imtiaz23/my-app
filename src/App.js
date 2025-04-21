import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'
import AboutPage from "./components/About";
import Footer from "./components/Footer";
import LoginPage from "./components/Loginpge";
import SignupPage from "./components/Signuppage";
import ManualUpload from "./components/Manualupload";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router> {/* Wrap the whole app */}
    <Navbar />
      <Routes>
      {/* <Route path="/" element={<Navbar /> } /> */}
      <Route path="/" element={<><HomePage/></>} /> {/* Default route */}
      <Route path="/about" element={<><AboutPage /></>} /> {/* Default route */}
      <Route path="/login" element={<><LoginPage /></>} /> {/* Default route */}
      <Route path="/signup" element={<><SignupPage /></>} /> {/* Default route */}
      <Route path="/manual" element={<><ManualUpload /></>} /> {/* Default route */}
      <Route path="/new" element={<><Gallery /></>} /> {/* Default route */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Navbar from './components/Navbar';
// import AboutPage from "./components/About";
// import Footer from "./components/Footer";
// import LoginPage from "./components/Loginpge";
// import SignupPage from "./components/Signuppage";

// // Enhanced Auth Provider Component
// const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     token: localStorage.getItem('token') || null,
//     isAuthenticated: !!localStorage.getItem('token')
//   });

//   const setAuthInfo = (token) => {
//     localStorage.setItem('token', token);
//     setAuthState({
//       token,
//       isAuthenticated: true
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setAuthState({
//       token: null,
//       isAuthenticated: false
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ ...authState, setAuthInfo, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Enhanced Protected Route
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = React.useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login', { replace: true });
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? children : null;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/signup" element={<SignupPage />} />
              
//               <Route path="/" element={
//                 <ProtectedRoute>
//                   <HomePage />
//                 </ProtectedRoute>
//               } />
              
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


