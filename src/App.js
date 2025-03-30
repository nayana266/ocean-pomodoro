// App.js
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


export default App;