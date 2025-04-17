
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue mb-4 opacity-0 animate-fadeIn">
            Harish Ragavendra S
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-portfolio-purple mb-8 opacity-0 animate-fadeIn animate-delay-100">
            Full-Stack Developer | AI & Data Specialist
          </h2>
          <p className="text-gray-600 max-w-xl mb-10 opacity-0 animate-fadeIn animate-delay-200">
            Crafting innovative solutions with expertise in full-stack development,
            artificial intelligence, and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn animate-delay-300">
            <Button className="bg-portfolio-blue hover:bg-blue-800" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-blue">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
