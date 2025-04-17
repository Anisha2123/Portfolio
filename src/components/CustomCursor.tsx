


import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [page, setPage] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // if (e.target.closest("a, button, input, textarea")) {
        const target = e.target as HTMLElement;
        if (target?.closest("a, button, input, textarea")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleRouteChange = () => {
      const currentPath = window.location.pathname;
      if (currentPath.includes("resume")) setPage("resume");
      else if (currentPath.includes("contact")) setPage("contact");
      else setPage("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const getColor = () => {
    switch (page) {
      case "resume": return "bg-blue-400/60";
      case "contact": return "bg-green-400/60";
      default: return "bg-pink-500/70";
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`
      }}
    >
      <div
        className={
          `rounded-full mix-blend-difference blur-sm transition-all duration-200 ease-out ` +
          `${getColor()} ` +
          `${clicked ? "scale-150" : hovering ? "scale-125" : "scale-100"} ` +
          `w-8 h-8`
        }
      />
    </div>
  );
};

export default CustomCursor;

