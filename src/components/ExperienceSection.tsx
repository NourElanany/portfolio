import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="relative w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'الخبرات والتدريب المهني المعتمد' : 'Experience & Professional Training'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'الخبرات العملية والمهنية' : 'Professional & Practical Experience'}
        </h2>
      </div>

      <div className="space-y-6">
        {experienceList.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl p-7 sm:p-9 border transition-all ${
              exp.isCurrent
                ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gradient-to-br dark:from-[#0f2240] dark:via-[#0a182e] dark:to-[#06101f] border-blue-400 dark:border-blue-500/50 shadow-lg'
                : 'bg-white dark:bg-gradient-to-br dark:from-[#0a1628] dark:via-[#07101e] dark:to-[#040912] border-slate-200 dark:border-slate-800/80 shadow-md'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {exp.role[language]}
                  </h3>
                  {exp.isCurrent && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      {language === 'ar' ? 'حالي' : 'Current'}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {exp.company[language]}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {exp.period[language]}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {exp.location[language]}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.points[language].map((point, pIdx) => (
                <li key={pIdx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
