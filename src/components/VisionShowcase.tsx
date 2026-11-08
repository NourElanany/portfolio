import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { aiPillars } from '../data/portfolioData';
import { Cpu, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const VisionShowcase: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="ai-specialty" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Specialty Highlight Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-950/60 via-slate-900/90 to-indigo-950/60 border border-blue-500/40 backdrop-blur-xl mb-12 shadow-2xl overflow-hidden">
        <div className="absolute top-0 end-0 -mt-10 -me-10 w-60 h-60 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40 text-xs sm:text-sm font-bold">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>{language === 'ar' ? 'الـ Core الأساسي: هندسة الذكاء الاصطناعي' : 'Primary Core: AI Engineering'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {language === 'ar' 
                ? 'هندسة الذكاء الاصطناعي والرؤية الحاسوبية (AI Engineering)' 
                : 'Full-Spectrum AI Engineering & Visual Intelligence'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'ar'
                ? 'تخصصي الأساسي هو هندسة الذكاء الاصطناعي (AI Engineering) الشاملة؛ بدءاً من تصميم المعماريات البرمجية عالية الأداء والنظم المصغرة (Python & Rust)، مروراً بالتميز الاستثنائي في الرؤية الحاسوبية (Computer Vision) بدقة 94%، وحتى بناء خطوط أنابيب الذكاء التوليدي والـ RAG المؤسسية.'
                : 'My core discipline is full-stack AI Engineering; spanning high-performance microkernel architectures (Python & Rust), exceptional mastery in Computer Vision (94% clinical accuracy), to enterprise Generative AI and vector RAG pipelines.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 w-full lg:w-auto shrink-0">
            <div className="px-5 py-4 rounded-2xl bg-slate-900/80 border border-blue-500/30 backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">Core</div>
              <div className="text-xs text-slate-300 font-bold mt-1">
                {language === 'ar' ? 'هندسة الـ AI والنظم' : 'AI Engineering'}
              </div>
            </div>

            <div className="px-5 py-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">94%</div>
              <div className="text-xs text-slate-300 font-bold mt-1">
                {language === 'ar' ? 'دقة التشخيص بالرؤية' : 'Computer Vision'}
              </div>
            </div>

            <div className="px-5 py-4 rounded-2xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">30+ FPS</div>
              <div className="text-xs text-slate-300 font-bold mt-1">
                {language === 'ar' ? 'فيديو وتتبع حركي' : 'Real-Time Edge'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid - Spacious & Modern */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {aiPillars.map((pillar) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-7 sm:p-9 bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 transition-all shadow-md flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {pillar.badge[language]}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {pillar.metrics}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {pillar.title[language]}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {pillar.description[language]}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {pillar.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800/90 text-slate-200 border border-slate-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
