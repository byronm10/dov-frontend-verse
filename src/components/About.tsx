
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a <strong className="text-portfolio-blue">Computer and System Engineer</strong> specialized in Fullstack development 
              with a primary focus on creating exceptional frontend experiences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Growth-oriented and collaborative, I bring strong experience in projects focused on data insights 
              and user-friendly dashboard visualizations. My technical expertise includes web development with 
              a focus on framework architectures, UX/UI design, and web services.
            </p>
            <p className="text-lg text-gray-700">
              I'm driven by continuous learning and thrive in dynamic work environments where I can 
              achieve both professional and personal growth while delivering high-quality solutions.
            </p>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">Education</h3>
              <p className="font-medium">Universidad del Norte</p>
              <p className="text-gray-600">Bachelor's Degree in Computer Science</p>
              <p className="text-sm text-gray-500">January 2017 - March 2023</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">Relevant Coursework</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Data Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Artificial Intelligence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>AWS/Oracle/GCP</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Agile Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Project Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Cisco</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                  <span>Business Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
