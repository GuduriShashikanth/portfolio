import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-2"
    >
      <div className="space-y-6">
          <div className="space-y-3">
            
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
            <p>
              I’m a Junior Developer focused on full-stack and <span className="text-cyan-300">AI-driven applications</span>. I build modern web platforms using <span className="font-semibold text-white">React, Node.js, Python (FastAPI), and AWS</span>, combining intuitive user interfaces with scalable backend systems and cloud infrastructure.
            </p>
            <p>
              I’m particularly interested in how <span className="text-cyan-300">AI and modern web development</span> can come together to create impactful solutions. Through my projects, I focus on building practical systems, improving performance, and continuously expanding my skills by exploring new tools and technologies.
            </p>
          </div>


          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
              My skills include
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Python",
                "JavaScript",
                "React.js",
                "Node.js",
                "FastAPI",
                "TensorFlow",
                "MongoDB",
                "PostgreSQL",
                "Express.js",
                "AWS (Lambda, S3, DynamoDB)",
                "Deep Learning / NLP",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
