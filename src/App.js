import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Aboutpage from "./screens/Aboutpage";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import LinksModal from "./components/LinksModal";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleMove = ({ pageX: x, pageY: y }) => {
      setX(x);
      setY(y);
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
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
