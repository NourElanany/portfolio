import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { allProjectsList } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ArrowUpRight, CheckCircle2, Sparkles, Star, Cpu, Lock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'cv' | 'genai' | 'ml'>('all');

  const filterTabs = [
    { key: 'all', label: { ar: 'كافة المشاريع', en: 'All Projects' }, count: allProjectsList.length },
    { key: 'genai', label: { ar: '⚡ الذكاء التوليدي و RAG', en: '⚡ GenAI & RAG' }, count: allProjectsList.filter(p => p.categoryKey === 'genai').length },
    { key: 'cv', label: { ar: '🎯 الرؤية الحاسوبية (CV)', en: '🎯 Computer Vision' }, count: allProjectsList.filter(p => p.categoryKey === 'cv').length },
    { key: 'ai', label: { ar: '🚀 أنظمة الـ AI و Python', en: '🚀 AI Systems' }, count: allProjectsList.filter(p => p.categoryKey === 'ai').length },
    { key: 'ml', label: { ar: '🧠 التعلم الآلي و NLP', en: '🧠 ML & NLP' }, count: allProjectsList.filter(p => p.categoryKey === 'ml').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? allProjectsList
    : allProjectsList.filter((p) => p.categoryKey === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const otherProjects = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="relative w-full py-16 sm:py-24 bg-white dark:bg-[#071626] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'مشاريع الذكاء الاصطناعي المنفذة والمعتمدة' : 'Verified AI Projects & Architectures'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'معرض المشاريع والأنظمة الهندسية' : 'Featured AI Systems & Projects'}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'مستودعات حقيقية موثقة في الرؤية الحاسوبية، النماذج اللغوية (LLMs)، نظم استرجاع الـ RAG، وتصنيف النصوص الطبية.'
            : 'Production systems spanning computer vision, large language models, healthcare vector RAG, and NLP classification.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto shadow-sm">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-md"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{tab.label[language]}</span>
              <span className={`relative z-10 text-2xs px-2 py-0.5 rounded-md font-mono ${
                isActive
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Container */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-8"
      >
        {/* Featured Projects - Big, Spacious, Hero Layout */}
        {featuredProjects.length > 0 && (
          <div className="space-y-6">
            {featuredProjects.map((project: ProjectItem) => (
              <SpotlightCard
                key={project.id}
                spotlightColor="rgba(6, 182, 212, 0.25)"
                className="group rounded-3xl p-7 sm:p-10 bg-white dark:bg-gradient-to-br dark:from-[#092235] dark:via-[#061724] dark:to-[#030d15] border border-slate-200 dark:border-cyan-500/35 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 shadow-md dark:shadow-2xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{language === 'ar' ? 'مشروع رئيسي مميز' : 'Flagship Project'}</span>
                      </span>

                      <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug pt-1">
                      {project.title[language]}
                    </h3>
                  </div>

                  {project.metrics && (
                    <div className="self-start px-4 py-2 rounded-2xl bg-slate-100 dark:bg-[#041018] border border-slate-200 dark:border-cyan-500/30 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm shrink-0">
                      {project.metrics.value}
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.summary[language]}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {project.details[language].map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer with Tags and Action Button */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.isPrivateTeamRepo || !project.githubUrl ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold shadow-xs">
                      <Lock className="w-4 h-4 text-amber-500" />
                      <span>{language === 'ar' ? 'مشروع فريق عمل خاص (Private Repo)' : 'Private Team Repository'}</span>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 group/link cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4 fill-current" />
                      <span>{language === 'ar' ? 'معاينة الكود على GitHub' : 'View on GitHub'}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* Other Projects - Spacious 2-Column Grid */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {otherProjects.map((project: ProjectItem) => (
              <SpotlightCard
                key={project.id}
                spotlightColor="rgba(6, 182, 212, 0.2)"
                className="group rounded-3xl p-7 bg-white dark:bg-gradient-to-br dark:from-[#071926] dark:via-[#05121c] dark:to-[#03090e] border border-slate-200 dark:border-cyan-500/25 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#030c12] px-3 py-1 rounded-full border border-slate-200 dark:border-cyan-500/20">
                        {project.metrics.value}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.summary[language]}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.details[language].map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-2xs font-mono font-medium bg-slate-100 dark:bg-cyan-950/40 text-slate-700 dark:text-cyan-200 border border-slate-200 dark:border-cyan-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.isPrivateTeamRepo || !project.githubUrl ? (
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === 'ar' ? 'مشروع فريق عمل خاص' : 'Private Team Project'}</span>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start group/link cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4 fill-current" />
                      <span>{language === 'ar' ? 'معاينة الكود على GitHub' : 'View Code on GitHub'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}
      </motion.div>
      </div>
    </section>
  );
};
