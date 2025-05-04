
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-portfolio-blue mb-4">
            {t("hero.intro")} <span className="text-accent">Issa Dovale</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-darkGray font-medium mb-6">
            {t("hero.position")}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact">{t("hero.contact")}</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#projects">{t("hero.work")}</a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            {/* Profile image with avatar component */}
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
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-accent transition-colors"
      >
        <span className="mb-2">{t("hero.scroll")}</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
