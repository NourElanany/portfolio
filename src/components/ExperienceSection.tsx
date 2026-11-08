import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <Briefcase className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'الخبرات والتدريب المهني المعتمد' : 'Experience & Professional Training'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {language === 'ar' ? 'الخبرات العملية والأكاديمية' : 'Professional & Practical Experience'}
        </h2>
      </div>

      <div className="space-y-6">
        {experienceList.map((exp) => (
          <div
            key={exp.id}
            className={`rounded-3xl p-7 sm:p-9 border transition-all ${
              exp.isCurrent
                ? 'bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 border-blue-500/50 shadow-lg'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {exp.role[language]}
                  </h3>
                  {exp.isCurrent && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {language === 'ar' ? 'حالي (السنة النهائية)' : 'Final Year'}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                  {exp.company[language]}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
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
                <li key={pIdx} className="text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
