
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      skills: [
        { name: "Python", level: 60 },
        { name: "SQL (MySQL)", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Java", level: 60 },
        { name: "PostgreSQL", level: 50 },
        { name: "React", level: 80 }
      ]
    },
    {
      id: "frameworks",
      name: "Frameworks",
      skills: [
        { name: "Flask", level: 75 },
        { name: "FastAPI", level: 60 },
        { name: "Streamlit", level: 60 },
        { name: "tailwindcss", level: 75 },
        { name: "Figma", level: 80 }
      ]
    },
    {
      id: "devtools",
      name: "Developer Tools",
      skills: [
        { name: "Git/GitHub", level: 75 },
        { name: "Azure", level: 65 },
        { name: "API Libraries", level: 70 },
        { name: "VSCode", level: 90 },
        { name: "Tableau", level: 75 }
      ]
    },
    {
      id: "rpa",
      name: "RPA Tools",
      skills: [
        { name: "UiPath", level: 85 },
        { name: "Data Scraping", level: 80 },
        { name: "Excel Automation", level: 90 }
      ]
    },
    {
      id: "libraries",
      name: "Libraries",
      skills: [
        { name: "pandas", level: 60 },
        { name: "NumPy", level: 65 },
        { name: "TensorFlow", level: 65 },
        { name: "Keras", level: 60 },
        { name: "Flask", level: 80 },
        { name: "React", level: 75 },
        { name: "FastAPI", level: 60 },
        { name: "Scikit-learn", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Technical Skills</h2>
        
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-portfolio-blue dark:text-blue-400 mb-6">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-portfolio-purple dark:text-blue-400 mb-2">Full-Stack Development</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Building responsive web applications with modern frontend frameworks and robust backend systems.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-portfolio-purple dark:text-blue-400 mb-2">Machine Learning & AI</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Designing and implementing predictive models and AI solutions for real-world problems.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-portfolio-purple dark:text-blue-400 mb-2">Data Analysis & Visualization</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Extracting insights from data and creating meaningful visualizations for better decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
