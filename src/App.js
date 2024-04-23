
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import Navbar from './Pages/Home/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="*" element={<div>404 Page Not Found </div>}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
