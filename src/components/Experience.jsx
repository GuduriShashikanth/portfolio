
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#0a192f] h-full w-full  text-gray-300 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl   font-bold text-teal-400 mb-10">
          <span className="text-gray-200">Experience</span>
        </h2>

        <div className="space-y-10">
          {/* DRDO Intern */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Machine Learning Intern – DRDO, Hyderabad
            </h3>
            <p className="text-sm text-teal-300">March 2025 – Present</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400 text-base">
              <li>
                Gained hands-on experience with CNNs, RNNs, and DNNs, focusing
                on evaluation and deployment.
              </li>
              <li>
                Worked with senior scientists on real-world ML problems using
                Python and TensorFlow.
              </li>
              <li>
                Built, trained, and optimized deep learning models on diverse
                datasets.
              </li>
            </ul>
          </div>

          {/* Add more experiences here if needed */}
        </div>
        <h2 className="text-2xl  font-bold text-teal-400 mt-20 mb-10">
          <span className="text-gray-200">Certifications</span>
        </h2>

        <div className="bg-[#112240] p-6 rounded-lg  shadow-md transition space-y-4 text-base text-gray-300">
          <ul className="flex flex-col space-y-2">
            <li className="flex gap-5">
              <a
                to="https://smartinterviews.in/certificate/21d947ef"
                target="_blank"
              >
                <strong>Data Structures & Algorithms</strong> – Smart Interviews
              </a>
              <a
                to="https://smartinterviews.in/certificate/21d947ef"
                target="_blank"
              >
                <span className="text-teal-400">a</span>
              </a>
            </li>
            <li className="flex gap-5">
              <a
                to=" https://www.udemy.com/certificate/UC-7568819a-57e4-4304-b14a-7b24c3aa1942/"
                target="_blank"
              >
                <strong>Full Stack Web Development</strong> – Udemy
              </a>
              <a
                to="https://www.udemy.com/certificate/UC-7568819a-57e4-4304-b14a-7b24c3aa1942/"
                target="_blank"
              >
                <span className="text-teal-400">a</span>
              </a>
            </li>
            <li className="flex gap-5">
              <a to="https://www.udemy.com/certificate/UC-9ab6aac8-4b9e-40f4-b17c-88ecfc98adbb/" target="_blank">
                <strong>Python & Flask Framework</strong> – Udemy
              </a>
              <a
                to="https://www.udemy.com/certificate/UC-9ab6aac8-4b9e-40f4-b17c-88ecfc98adbb/"
                target="_blank"
              >
                <span className="text-teal-400">a</span>
              </a>
            </li>
            <li className="flex gap-5">
              <a
                to=" https://www.hackerrank.com/certificates/2bff4bb45a8c"
                target="_blank"
              >
                <strong>SQL Advanced</strong> – Hacker
              </a>
              <a
                to="https://www.hackerrank.com/certificates/2bff4bb45a8c"
                target="_blank"
              >
                <span className="text-teal-400">a</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;