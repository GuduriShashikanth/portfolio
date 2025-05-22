"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#0a192f]  text-gray-300 h-screen flex flex-col justify-center items-center  px-6" id="contact">
      <h2 className="text-4xl font-bold text-teal-400 mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-10 text-center text-lg max-w-xl">
        Feel free to reach out to me via any of the platforms below. I am always open to networking, collaboration, or just a friendly hello!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/guduri-shashikanth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border border-teal-400 text-teal-300 rounded hover:bg-teal-400 hover:text-[#0a192f] transition"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/GuduriShashikanth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border border-gray-400 text-white rounded hover:bg-gray-800 transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>

        {/* Email */}
        <a
          href="mailto:shashiguduri24@gmail.com"
          className="flex items-center gap-3 px-6 py-3 border border-blue-400 text-blue-300 rounded hover:bg-blue-400 hover:text-[#0a192f] transition"
        >
          <FaEnvelope className="text-xl" />
          Email
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/shashi_guduri/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border border-pink-400 text-pink-300 rounded hover:bg-pink-400 hover:text-[#0a192f] transition"
        >
          <FaInstagram className="text-xl" />
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;