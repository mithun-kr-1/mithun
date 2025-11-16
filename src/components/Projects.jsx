import React, { useEffect, useRef, useState } from 'react'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])
  const projects = [
    {
      title: 'Carbon Credits - Renewable Energy Trading Platform',
      technologies: ['React', 'JS', 'MongoDB'],
      description: 'A decentralized platform enables users to earn, trade, and redeem carbon credits based on eco-friendly actions and surplus renewable energy sharing, tokenization of carbon credits and real-time analytics to track emissions reduction and promote sustainable energy usage. Reached MVP for startup',
      link: 'https://carbosphere.in/',
    },
    {
      title: 'UI/UX Design Frameworks',
      technologies: ['Figma'],
      description: 'Designed UI/UX prototypes and cloned platforms like BookMyShow, powermatrix, many in Figma, and built responsive static web pages using HTML, CSS, and JavaScript for optimized user experience.',
      link: 'https://mithun-kr-1.github.io/figma-designs/',
    },
    {
      title: 'Complaint Management Portal',
      technologies: ['HTML', 'CSS', 'JS', 'ChatBot'],
      description: 'Developed a Complaint System with categorized issue tracking, real-time status updates, user-friendly forms, and integrated workflows for efficient resolution and improved service communication.',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48"></div>
      
      <h2 className="section-title animate-fade-in-down hover:scale-105 transition-transform duration-300">
        <span className="gradient-text breathing">Projects</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`card group hover:scale-110 transition-all duration-500 relative overflow-hidden hover-glow ${
              visibleCards.includes(index) 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: `${index * 0.1}s`,
              animationDelay: `${index * 0.15}s`
            }}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
            <div className="relative bg-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-scale-bounce">
                  <FaCode className="text-white text-xl group-hover:animate-wiggle" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 flex-grow group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-110 transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform font-medium hover:animate-glow"
                >
                  <FaExternalLinkAlt />
                  <span>Visit Project</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

