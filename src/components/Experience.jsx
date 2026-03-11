import React from "react";

const certifications = [
  {
    title: "Data Structures & Algorithms",
    issuer: "Smart Interviews",
    href: "https://smartinterviews.in/certificate/21d947ef",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    href: "https://www.udemy.com/certificate/UC-7568819a-57e4-4304-b14a-7b24c3aa1942/",
  },
  {
    title: "Python & Flask Framework",
    issuer: "Udemy",
    href: "https://www.udemy.com/certificate/UC-9ab6aac8-4b9e-40f4-b17c-88ecfc98adbb/",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/2bff4bb45a8c",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-2"
    >
      <div className="space-y-10">
        <div className="space-y-3">
        
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-0 before:left-[6px] before:top-1 before:w-px before:bg-white/10 sm:before:left-[13px]">
          <article className="relative min-w-0 pl-8 sm:pl-12">
            <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-4 border-[#0b1520] bg-cyan-300 sm:left-2" />
            <div className="rounded-[1.75rem] border border-white/8 bg-white/4 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">
                Junior Developer – Todays Dental Services, Hyderabad
              </h3>
              <p className="mt-1 text-sm text-cyan-200">June 2025 – Present</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                <li>
                  Contributing to the development of scalable full-stack applications using React, Node.js, and Python (FastAPI).
                </li>
                <li>
                  Building and integrating RESTful APIs and AI-powered backend services, deployed on AWS serverless infrastructure (Lambda, S3, DynamoDB).
                </li>
                <li>
                  Managing and provisioning cloud infrastructure using AWS CDK and CloudFormation to support scalable and automated deployments.
                </li>
                <li>
                  Improving application performance, user experience, and backend efficiency by optimizing frontend components, API workflows, and data processing pipelines.
                </li>
              </ul>
            </div>
          </article>

          <article className="relative min-w-0 pl-8 sm:pl-12">
            <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-4 border-[#0b1520] bg-cyan-300 sm:left-2" />
            <div className="rounded-[1.75rem] border border-white/8 bg-white/4 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">
                Machine Learning Intern – DRDO, Hyderabad
              </h3>
              <p className="mt-1 text-sm text-cyan-200">March 2025 – May 2025</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                <li>
                  Gained hands-on experience with CNNs, RNNs, and DNNs, focusing on evaluation and deployment.
                </li>
                <li>
                  Collaborated with senior scientists to learn and apply ML algorithms on real-world datasets.
                </li>
                <li>
                  Developed and trained deep learning models using TensorFlow, focusing on model performance optimization.
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">
              Certifications
            </p>
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition hover:border-cyan-300/30 hover:bg-white/6"
              >
                <p className="text-lg font-medium text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.issuer}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-200">
                  Open credential
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
