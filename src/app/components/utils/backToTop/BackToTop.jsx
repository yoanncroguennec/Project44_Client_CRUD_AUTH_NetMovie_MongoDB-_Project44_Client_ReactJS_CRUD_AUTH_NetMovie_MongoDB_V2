import React, { useEffect, useState } from "react";
// ICONS
import { BsChevronDoubleUp } from "../../../utils/assets/icons";
const colorBsChevronDoubleUp = "#F00";
const sizeBsChevronDoubleUp = 65;

export default function BackToTop() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  function ScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {backToTopBtn && (
        <div className='ballBackToTop'>
          <div onClick={ScrollUp}>
            <BsChevronDoubleUp
              color={colorBsChevronDoubleUp}
              size={sizeBsChevronDoubleUp}
            />
          </div>
        </div>
      )}
    </div>
  );
}
