import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  Navbar,
  Aboutme,
  Work,
  Experience,
  Education,
  Contact,
  Footer,
} from "./Components";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Aboutme />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/contacts" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
