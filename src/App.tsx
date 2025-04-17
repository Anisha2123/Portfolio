



import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CustomCursor from "./components/CustomCursor"; // Adjust path if needed
import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
       <CustomCursor />
      <div className="font-sans scroll-smooth main">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
