


import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "../App.css";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4 text-center shadow-inner z-10">
      <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
        Made <span className="animate-pulse text-pink-500"></span> by Anisha Birla
      </p>
      
      <div className="flex justify-center items-center gap-6 text-2xl">
        <a 
          href="https://github.com/Anisha2123" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-125 text-amber-50"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/anisha-birla" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-125 text-amber-50"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://wa.me/916307255290" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-125 text-amber-50"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="https://www.instagram.com/wt.aq_ab/?hl=en" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-125 text-amber-50"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Anisha Birla. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
