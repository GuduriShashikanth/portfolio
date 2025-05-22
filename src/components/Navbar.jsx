
import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
       
        <div className="text-2xl font-bold text-black">SG</div>

    
        <ul className="hidden md:flex items-center gap-6 font-semibold text-black">
          <li className="hover:font-extrabold transition-all duration-300">
            <a  to="#home">Home</a>
          </li>
          <li className="hover:font-extrabold transition-all duration-300">
            <a  to="#about">About</a>
          </li>
          <li className="hover:font-extrabold transition-all duration-300">
            <a  to="#experience">Experience</a>
          </li>
          <li className="hover:font-extrabold transition-all duration-300">
            <a  to="#projects">Projects</a>
          </li>
          <li className="hover:font-extrabold transition-all duration-300">
            <a to="#contact">Contact</a>
          </li>
          <li className="hover:font-extrabold transition-all duration-300">
            <a href="/SHASHI-RESUME.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <div
          className="md:hidden text-3xl font-bold text-black cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-teal-300 px-6 py-4 space-y-3 text-black font-semibold">
          <a href="/" onClick={toggleMenu}>
            <p className="hover:font-extrabold">Home</p>
          </a>
          <a href="/about" onClick={toggleMenu}>
            <p className="hover:font-extrabold">About</p>
          </a>
          <a href="/experience" onClick={toggleMenu}>
            <p className="hover:font-extrabold">Experience</p>
          </a>
          <a href="/projects" onClick={toggleMenu}>
            <p className="hover:font-extrabold">Projects</p>
          </a>
          <a href="/contact" onClick={toggleMenu}>
            <p className="hover:font-extrabold">Contact</p>
          </a>
          <a
            href="/SHASHI-RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-extrabold block"
            onClick={toggleMenu}
          >
Resume
          </a>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;