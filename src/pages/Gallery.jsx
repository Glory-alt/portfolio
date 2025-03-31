import { motion } from "framer-motion";
import {
  BiLinkExternal,
  BiLogoReact,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FiFramer } from "react-icons/fi";

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

function Gallery() {
  return (
    <motion.div
      className="pr-16 pl-28 h-full gallery overflow-y-scroll hide-scrollbar scroll-smooth"
      initial={"hidden"}
      animate={"visible"}
      variants={appearingVariants}
    >
      <motion.div className="row my-3 project-row py-6 px-6 backdrop-blur-md bg-black/20 rounded-md shadow-lg shadow-black">
        <div className="col-lg-4 col-12 project project-1 rounded-md"></div>
        <div className="col-lg-8 col-12 project-1-discription text-[#bde5dc] py-2 flex flex-col">
          <h1 className="text-4xl pb-2">Muzik</h1>
          <p className="text-xl">
            In this Music platform I used React and Tailwindcss on the front-end
            and fetched music tracks and other details relate to them from an
            API and stored using redux.
          </p>
          <div className="pt-4">
            <p className="text-2xl font-bold">used skills and technologies</p>
            <div className="text-5xl flex items-center pt-2">
              <BiLogoHtml5 className="text-orange-600" />
              <BiLogoCss3 className="text-blue-500" />
              <BiLogoJavascript className="text-yellow-400" />
              <BiLogoReact className="text-blue-400" />
              <BiLogoRedux className="text-purple-700" />
              <BiLogoTailwindCss className="text-blue-400" />
              <p className="text-xl px-3">&</p>
              <p className="text-xl">working with APIs</p>
            </div>
          </div>
          <div className="mt-auto ml-auto">
            <a
              href="https://musicapp-119b1.firebaseapp.com/"
              className="open-btn flex items-center gap-2 bg-cyan-600/50 backdrop-blur-md text-white text-xl py-2 px-4 rounded-md"
              target="_blank"
            >
              <BiLinkExternal /> <p className="pb-1">View demo</p>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div className="row flex-row-reverse my-3 project-row py-6 px-6 backdrop-blur-md bg-black/20 rounded-md shadow-lg shadow-black">
        <div className="col-lg-4 col-12 project project-2 rounded-md"></div>
        <div className="col-lg-8 col-12 project-1-discription text-[#bde5dc] py-2 flex flex-col">
          <h1 className="text-4xl pb-2">CryptoCover</h1>
          <p className="text-xl">
            In this project I used React and Ant design UI kit to create a
            website that provides the latest news in the field of
            cryptocurrencies while also providing the live status of each of the
            top 50 cryptocurrencies, the data is fetched from an API. I
            personally worked on the designing of the website and the Logo too.
          </p>
          <div className="pt-4">
            <p className="text-2xl font-bold">used skills and technologies</p>
            <div className="text-5xl flex items-center pt-2">
              <BiLogoHtml5 className="text-orange-600" />
              <BiLogoCss3 className="text-blue-500" />
              <BiLogoJavascript className="text-yellow-400" />
              <BiLogoReact className="text-blue-400" />
              <AiOutlineAntDesign className="text-red-600" />
              <p className="text-xl px-3">&</p>
              <p className="text-xl">working with APIs</p>
              <p className="text-xl px-3">&</p>
              <p className="text-xl">Graphic design</p>
            </div>
          </div>
          <div className="mt-auto mr-auto">
            <a
              href="https://cryptocover-46799.web.app/"
              className="open-btn flex items-center gap-2 bg-cyan-600/50 backdrop-blur-md text-white text-xl py-2 px-4 rounded-md"
              target="_blank"
            >
              <BiLinkExternal /> <p className="pb-1">View demo</p>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="row my-3 project-row py-6 px-6 backdrop-blur-md bg-black/20 rounded-md shadow-lg shadow-black">
        <div className="col-lg-4 col-12 project project-3 rounded-md"></div>
        <div className="col-lg-8 col-12 project-1-discription text-[#bde5dc] py-2 flex flex-col">
          <h1 className="text-4xl">Chat app</h1>
          <p className="text-xl">
            In this project I used React and Framer motion on the front-end, and
            Firebase to create a simple chat application wher you can register
            an account, login and sen messages in realtime.
          </p>
          <div className="pt-4">
            <p className="text-2xl font-bold">used skills and technologies</p>
            <div className="text-5xl flex items-center pt-2">
              <BiLogoHtml5 className="text-orange-600" />
              <BiLogoCss3 className="text-blue-500" />
              <BiLogoJavascript className="text-yellow-400" />
              <BiLogoReact className="text-blue-400" />
              <BiLogoFirebase className="text-amber-500" />
              <FiFramer className="text-pink-600 text-4xl" />
            </div>
          </div>
          <div className="mt-auto ml-auto">
            <a
              href="https://chat-54050.web.app/"
              className="open-btn flex items-center gap-2 bg-cyan-600/50 backdrop-blur-md text-white text-xl py-2 px-4 rounded-md"
              target="_blank"
            >
              <BiLinkExternal /> <p className="pb-1">View demo</p>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="row flex-row-reverse my-3 project-row py-6 px-6 backdrop-blur-md bg-white/10 rounded-md shadow-lg shadow-black">
        <div className="col-lg-4 col-12 project rounded-md"></div>
        <div className="col-lg-8 col-12 project-1-discription text-[#bde5dc] py-2 flex flex-col">
          <h1 className="text-6xl">test</h1>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            laudantium fuga placeat iusto porro nostrum dicta saepe error
            tenetur voluptate? Sequi natus ducimus, blanditiis doloremque ut
            totam voluptatibus placeat iste.
          </p>
          <div className="mt-auto mr-auto">
            <a
              href="#"
              className="open-btn bg-cyan-600/50 backdrop-blur-md text-white text-xl py-2 px-4 rounded-md"
            >
              open
            </a>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Gallery;
