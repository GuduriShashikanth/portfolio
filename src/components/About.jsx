import React from 'react';
import shashii from '../assets/images/shashii.jpg';

const About = () => {
  return (
    <section className="bg-[#0a192f] h-full w-full text-gray-300 py-20 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl text-teal-400 font-bold mb-6">
            <span className="text-gray-300">About Me</span>
          </h2>

          <p className="mb-4 leading-relaxed">
            I’m <span className="text-white font-semibold">Shashikanth Guduri</span>, a Computer Science & Engineering undergraduate specializing in <span className="text-teal-400">Artificial Intelligence and Machine Learning</span>. I am passionate about building intelligent and scalable solutions that solve real-world problems.
          </p>

          <p className="mb-4 leading-relaxed">
            I'm currently working as a <span className="text-teal-400">Junior Developer at Todays Dental Services</span>, where I contribute to building modern, responsive web applications using React.js, Node.js, and AWS services including Lambda, S3, and DynamoDB.
          </p>

          <p className="mb-4 leading-relaxed">
            Previously, I interned at <span className="text-teal-400">DRDO, Hyderabad</span>, where I gained hands-on experience with CNNs, RNNs, and TensorFlow, collaborating with senior scientists to develop real-world deep learning models.
          </p>

          <p className="mb-4 leading-relaxed">
            Some of my notable projects include <span className="text-teal-400">EchoScribe</span>, a real-time multilingual audio transcription tool, and a <span className="text-teal-400">Skin Disease Classifier</span> using deep learning. I’ve also built responsive applications like a <span className="text-teal-400">ToDo List App</span> and a <span className="text-teal-400">Poem Generator</span> using the MERN stack.
          </p>

          <p className="leading-relaxed">
            I am actively seeking entry-level opportunities where I can contribute, grow, and learn as a developer while working on meaningful tech-driven solutions.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-8 text-sm text-gray-400">
            <p>▸ Python</p>
            <p>▸ JavaScript</p>
            <p>▸ React.js</p>
            <p>▸ Node.js</p>
            <p>▸ Flask</p>
            <p>▸ TensorFlow</p>
            <p>▸ MongoDB</p>
            <p>▸ Express.js</p>
            <p>▸ AWS (Lambda, S3, DynamoDB)</p>
            <p>▸ Deep Learning / NLP</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end relative w-fit mx-auto md:mx-0 group">
          {/* Background Frame */}
          <div className="absolute top-4 left-4 w-64 h-64 border-2 border-teal-400 rounded-md z-0" />

          {/* Foreground Image */}
          <div className="relative w-64 h-64 overflow-hidden rounded-md border-2 border-teal-400 z-10 transform transition duration-300 group-hover:scale-105 animate-float">
            <img
              src={shashii}
              alt="Shashikanth Guduri"
              className="object-cover w-full h-full grayscale-50 group-hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
