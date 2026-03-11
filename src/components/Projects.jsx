import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "GitHub Code Explainer — Intelligent GitHub Repository Explorer",
      description:
        "An intelligent full-stack app that lets you explore any GitHub repository through natural language Q&A. Paste a repo URL and instantly chat with the codebase — ask about architecture, specific files, or how any function works. Built on a high-speed RAG pipeline using FAISS vector search and Groq LLM inference, with real-time streaming responses.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Python",
        "FastAPI",
        "LangChain",
        "FAISS",
        "Sentence Transformers",
        "Groq",
        "HuggingFace Spaces",
        "Vercel",
      ],
      demo: "https://githubcodeexplainer.vercel.app/",
      github: "https://github.com/GuduriShashikanth/Githubcodeexplainer",
    },
    {
      title: "FlickPage — AI-Powered Movie & Book Recommendation Platform",
      description:
        "A sophisticated full-stack web application providing personalized movie and book recommendations using advanced AI algorithms and semantic search. Features hybrid recommendation system combining collaborative filtering, content-based filtering, and popularity-based algorithms with K-Nearest Neighbors and cosine similarity. Processes 15,000+ items with sub-second response times using 384-dimensional embeddings.",
      tech: [
        "React",
        "Zustand",
        "TypeScript",
        "Python 3.13",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "FastEmbed",
        "ONNX Runtime",
        "Supabase",
        "Tailwind CSS",
        "Zustand",
        "JWT",
        "bcrypt",
        "TMDB API",
        "Google Books API",
        "Vercel",

      ],
      demo: "https://flickpage.vercel.app/",
      githubFrontend: "https://github.com/GuduriShashikanth/FlickPage-Frontend",
      githubBackend: "https://github.com/GuduriShashikanth/FlickPage-Backend",
    },
    {
      title: "CoTask — Collaborative Task Management Platform",
      description:
        "A full-stack collaborative task management platform enabling real-time task creation, assignment, and updates. Features JWT-based authentication, role-based access control, live notifications via Socket.io, and a scalable layered backend architecture.",
      tech: [
        "React",
        "Vite",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Netlify",
        "Render",
      ],
      demo: "https://cotask.netlify.app",
      github: "https://github.com/GuduriShashikanth/TaskManager",
    },
    {
      title: "Versera — Poem Generator",
      description:
        "A creative web app that generates personalized poems based on mood and keywords. Built with React, Tailwind CSS, Node.js, and Express, and deployed seamlessly using Netlify and Render.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "Render", "Netlify"],
      demo: "https://versera.netlify.app/",
      githubFrontend: "https://github.com/GuduriShashikanth/poem-generator-frontend",
      githubBackend: "https://github.com/GuduriShashikanth/poem-generator-backend",
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
      githubFrontend: "https://github.com/GuduriShashikanth/urlshortenerfrontend",
      githubBackend: "https://github.com/GuduriShashikanth/urlshortenerbackend",
    },
    {
      title: "Todo List App",
      description:
        "A responsive and minimalistic task management app built with React and Tailwind CSS, featuring CRUD operations.",
      tech: ["React", "Tailwind CSS", "Vite"],
      demo: "https://gudurishashikanth.github.io/todo-react/",
      github: "https://github.com/GuduriShashikanth/todo-react",
    },
  ];

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="py-2"
    >
      <div className="space-y-8">
        <div className="space-y-3">
        
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Projects
          </h2>
        </div>

        <article className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,_rgba(59,130,246,0.12),_rgba(13,28,42,0.2))] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
            Featured Project
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="break-words text-3xl font-semibold text-white sm:text-4xl">
              {featuredProject.title}
            </h3>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredProject.demo && (
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Live Demo
                </a>
              )}
              {featuredProject.github && (
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <article
              key={index}
              className="flex h-full min-w-0 flex-col rounded-[1.75rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/20 hover:bg-white/6"
            >
              <h3 className="break-words text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubFrontend && project.githubBackend ? (
                  <>
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      Github Frontend
                    </a>
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      Github Backend
                    </a>
                  </>
                ) : (
                  project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      GitHub
                    </a>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
