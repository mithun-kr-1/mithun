import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaExternalLinkAlt } from 'react-icons/fa'
import mithunPhoto from '../mithun.png'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float parallax-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float parallax-slow"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.2}px) translateX(${-scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float parallax-slow"
          style={{ animationDelay: '4s', transform: `translateY(${scrollY * 0.25}px)` }}
        ></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 animate-slide-right">
            <div className="mb-8 animate-scale-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-shimmer">Mithun K R</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div className="h-1 w-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Computer Science Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Full Stack Developer | UI/UX Designer
            </p>
            <p className="text-base text-gray-500 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="inline-flex items-center gap-2">
                📍 Aresikere, Hassan, Karnataka, India
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="tel:+918431072527"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
              >
                <FaPhone className="animate-pulse-slow" />
                <span>+91 8431072527</span>
              </a>
              <a
                href="mailto:mithunkr533@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
              >
                <FaEnvelope className="animate-pulse-slow" />
                <span>mithunkr533@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.55s' }}>
              <a
                href="https://carbosphere.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
              >
                <FaExternalLinkAlt className="animate-pulse-slow" />
                <span>Carbosphere - Carbon Credits Platform</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 text-3xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://www.linkedin.com/in/mithun-kr-3988b3257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:animate-bounce-slow"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mithun-kr-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:animate-bounce-slow"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex-1 flex justify-center animate-slide-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              
              {/* Rotating rings around photo - continuously rotating */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="absolute w-72 h-72 md:w-96 md:h-96 border-2 border-blue-400/30 rounded-full"
                  style={{ 
                    animation: 'rotate 20s linear infinite',
                    transformOrigin: 'center center'
                  }}
                ></div>
                <div 
                  className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] border-2 border-purple-400/30 rounded-full"
                  style={{ 
                    animation: 'rotate 25s linear infinite reverse',
                    transformOrigin: 'center center'
                  }}
                ></div>
                <div 
                  className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-pink-400/20 rounded-full"
                  style={{ 
                    animation: 'rotate 30s linear infinite',
                    transformOrigin: 'center center'
                  }}
                ></div>
                <div 
                  className="absolute w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] border border-blue-300/20 rounded-full"
                  style={{ 
                    animation: 'rotate 35s linear infinite reverse',
                    transformOrigin: 'center center'
                  }}
                ></div>
              </div>

              {/* Rotating decorative shapes - continuously rotating */}
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-40"
                style={{ 
                  animation: 'rotate 15s linear infinite',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full opacity-40"
                style={{ 
                  animation: 'rotate 18s linear infinite reverse',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full opacity-40"
                style={{ 
                  animation: 'rotate 12s linear infinite reverse',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full opacity-40"
                style={{ 
                  animation: 'rotate 16s linear infinite',
                  transformOrigin: 'center center'
                }}
              ></div>
              
              {/* Additional rotating dots at diagonal positions */}
              <div 
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-30"
                style={{ 
                  animation: 'rotate 10s linear infinite',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute top-1/4 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-30"
                style={{ 
                  animation: 'rotate 14s linear infinite reverse',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30"
                style={{ 
                  animation: 'rotate 11s linear infinite reverse',
                  transformOrigin: 'center center'
                }}
              ></div>
              <div 
                className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-30"
                style={{ 
                  animation: 'rotate 13s linear infinite',
                  transformOrigin: 'center center'
                }}
              ></div>
              
              {/* Rotating corner elements - continuously rotating */}
              <div 
                className="absolute -top-8 -left-8 w-16 h-16 border-4 border-blue-400/40 rounded-lg"
                style={{ 
                  animation: 'rotate 22s linear infinite',
                  transformOrigin: 'center center',
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div 
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-purple-400/40 rounded-lg"
                style={{ 
                  animation: 'rotate 17s linear infinite reverse',
                  transformOrigin: 'center center',
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div 
                className="absolute -bottom-8 -left-8 w-16 h-16 border-4 border-pink-400/40 rounded-lg"
                style={{ 
                  animation: 'rotate 24s linear infinite',
                  transformOrigin: 'center center',
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div 
                className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-blue-400/40 rounded-lg"
                style={{ 
                  animation: 'rotate 19s linear infinite reverse',
                  transformOrigin: 'center center',
                  transform: 'rotate(45deg)'
                }}
              ></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-500 animate-float hover:animate-scale-bounce z-10">
                <img 
                  src={mithunPhoto} 
                  alt="Mithun K R" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Decorative circles with enhanced animations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse-slow hover:animate-spin-slow transition-all duration-300 z-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse-slow hover:animate-spin-slow transition-all duration-300 z-20" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-pink-300 rounded-full opacity-15 animate-float-fast z-20"></div>
              <div className="absolute bottom-1/2 -left-8 w-20 h-20 bg-blue-300 rounded-full opacity-15 animate-float-slow z-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-600 transition-colors">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 hover:bg-blue-600 transition-colors"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

