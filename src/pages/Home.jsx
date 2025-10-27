import resume from '../assets/SHASHI-RESUME.pdf';
export default function Home() {
  return (
     <section id="home" className="w-full py-20 px-6 md:px-20 flex justify-center">
          <div className="max-w-5xl w-full text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I am <span className="text-[#f8edeb]">Shashikanth Guduri</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold max-w-3xl">
              Junior Web Developer @ Todays Dental Services | MERN + AWS Developer
            </p>

            <p className="mt-2 text-base sm:text-lg md:text-xl max-w-3xl">
              Specializing in building responsive frontend interfaces using <strong>React.js</strong> and developing serverless backend APIs with <strong>AWS Lambda</strong> and <strong>Node.js</strong>.
            </p>

            <div className="mt-8 space-y-4 max-w-3xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-400">
                Glad to e-meet you!
              </h3>

              <p className="text-base sm:text-lg md:text-xl">
                At <strong>Todays Dental Services</strong>, I work on crafting responsive frontends, integrating RESTful APIs, and enhancing UI/UX for a seamless user experience.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                I love turning design ideas into functional apps with clean code, reusable components, and optimized performance using technologies like React, Tailwind CSS, Node.js, and AWS.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                I'm currently seeking full-time opportunities where I can grow as a full-stack developer and contribute to impactful digital products.
              </p>
            </div>

            {/* Resume Button */}
            <div className="mt-10 flex justify-center md:justify-start">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>
  );
}
