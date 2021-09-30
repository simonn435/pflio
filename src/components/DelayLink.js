import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const DelayLink = (props) => {
  const { delay, replace, to, animate, setAnimate, show, setShow, ...rest } =
    props;
  let timeout = null;
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e) => {
    if (location?.pathname === to) return;

    setAnimate(!animate);
    setShow(!show);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, delay);
  };

  return <Link {...rest} to={to} onClick={handleClick} />;
};

export default DelayLink;
