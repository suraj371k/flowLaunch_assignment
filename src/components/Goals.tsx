"use client";
import React, { useState, useEffect } from "react";

const Goals = () => {
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTrigger(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const professionalGoals = [
    {
      id: "aws-cert",
      text: "Learn Blockchain Development",
      icon: "☁️",
      progress: 20,
      priority: "high",
      category: "certification",
    },
    {
      id: "react-master",
      text: "Master advanced React patterns and state management",
      icon: "⚛️",
      progress: 80,
      priority: "high",
      category: "development",
    },
    {
      id: "open-source",
      text: "Contribute in open source project",
      icon: "🚀",
      progress: 10,
      priority: "medium",
      category: "leadership",
    },
    {
      id: "mentoring",
      text: "Contribute to the tech community through mentoring",
      icon: "🎯",
      progress: 45,
      priority: "medium",
      category: "community",
    },
  ];

  const personalInterests = [
    {
      id: "photography",
      text: "Photography and digital art",
      icon: "📸",
      level: "advanced",
      category: "creative",
    },
    {
      id: "hiking",
      text: "Hiking and outdoor adventures",
      icon: "🏔️",
      level: "intermediate",
      category: "outdoor",
    },
    {
      id: "music",
      text: "Listening music",
      icon: "🎸",
      level: "intermediate",
      category: "creative",
    },
    {
      id: "reading",
      text: "Reading tech blogs and science fiction",
      icon: "📚",
      level: "expert",
      category: "learning",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-red-500 to-orange-500";
      case "medium":
        return "from-yellow-500 to-amber-500";
      default:
        return "from-green-500 to-emerald-500";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "from-purple-500 to-violet-500";
      case "advanced":
        return "from-blue-500 to-cyan-500";
      case "intermediate":
        return "from-green-500 to-teal-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const GoalItem = ({
    goal,
    type,
    index,
  }: {
    goal: any;
    type: "professional" | "personal";
    index: number;
  }) => {
    return (
      <div
        className="group relative mb-6"
        onMouseEnter={() => setHoveredGoal(goal.id)}
        onMouseLeave={() => setHoveredGoal(null)}
      >
        <div
          className={`relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
            hoveredGoal === goal.id ? "shadow-2xl shadow-blue-500/20" : ""
          }`}
        >
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
              type === "professional"
                ? getPriorityColor(goal.priority)
                : getLevelColor(goal.level)
            } opacity-0 transition-opacity duration-500 ${
              hoveredGoal === goal.id ? "opacity-20" : ""
            } blur-sm -z-10`}
          ></div>

          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${
                type === "professional"
                  ? getPriorityColor(goal.priority)
                  : getLevelColor(goal.level)
              } shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-2xl">{goal.icon}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium leading-relaxed">
                  {goal.text}
                </p>
                {type === "professional" ? (
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      goal.priority === "high"
                        ? "bg-red-500/20 text-red-300"
                        : goal.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {goal.priority}
                  </div>
                ) : (
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      goal.level === "expert"
                        ? "bg-purple-500/20 text-purple-300"
                        : goal.level === "advanced"
                        ? "bg-blue-500/20 text-blue-300"
                        : goal.level === "intermediate"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-gray-500/20 text-gray-300"
                    }`}
                  >
                    {goal.level}
                  </div>
                )}
              </div>

              {/* Progress Bar for Professional */}
              {type === "professional" ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-gray-300 font-medium">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getPriorityColor(
                        goal.priority
                      )} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animationTrigger
                          ? `${goal.progress}%`
                          : "0%",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 text-sm">Engagement:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i <
                          (goal.level === "expert"
                            ? 5
                            : goal.level === "advanced"
                            ? 4
                            : 3)
                            ? `bg-gradient-to-r ${getLevelColor(goal.level)}`
                            : "bg-white/20"
                        }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="goals" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_70%)]"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {["🎯", "🚀", "⭐", "💡", "🔥", "⚡"].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Goals & Interests
            </h2>
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Charting the path forward with ambitious goals and passionate pursuits
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Goals */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg shadow-blue-500/30">
                <span className="text-3xl">💼</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Professional Goals</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
              </div>
            </div>
            <div className="space-y-6">
              {professionalGoals.map((goal, index) => (
                <GoalItem key={goal.id} goal={goal} type="professional" index={index} />
              ))}
            </div>
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-medium">Overall Progress</span>
                <span className="text-white font-bold">
                  {Math.round(
                    professionalGoals.reduce((acc, goal) => acc + goal.progress, 0) /
                      professionalGoals.length
                  )}
                  %
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: animationTrigger
                      ? `${Math.round(
                          professionalGoals.reduce((acc, goal) => acc + goal.progress, 0) /
                            professionalGoals.length
                        )}%`
                      : "0%",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg shadow-emerald-500/30">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Personal Interests</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
              </div>
            </div>
            <div className="space-y-6">
              {personalInterests.map((interest, index) => (
                <GoalItem key={interest.id} goal={interest} type="personal" index={index} />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Creative", "Learning", "Outdoor", "Technical"].map((category, i) => (
                <div
                  key={category}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">
                    {category === "Creative"
                      ? "🎨"
                      : category === "Learning"
                      ? "📖"
                      : category === "Outdoor"
                      ? "🌲"
                      : "💻"}
                  </div>
                  <div className="text-gray-300 font-medium">{category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <blockquote className="text-xl text-gray-300 italic mb-4 max-w-2xl">
              "The future belongs to those who believe in the beauty of their dreams and work relentlessly to achieve them."
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 font-medium">Always growing, always learning</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
