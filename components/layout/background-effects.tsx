"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  const orb1X = useTransform(springX, (v) => `${-10 + v * 20}%`);
  const orb1Y = useTransform(springY, (v) => `${-20 + v * 30}%`);
  const orb2X = useTransform(springX, (v) => `${60 + v * 10}%`);
  const orb2Y = useTransform(springY, (v) => `${10 + v * 15}%`);
  const orb3X = useTransform(springX, (v) => `${20 + v * 15}%`);
  const orb3Y = useTransform(springY, (v) => `${50 + v * 20}%`);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(80,130,255,0.25),transparent_35%),radial-gradient(circle_at_80%_0,rgba(74,222,128,0.2),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(244,114,182,0.14),transparent_35%)]" />
      <motion.div
        className="absolute rounded-full bg-[radial-gradient(circle,rgba(80,130,255,0.16)_0%,rgba(80,130,255,0)_60%)] blur-3xl"
        style={{ x: orb1X, y: orb1Y, width: "38rem", height: "38rem" }}
        aria-hidden
      />
      <motion.div
        className="absolute rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.16)_0%,rgba(74,222,128,0)_60%)] blur-3xl"
        style={{ x: orb2X, y: orb2Y, width: "30rem", height: "30rem" }}
        aria-hidden
      />
      <motion.div
        className="absolute rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.14)_0%,rgba(244,114,182,0)_60%)] blur-3xl"
        style={{ x: orb3X, y: orb3Y, width: "26rem", height: "26rem" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.06)_70%,rgba(255,255,255,0)_100%)]" />
    </div>
  );
}
