
// import "../App.css";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Tilt from 'react-parallax-tilt';

// const projects = [
//   {
//     title: "StoxFlow",
//     description:
//       "A full-stack stock trading website with AI-powered predictions, virtual trading, portfolio tracking, and real-time data using Yahoo Finance and Flask microservices.",
//     date: "March 2025 - Present",
//     live: "https://stoxflow.vercel.app",
//     github: "https://github.com/Anisha2123/StoxFlow",
//   },
//   {
//     title: "4eDentalAI",
//     description:
//       "An AI-powered dental assistant platform using Angular, Node.js, MongoDB. Includes X-ray analysis API, Stripe payments, Calendly scheduling, and real-time admin dashboards.",
//     date: "January 2025",
//     live: "https://4edentalai.com",
//     github: "https://github.com/Anisha2123/4eDentalAI",
//   },
//   {
//     title: "TopDataCoach",
//     description:
//       "An online learning platform for data science and web dev with Stripe integration, role-based access, RESTful APIs, and admin dashboard.",
//     date: "February 2025",
//     live: "https://topdatacoach.vercel.app",
//     github: "https://github.com/Anisha2123/TopDataCoach",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-4 md:px-10 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-black"
//     >
//       <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-12 animate-fade-in-up">
//         Featured Projects
//       </h2>

//       <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 justify-center">
//         {projects.map((proj) => (
//           <Tilt
//             key={proj.title}
//             glareEnable={true}
//             glareMaxOpacity={0.25}
//             scale={1.03}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             transitionSpeed={1500}
//             className="w-full"
//           >
//             <div className="relative bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 transition-all duration-500 group border-l-8 border-pink-500 dark:border-purple-600 hover:shadow-3xl transform hover:scale-105">
              
//               {/* Lighting Effect */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 opacity-25 rounded-xl blur-sm z-[-1]" />

//               <h3 className="text-2xl font-bold text-pink-600 dark:text-purple-400 group-hover:text-purple-600 mb-2">
//                 {proj.title}
//               </h3>
//               <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">{proj.date}</p>
//               <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
//                 {proj.description}
//               </p>

//               <div className="flex items-center gap-4 mt-4">
//                 <a
//                   href={proj.live}
//                   className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition font-medium"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Live <FaExternalLinkAlt size={14} />
//                 </a>
//                 <a
//                   href={proj.github}
//                   className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Code <FaGithub size={16} />
//                 </a>
//               </div>
//             </div>
//           </Tilt>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import "../App.css";
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChartLine,
  FaTooth,
  FaBrain,
  FaGraduationCap,
  FaPalette,
  FaChalkboardTeacher,
} from "react-icons/fa";

const allProjects = [
  {
    title: "PSDC",
    icon: <FaChalkboardTeacher />,
    tech: ["Angular", "Node.js", "MongoDB", "Razorpay", "AWS"],
    description:
      "A skill training platform for youth, built with Angular and Node.js. Features include course listing, admin dashboard, contact form, Razorpay payments, and full deployment on AWS.",
    date: "May 2025 - Jun 2025",
    live: "https://pratibhaskilldevelopment.com/",
    github: "Private Repository (Institutional)",
  },
  {
    title: "4eDentalAI",
    icon: <FaTooth />,
    tech: ["Angular", "Node.js", "MongoDB", "Stripe", "Calendly"],
    description:
      "An AI-powered dental assistant platform using Angular, Node.js, MongoDB. Includes X-ray analysis API, Stripe payments, Calendly scheduling, and real-time admin dashboards.",
    date: "Jan 2025 - Feb 2025",
    live: "https://4edentalai.com",
    github: "https://github.com/Anisha2123/4eDentalAI",
  },
  {
    title: "TopDataCoach",
    icon: <FaGraduationCap />,
    tech: ["MERN Stack", "Stripe", "Admin Dashboard", "REST API"],
    description:
      "An online learning platform for data science and web dev with Stripe integration, role-based access, RESTful APIs, and admin dashboard.",
    date: "Feb 2025 - Mar 2025",
    live: "https://topdatacoach.com/",
    github: "Private Repository (Institutional)",
  },
  {
    title: "StoxFlow",
    icon: <FaChartLine />,
    tech: ["React", "Node.js", "MongoDB", "Flask", "Yahoo Finance API"],
    description:
      "A full-stack stock trading website with AI-powered predictions, virtual trading, portfolio tracking, and real-time data using Yahoo Finance and Flask microservices.",
    date: "Mar 2025 - Apr 2025",
    live: "https://stox-flow.vercel.app/",
    github: "https://github.com/Anisha2123/StoxFlow",
  },
  {
    title: "Job Auto-Apply System",
    icon: <FaBrain />,
    tech: ["React", "Node.js", "MongoDB", "Puppeteer", "Express"],
    description:
      "A MERN stack automation platform that auto-applies to jobs on LinkedIn and Internshala. Includes profile management, resume upload, Puppeteer-based automation, and MongoDB tracking.",
    date: "Apr 2025 - May 2025",
    live: "https://job-portal-orcin-delta.vercel.app/",
    github: "https://github.com/Anisha2123/Job_Portal",
  },
  {
    title: "PratibhaSkills",
    icon: <FaGraduationCap />,
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    description:
      "A MERN stack landing page for Pratibha Skill Development Center. Features dynamic course listings, contact form with Nodemailer, testimonials, and admin panel for content management.",
    date: "Apr 2025 - Apr 2025",
    live: "https://pratibhadev.vercel.app/",
    github: "https://github.com/Anisha2123/Education_Website_Demo",
  },
  {
    title: "Discord Color Generator",
    icon: <FaPalette />,
    tech: ["React", "TailwindCSS", "TypeScript"],
    description:
      "A responsive and animated color code generator for Discord themes. Users can preview and copy color combos, with sleek UI animations and accessibility features.",
    date: "Mar 2025 - Mar 2025",
    live: "https://video-dubber-task-tawny.vercel.app/",
    github: "https://github.com/Anisha2123/VideoDubberTask",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const currentProjects = allProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-4 md:px-10 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-12 animate-fade-in-up">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {currentProjects.map((proj) => (
            <div
              key={proj.title}
              className="backdrop-blur-xs bg-white/80 dark:bg-gray-800/70 shadow-2xl rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-pink-300 hover:-translate-y-2 hover:scale-[1.01] duration-300 group border border-pink-100 dark:border-purple-700"
            >
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-2 text-pink-600 dark:text-purple-400 group-hover:text-purple-600 mb-2">
                  {proj.icon} {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{proj.date}</p>
                <p className="text-gray-700 dark:text-gray-200 mt-4 text-base leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-100 dark:bg-purple-800 text-pink-600 dark:text-white text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={proj.live}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live <FaExternalLinkAlt size={14} />
                </a>
                {proj.github && proj.github !== "Private Repository (Institutional)" ? (
                  <a
                    href={proj.github}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <FaGithub size={16} />
                  </a>
                ) : (
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">
                    Institutional project – repository not public
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded text-white disabled:opacity-50
               bg-gradient-to-r from-purple-500 to-pink-500
               hover:from-purple-600 hover:to-pink-600
               dark:from-purple-700 dark:to-pink-700
               dark:hover:from-purple-800 dark:hover:to-pink-800
               transition-colors
            }`}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded text-white disabled:opacity-50
               bg-gradient-to-r from-green-400 to-blue-500
               hover:from-green-500 hover:to-blue-600
               dark:from-green-600 dark:to-blue-700
               dark:hover:from-green-700 dark:hover:to-blue-800
               transition-colors
            `}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
