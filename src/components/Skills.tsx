"use client"
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationDelay, setAnimationDelay] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
      icon: "💻",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "GraphQL"],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: "🗄️",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-500/20 to-violet-500/20"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationDelay(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const SkillTag = ({ skill, index, categoryColor }) => (
    <span
      className={`
        relative px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer
        bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300
        hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg
        ${hoveredSkill === skill ? 'scale-110 text-white shadow-lg' : ''}
      `}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {skill}
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryColor} opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm`}></div>
      
      {/* Skill level indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </span>
  );

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {['{', '}', '<', '>', '(', ')', '[', ']'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-6xl text-blue-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </p>
        </div>

        {/* Skills grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category card */}
              <div className={`
                relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8
                transition-all duration-500 hover:shadow-2xl
                ${hoveredCategory === categoryIndex ? 'scale-105 bg-white/10 shadow-2xl' : ''}
              `}>
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-500 ${hoveredCategory === categoryIndex ? 'opacity-20' : ''} blur-sm -z-10`}></div>
                
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mt-2 group-hover:w-24 transition-all duration-300`}></div>
                  </div>
                </div>

                {/* Skills container */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag 
                        key={skillIndex} 
                        skill={skill} 
                        index={skillIndex}
                        categoryColor={category.color}
                      />
                    ))}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm text-gray-400">Proficiency:</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 delay-300`}
                        style={{width: hoveredCategory === categoryIndex ? '85%' : '0%'}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">Expert</span>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;