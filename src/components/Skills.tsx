

// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
// } from 'react-icons/fa';
// import { SiMongodb, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import clsx from 'classnames';
// import '../App.css';

// const allSkills = [
//   { name: 'React.js', icon: <FaReact color="#61DBFB" />, category: 'Frontend' },
//   { name: 'TailwindCSS', icon: <SiTailwindcss color="#38B2AC" />, category: 'Frontend' },
//   { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, category: 'Frontend' },
//   { name: 'JavaScript', icon: <SiJavascript color="#F0DB4F" />, category: 'Frontend' },
//   { name: 'HTML5', icon: <FaHtml5 color="#E44D26" />, category: 'Frontend' },
//   { name: 'CSS3', icon: <FaCss3Alt color="#264de4" />, category: 'Frontend' },
//   { name: 'Node.js', icon: <FaNodeJs color="#3C873A" />, category: 'Backend' },
//   { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, category: 'Backend' },
//   { name: 'SQL', icon: <FaDatabase color="#6c757d" />, category: 'Backend' },
//   { name: 'Git', icon: <FaGitAlt color="#F1502F" />, category: 'Tools' },
// ];

// const filters = ['All', 'Frontend', 'Backend', 'Tools'];

// const Skills = () => {
//   const [selected, setSelected] = useState('All');

//   const filteredSkills =
//     selected === 'All' ? allSkills : allSkills.filter((skill) => skill.category === selected);

//   return (
//     <section
//       id="skills"
//       className="py-20 px-6 md:px-16 bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 tracking-wider"
//       >
//         ⚡ My Tech Arsenal
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="text-gray-700 dark:text-gray-300 text-lg mb-10 max-w-3xl mx-auto"
//       >
//         From pixel-perfect frontend design to scalable backend logic, I wield these tools to build
//         efficient and visually striking applications.
//       </motion.p>

//       <div className="flex justify-center gap-4 mb-10 flex-wrap">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setSelected(filter)}
//             className={clsx(
//               'px-5 py-2 rounded-full font-medium transition-all border dark:border-white/20',
//               selected === filter
//                 ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
//                 : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
//             )}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
//         initial="hidden"
//         whileInView="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//       >
//         {filteredSkills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             variants={{
//               hidden: { opacity: 0, scale: 0.9 },
//               visible: { opacity: 1, scale: 1 },
//             }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//           >
//             <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
//               <div className="flex flex-col items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
//                 <div className="text-5xl drop-shadow-md">{skill.icon}</div>
//                 <p className="text-base font-semibold text-gray-700 dark:text-white">
//                   {skill.name}
//                 </p>
//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
// } from 'react-icons/fa';
// import { SiMongodb, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
// import Tilt from 'react-parallax-tilt';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import clsx from 'classnames';
// import '../App.css';

// const allSkills = [
//   { name: 'React.js', icon: <FaReact color="#61DBFB" />, category: 'Frontend', level: 92 },
//   { name: 'TailwindCSS', icon: <SiTailwindcss color="#38B2AC" />, category: 'Frontend', level: 88 },
//   { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, category: 'Frontend', level: 80 },
//   { name: 'JavaScript', icon: <SiJavascript color="#F0DB4F" />, category: 'Frontend', level: 90 },
//   { name: 'HTML5', icon: <FaHtml5 color="#E44D26" />, category: 'Frontend', level: 95 },
//   { name: 'CSS3', icon: <FaCss3Alt color="#264de4" />, category: 'Frontend', level: 85 },
//   { name: 'Node.js', icon: <FaNodeJs color="#3C873A" />, category: 'Backend', level: 87 },
//   { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, category: 'Backend', level: 83 },
//   { name: 'SQL', icon: <FaDatabase color="#6c757d" />, category: 'Backend', level: 78 },
//   { name: 'Git', icon: <FaGitAlt color="#F1502F" />, category: 'Tools', level: 89 },
// ];

// const filters = ['All', 'Frontend', 'Backend', 'Tools'];

// const Counter = ({ value }: { value: number }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const end = value;
//       const duration = 1000;
//       const step = Math.ceil(end / (duration / 10));

//       const counter = setInterval(() => {
//         start += step;
//         if (start >= end) {
//           setCount(end);
//           clearInterval(counter);
//         } else {
//           setCount(start);
//         }
//       }, 10);
//     }
//   }, [inView]);

  

