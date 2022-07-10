import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter } from "react-router-dom";



const Root = createRoot(document.getElementById("root"));

Root.render(
  
  <BrowserRouter>
    
      <App />
  </BrowserRouter>

);