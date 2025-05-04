
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Bootcamp Instructor",
      company: "Talento TECH",
      period: "February 2024 - September 2024",
      location: "Barranquilla, Colombia",
      responsibilities: [
        "Delivered theoretical and practical instruction in Python programming to demonstrate frontend-focused applications powered by AI.",
        "Designed and taught a study plan covering core concepts, best practices in UI/UX design, responsive layout, and accessibility to create seamless and professional user interfaces.",
        "Guided students in real-world AI projects and promoted problem-solving through hands-on exercises and code reviews."
      ]
    },
    {
      title: "IT Consultant Engineer",
      company: "Cisco Technologies",
      period: "February 2023 - August 2023",
      location: "Barranquilla, Colombia",
      responsibilities: [
        "Technical Consultant Engineer with strong experience in Cisco Wireless technologies, implementing responsive web interfaces for Cisco's Customer On-Premises network management dashboards using React.js, optimizing user interaction with complex wireless systems including WLCs.",
        "Proficient in networking solutions such as mesh networks, web authentication, RADIUS, TACACS, and SSL for secure connectivity.",
        "Transformed real-time monitoring interfaces for wireless network, with a proven track record in diagnosing and resolving performance, using WebSockets, React hooks and Tailwind CSS on mid-size Organizations."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Professional Experience</h2>
        
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
  );
};

export default Experience;
