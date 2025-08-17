

// Experience.tsx
// import React from "react";
// import "../App.css";
// import { FaArrowRight } from "react-icons/fa";
// import Tilt from 'react-parallax-tilt';

// const experiences = [
//   {
//     title: "4eDentalAI",
//     date: "Jan 2025 - Feb 2025",
//     role: "Freelance MERN Stack Developer",
//     location: "Remote",
//     description: [
//       "Developed an AI-powered dental assistant with X-ray analysis & cavity detection.",
//       "Integrated Stripe, Calendly, and Brevo for payments, scheduling, and emails.",
//       "Built secure role-based authentication and deployed on AWS."
//     ]
//   },
//   {
//     title: "GirlScript Summer of Code (GSSoC) 2024",
//     date: "Oct 2024 - Nov 2024",
//     role: "Contributor",
//     location: "Remote",
//     description: [
//       "Contributed to open-source projects as part of the GSSoC 2024 initiative.",
//       "Collaborated with mentors and fellow developers to improve software solutions.",
//       "Enhanced skills in problem-solving, collaboration, and real-world coding tasks."
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
//       <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-16 animate-fade-in-up">
//         Experience
//       </h2>

//       <div className="relative max-w-5xl mx-auto">
//         <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2 z-0 rounded-full"></div>

//         <div className="flex flex-col gap-10 relative z-10">
//           {experiences.map((exp, index) => (
//             <div
//               key={exp.title}
//               className={`w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
//             >
//               <Tilt
//                 glareEnable={true}
//                 glareMaxOpacity={0.2}
//                 scale={1.02}
//                 transitionSpeed={1500}
//                 tiltMaxAngleX={10}
//                 tiltMaxAngleY={10}
//                 className="w-full max-w-md"
//               >
//                 <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border-l-8 border-pink-500 dark:border-purple-600 transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
//                   <h3 className="text-xl font-bold text-pink-600 dark:text-purple-400 mb-1">{exp.title}</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 italic">{exp.date}</p>
//                   <p className="text-base font-semibold text-gray-800 dark:text-white mb-1">{exp.role}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{exp.location}</p>
//                   <ul className="space-y-2">
//                     {exp.description.map((line, idx) => (
//                       <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-200">
//                         <FaArrowRight className="mt-1 mr-2 text-pink-500 dark:text-purple-400" /> {line}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </Tilt>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


// @ts-ignore
import React from "react";
import "../App.css";
import { FaLightbulb } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    title: "Paltech",
    date: "June 2025 - Current",
    role: "Trainee Data Engineer",
    type: "Full Time",
    location: "Hyderabad",
    link: "https://www.pal.tech/",
    description: [
"Developed and optimized SQL Data Warehouse solutions for large-scale data processing",
"Built scalable ETL pipelines using Databricks and PySpark for data integration and transformation",
"Implemented performance tuning and data quality checks to ensure reliable analytics delivery"
    ]
  },
  {
    title: "Pratibha Skill Development Center",
    date: "May 2025 - Jun 2025",
    role: "Full Stack Developer (Angular & Node.js)",
    type: "Freelance",
    location: "Pune",
    link: "https://pratibhaskilldevelopment.com/",
    description: [
      "Building a skill training platform for youth with scalable full-stack architecture.",
      "Developing responsive UI, backend APIs, and admin dashboard for course management.",
      "Integrated Razorpay for payments and deployed the platform on AWS."
    ]
  },
  {
    title: "GirlScript Summer of Code (GSSoC) 2024",
    date: "Oct 2024 - Nov 2024",
    role: "Contributor",
    type: "Part Time",
    location: "Remote",
    description: [
      "Contributed to open-source projects as part of the GSSoC 2024 initiative.",
      "Collaborated with mentors and fellow developers to improve software solutions.",
      "Enhanced skills in problem-solving, collaboration, and real-world coding tasks."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-16 animate-fade-in-up">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2 z-0 rounded-full"></div>

        <div className="flex flex-col gap-20 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full max-w-md"
              >
                <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border-l-8 border-pink-500 dark:border-purple-600 animate-slide-up transition-all duration-500">
                  {/* Lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 opacity-30 rounded-xl blur-sm z-[-1]" />

                  <h3 className="text-xl font-bold text-pink-600 dark:text-purple-400 mb-1">
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {exp.title}
                      </a>
                    ) : (
                      exp.title
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 italic">{exp.date}</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-white mb-1">{exp.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{exp.location}</p>
                  {exp.type && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="font-medium">Type:</span> {exp.type}
                    </p>
                  )}
                  <ul className="list-none space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    {exp.description.map((line, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaLightbulb className="text-yellow-400" size={14} />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience;

