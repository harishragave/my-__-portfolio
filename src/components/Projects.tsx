
import React from 'react';
import { File, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Projects = () => {
  const githubProjects = [
    {
      title: "AI Image Recognition",
      description: "Deep learning model for image classification",
      techStack: "Python, TensorFlow, Keras",
      repoUrl: "https://github.com/harishragave/AI-Image-Recognition"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React & TailwindCSS",
      techStack: "React, TailwindCSS, TypeScript",
      repoUrl: "https://github.com/harishragave/my-__-portfolio"
    },
    {
      title: "trade-flow-vista",
      description: " data visualization page that showcases global trade flows through interactive and insightful charts",
      techStack: "React, TailwindCSS, TypeScript, Mysql",
      repoUrl: "https://github.com/harishragave/trade-flow-vista"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold text-portfolio-blue dark:text-blue-400 mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <File className="mr-2 text-portfolio-purple dark:text-blue-400" size={20} />
                  Invoice Automation
                </CardTitle>
                <CardDescription className="dark:text-gray-400">UiPath</CardDescription>
              </CardHeader>
              <CardContent className="text-sm dark:text-gray-300">
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                  <li>Automated invoice data extraction and entry using UiPath's Document Understanding and Excel automation</li>
                  <li>Integrated email triggers to download and process invoices</li>
                  <li>Deployed the bot to schedule daily tasks, reducing manual effort by 70%</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <File className="mr-2 text-portfolio-purple dark:text-blue-400" size={20} />
                  Stock Trend Prediction
                </CardTitle>
                <CardDescription className="dark:text-gray-400">Machine Learning, Flask</CardDescription>
              </CardHeader>
              <CardContent className="text-sm dark:text-gray-300">
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                  <li>Built an LSTM-based predictive model to forecast stock trends with a 10-minute window</li>
                  <li>Implemented real-time data processing for market movement predictions</li>
                  <li>Created a Flask backend API for integration with client applications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <File className="mr-2 text-portfolio-purple dark:text-blue-400" size={20} />
                  PWA Dashboard
                </CardTitle>
                <CardDescription className="dark:text-gray-400">React, Data Visualization</CardDescription>
              </CardHeader>
              <CardContent className="text-sm dark:text-gray-300">
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                  <li>Designed and built a responsive Progressive Web Application dashboard</li>
                  <li>Integrated charts and data visualization components for enhanced UX</li>
                  <li>Deployed the solution with seamless mobile and desktop experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-portfolio-blue dark:text-blue-400 mb-6">GitHub Projects</h3>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {githubProjects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full dark:bg-gray-900 dark:border-gray-700">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Github className="mr-2 text-portfolio-purple dark:text-blue-400" size={20} />
                          {project.title}
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">{project.techStack}</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <p>{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-200">
                            <Github className="mr-2" size={16} />
                            View Repository
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static translate-y-0 mr-2 dark:border-gray-600 dark:bg-gray-700" />
                <CarouselNext className="static translate-y-0 dark:border-gray-600 dark:bg-gray-700" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
