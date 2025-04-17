
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-700 mb-6">
              I'm a dedicated Full-Stack Developer with expertise in AI and Data Science, 
              currently pursuing my Bachelor's degree in Artificial Intelligence and Data Science.
              I'm passionate about leveraging technology to build innovative solutions that solve real-world problems.
            </p>
            <p className="text-gray-700 mb-6">
              With experience in developing automated systems, predictive models, and data visualization applications, 
              I bring a diverse skill set that spans both frontend and backend technologies.
            </p>
          </div>
          <div className="col-span-1">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-blue mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <GraduationCap className="text-portfolio-purple mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Bachelor of Technology</h4>
                      <p className="text-sm text-gray-600">Artificial Intelligence and Data Science</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>Sri Sairam Engineering College, Chennai</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>Sep 2022 - April 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="text-portfolio-purple mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Diploma</h4>
                      <p className="text-sm text-gray-600">Electronics and Communication Engineering</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>Sri Sairam Polytechnic College, Chennai</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>June 2019 - May 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
