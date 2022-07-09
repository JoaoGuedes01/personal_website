import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

/* Importing App's Components */
import {
  Navbar,
  Aboutme,
  Work,
  Experience,
  Education,
  Contact,
  Footer,
  Loader,
} from "./Components";

const AnimatedRoutes = (props) => {
  const location = useLocation();
  const lang = props.lang;
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Aboutme lang={lang} />} />
        <Route exact path="/work" element={<Work lang={lang} />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/contacts" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [lang, setLang] = useState("eng");
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <Loader key="loader" setLoading={setLoading} />
        ) : (
          <Router key="router">
            <Navbar />
            <AnimatedRoutes lang={lang} />
            <Footer setLang={setLang} lang={lang} />
          </Router>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
