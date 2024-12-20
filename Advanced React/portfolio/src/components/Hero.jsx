import TypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import Sagar from "../assets/sagar.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, my <br /> name is{" "}
            <span className="text-orange-500">Sagar.</span>
          </h1>
          <TypingEffect
            text={[
              "I am a designer.",
              "I am a full-stack developer.",
              "I am a problem solver.",
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            className="text-lg text-gray-600 mb-6 inline-block"
          />
          <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
          >
            Get in touch
          </motion.button>
          </div>
          
        </motion.div>

        {/* Right Image/Placeholder */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className=" flex items-center justify-center">
            <img src={Sagar} className="w-86" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
