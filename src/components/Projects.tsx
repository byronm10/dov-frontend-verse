
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.monkeypox.title"),
      description: t("projects.monkeypox.description"),
      tech: ["Python", "Jupyter", "Kaggle", "Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn", "Scikit-Learn", "React"],
      date: t("projects.monkeypox.date"),
      highlights: [
        t("projects.monkeypox.highlight1"),
        t("projects.monkeypox.highlight2"),
        t("projects.monkeypox.highlight3"),
        t("projects.monkeypox.highlight4")
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">{t("projects.title")}</h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-3"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <p className="text-sm text-gray-500">{project.date}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-portfolio-blue">{t("projects.monkeypox.features")}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-portfolio-blue">{t("projects.technologies")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
