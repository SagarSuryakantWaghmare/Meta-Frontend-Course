import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Git",
  "Tailwind CSS",
  "TypeScript",
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-white to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col items-center px-6 md:px-12">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            My <span className="text-orange-500">Skills</span>
          </h1>
          <p className="text-lg text-gray-600">
            A curated list of technologies and tools I excel at:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="group relative p-6 bg-white text-center rounded-lg shadow-lg transform transition hover:scale-105"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
            >
              <span className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {skill}
              </span>
              {/* Add a subtle bottom glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-orange-300 to-transparent rounded-lg shadow-lg blur-lg"></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
