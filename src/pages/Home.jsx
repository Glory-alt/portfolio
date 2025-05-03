import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const appearingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      delay: 0.3,
    },
  },
};
function Home() {
  const constraintsRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {});
  return (
    <motion.div
      className="container-fluid h-screen overflow-hidden"
      initial={"hidden"}
      animate={"visible"}
      variants={appearingVariants}
      ref={constraintsRef}
    >
      <div className="row h-full pl-20 lg:pl-40 w-full flex overflow-y-hidden justify-center items-start ">
        <div className="col-md-8 col-10 justify-center items-center pt-[15%] mb-auto ">
          <h4 className="text-[#bde5dc] text-4xl md:text-5xl lg:text-6xl font-medium">
            Hi, I'm
          </h4>
          <h1 className="text-[#16a8ae] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold pb-3">
            Almajd Shahin
          </h1>
          <h4 className="text-[#bde5dc] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            a web designer and a front end developer
          </h4>
          <div className="backdrop-blur-md mt-2 w-fit bg-white/10 rounded-md shadow-lg shadow-black p-2 mb-2 text-[#bde5dc]">
            <p className="flex items-center gap-2">
              <MdEmail /> almajdshahin1789@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <BsFillTelephoneFill /> +963 937142644
            </p>
          </div>
        </div>
        <div className="col-lg col-7 pt-[20%] h-full flex justify-center gap-6 lg:mr-10">
          <motion.a
            className="logo linkedin relative lg:left-[10%] top-[] w-14 h-14 shadow-xl shadow-black transform transition duration-200 hover:scale-110"
            href="https://www.linkedin.com/in/almajd-shahin/"
            target="_blank"
          ></motion.a>
          <motion.a
            className="logo behance relative lg:left-[5%] lg:top-[40%] w-14 h-14 shadow-xl shadow-black rounded-full transform transition duration-200 hover:scale-110"
            href="https://www.behance.net/TheGlory"
            target="_blank"
          ></motion.a>
        </div>
      </div>
      {/*//////////////////////////////////// GLASS CIRCLES //////////////////////////////////*/}
      <motion.div
        className="w-32 h-32 bg-black bg-opacity-10 rounded-full absolute top-[10%] left-[20%] backdrop-blur-sm flex items-center justify-center cursor-grab"
        drag
        dragConstraints={constraintsRef}
        whileTap={{ cursor: "grabbing", scale: 0.9 }}
      >
        <div className="w-24 h-24 bg-[#11ebf3] bg-opacity-30 rounded-full blur-lg"></div>
      </motion.div>
      <motion.div
        className="w-24 h-24 bg-opacity-0 rounded-full absolute top-1/2 right-1/2 backdrop-blur-sm flex items-center justify-center cursor-grab"
        drag
        dragConstraints={constraintsRef}
        whileTap={{ cursor: "grabbing", scale: 0.9 }}
      >
        <div className="w-20 h-20 bg-[#e018bf] bg-opacity-50 rounded-full blur-lg"></div>
      </motion.div>
      {/*//////////////////////////////////// SNOW FLAKE //////////////////////////////////*/}
      <div
        className=" w-32 h-32 absolute top-[3%] right-[10%] cursor-pointer rounded-full flex justify-center  transform transition duration-700 hover:scale-110"
        whileTap={{ scale: 0.5 }}
        onClick={() => navigate("/contact")}
      >
        <div className="snowFlake z-50 w-24 h-24 absolute"></div>
        <div className="absolute w-20 h-20 mt-5 ">
          <div className="snow w-20 mx-auto relative px-10"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
