
import '@lottiefiles/lottie-player';


// import  Lottie  from 'react-lottie-player';
import profile from '../assets/pic.jpg';
import bg from '../assets/bg.jpg';
// import animationData from '../assets/animation.json'; // Your downloaded animation file
import Typewriter from 'react-typewriter-effect';
import '../App.css';

const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4"
>

      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        
{/* <Lottie animationData={animationData} loop  /> */}
      </div>

      <div
  className="w-full min-h-screen flex justify-center items-center bg-cover bg-center relative"

>
  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
  ></div>

  {/* Main Card */}
  <div className="relative z-10 max-w-4xl w-full text-center p-10 rounded-3xl shadow-[0_20px_50px_rgba(240,46,170,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)] bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
  >
    <img
      src={profile}
      alt="Anisha Birla"
      className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-gradient-to-br from-pink-400 to-purple-400 shadow-xl hover:scale-110 transition-transform duration-500"
    />

    <h1 className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 animate-gradient-x">
      Hi, I'm Anisha Birla
    </h1>

    <div className="mt-2 mb-5">
      <Typewriter
        textStyle={{
          fontSize: '1.3rem',
          fontWeight: '600',
          color: '#E5E7EB',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
        }}
        startDelay={500}
        cursorColor="#EC4899"
        multiText={[
          'Full Stack Developer',
          '400+ LeetCode Problems (Top 15%)',
          'Full Stack Developer @ PSDC | Upcoming SDE @ PalTech',
        ]}
        multiTextDelay={2000}
        typeSpeed={60}
      />
    </div>

    <div className="mt-6 space-y-3 text-gray-200 dark:text-gray-300 text-sm md:text-base animate-fade-in-up">
      <p className="hover:text-pink-400 transition-all duration-300 hover:scale-105">
        🚀 Full Stack Developer (MERN & Angular) with 1+ years of hands-on experience
      </p>
      <p className="hover:text-pink-400 transition-all duration-300 hover:scale-105">
        💼 Worked on AI-powered, fintech, and edtech platforms | Freelance & Internship projects
      </p>
      <p className="hover:text-pink-400 transition-all duration-300 hover:scale-105">
        🧠 400+ LeetCode problems solved | Top 15% globally | Strong in DSA & system design
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
