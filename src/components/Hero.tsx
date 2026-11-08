import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { MessageCircle, Briefcase, Award, Sparkles, Eye, FileText, Zap, Cpu, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRecruiter?: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiter, onOpenResume }) => {
  const { language } = useLanguage();

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Text Column (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-center lg:text-start order-2 lg:order-1"
        >
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'ar' ? 'مهندس ذكاء اصطناعي (AI Engineer)' : 'Core: AI Engineer'}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold shadow-xs">
              <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{language === 'ar' ? 'Computer Vision (امتياز NTI 98%)' : 'Computer Vision (98% NTI)'}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-xs">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === 'ar' ? 'خريج ذكاء اصطناعي — دفعة 2026' : 'AI Graduate — Class of 2026'}</span>
            </span>
          </div>

          {/* Large, Bold, Impactful Name */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              {language === 'ar' ? (
                <>
                  <span>أنا </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                    {personalData.name.ar}
                  </span>
                </>
              ) : (
                <>
                  <span>I'm </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                    {personalData.name.en}
                  </span>
                </>
              )}
            </h1>

            <div className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center lg:justify-start gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />
              <span>{personalData.role[language]}</span>
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              {personalData.subRole[language]}
            </p>
          </div>

          {/* Bio */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {personalData.bio[language]}
          </p>

          {/* Action Buttons & Social Links */}
          <div className="pt-2 flex flex-wrap gap-3.5 justify-center lg:justify-start items-center">
            
            {/* Recruiter 30s Pitch Button */}
            {onOpenRecruiter && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenRecruiter}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>{language === 'ar' ? 'ملخص التوظيف السريع (30s)' : '30s Recruiter Pitch'}</span>
              </motion.button>
            )}

            {/* ATS CV Modal Button */}
            {onOpenResume && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>{language === 'ar' ? 'استعراض الـ CV المعتمد (ATS)' : 'View Verified CV (ATS)'}</span>
              </motion.button>
            )}

            {/* WhatsApp Direct Chat */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={personalData.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-colors shadow-md hover:shadow-emerald-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={personalData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors shadow-xs"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={personalData.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors shadow-xs"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Quick jump to Live CV Sandbox */}
          <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
            <Zap className="w-4 h-4 text-blue-500 animate-bounce" />
            <a href="#cv-playground" className="hover:underline flex items-center gap-1">
              <span>{language === 'ar' ? '⚡ نماذج محاكاة تفاعلية لمشاريعي المنفذة في المتصفح' : '⚡ Interactive Simulations of Implemented Projects'}</span>
              <span>↓</span>
            </a>
          </div>

          {/* Stats Cards Grid with Larger Comfortable Numbers */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {personalData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
                className="relative p-4 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#0c1833] dark:via-[#081226] dark:to-[#050c19] backdrop-blur-md border border-slate-200 dark:border-blue-500/25 shadow-sm hover:border-blue-500/50 transition-all text-center group"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label[language]}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Real Profile Photo Column - Large & High Quality */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="relative w-80 sm:w-96 lg:w-[420px]"
          >
            {/* Glowing Backdrop Border */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-20 dark:opacity-40 blur-xl group-hover:opacity-100 transition duration-1000" />
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 dark:border-blue-500/40 bg-white dark:bg-slate-950 shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt={personalData.name[language]}
                className="w-full h-auto object-cover object-center max-h-[480px]"
              />
              
              {/* Bottom Card Identity Footer */}
              <div className="p-4 sm:p-5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                    {language === 'ar' ? personalData.name.shortAr : personalData.name.shortEn}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-bold">
                    {language === 'ar' ? 'مهندس ذكاء اصطناعي | AI Engineer' : 'AI Engineer | NLP, LLMs & CV'}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 text-xs font-bold">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>2026</span>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
