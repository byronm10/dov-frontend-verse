
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-portfolio-blue mb-4">
            Hi, I'm <span className="text-accent">Issa Dovale</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-darkGray font-medium mb-6">
            Frontend Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build responsive, user-friendly web applications with modern technologies 
            focused on clean code and exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            {/* Placeholder for profile image or illustration */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full flex items-center justify-center">
              <span className="text-5xl text-white font-bold">ID</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/70 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center p-4">
              <p className="text-sm text-center font-medium">
                5+ years of Frontend Experience
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
  );
};

export default Hero;
