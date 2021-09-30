export const mouseHover = (ref) => {
  const myRef = ref.current;

  const handleMove = (e) => {
    const x = e.pageX - myRef.offsetLeft + "px";
    const y = e.pageY - myRef.offsetTop + "px";

    myRef.style.setProperty("--x", x);
    myRef.style.setProperty("--y", y);
  };

  myRef.addEventListener("mousemove", handleMove);

  return () => {
    myRef.removeEventListener("mousemove", handleMove);
  };
};
