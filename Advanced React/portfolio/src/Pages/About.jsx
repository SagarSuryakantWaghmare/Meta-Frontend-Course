import { motion } from "framer-motion";
import sagar from "../assets/sagar.png";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white via-amber-50 to-orange-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="flex-1 mb-12 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            About <span className="text-orange-500">Me</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Hi! I’m <span className="font-bold text-gray-800">Sagar Waghmare</span>, a creative designer and full-stack developer driven by a passion for building impactful digital experiences. 
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I specialize in crafting scalable and user-friendly web applications using cutting-edge technologies such as <span className="font-bold text-gray-800">React</span>, <span className="font-bold text-gray-800">Node.js</span>, and <span className="font-bold text-gray-800">Tailwind CSS</span>. Whether it's solving complex problems or delivering elegant designs, I’m always up for a challenge.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-300">
            Let’s Connect
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-300 rounded-full p-1 animate-pulse"></div>
            {/* Profile Image */}
            <div className="absolute inset-1 bg-white rounded-full shadow-lg flex items-center justify-center">
              <img
                src={sagar}
                alt="Sagar Waghmare"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
