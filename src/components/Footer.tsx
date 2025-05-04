
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Issa <span className="text-accent">Dovale</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">Frontend Engineer</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} Issa Dovale. {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
