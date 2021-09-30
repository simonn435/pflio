export const handleMove = (e) => {
  const x = e.pageX - e.target.offsetLeft + "px";
  const y = e.pageY - e.target.offsetTop + "px";

  e.target.style.setProperty("--x", x);
  e.target.style.setProperty("--y", y);
};
