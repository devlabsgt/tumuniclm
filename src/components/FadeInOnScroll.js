import React, { useEffect, useRef, useState } from "react";
import "./FadeInOnScroll.css"; // Asegúrate de tener el estilo adecuado

const FadeInOnScroll = ({ children, offset = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { rootMargin: `0px 0px -${offset}px 0px` }
    );

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
