import React, { useState } from "react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // displays button after scrolled down
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", toggleVisible);
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className={`btn btn-lg btn-primary btn-lg-square back-to-top ${
        visible ? "d-flex" : "d-none"
      } `}
    >
      <i className="bi bi-arrow-up"></i>
    </div>
  );
}
