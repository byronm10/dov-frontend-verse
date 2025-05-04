
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("experience.instructor.title"),
      company: t("experience.instructor.company"),
      period: t("experience.instructor.period"),
      location: t("experience.instructor.location"),
      responsibilities: [
        t("experience.instructor.resp1"),
        t("experience.instructor.resp2"),
        t("experience.instructor.resp3")
      ]
    },
    {
      title: t("experience.cisco.title"),
      company: t("experience.cisco.company"),
      period: t("experience.cisco.period"),
      location: t("experience.cisco.location"),
      responsibilities: [
        t("experience.cisco.resp1"),
        t("experience.cisco.resp2"),
        t("experience.cisco.resp3")
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">{t("experience.title")}</h2>
        
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