//   return <span ref={ref}>{count}%</span>;
// };




// const Skills = () => {
//   const [selected, setSelected] = useState('All');

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
//       document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const filteredSkills =
//     selected === 'All' ? allSkills : allSkills.filter((skill) => skill.category === selected);

//   return (
//     <section
//       id="skills"
//       className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center overflow-hidden"
//     >
//       {/* Custom Glow Cursor */}
//       <motion.div
//         className="pointer-events-none fixed top-0 left-0 w-40 h-40 bg-pink-400 opacity-30 blur-3xl rounded-full z-0"
//         animate={{ x: 'calc(var(--cursor-x, 0px) - 5rem)', y: 'calc(var(--cursor-y, 0px) - 5rem)' }}
//         transition={{ type: 'spring', stiffness: 50, damping: 20 }}
//       />

//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 tracking-wider relative z-10"
//       >
//         ⚡ My Tech Arsenal
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="text-gray-700 dark:text-gray-300 text-lg mb-10 max-w-3xl mx-auto relative z-10"
//       >
//         Every icon here represents a skill I’ve honed to power seamless digital experiences.
//       </motion.p>

//       <div className="flex justify-center gap-4 mb-10 flex-wrap z-10 relative">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setSelected(filter)}
//             className={clsx(
//               'px-5 py-2 rounded-full font-medium transition-all border dark:border-white/20',
//               selected === filter
//                 ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
//                 : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
//             )}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//       >
//         {filteredSkills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             variants={{
//               hidden: { opacity: 0, scale: 0.9 },
//               visible: { opacity: 1, scale: 1 },
//             }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//           >
//             <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
//               <div className="w-64 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/40 transition-transform transform hover:scale-105">
//                 <div className="flex justify-center text-5xl mb-4">{skill.icon}</div>
//                 <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                   {skill.name}
//                 </p>
//                 <div className="text-pink-600 dark:text-pink-400 font-bold text-sm mb-2">
//                   Proficiency: <Counter value={skill.level} />
//                 </div>
//                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
//                   <div
//                     className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;


import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAngular,
  
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiVite, SiNextdotjs } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import clsx from 'classnames';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import '../App.css';

const allSkills = [
  { name: 'React.js', icon: <FaReact />, category: 'Frontend', level: 92 },
  { name: 'Angular', icon: <FaAngular />, category: 'Frontend', level: 80 },
{ name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend', level: 76 },
  { name: 'Vite.js', icon: <SiVite />, category: 'Frontend', level: 86 },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'Frontend', level: 80 },
  { name: 'TailwindCSS', icon: <SiTailwindcss />, category: 'Frontend', level: 88 },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend', level: 90 },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend', level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', level: 87 },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Backend', level: 83 },
  { name: 'SQL', icon: <FaDatabase />, category: 'Backend', level: 78 },
  { name: 'Git', icon: <FaGitAlt />, category: 'Tools', level: 89 },
];

const filters = ['All', 'Frontend', 'Backend', 'Tools'];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const step = Math.ceil(end / (duration / 10));
    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 10);
    return () => clearInterval(counter);
  }, [value]);

  return <span ref={ref}>{count}%</span>;
};

const Skills = () => {
  const [selected, setSelected] = useState('All');

  const handleFilterClick = (category: string) => {
    setSelected((prev) => (prev === category ? 'All' : category));
  };

  const filteredSkills =
    selected === 'All' ? allSkills : allSkills.filter((skill) => skill.category === selected);

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
        🚀 My Skills
      </h2>

      {/* Radar Chart */}
      <div className="w-full max-w-4xl mx-auto h-80 mb-12">
        <ResponsiveContainer>
          <RadarChart data={allSkills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Skill Proficiency"
              dataKey="level"
              stroke="#ec4899"
              fill="#ec4899"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={clsx(
              'px-5 py-2 rounded-full font-medium transition-all border border-gray-400 dark:border-white/20',
              selected === filter
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center justify-center">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
              <div className="w-64 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/40 transition-transform transform hover:scale-105 text-center">
                <div className="flex justify-center text-5xl mb-4 text-pink-500">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {skill.name}
                </p>
                <div className="text-pink-600 dark:text-pink-400 font-bold text-sm mb-2">
                  Proficiency: <Counter value={skill.level} />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

