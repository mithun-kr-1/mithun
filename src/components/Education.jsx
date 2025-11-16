import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
      
      <h2 className="section-title animate-slide-down">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="card animate-scale-in group hover:scale-105 transition-all duration-300 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                <FaGraduationCap className="text-white text-3xl" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Visvesvaraya Technological University
              </h3>
              <p className="text-xl text-gray-700 mb-3 font-semibold">
                Bachelor of Engineering in Computer Science
              </p>
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <span>🏛️</span> Government Engineering College, Hassan
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                  📅 Dec 2021 - Jun 2025
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                  ⭐ CGPA: 7.54
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

