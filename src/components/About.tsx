"use client";
import { motion as m } from "framer-motion";
import { ArrowRight, Code, Users, Zap, CheckCircle, Sparkles, Target, Award, Star, TrendingUp } from "lucide-react";
import Section from "./Section";

export default function About() {
  const skills = [
    { 
      icon: Code, 
      label: "System Automation", 
      color: "from-amber-400 to-orange-500",
      description: "Excel/VBA solutions"
    },
    { 
      icon: Users, 
      label: "Stakeholder Relations", 
      color: "from-blue-400 to-cyan-500",
      description: "Clear communication"
    },
    { 
      icon: Zap, 
      label: "Process Optimization", 
      color: "from-violet-400 to-purple-500",
      description: "Workflow efficiency"
    },
    { 
      icon: Target, 
      label: "Solution Design", 
      color: "from-emerald-400 to-teal-500",
      description: "User-friendly systems"
    }
  ];

  const achievements = [
    { text: "Streamlined complex workflows", icon: TrendingUp },
    { text: "Automated manual processes", icon: Zap },
    { text: "Improved team efficiency", icon: Users },
    { text: "Delivered user-friendly solutions", icon: Star }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Enhanced Background System - Same as Hero */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid Pattern */}
        <m.div
          className="absolute inset-0 opacity-[0.04]"
          animate={{ 
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Dynamic Gradient Orbs - Matching Hero */}
        <m.div 
          className="absolute top-20 right-10 h-[35rem] w-[55rem] rounded-full blur-3xl bg-gradient-to-r from-amber-400/15 via-orange-500/10 to-yellow-400/15"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <m.div 
          className="absolute bottom-10 left-10 h-[30rem] w-[45rem] rounded-full blur-3xl bg-gradient-to-l from-blue-500/12 via-cyan-400/8 to-teal-400/12"
          animate={{ 
            scale: [1, 1.08, 1],
            x: [0, 25, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        <m.div 
          className="absolute top-1/3 left-1/2 h-[25rem] w-[40rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-500/8 via-purple-400/6 to-pink-400/10"
          animate={{ 
            scale: [1, 1.12, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <m.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/50 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 9}%`,
            }}
            animate={{
              y: [-15, -35, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header - Premium Style */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-yellow-400/20 border border-amber-400/30 backdrop-blur-md shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">My Philosophy</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          </m.div>
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              About Me
            </span>
          </m.h2>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Story Section */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Story */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
                I turn <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold">messy workflows</span> into simple systems—with automation first, clean docs, and respectful support.
              </p>
              
              <p className="text-lg text-white/80 font-light leading-relaxed">
                My toolkit is <span className="text-amber-400 font-semibold">Excel/VBA</span> for quick wins, solid device management, and honest stakeholder communications.
              </p>
              
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Recent highlight: a <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-semibold">City of San José mentor-matching engine</span> that removed friction and gave staff a friendly way to tune rules without touching code.
              </p>
            </div>

            {/* Key Achievements */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-white text-xl font-semibold flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400" />
                Key Impact Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <m.div
                      key={achievement.text}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/90 font-medium">{achievement.text}</span>
                    </m.div>
                  );
                })}
              </div>
            </m.div>
          </m.div>

          {/* Skills & Featured Project */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-12"
          >
            {/* Core Skills */}
            <div className="space-y-8">
              <h3 className="text-white text-xl font-semibold flex items-center gap-3">
                <Target className="w-6 h-6 text-amber-400" />
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <m.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -5
                      }}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-md border border-white/[0.1] hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 backdrop-blur-sm`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg group-hover:text-white transition-colors mb-1">
                            {skill.label}
                          </h4>
                          <p className="text-white/60 text-sm font-medium">{skill.description}</p>
                        </div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 -z-10`} />
                    </m.div>
                  );
                })}
              </div>
            </div>

            {/* Featured Project Card - Premium Style */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-orange-500/10 to-yellow-400/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              <m.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-2xl border border-white/[0.15] hover:border-amber-400/40 transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400/30 to-orange-500/30 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-xl font-bold mb-3">Featured Project</h4>
                    <p className="text-white/80 leading-relaxed mb-6 text-lg">
                      City of San José mentor-matching system that streamlined connections and empowered non-technical staff with intuitive rule management.
                    </p>
                    <m.div 
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-3 text-amber-400 font-semibold text-lg group-hover:gap-4 transition-all duration-300 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5" />
                    </m.div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </m.div>
        </div>

        {/* Bottom CTA - Premium Style */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 text-white/70 text-lg">
            <span>Interested in collaboration?</span>
            <m.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </m.div>
            <span className="text-amber-400 font-semibold cursor-pointer hover:text-amber-300 transition-colors">
              Let's connect
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}