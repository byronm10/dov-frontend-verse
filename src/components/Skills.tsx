
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.languages"),
      skills: ["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: t("skills.frameworks"),
      skills: ["React", "Next.js", "Tailwind CSS", "Pandas", "NumPy", "Ruby on Rails"],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: t("skills.tools"),
      skills: ["VS Code", "Vite", "Figma", "GitHub Actions", "IntelliJ", "AWS CDK", "SAM"],
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    }
  ];

  const expertiseAreas = [
    "Frontend Development",
    "Responsive Design",
    "UI/UX Implementation",
    "Web Application Architecture",
    "Data Visualization",
    "API Integration",
    "Performance Optimization",
    "Cross-browser Compatibility",
    "Agile Methodology"
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">{t("skills.title")}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 shadow-md transition-transform hover:-translate-y-1 ${category.bgColor}`}
            >
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-sm flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full ${category.iconColor}`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue text-center">{t("skills.expertise")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="flex items-center">
                <svg 
                  className="w-5 h-5 text-accent mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span>{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
