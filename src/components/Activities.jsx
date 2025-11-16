import React from 'react'
import { FaTrophy, FaUsers, FaAward } from 'react-icons/fa'

const Activities = () => {
  const activities = [
    {
      icon: <FaTrophy />,
      title: 'Winner in TechForSociety Hackathon 2025',
      organization: 'Siemens and Nasscom Foundations',
      year: '2025',
      type: 'achievement',
    },
    {
      icon: <FaUsers />,
      title: 'Organized a state level hackathon at GEC Hassan',
      organization: 'CSE Association',
      type: 'organization',
    },
    {
      icon: <FaAward />,
      title: 'Engaged in Srishti - Innovation Exchange 2024',
      organization: 'State-level program at AIT Bengaluru',
      year: '2024',
      type: 'participation',
    },
    {
      icon: <FaTrophy />,
      title: 'Finalist in Hack4Sustainability',
      organization: '30-hour Hackathon by Siemens and Smile Foundations',
      type: 'achievement',
    },
  ]

  const positions = [
    {
      title: 'Media Handler',
      organization: 'ISTE (Indian Society for Technical Education)',
      period: '2024 - 2025',
    },
    {
      title: 'Session Handler',
      organization: 'GLUE (GEC Hassan Linux Users and Enthusiasts)',
      period: '2023 - 2025',
    },
    {
      title: 'NSS Camps',
      organization: 'Participated in VTU Cultural fests in Mysore and Bangalore',
    },
  ]

  return (
    <section id="activities" className="section-container bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 -mr-48 -mb-48"></div>
      
      <h2 className="section-title animate-slide-down">
        <span className="gradient-text">Activities & Achievements</span>
      </h2>
      
      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center animate-slide-up">Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="card animate-slide-up group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
                
                <div className="relative bg-white rounded-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600">
                      {activity.organization}
                      {activity.year && (
                        <span className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold rounded-full text-sm">
                          {activity.year}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center animate-slide-up">Positions of Responsibility</h3>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="card animate-slide-up group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${(index + activities.length) * 0.15}s` }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
                
                <div className="relative bg-white rounded-lg p-6 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {position.title}
                    </h4>
                    <p className="text-gray-600">
                      {position.organization}
                    </p>
                  </div>
                  {position.period && (
                    <span className="text-sm font-semibold text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                      {position.period}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities

