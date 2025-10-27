import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="bg-[#0a192f] text-gray-300 min-h-screen w-full">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects /> 
        <Contact />
      </div>
    </>
  );
}

export default App;
