
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">{t("about.title")}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.intro")}<strong className="text-portfolio-blue">{t("about.profession")}</strong>
              {t("about.specialized")}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.growth")}
            </p>
            <p className="text-lg text-gray-700">
              {t("about.driven")}
            </p>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-accent shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">{t("about.education")}</h3>
              <p className="font-medium">{t("about.university")}</p>
              <p className="text-gray-600">{t("about.degree")}</p>
              <p className="text-sm text-gray-500">{t("about.period")}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">{t("about.coursework")}</h3>
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
