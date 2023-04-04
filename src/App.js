
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Name_popup from './components/Welcome.jsx'
import Home_screen from './components/Home.jsx'

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      
        <Routes>
          <Route exact path='/' element={<Name_popup/> }/>
          <Route path="/home" element={<Home_screen/>}/>
        </Routes>
      </BrowserRouter>

    </div>
      
       
          
        
          
    


  );
}

export default App;
