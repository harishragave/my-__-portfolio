
import React from 'react';
import { Mail, Linkedin, Github, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="text-portfolio-blue dark:text-blue-400" size={24} />,
      text: 'harish6224@gmail.com',
      url: 'mailto:harish6224@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="text-portfolio-blue dark:text-blue-400" size={24} />,
      text: 'linkedin.com/in/harish-ragavendra-97610421a',
      url: 'https://linkedin.com/in/harish-ragavendra-97610421a'
    },
    {
      name: 'GitHub',
      icon: <Github className="text-portfolio-blue dark:text-blue-400" size={24} />,
      text: 'github.com/harishragave',
      url: 'https://github.com/harishragave'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="text-portfolio-blue dark:text-blue-400" size={24} />,
      text: '@ha_rishhhh.__',
      url: 'https://www.instagram.com/ha_rishhhh.__/?next=%2F&hl=en'
    },
    {
      name: 'Phone',
      icon: <Phone className="text-portfolio-blue dark:text-blue-400" size={24} />,
      text: '+91 9080764427',
      url: 'tel:+919080764427'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target={link.name !== 'Email' && link.name !== 'Phone' ? "_blank" : ""}
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-portfolio-blue dark:hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
            >
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {link.icon}
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">{link.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{link.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
