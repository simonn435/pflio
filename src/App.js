import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Aboutpage from "./screens/Aboutpage";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import LinksModal from "./components/LinksModal";
import PortfolioPage from "./screens/PortfolioPage";

const App = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleMove = ({ pageX: x, pageY: y }) => {
      const myRef = ref.current;
      myRef.style.setProperty("--xeje", x - 25 + "px");
      myRef.style.setProperty("--yeje", y - 25 + "px");
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <Router>
      <Navbar setShow={setShow} show={show} />

      <LinksModal
        setShow={setShow}
        show={show}
        animate={animate}
        setAnimate={setAnimate}
      />

      <div className="cursor" ref={ref}></div>

      <div className={`breaker ${animate && "active"}`}></div>

      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Homepage show={show} setShow={setShow} />
              </Route>
              <Route exact path="/about">
                <Aboutpage show={show} setShow={setShow} />
              </Route>
              <Route exact path="/portfolio">
                <PortfolioPage show={show} setShow={setShow} />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
