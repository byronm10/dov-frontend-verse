
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Monkeypox Data Analysis App",
      description: "A comprehensive data analysis application focused on epidemiological insights from monkeypox case data.",
      tech: ["Python", "Jupyter", "Kaggle", "Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn", "Scikit-Learn", "React"],
      date: "December 2022",
      highlights: [
        "Analyzed monkeypox case data from Kaggle using Python libraries to extract epidemiological insights.",
        "Performed data cleaning, exploratory analysis, and created user-friendly dashboard visualizations to highlight trends.",
        "Trained a linear regression model with Scikit-Learn to explore predictive patterns.",
        "Connected the React frontend with a Python backend enabling real-time updates and data-driven user interactions."
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Featured Projects</h2>
        
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
                  <h4 className="font-medium mb-2 text-portfolio-blue">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-portfolio-blue">Technologies:</h4>
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
              <CardFooter className="border-t bg-gray-50 flex justify-end">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github size={16} />
                  <span>View Project</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
