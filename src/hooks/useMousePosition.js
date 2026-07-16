import { useEffect, useState } from "react";

/**
 * Tracks normalized mouse position (-0.5 to 0.5 on each axis) relative to
 * the viewport. Used for subtle parallax effects. Returns { x: 0, y: 0 }
 * on touch devices where there is no meaningful pointer.
 */
const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
};

export default useMousePosition;
