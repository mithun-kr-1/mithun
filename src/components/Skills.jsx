import React from 'react'
import { FaCode, FaTools, FaUsers, FaLightbulb } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Languages',
      skills: ['JavaScript', 'HTML5', 'CSS3'],
    },
    {
      icon: <FaTools />,
      title: 'Technologies',
      skills: ['Responsive Design', 'UI/UX Designs'],
    },
    {
      icon: <FaLightbulb />,
      title: 'Tools',
      skills: ['Git', 'Linux', 'VS Code', 'MongoDB', 'Cursor', 'Figma', 'AI Tools'],
    },
    {
      icon: <FaUsers />,
      title: 'Skills',
      skills: ['Good Communication', 'Team work', 'Problem Solving', 'Time Management'],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mt-48"></div>
      
      <h2 className="section-title animate-fade-in-down hover:scale-105 transition-transform duration-300">
        <span className="gradient-text breathing">Technical Skills</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="card animate-zoom-in text-center group hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover-glow"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-5xl text-blue-600 mb-4 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:text-purple-600 animate-float-slow">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg text-gray-700 font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform cursor-default hover:shadow-md"
                  style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

