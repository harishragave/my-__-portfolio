
import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-portfolio-blue dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-bold text-xl mb-2">Harish Ragavendra S</p>
            <p className="text-blue-200 dark:text-blue-300">Full-Stack Developer | AI & Data Specialist</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/harish-ragavendra-97610421a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/harishragave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.instagram.com/ha_rishhhh.__/?next=%2F&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p>&copy; {new Date().getFullYear()} Harish Ragavendra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
