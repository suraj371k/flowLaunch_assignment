"use client"
import React, { useState } from 'react';

type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
  color: string;
  status?: string;
};

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
  icon: string;
  color: string;
  status?: string;
};

type TimelineCardProps = {
  item: EducationItem | ExperienceItem;
  type: 'education' | 'experience';
  index: number;
};

const Academics = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const education: EducationItem[] = [
    {
      id: 'bachelors',
      degree: 'Bachelor of Compute Application',
      institution: 'Babu Banarasi Das University , Lucknow',
      period: '2022 - 2025',
      description: 'Learn About computer science',
      icon: '📚',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const experience: ExperienceItem[] = [
    {
      id: 'intern',
      title: 'Frontend Developer Intern',
      company: 'Uzence Design Studio',
      period: 'May 2025',
      achievements: [
        'Developing a Design System features using React and Typescript',
        'Collaborated with UX team to improve user experience',
        'Using storybook to test components in isolation'
      ],
      icon: '🚀',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const TimelineCard: React.FC<TimelineCardProps> = ({ item, type, index }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setHoveredCard(item.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-purple-400/50"></div>
      <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-4 border-slate-900 shadow-lg shadow-blue-500/30 z-10"></div>
      <div className="ml-16 mb-12">
        <div className={`
          relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 
          transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 
          ${hoveredCard === item.id ? 'scale-105 bg-white/10' : ''}
        `}>
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-500 ${hoveredCard === item.id ? 'opacity-20' : ''} blur-sm -z-10`}></div>
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl font-bold text-white">{type === 'education' ? (item as EducationItem).degree : (item as ExperienceItem).title}</h4>
                {item.status === 'current' && (
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30 animate-pulse">
                    Current
                  </span>
                )}
              </div>
              <p className="text-blue-300 font-semibold text-lg">{type === 'education' ? (item as EducationItem).institution : (item as ExperienceItem).company}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-purple-300">📅</span>
                <p className="text-gray-400 font-medium">{item.period}</p>
              </div>
            </div>
          </div>
          {type === 'education' ? (
            <p className="text-gray-300 leading-relaxed bg-white/5 rounded-lg p-4 border border-white/10">
              {(item as EducationItem).description}
            </p>
          ) : (
            <div className="space-y-3">
              {(item as ExperienceItem).achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="academics" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_70%)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Education & Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A journey through academic excellence and professional growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg shadow-purple-500/30">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="relative">
              {education.map((item, index) => (
                <TimelineCard key={item.id} item={item} type="education" index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg shadow-emerald-500/30">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>

            <div className="relative">
              {experience.map((item, index) => (
                <TimelineCard key={item.id} item={item} type="experience" index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Currently building the future</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
