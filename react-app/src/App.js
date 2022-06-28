import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Aboutme, Work, Experience, Education, Contact } from "./Components";

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Aboutme />}/>
            <Route exact path="/work" element={<Work />}/>
            <Route exact path="/experience" element={<Experience />}/>
            <Route exact path="/education" element={<Education />}/>
            <Route exact path="/contacts" element={<Contact />}/>
          </Routes>
      </Router>
    </div>
  );
};

export default App;
