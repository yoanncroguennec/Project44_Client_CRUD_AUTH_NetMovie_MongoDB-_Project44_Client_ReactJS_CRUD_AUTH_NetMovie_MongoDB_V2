import React, { useState } from "react";
import { dataExtendNavbarCellular } from "../../../../../utils/assets/movies/data";
import bgWebRadios from "./radios1.jpg";
import iconsRadio64 from "./iconsRadio64.png"
import moreApplication from "./moreApplication.jpg"
import img4 from "./img4.jpeg";
import television94 from "./television94.png";
import contact from "./contact1.jpg";
import myProfile from "./myProfile.jpg";
// ICONS
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
export default function ExtendNavbarCellular() {
  const [activeItem, setActiveItem] = useState(0);
  const [openBtnMoreCircleMenu, setOpenBtnMoreCircleMenu] = useState(false);

  function OpenBtnMoreCircleMenu() {
    setOpenBtnMoreCircleMenu((prevBool) => !prevBool);
  }

  const dataBtnMoreEffectOpeningCircleMenu = [
    ["", "#3E84E6", img4, television94],
    ["", "#15AB88", moreApplication],
    ["", "#EB5089", bgWebRadios, iconsRadio64],
    ["Mon profil", "#AFD91A", myProfile],
    ["Contact", "#F27127", contact],
  ];

  return (
    <div
      className='pageContainer'
      style={{
        alignItems: "center",
        background: "",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* ATTENTION ! c'est dans cette div qu'on change la dimension de tout les cercles */}
      <div
        className='circularMenu'
        style={{
          background: "",
          height: "54px",
          position: "relative",
          width: "54px",
        }}
      >
        <div
          onClick={OpenBtnMoreCircleMenu}
          style={{
            // background: "#290366",
            alignItems: "center",
            // borderRadius: "50%",
            display: "flex",
            left: 0,
            height: "100%",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            transform: "scale(1.01)",
            width: "100%",
            // zIndex: "9",
          }}
          className='menuBtns'
        >
          {openBtnMoreCircleMenu ? (
            <div
              className='closecircularMenu'
              style={{
                alignItems: "center",
                background: "#FFF",
                border: "2px solid #F00",
                display: "flex",
                height: "100%",
                justifyContent: "center",
                borderRadius: "50%",
                // position: "relative",
                width: "100%",
              }}
            >
              <AiOutlineClose color='#F00' size={35} />
            </div>
          ) : (
            <div
              className='circularMenuIcon'
              style={{
                alignItems: "center",
                background: "#FFF",
                border: "2px solid #F00",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                // height: "18px",
                justifyContent: "center",
                width: "100%",
                zIndex: "9",
              }}
            >
              <FaPlus color='#F00' size={30} />
            </div>
          )}
          {dataBtnMoreEffectOpeningCircleMenu.map(
            ([page, color, bgRounded, icon], index) => {
              // rotate(${(360/5) => 360° / 5 because 5 items in array "dataBtnMoreEffectOpeningCircleMenu"
              const rotation =
                (-223 / dataBtnMoreEffectOpeningCircleMenu.length) * index;
              const transitionDelay = index * 75;
              return (
                <div
                  key={page}
                  className='menuItem'
                  style={{
                    alignItems: "center",
                    backgroundImage: `url("${bgRounded}")`,
                    backgroundSize: "cover",
                    opacity: "0.8",
                    // background: color,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    left: 0,
                    height: "100%",
                    // height: "100%",
                    position: "absolute",
                    top: 0,
                    transition: "transform 500ms ease",
                    transitionDelay: `${
                      openBtnMoreCircleMenu ? transitionDelay : 0
                    } ms`,
                    transform: `rotate(${rotation}deg) translate(${
                      openBtnMoreCircleMenu ? 175 : 0
                    }%)`,
                    width: "100%",
                    // width: "100%",
                    zIndex: "-1",
                  }}
                >
                  <span style={{ transform: `rotate(${-rotation}deg)` }}>
                    {icon && (
                      <img
                        alt='icon'
                        src={icon}
                        style={{ height: "35px", width: "35px" }}
                      />
                    )}
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
    // <ul
    //   style={{
    //     top: "-40px",
    //     display: "flex",
    //     position: "relative",
    //     display: "flex",
    //     flexWrap: "nowrap",
    //     justifyContent: "space-between",
    //     width: "100%",
    //     zIndex: 11,
    //   }}
    // >

    //   <span
    //     style={{
    //       background: "#F00",
    //       transform: `${dataExtendNavbarCellular[activeItem].dis}`,
    //       // transform: "translateX(12rem)",
    //       border: "4px solid rgb(17 24 39)",

    //       transitionDuration: "500ms",
    //       height: "64px",
    //       width: "64px",
    //       borderRadius: "50%",
    //       position: "absolute",
    //       top: "-6px",
    //     }}
    //     className={`${dataExtendNavbarCellular[activeItem].dis}`}
    //   />
    //   {dataExtendNavbarCellular.map((menu, id) => (
    //     <li key={id} style={{ zIndex: 999 }}>
    //       <a
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           textAlign: "center",
    //           paddingTop: "24px",
    //         }}
    //         onClick={() => setActiveItem(id)}
    //       >
    //         {activeItem === id ? (
    //           <>
    //             <span
    //               style={{
    //                 cursor: "pointer",
    //                 transitionDuration: "500ms",
    //                 marginTop: "-24px",
    //               }}
    //             >
    //               {menu.icon}
    //             </span>
    //             <span
    //               style={{
    //                 transform: "translateY(1rem)",
    //                 transitionDuration: "700ms",
    //                 opacity: 1,
    //               }}
    //             >
    //               {menu.nameItem}
    //             </span>
    //           </>
    //         ) : (
    //           <>
    //             <span
    //               style={{
    //                 cursor: "pointer",
    //               }}
    //             >
    //               {menu.icon}
    //             </span>
    //             <span style={{ opacity: 1, transform: "translateY(0.2rem)" }}>
    //               {menu.nameItem}
    //             </span>
    //           </>
    //         )}
    //       </a>
    //     </li>
    //   ))}
    // </ul>
  );
}
