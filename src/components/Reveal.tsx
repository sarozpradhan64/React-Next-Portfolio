"use client";

import { useEffect } from "react";

interface ReavealOnScrollProps {
  className?: string;
  revealGroupName: string;
  offsetY?: string;
  duration?: string;
  timingFunction?: string;
  children: React.ReactNode;
}

const RevealOnScroll: React.FC<ReavealOnScrollProps> = ({
  revealGroupName,
  className = "",
  offsetY = "50px",
  duration = "0.5s",
  timingFunction = "ease-in-out",
  children,
}) => {
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(`.${revealGroupName}`);
      elements.forEach(function (element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add("visible");
        }
      });

      // Remove the scroll event listener once all elements have been revealed
      // if (
      //   document.querySelectorAll(`.reveal-on-scroll.visible`).length ===
      //   elements.length
      // ) {
      //   window.removeEventListener("scroll", handleScroll);
      // }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [revealGroupName]);

  const style = {
    transform: `translateY(${offsetY})`,
    transition: `transform ${duration} ${timingFunction}`,
  };
  return (
    <div className={`reveal-on-scroll ${className} ${revealGroupName}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
