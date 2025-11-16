import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <h2 className="section-title text-white animate-slide-down relative z-10">
        Get In Touch
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="card bg-white/10 backdrop-blur-lg border border-white/20 animate-scale-in hover:scale-105 transition-all duration-300 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slide-right">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">📞</span> Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+918431072527"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform group"
                >
                  <FaPhone className="text-xl group-hover:scale-125 transition-transform duration-300" />
                  <span>+91 8431072527</span>
                </a>
                <a
                  href="mailto:mithunkr533@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform group"
                >
                  <FaEnvelope className="text-xl group-hover:scale-125 transition-transform duration-300" />
                  <span>mithunkr533@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>Aresikere, Hassan, Karnataka, India</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🌐</span> Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/mithun-kr-3988b3257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 transform shadow-lg group"
                >
                  <FaLinkedin className="group-hover:scale-125 transition-transform duration-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mithun-kr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 transform shadow-lg group"
                >
                  <FaGithub className="group-hover:scale-125 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-white/80 animate-fade-in">
          <p>&copy; 2025 Mithun K R. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

