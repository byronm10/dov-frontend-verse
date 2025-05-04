import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Backend = () => {
  const { t } = useLanguage();

  // Experience data for the backend role
  const experiences = [
    {
      title: "Bootcamp Instructor",
      company: "Talento TECH",
      period: "February 2024 - September 2024",
      location: "Barranquilla, Colombia",
      responsibilities: [
        "Delivered theoretical and practical instruction in Python programming with a focus on AI.",
        "Designed and taught a study plan covering core concepts, data handling with Pandas and NumPy, and model development.",
        "Guided students in real-world AI projects and promoted problem-solving through hands-on exercises and code reviews."
      ]
    },
    {
      title: "IT Consultant Engineer",
      company: "Cisco Technologies",
      period: "February 2023 - August 2023",
      location: "Barranquilla, Colombia", 
      responsibilities: [
        "Technical Consultant Engineer with strong experience in Cisco Wireless technologies, including Wireless LAN Controllers and Access Points.",
        "Proficient in networking solutions such as mesh networks, web authentication, RADIUS, TACACS, and SSL for secure connectivity.",
        "Provided IT support across web and network platforms, with a proven track record in diagnosing and resolving performance, coverage, and connectivity issues."
      ]
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Monkeypox Data Analysis App",
      description: "Analyzed monkeypox case data from Kaggle using Python libraries to extract epidemiological insights.",
      period: "December 2022",
      tech: ["Python", "Jupyter", "Kaggle"],
      highlights: [
        "Analyzed monkeypox case data from Kaggle using Python libraries (Pandas, NumPy, Plotly, Matplotlib, Seaborn) to extract epidemiological insights.",
        "Performed data cleaning, exploratory analysis, and created visualizations to highlight trends.",
        "Trained a linear regression model with Scikit-Learn to explore predictive patterns.",
        "Documented results through visual dashboards and clear reporting for diverse audiences."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Matching the structure from the frontend page */}
      <section className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-portfolio-blue mb-4">
              {t("hero.intro")} <span className="text-accent">Issa Dovale</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-darkGray font-medium mb-6">
              Backend Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Building robust, scalable backend solutions with clean architecture and efficient data processing
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Same profile image as frontend page */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <Avatar className="w-full h-full rounded-none">
                  <AvatarImage 
                    src="/assets/profile.png" 
                    alt="Issa Dovale" 
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="text-5xl bg-gradient-to-br from-primary/80 to-accent/80 text-white font-bold">
                    ID
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/70 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center p-4">
                <p className="text-sm text-center font-medium">
                  Backend Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-accent transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 mb-6">
                Computer and System Engineer engaged in Fullstack software development, mainly focused on back-end.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Growth-oriented, collaborative, assertive, with strong experience in projects regarding data insights and user-friendly dashboard visualizations.
              </p>
              <p className="text-lg text-gray-700">
                My skills include web development, mainly focused on back-end, SQL, and data analysis, driven to achieve new learning opportunities, with professional and personal goals in dynamic work environments.
              </p>
            </div>
            
            <div className="order-1 md:order-2 mb-8 md:mb-0 grid grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">Education</h3>
                <p className="font-medium">Universidad del Norte</p>
                <p className="text-gray-600">Bachelor's Degree in Computer Science</p>
                <p className="text-sm text-gray-500">January 2017 - March 2023</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">Relevant Coursework</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Web Development", "Data Science", "AI", "AWS/Oracle/GCP", 
                    "Agile Development", "Project Management", "Cisco", "Business Architecture"].map((course, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Experience</h2>
          
          <div className="space-y-8 relative before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-gray-200 ml-10">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`relative shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent ml-6 ${index === experiences.length - 1 ? 'last-timeline-item' : ''}`}
              >
                <div className="timeline-dot"></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-portfolio-blue">{exp.title}</h3>
                      <h4 className="font-medium text-accent">{exp.company}</h4>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-2 md:mt-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-3"></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="font-bold text-xl text-portfolio-blue">{project.title}</h3>
                    <div className="text-sm text-gray-500">{project.period}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-50">
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
      
      {/* Contact Section - Reusing the Contact component */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <ArrowDown size={20} className="text-portfolio-lightBlue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="font-medium">+57 300 843 6030</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <ArrowDown size={20} className="text-portfolio-purple" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a href="mailto:issaddm@hotmail.com" className="font-medium hover:text-accent transition-colors">
                      issaddm@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input id="name" placeholder="Your name" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" type="email" placeholder="Your email" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input id="subject" placeholder="Subject" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={5} placeholder="Message" className="w-full rounded-md border border-input bg-background px-3 py-2"></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Backend;