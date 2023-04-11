import { useState, useEffect } from "react";

export default function RevealOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const element = document.querySelector(".reveal-on-scroll");
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`reveal-on-scroll ${isVisible ? "visible" : "hidden"}`}>
      {children}
    </div>
  );
}
