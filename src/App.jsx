import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import resume from './assets/SHASHI-RESUME.pdf'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#0a192f] text-gray-300 min-h-screen w-full">
      {/* Navbar stays at top */}
      <Navbar />

      {/* Hero Section */}
      <section id="home"
      className="w-full py-20 px-6 md:px-20 flex justify-center">
        <div className="max-w-5xl w-full text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I am <span className="text-blue-600">Shashikanth Guduri</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold max-w-3xl">
            Computer Science Undergraduate | AI & ML Specialist | Full-Stack Developer
          </p>

          <p className="mt-2 text-base sm:text-lg md:text-xl max-w-3xl">
            Building intelligent solutions with a passion for technology and innovation.
          </p>

          <div className="mt-8 space-y-4 max-w-3xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-400">
              Glad to e-meet you!
            </h3>

            <p className="text-base sm:text-lg md:text-xl">
              I am currently seeking entry-level opportunities in{" "}
              <strong>Full-Stack Web Development (MERN stack)</strong> and{" "}
              <strong>Artificial Intelligence/Machine Learning</strong>.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              With hands-on experience in developing intelligent systems and building dynamic web applications,
              I’m eager to contribute to innovative teams, apply my skills, learn from industry experts, and grow as a developer.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              I’m passionate about leveraging technology to solve real-world problems and create impactful solutions.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href={resume}
              open
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Experience />
      <Contact />
    </div>
    </>
  )
}

export default App
