import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Aboutpage from "./screens/Aboutpage";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import LinksModal from "./components/LinksModal";
import PortfolioPage from "./screens/PortfolioPage";
import ContactPage from "./screens/ContactPage";

const App = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = ({ pageX: x, pageY: y }) => {
      const myRef = ref.current;
      myRef.style.setProperty("--x", x - 25 + "px");
      myRef.style.setProperty("--y", y - 25 + "px");
      myRef.style.setProperty("--scale", 1);
      if (active) {
        myRef.style.setProperty("--scale", 5);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
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
              <Route exact path="/contact">
                <ContactPage show={show} setShow={setShow} />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
