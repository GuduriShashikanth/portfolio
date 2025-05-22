import React from 'react';
const About = () => {
  return (
    <section className="bg-[#0a192f] h-full w-full  text-gray-300 py-20 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl text-teal-400 font-bold mb-6"><span className="text-gray-200">About Me</span></h2>

          <p className="mb-4 leading-relaxed">
            I am <span className="text-white font-semibold">Shashikanth Guduri</span>, a Computer Science undergraduate specializing in <span className="text-teal-400">Artificial Intelligence and Machine Learning</span>. I enjoy solving real-world problems with intelligent, scalable solutions.
          </p>

          <p className="mb-4 leading-relaxed">
            My work includes building deep learning models like a  <span className="text-teal-400">real-time multilingual audio transcription tool</span> and developing a <span className="text-teal-400">Skin Disease Classifier</span>  using speech and NLP techniques.
          </p>

          <p className="mb-4 leading-relaxed">
            On the web development side, I am a <span className="text-teal-400">MERN Stack Developer</span> passionate about creating fast, responsive, and functional web applications using technologies like React, Node.js, Express.js and MongoDB.
            Developed a <span className="text-teal-400">ToDo list App </span> and Developing a <span className="text-teal-400">Poem Generator</span> using React, Node.js.
          </p>

          <p className="leading-relaxed">
            Currently interning at <span className="text-teal-400">DRDO – Hyderabad</span>, I am working on machine learning algorithms alongside senior scientists. I am actively seeking entry-level opportunities to contribute and grow as a developer.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-8 text-sm text-gray-400">
            <p>▸ Python</p>
            <p>▸ React.js</p>
            <p>▸ Flask</p>
            <p>▸ Node.js</p>
            <p>▸ TensorFlow</p>
            <p>▸ MongoDB</p>
            <p>▸ Deep Learning</p>
            <p>▸ Express.js</p>
            <p>▸ NLP</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end relative w-fit mx-auto md:mx-0 group">
          {/* Background Frame */}
          <div className="absolute top-4 left-4 w-64 h-59 border-2 border-teal-400 rounded-md z-0" />
          
          {/* Foreground Image */}
          <div className="relative w-64 h-59 overflow-hidden rounded-md border-2 border-teal-400 z-10 transform transition duration-300 group-hover:scale-105 animate-float">
            <img
              src="/shashii.jpg"
              alt="Shashikanth Guduri"
              fill='true'
    
              className=" object-cover w-full h-auto grayscale-50 group-hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;