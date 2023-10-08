import React, { useEffect, useState } from "react";
// STYLES
import {
  BlackBarStyles,
  RedBarStyles,
} from "./StylesScrollIndicatorProgressBar";

export default function ScrollIndicatorProgressBar() {
  // USEEFFECT SCROLL INDICATOR PROGRESS BAR
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  // RETURN
  return (
    <>
      <BlackBarStyles completion={completion} />
      <RedBarStyles completion={completion} />
    </>
  );
}
