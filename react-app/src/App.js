import React, { useState } from "react";
import "./App.css";
import {
  HashRouter as Router,
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
  WorkDetails,
} from "./Components";

const AnimatedRoutes = (props) => {
  const location = useLocation();
  const lang = props.lang;
  const theme = props.theme;
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key} >
        <Route exact path="/" element={<Aboutme lang={lang} theme={theme} />} />
        <Route
          exact
          path="/work"
          element={<Work lang={lang} theme={theme} />}
        />
        <Route
          exact
          path="/work/:id"
          element={<WorkDetails lang={lang} theme={theme} />}
        />
        <Route
          exact
          path="/experience"
          element={<Experience lang={lang} theme={theme} />}
        />
        <Route
          exact
          path="/education"
          element={<Education lang={lang} theme={theme} />}
        />
        <Route
          exact
          path="/contacts"
          element={<Contact lang={lang} theme={theme} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [lang, setLang] = useState("eng");
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={theme == "light" ? "light-body" : "dark-body"}
      tabIndex="-1"
    >
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <Loader key="loader" setLoading={setLoading} />
        ) : (
          <Router key="router">
            <Navbar lang={lang} theme={theme} />
            <AnimatedRoutes lang={lang} theme={theme} />
            <Footer
              setLang={setLang}
              lang={lang}
              setTheme={setTheme}
              theme={theme}
            />
          </Router>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
