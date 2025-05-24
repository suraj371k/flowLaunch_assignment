"use client"
import React, { useState } from 'react';

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      label: "surajkushwaha371@gmail.com",
      href: "mailto:surajkushwaha371@gmail.com",
      icon: "✉️",
      type: "email"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suraj-kushwaha-a696a8258/",
      icon: "💼",
      type: "linkedin"
    },
    {
      label: "GitHub",
      href: "https://github.com/suraj371k/",
      icon: "🔗",
      type: "github"
    }
  ];

  return (
    <section id="profile" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main profile card */}
          <div 
            className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-blue-500/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated border glow */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} blur-sm -z-10`}></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile image section */}
              <div className="relative group">
                {/* Image container with glow effect */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500">
                  <img
                    src='/suraj image2.jpg'
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse group-hover:border-blue-400/60 transition-colors duration-300" style={{transform: 'scale(1.1)'}}></div>
                
                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-400 rounded-full border-4 border-white/20 animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>

              {/* Content section */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                {/* Name with gradient text */}
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">
                    Suraj Kushwaha
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-2xl text-blue-300 font-semibold">Full Stack Developer</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Passionate about creating <span className="text-blue-300 font-semibold">elegant solutions</span> to complex problems. 
                  Currently focused on <span className="text-purple-300 font-semibold">web development</span> and 
                  <span className="text-blue-300 font-semibold"> cloud technologies</span>.
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["React", "Node.js", "Python" , "Typescript" , "Next.js"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:border-blue-400/50 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.type}
                      href={link.href}
                      target='_blank'
                      className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </span>
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-200">
                          {link.label}
                        </span>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </a>
                  ))}
                </div>

                {/* Call to action button */}
                <div  className="pt-4">
                  <a href='https://www.linkedin.com/in/suraj-kushwaha-a696a8258/' target='_blank'>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span className="relative z-10">Let's Connect</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;