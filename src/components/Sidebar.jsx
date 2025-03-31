import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { motion } from "framer-motion";

const Navlinks = ({ isOpen, setisOpen }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <motion.ul
      animate={isOpen ? "open" : "close"}
      variants={{
        open: {
          x: 0,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        close: {
          x: "-80%",
          display: "none",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.2,
            delay: 0.2,
          },
        },
      }}
    >
      <NavLink
        className={`text-lg flex mr-14 hover:no-underline py-2`}
        to="/"
        onClick={() => setisOpen(false)}
      >
        <p
          className={`text-gray-300 hover:text-[#c406c7]  ${
            location.pathname === "/" ? "active" : ""
          } w-fit`}
        >
          Home
        </p>
      </NavLink>
      <NavLink
        className="text-lg flex mr-14 hover:no-underline py-2"
        to="/gallery"
        onClick={() => setisOpen(false)}
      >
        <p
          className={`text-gray-300 hover:text-[#c406c7] w-fit ${
            location.pathname === "/gallery" ? "active" : ""
          }`}
        >
          Gallery
        </p>
      </NavLink>
      <NavLink
        className="text-lg flex mr-14 hover:no-underline py-2"
        to="/contact"
        onClick={() => setisOpen(false)}
      >
        <p
          className={`text-gray-300 hover:text-[#c406c7] w-fit ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          Contact
        </p>
      </NavLink>
    </motion.ul>
  );
};

function Sidebar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      className={`absolute backdrop-blur-md z-10 flex bg-gradient-to-br from-[#0d707490] to-[#430F4490] top-0 h-full  transition-all duration-200 shadow-lg shadow-black`}
    >
      <motion.div
        className="relative w-14 h-14 z-50 flex justify-center top-1/4 bg-[#2e4f4f95] py-2"
        animate={isOpen ? "open" : "close"}
        variants={{
          open: {
            x: "270%",
            background: "none",
            transition: {
              type: "spring",
              delay: 0.1,
            },
          },
          close: {
            x: 0,
            transition: {
              type: "tween",
            },
          },
        }}
      >
        {!isOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 text-white m-auto hover:cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          />
        ) : (
          <ImCross
            className="w-4 h-4 text-white m-auto hover:cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          />
        )}
      </motion.div>

      <motion.div
        className={`relative top-1/3 flex justify-center`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: "100%",
            width: 150,
            transition: {
              type: "spring",
              delay: 0.1,
            },
          },
          closed: {
            opacity: "0%",
            width: 0,
            transition: {
              type: "tween",
            },
          },
        }}
      >
        <Navlinks isOpen={isOpen} setisOpen={setisOpen} />
      </motion.div>
    </div>
  );
}

export default Sidebar;

{
  /* 

*/
}
