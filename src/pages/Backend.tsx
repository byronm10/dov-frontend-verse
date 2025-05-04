import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const Backend = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center pt-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-blue mb-4">
              Issa Dovale
            </h1>
            <h2 className="text-2xl font-medium text-portfolio-darkGray mb-6">
              Backend Engineer
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Building robust, scalable backend solutions with clean architecture and efficient data processing
            </p>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Professional Profile</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-4">
              Computer and System Engineers engaged in Fullstack software development, mainly focused on back-end.
            </p>
            <p className="text-lg mb-4">
              Growth-oriented, collaborative, assertive, with a strong experience in projects regarding data insights and user-friendly dashboard visualizations.
            </p>
            <p className="text-lg">
              My skills include web development, mainly focused on back-end, SQL, and data analysis, driven to achieve new learning opportunities, with professional and personal goals in dynamic work environments.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Education</h2>
          
          <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-portfolio-blue">Universidad del Norte</h3>
                  <h4 className="font-medium text-accent">Bachelor's Degree in Computer Science</h4>
                </div>
                <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                  <p>January 2017 - March 2023</p>
                  <p>Barranquilla, Colombia</p>
                </div>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Applied theoretical knowledge in real-world projects, focusing on clean code, modular architecture, and UX best practices.</li>
                <li>Participated in software development involving computing sciences, web services, data processing, and AI integration.</li>
                <li>Built intelligent frontend/backend systems with efficient data flow automation.</li>
              </ul>
            </CardContent>
          </Card>
          
          <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Web Development", "Data Science", "Artificial Intelligence", "AWS/Oracle/GCP", 
              "Agile Development", "Project Management", "Cisco", "Business Architecture"].map((course, idx) => (
              <div key={idx} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Experience</h2>
          
          <div className="space-y-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-portfolio-blue">Bootcamp Instructor</h3>
                    <h4 className="font-medium text-accent">Talento TECH</h4>
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                    <p>February 2024 - September 2024</p>
                    <p>Barranquilla, Colombia</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Delivered theoretical and practical instruction in Python programming with a focus on AI.</li>
                  <li>Designed and taught a study plan covering core concepts, data handling with Pandas and NumPy, and model development.</li>
                  <li>Guided students in real-world AI projects and promoted problem-solving through hands-on exercises and code reviews.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-portfolio-blue">IT Consultant Engineer</h3>
                    <h4 className="font-medium text-accent">Cisco Technologies</h4>
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                    <p>February 2023 - August 2023</p>
                    <p>Barranquilla, Colombia</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Technical Consultant Engineer with strong experience in Cisco Wireless technologies, including Wireless LAN Controllers and Access Points.</li>
                  <li>Proficient in networking solutions such as mesh networks, web authentication, RADIUS, TACACS, and SSL for secure connectivity.</li>
                  <li>Provided IT support across web and network platforms, with a proven track record in diagnosing and resolving performance, coverage, and connectivity issues.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Projects</h2>
          
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-3"></div>
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-portfolio-blue">Monkeypox Data Analysis App</h3>
                <div className="text-sm text-gray-500">December 2022</div>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Jupyter", "Kaggle"].map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Analyzed monkeypox case data from Kaggle using Python libraries (Pandas, NumPy, Plotly, Matplotlib, Seaborn) to extract epidemiological insights.</li>
                  <li>Performed data cleaning, exploratory analysis, and created visualizations to highlight trends.</li>
                  <li>Trained a linear regression model with Scikit-Learn to explore predictive patterns.</li>
                  <li>Documented results through visual dashboards and clear reporting for diverse audiences.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl p-6 shadow-md bg-blue-50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-portfolio-blue">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL"].map((skill, idx) => (
                  <div key={idx} className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl p-6 shadow-md bg-purple-50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-portfolio-blue">Frameworks/Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "Pandas", "NumPy", "Ruby on Rails"].map((skill, idx) => (
                  <div key={idx} className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl p-6 shadow-md bg-green-50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-portfolio-blue">Developer Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["VS Code", "Vite", "Figma", "GitHub Actions", "IntelliJ", "AWS CDK", "SAM"].map((skill, idx) => (
                  <div key={idx} className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Backend;