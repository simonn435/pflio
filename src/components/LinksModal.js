import { motion } from "framer-motion";
import React from "react";
import DelayLink from "./DelayLink";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  open: { y: "100%", transition },
  closed: { y: 0, transition },
};

const LinksModal = ({ show, setShow, animate, setAnimate }) => {
  return (
    <motion.div
      className="modal"
      variants={variants}
      initial={{ y: 0 }}
      animate={show ? "open" : "closed"}
    >
      <div className="modal__toggler" onClick={() => setShow(!show)}>
        <div className="modal__toggler-line"></div>
        <div className="modal__toggler-line"></div>
        <div className="modal__toggler-line"></div>
      </div>

      <DelayLink
        delay="800"
        to="/"
        animate={animate}
        setAnimate={setAnimate}
        show={show}
        setShow={setShow}
        className="modal__links"
        data-text="Home"
      >
        Home
      </DelayLink>
      <DelayLink
        delay="800"
        to="/about"
        animate={animate}
        setAnimate={setAnimate}
        show={show}
        setShow={setShow}
        data-text="About"
        className="modal__links"
      >
        About
      </DelayLink>

      <DelayLink
        delay="800"
        to="/portfolio"
        animate={animate}
        setAnimate={setAnimate}
        show={show}
        setShow={setShow}
        data-text="Portfolio"
        className="modal__links"
      >
        Portfolio
      </DelayLink>
    </motion.div>
  );
};

export default LinksModal;
