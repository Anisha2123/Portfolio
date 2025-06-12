

import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion"
import ResumeA from "../assets/Anisha_Birla_Resume.pdf";
import "../App.css";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 px-6 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-400 to-purple-600 mb-12 tracking-wide"
      >
        My Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-pink-300/20 dark:border-pink-500/20 rounded-3xl p-10 shadow-xl space-y-6 animate-fade-in-up"
      >
        {/* <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          I'm a passionate <strong>Full Stack Developer</strong> skilled in crafting dynamic, interactive, and scalable web apps using
          <span className="text-pink-600 font-semibold"> React.js, Node.js, and MongoDB</span>.
          With <strong>350+ LeetCode problems</strong> solved (Top 15%) and hands-on project experience via
          <em> GirlScript Summer of Code</em> and freelance work, my resume highlights both <span className="underline decoration-wavy decoration-pink-400">technical depth</span> and real-world impact.
        </p> */}

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          href={ResumeA}
          download
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 relative group overflow-hidden"
        >
          <FaDownload className="animate-bounce" />
          <span>Download Resume</span>

          {/* Optional shimmer effect */}
          <span className="absolute inset-0 w-full h-full bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition duration-700 group-hover:animate-shimmer"></span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Resume;
