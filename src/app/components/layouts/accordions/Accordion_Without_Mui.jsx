import { Typography } from "@mui/material";
import { useState } from "react";
import "./Accordion_Without_Mui.css";

export default function Accordion_Without_Mui({ _id }) {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (accordion == index) {
      setActiveAccordion(null);
      return;
    }

    setActiveAccordion(index);
  }

  const ttt = [
    { question: "TITRE 1", answer: "PARAGRAPHE 1" },
    { question: "TITRE 2", answer: "PARAGRAPHE 2" },
  ];

  return (
    <div className='' style={{ marginTop: "150px" }}>
      <span className=''>TITRE</span>
      <div className='accordionFaq'>
        {ttt.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div style={{ display: "flex" }}>
              <div className='accordionFaqHeading'>
                <Typography
                  className={accordion === index ? "active" : ""}
                  variant=''
                >
                  {item.question}
                </Typography>
              </div>
              <div>
                {accordion === index ? (
                  <>
                    <span>-</span>
                  </>
                ) : (
                  <span>+</span>
                )}
              </div>
            </div>
            <div
            // style={{
            //   // overflow:
            //   background: "green",
            //   // height: "50%",
            //   // scrollPaddingBottom: "",
            //   marginBottom: "550px",
            //   minHeight: "250px",
            //   width: "100%",
            //   overflow: "auto",
            // }}
            >
              <p className={accordion === index ? "active" : "inactive"}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
