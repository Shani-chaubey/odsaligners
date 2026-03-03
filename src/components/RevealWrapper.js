 "use client";

import { motion, useInView } from "framer-motion";
 import { useRef } from "react";

 const variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (delay = 0) => ({
     opacity: 1,
     y: 0,
     transition: {
       type: "spring",
       stiffness: 120,
       damping: 22,
       mass: 0.8,
       delay,
     },
   }),
 };

 /**
  * RevealWrapper
  * Wrap any content to get a smooth, springy fade-in / slide-up on scroll.
  * - `as`: element type (div, h2, section, etc.)
  * - `delay`: stagger delay in seconds
  */
 export default function RevealWrapper({
   as: Component = "div",
   delay = 0,
   className = "",
   children,
   once = true,
   margin = "-10% 0px -10% 0px",
 }) {
   const ref = useRef(null);
   const isInView = useInView(ref, {
     amount: 0.3,
     once,
     margin,
   });

  const MotionComponent = motion(Component);

   return (
    <MotionComponent
       ref={ref}
       initial="hidden"
       animate={isInView ? "visible" : "hidden"}
       custom={delay}
       variants={variants}
       className={className}
     >
       {children}
    </MotionComponent>
   );
 }

