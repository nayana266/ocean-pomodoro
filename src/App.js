// App.js
import React from "react";
import "./style.css"; 

import { Label } from "./Label";  // Correct named import
import Image from "./Image";


import logo from './logo.svg';
import Timer from "./Timer";
import './App.css';

function App() {

  return (
    <div className="App">
            <Image />
            <Label />
            
        </div>
    
  );
}


export default App;