import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
// LAYOUTS
import SidebarMenu from "./SidebarMenu";
// UTILS DATA
import { admin_dataDrawerNavAdmin } from "../../../utils/assets/data";
// STYLES
import { NavAdmin, RootDrawerNavAdmin } from "./StylesDrawerNavAdmin";
import "./styles.css";
// ICONS
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const DrawerNavigationAdmin = ({ isOpen, setIsOpen }) => {
  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen(true);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        className='main-container'
        onMouseLeave={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
      >
        <motion.div
          animate={{
            // background: isOpen ? <RootDrawerNavAdmin /> : "rgb(0, 7, 61)",
            // width: isOpen ? "200px" : "45px",
            width: isOpen ? "30vw" : "2vw",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          // style={`{ ${isOpen ? <RootDrawerNavAdmin /> : <NavAdmin />}}`}
          className={isOpen ? "testBg" : "sidebar"}
        >
          <div>
            <div
              style={{
                background: isOpen ? "rgba(0, 0, 0, 0.4)" : "",
                margin: isOpen ? "50px" : "",
                padding: isOpen ? "50px" : "",
                borderRadius: isOpen ? "25px" : "",
              }}
            >
              <div className='top_section'>
                <AnimatePresence>
                  {isOpen && (
                    <motion.h1
                      variants={showAnimation}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                      className='logo'
                    >
                      DoSomeCoding
                    </motion.h1>
                  )}
                </AnimatePresence>

                <div className='bars'>
                  <FaBars onClick={toggle} />
                </div>
              </div>
              <div className='search'>
                <div className='search_icon'>
                  <BiSearch />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.input
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                      variants={inputAnimation}
                      type='text'
                      placeholder='Search'
                    />
                  )}
                </AnimatePresence>
              </div>
              <section className='routes'>
                {admin_dataDrawerNavAdmin.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        toggle={toggle}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className='link'
                      activeClassName='active'
                    >
                      <div className='icon'>{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='link_text'
                          >
                            <Typography variant='h5'>{route.name}</Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DrawerNavigationAdmin;
