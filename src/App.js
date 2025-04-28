// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Navbar from './components/Navbar'
// import AboutPage from "./components/About";
// import Footer from "./components/Footer";
// import LoginPage from "./components/Loginpge";
// import SignupPage from "./components/Signuppage";
// import ManualUpload from "./components/Manualupload";
// import Gallery from "./components/Gallery";

// function App() {
//   return (
//     <Router> {/* Wrap the whole app */}
//     <Navbar />
//       <Routes>
//       {/* <Route path="/" element={<Navbar /> } /> */}
//       <Route path="/" element={<><HomePage/></>} /> {/* Default route */}
//       <Route path="/about" element={<><AboutPage /></>} /> {/* Default route */}
//       <Route path="/login" element={<><LoginPage /></>} /> {/* Default route */}
//       <Route path="/signup" element={<><SignupPage /></>} /> {/* Default route */}
//       <Route path="/manual" element={<><ManualUpload /></>} /> {/* Default route */}
//       <Route path="/new" element={<><Gallery /></>} /> {/* Default route */}
//       </Routes>
//       <Footer />
//     </Router>
    
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';
import AboutPage from "./components/About";
import Footer from "./components/Footer";
import LoginPage from "./components/Loginpge";
import SignupPage from "./components/Signuppage";
import ManualUpload from "./components/Manualupload";
import Gallery from "./components/Gallery";
import './App.css'; // Import custom styles

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/manual" element={<ManualUpload />} />
            <Route path="/new" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
