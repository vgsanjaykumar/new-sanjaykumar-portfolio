import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useIsDesktop from "../../hooks/useIsDesktop";

const CustomCursor = () => {
  const isDesktop = useIsDesktop();
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const isInteractive = (el) =>
      el.closest("a, button, input, textarea, select, [data-cursor-hover]");

    const over = (e) => setHovering(Boolean(isInteractive(e.target)));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 44 : 18,
          height: hovering ? 44 : 18,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
};

export default CustomCursor;
