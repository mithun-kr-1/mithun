import React from 'react'
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'Unriddle Technologies Pvt. Ltd.',
      role: 'Intern - DScribe',
      period: 'Mar - Apr 2025',
      description: 'An AI-driven platform revolutionizing healthcare by automating the clinical workflows, streamlining medical documentation, and improving patient data management through intelligent integration.',
      link: 'https://dscribehealth.com/',
    },
    {
      company: 'Pentagon Space Pvt. Ltd.',
      role: 'Intern - Certification',
      period: 'Jan 2025',
      description: 'Gaining hands-on experience and Working on MERN stack, Figma (UI/UX) with enhancing skills.',
      link: 'https://pentagonspace.edmingle.com/',
    },
    {
      company: 'Seventh Sense Talent Solutions',
      role: 'Internship Certification',
      period: 'Oct - Nov 2023',
      description: 'Collaborated with professionals to gain insights into entrepreneurship and industry practices.',
      link: 'https://sites.google.com/seventhsensetalent.com/wiser/home',
    },
    {
      company: 'GTTC Hassan',
      role: 'Internship on Basics of IoT',
      period: 'May - Jun 2023',
      description: 'Collaborated with DesignTech to analyze IoT applications and developed a WiFi car project.',
    },
  ]

  return (
    <section id="experience" className="section-container bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48"></div>
      
      <h2 className="section-title animate-slide-down">
        <span className="gradient-text">Internships & Certifications</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="card animate-slide-up group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
            
            <div className="relative bg-white rounded-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FaBriefcase className="text-white text-xl" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-1 rounded-full border border-blue-200 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-2 flex items-center gap-2">
                  <span>{exp.company}</span>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 hover:scale-125 transition-transform duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

