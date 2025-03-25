"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Slide_up({ children }) {
  const ref = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "0px 0px -15% 0px" : "0px 0px -60px 0px",
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}>
      {children}
    </div>
  );
}

export { Slide_up };
