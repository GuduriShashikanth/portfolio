import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-2"
    >
      <div className="space-y-8">
        <div className="space-y-3">
          
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Feel free to reach out to me via any of the platforms below. I am
            always open to networking, collaboration, or just a friendly hello!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="https://linkedin.com/in/guduri-shashikanth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/30 hover:bg-white/6"
          >
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <FaLinkedin className="text-base" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/GuduriShashikanth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/30 hover:bg-white/6"
          >
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/4 text-white">
              <FaGithub className="text-base" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">GitHub</p>
            </div>
          </a>
          <a
            href="mailto:shashiguduri24@gmail.com"
            className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/30 hover:bg-white/6"
          >
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/10 text-blue-200">
              <FaEnvelope className="text-base" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">Email</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/shashi.iiii_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/30 hover:bg-white/6"
          >
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-pink-300/20 bg-pink-300/10 text-pink-200">
              <FaInstagram className="text-base" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">Instagram</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
