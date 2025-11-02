import React from "react";

const Projects = () => {
  const projects = [
       {
      title: "Versera — Poem Generator",
      description:
        "A creative web app that generates personalized poems based on mood and keywords. Built with React, Tailwind CSS, Node.js, and Express, and deployed seamlessly using Netlify and Render.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "Render", "Netlify"],
      demo: "https://versera.netlify.app/", // replace with your actual frontend URL
      github: "https://github.com/GuduriShashikanth/poem-generator-frontend", // replace with your repo link
    }, 
    {
      title: "EchoScribe — Seamless Audio Transcription Tool",
      description:
        "A real-time multilingual transcription app using Flask, Vosk, and NLP models for translation and punctuation correction.",
      tech: ["Python", "Flask", "Vosk", "T5", "Helsinki-NLP"],
      demo: ""
    },
    {
      title: "Portfolio — My Personal Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind CSS to showcase my skills, experience, and projects. Includes smooth scrolling navigation, animations, and a clean dark UI.",
      tech: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
      demo: "https://gudurishashikanth.github.io/portfolio/",
      github: "https://github.com/GuduriShashikanth/portfolio",
    },
    {
      title: "Shorttt — Smart URL Shortener",
      description:
        "A full-stack URL shortener built with React, Node.js, Express, and MongoDB. Generates short, shareable links with a backend hosted on Render and frontend deployed on Netlify.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demo: "https://shorttt.netlify.app/",
      github: "https://github.com/GuduriShashikanth/urlshortenerfrontend",
    },
   
    {
      title: "Todo List App",
      description:
        "A responsive and minimalistic task management app built with React and Tailwind CSS, featuring CRUD operations.",
      tech: ["React", "Tailwind CSS", "Vite"],
      demo: "https://gudurishashikanth.github.io/todo-react/",
      github: "https://github.com/GuduriShashikanth/todo-react",
    },
    {
      title: "Number Guessing Game",
      description:
        "A fun JavaScript number guessing game with real-time hints and animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://gudurishashikanth.github.io/html-game/",
      github: "https://github.com/GuduriShashikanth/html-game",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0a192f] text-gray-300 px-6 md:px-20 w-full"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-12">
          <span className="text-white">Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-teal-900 text-teal-200 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-[#0a192f] font-semibold rounded-lg hover:bg-teal-400 transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
