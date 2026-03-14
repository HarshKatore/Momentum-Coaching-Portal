import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  origin?: "top" | "bottom" | "left" | "right";
  distance?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  opacity?: number;
  scale?: number;
  rotate?: { x?: number; y?: number; z?: number };
  reset?: boolean;
  interval?: number;
  viewFactor?: number;
  viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
}

export default function ScrollRevealWrapper({
  children,
  className = "",
  origin = "bottom",
  distance = "20px",
  duration = 600,
  delay = 0,
  easing = "cubic-bezier(0.5, 0, 0, 1)",
  opacity = 0,
  scale = 1,
  rotate = { x: 0, y: 0, z: 0 },
  reset = false,
  interval = 0,
  viewFactor = 0.2,
  viewOffset = { top: 0, right: 0, bottom: 0, left: 0 },
}: ScrollRevealWrapperProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: viewFactor,
    triggerOnce: !reset,
  });

  const getInitialPosition = () => {
    const dist = parseInt(distance);
    switch (origin) {
      case "top":
        return { y: dist, x: 0 };
      case "bottom":
        return { y: -dist, x: 0 };
      case "left":
        return { x: dist, y: 0 };
      case "right":
        return { x: -dist, y: 0 };
      default:
        return { y: -dist, x: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  const shouldAnimate = reset ? inView : inView || hasAnimated;

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: opacity,
        scale: scale,
        x: initialPosition.x,
        y: initialPosition.y,
        rotateX: rotate.x,
        rotateY: rotate.y,
        rotateZ: rotate.z,
      }}
      animate={
        shouldAnimate
          ? {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
            }
          : {
              opacity: opacity,
              scale: scale,
              x: initialPosition.x,
              y: initialPosition.y,
              rotateX: rotate.x,
              rotateY: rotate.y,
              rotateZ: rotate.z,
            }
      }
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  );
}
