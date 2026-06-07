import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from = 0, to, duration = 2 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return controls.stop; // cleanup
    }
  }, [inView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;