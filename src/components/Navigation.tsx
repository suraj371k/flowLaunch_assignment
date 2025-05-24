"use client"
import React, { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("profile");

  const navItems = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "academics", label: "Academics", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "goals", label: "Goals", icon: "🎯" }
  ];

  return (
    <nav className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
      
      {/* Glassmorphism overlay */}
      <div className="relative backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            {/* Navigation container with glassmorphism */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 shadow-xl">
              <ul className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <li key={item.id} className="relative">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setActiveItem(item.id)}
                      className={`
                        relative flex items-center space-x-2 px-6 py-3 rounded-xl
                        transition-all duration-300 ease-out group
                        ${activeItem === item.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 shadow-lg shadow-blue-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }
                      `}
                    >
                      {/* Active item background glow */}
                      {activeItem === item.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl -z-10 animate-pulse"></div>
                      )}
                      
                      {/* Icon */}
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      
                      {/* Label */}
                      <span className="font-medium tracking-wide">
                        {item.label}
                      </span>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-20 animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-20 animate-pulse" style={{animationDelay: '1s'}}></div>
    </nav>
  );
};

export default Navigation;