// Importing React and necessary hooks
import React, { useState } from "react";
// Importing Router components for routing
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// Importing components for pages
import Home from "./components/Home";
import About from "./components/About";
import History from "./components/History";
// Importing Context provider for state management
import { CounterProvider } from "./components/CounterContext";
// Importing CSS file for styling
import "./App.css";

function App() {
  // useState hook to manage dark mode state (default: false)
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode when called
  const toggleDarkMode = () => {
    // Toggling the darkMode state between true and false
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    // Wrapping the entire app with CounterProvider to provide context
    <CounterProvider>
      {/* Setting up React Router for navigation */}
      <Router>
        {/* Header section with dynamic dark/light mode classes */}
        <header className={`app-header ${darkMode ? "dark" : "light"}`}>
          <nav className="app-nav">
            {/* Logo section */}
            <div>
              <h1 className="logo">Counter</h1>
            </div>
            {/* Navigation links section */}
            <div className="links">
              {/* Navigation link to Home page */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              {/* Navigation link to About page */}
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              {/* Navigation link to History page */}
              <NavLink to="/history" className="nav-link">
                History
              </NavLink>
            </div>
            {/* Button for toggling dark mode */}
            <div>
              <button onClick={toggleDarkMode} className="theme-toggle-btn" aria-label="Toggle Dark Mode">
                {/* Displaying moon icon for dark mode and sun icon for light mode */}
                {darkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
              </button>
            </div>
          </nav>
        </header>

        {/* Main content section with dynamic dark/light mode classes */}
        <main className={`app-main ${darkMode ? "dark" : "light"}`}>
          {/* Setting up routes for different pages */}
          <Routes>
            {/* Route for Home page */}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            {/* Route for About page */}
            <Route path="/about" element={<About darkMode={darkMode} />} /> {/* Passing darkMode */}
            {/* Route for History page */}
            <Route path="/history" element={<History darkMode={darkMode} />} /> {/* Passing darkMode */}
          </Routes>
        </main>
      </Router>
    </CounterProvider>
  );
}

export default App;
