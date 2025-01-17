import React from "react";
import "./about.css";

function About({ darkMode }) {
  return (
    <div className={`about ${darkMode ? "dark" : ""}`}> {/* Apply dark class */}
      <h1 className={`about-title ${darkMode ? "dark" : ""}`}>About This Application</h1> {/* Title with dark mode styling */}
      <div className={`about-description ${darkMode ? "dark" : ""}`}> {/* Description with dark mode styling */}
        <p>
          This application is a feature-rich React-based counter app designed to
          demonstrate key concepts of modern web development. It showcases the
          power of React's state management, context API, routing, and custom
          hooks, all while maintaining a clean and user-friendly interface.
        </p>
        <br />
        <h1 className={`features-heading ${darkMode ? "dark" : ""}`} style={{ textDecoration: "underline" }}>
          Key Features
        </h1> {/* Heading for features section with dark mode styling */}
        <br />
        <ul>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>Dynamic Counter: </strong>
            Easily increment, decrement, or reset the counter with intuitive buttons. {/* Feature description */}
          </li>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>Action History: </strong>
            Track every change made to the counter and view a detailed history of actions. {/* Feature description */}
          </li>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>Dark Mode: </strong>
            Toggle between light and dark themes for a personalized user experience. {/* Feature description */}
          </li>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>State Management: </strong>
            Efficiently manages state across components using React's Context API. {/* Feature description */}
          </li>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>Custom Hooks: </strong>
            Implements reusable logic to keep the codebase modular and clean. {/* Feature description */}
          </li>
          <li>
            <strong className={`about-headings ${darkMode ? "dark" : ""}`}>Accessibility: </strong>
            Designed with accessibility in mind, ensuring the app is usable for everyone. {/* Feature description */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
