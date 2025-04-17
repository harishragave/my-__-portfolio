
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="space-y-8">
          <div className="experience-card">
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2 text-portfolio-purple" size={20} />
              <h3 className="text-xl font-bold">Full-Stack Developer (Frontend & Backend) Intern</h3>
            </div>
            <div className="flex items-center mb-2 text-gray-600">
              <span className="font-medium">Liquidmind AI</span>
              <span className="mx-2">•</span>
              <span>Remote, Bangalore, India</span>
            </div>
            <div className="flex items-center mb-4 text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>Oct 2024 - Nov 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-1">
              <li>Developed an automated invoice parsing pipeline leveraging YOLOv8 and PaddleOCR, mimicking RPA-style document automation. Successfully deployed the solution on Google Cloud Platform (GCP).</li>
              <li>Took ownership of Tally ERP and Azure PostgreSQL integration after a project handover, ensuring smooth transitions and timely project delivery.</li>
              <li>Designed, built, and deployed a dashboard for a progressive web application (PWA), integrating data visualization and charts to enhance user experience.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2 text-portfolio-purple" size={20} />
              <h3 className="text-xl font-bold">Engineering Intern</h3>
            </div>
            <div className="flex items-center mb-2 text-gray-600">
              <span className="font-medium">GR Infotech</span>
              <span className="mx-2">•</span>
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center mb-4 text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>Feb. 2024 - Mar. 2024 / Jan. 2025 - Present</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-1">
              <li>Developed a stock trend forecasting model, leveraging live data to provide real-time predictions for market movement.</li>
              <li>Architected and implemented an LSTM-based predictive model to forecast stock trends with a 10-minute future window, significantly improving short-term trend analysis.</li>
              <li>Deployed the model with a Flask backend to facilitate streamlined access and integration with client applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
