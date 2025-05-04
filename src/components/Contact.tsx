
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">{t("contact.title")}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              {t("contact.description")}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-portfolio-lightBlue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">{t("contact.phone")}</h4>
                  <p className="font-medium">+57 300 843 6030</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">{t("contact.email")}</h4>
                  <a href="mailto:issaddm@hotmail.com" className="font-medium hover:text-accent transition-colors">
                    issaddm@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/idovale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="https://github.com/idovale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.name")}</label>
                  <Input id="name" placeholder={t("contact.yourname")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.email")}</label>
                  <Input id="email" type="email" placeholder={t("contact.youremail")} />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.subject")}</label>
                <Input id="subject" placeholder={t("contact.subject")} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.message")}</label>
                <Textarea id="message" rows={5} placeholder={t("contact.message")} />
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                {t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
