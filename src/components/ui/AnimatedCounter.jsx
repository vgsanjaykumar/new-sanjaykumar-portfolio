import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "", duration = 1.4, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const nodeRef = useRef(null);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(latest).toString();
      }
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      <span ref={nodeRef}>0</span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
