import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./style.css";
import { Label } from "./Label"; // Correct named import
import Image from "./Image";
import './App.css';

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="App">
        <Image />
        <Label />
        <StartButton /> {/* StartButton component that handles navigation */}

        {/* Define Routes inside Router */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route for the home page */}
          <Route path="/newpage" element={<NewPage />} /> {/* Route to new page */}
        </Routes>
      </div>
    </Router>
  );
}

// Home Page Component
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the starting page of your app.</p>
    </div>
  );
}

// StartButton Component - Navigates to the new page on click
function StartButton() {
  const navigate = useNavigate(); // Hook to navigate to new page

  const handleButtonClick = () => {
    navigate("/newpage"); // Navigate to '/newpage' on button click
  };

  return (
    <button className="start-button" onClick={handleButtonClick}>
      Start
    </button>
  );
}

// NewPage Component - Content shown when '/newpage' is visited
function NewPage() {
  console.log('NewPage is being rendered');
  return (
    <div className="new-page">
      <h1>Welcome to the New Page!</h1>
      <p>This is the content of the new page!</p>
    </div>
  );
}




export default App;
