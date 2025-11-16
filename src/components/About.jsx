import React from 'react'
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const highlights = [
    { icon: <FaCode />, text: 'Software Development' },
    { icon: <FaRocket />, text: 'Scalable Applications' },
    { icon: <FaUsers />, text: 'Team Collaboration' },
    { icon: <FaLightbulb />, text: 'Innovative Solutions' },
  ]

  return (
    <section id="about" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
      
      <h2 className="section-title animate-fade-in-down hover:scale-105 transition-transform duration-300">
        <span className="gradient-text breathing">Professional Summary</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="card animate-zoom-in relative overflow-hidden group hover-glow">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
          
          <div className="relative z-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up">
              Computer Science graduate skilled in software development and web technologies. 
              Proficient in Figma, JavaScript, HTML, CSS, React.js, and the MERN stack. 
              Experienced in building scalable applications and collaborating in team environments. 
              Passionate about creating user-focused solutions and continuously learning new technologies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-500 hover:scale-125 hover:-translate-y-2 transform hover-glow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-2xl text-blue-600 mb-2 animate-float-slow group-hover:animate-wiggle group-hover:scale-125 transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-600 transition-colors">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

