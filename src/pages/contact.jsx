import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineDoneOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

const buttonVariants = {
  rest: {
    background: "linear-gradient(to right, #16a8ae, #e018bf)",
    transition: { duration: 0.3 },
  },
  hover: {
    background: "linear-gradient(to right, #e018bf, #16a8ae)",
    transition: { duration: 0.3 },
    scale: 1.03,
  },
};

const checkmarkVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5, // Animation duration
      ease: "easeOut", // Easing function
    },
  },
};

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

const Success = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 items-center p-10"
      variants={appearingVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="text-7xl text-green-600"
        variants={checkmarkVariants}
        initial="hidden"
        animate="visible"
      >
        <MdOutlineDoneOutline />
      </motion.div>
      <p className="text-3xl">Thank you!!</p>
      <p>You're message has been sent, I'll respond as soon as I can</p>
    </motion.div>
  );
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_p2ge28k",
        "template_svt0qxr",
        form.current,
        "a4MTJVkL57gS0Qqha"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="h-screen "
      initial={"hidden"}
      animate={"visible"}
      variants={appearingVariants}
    >
      <div className="row pl-[8%] text-[#bde5dc] h-full overflow-y-hidden justify-center items-center gap-6 ">
        <div className="col-lg-6 col-10 flex flex-col gap-1  justify-center items-center my-3 backdrop-blur-md bg-black/20 rounded-md shadow-lg shadow-black">
          <IoMdArrowRoundBack
            className="mr-auto mt-3 text-3xl cursor-pointer hover:brightness-125"
            onClick={() => navigate("/")}
          />
          {success ? (
            <Success />
          ) : (
            <form
              className="flex w-2/3 mb-auto mt-5 flex-col gap-4 items-end"
              ref={form}
              onSubmit={sendEmail}
            >
              <h1 className="mb-auto mx-auto justify-self-start text-4xl text-[#16a8ae]">
                Contact me !
              </h1>
              <label className="w-full flex items-center gap-4">
                <p className="w-20">Your name</p>
                <input
                  type="text"
                  className="w-3/4 p-2 outline-none bg-opacity-10 bg-white shadow-lg shadow-black/10"
                  name="user_name"
                  required
                />
              </label>
              <label className="w-full flex items-center gap-4">
                <p className="w-20">E-mail</p>
                <input
                  type="email"
                  name="user_email"
                  className="w-3/4 p-2 outline-none bg-opacity-10 bg-white shadow-lg shadow-black/10"
                  required
                />
              </label>
              <label className="w-full flex items-start gap-11 justify-end">
                Message
                <textarea
                  className="w-9/12 p-2 outline-none bg-opacity-10 bg-white shadow-lg shadow-black/10 mr-auto"
                  name="message"
                  id=""
                  rows="3"
                  required
                ></textarea>
              </label>
              <motion.button
                className="w-32 my-3 p-2 rounded-3xl shadow-lg shadow-black/50 text-gray-200 self-center"
                initial="rest"
                whileHover="hover"
                variants={buttonVariants}
                value="Send"
                type="submit"
              >
                {loading ? (
                  <ReactLoading
                    type={"spin"}
                    color={"white"}
                    height={"20%"}
                    width={"20%"}
                    className="mx-auto"
                  />
                ) : (
                  "Send"
                )}
              </motion.button>
              <div className="backdrop-blur-md bg-black/10 rounded-md shadow-lg shadow-black p-2 mb-2 mx-auto">
                <p className="flex items-center gap-2">
                  <MdEmail /> almajdshahin1789@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <BsFillTelephoneFill /> +963 937142644
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
