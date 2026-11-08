import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { MessageCircle, Award, Sparkles, FileText, Zap, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRecruiter?: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiter, onOpenResume }) => {
  const { language } = useLanguage();

  return (
    <section id="hero" className="relative w-full py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
          {/* Text Column (Span 7) - Balanced, Breathable, Eye-Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-center lg:text-start order-2 lg:order-1"
          >
            
            {/* Single Balanced Status Badge - No Messy Wrapping */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'مهندس ذكاء اصطناعي • خريج 2026 • امتياز NTI 98%'
                  : 'AI Engineer • Class of 2026 • NTI 98% Distinction'}
              </span>
            </div>

            {/* Clean, Elegant Name Header */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {language === 'ar' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300">
                    نور الدين أسامه العناني
                  </span>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300">
                    Noureldin Osama Elanany
                  </span>
                )}
              </h1>

              <div className="text-base sm:text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center lg:justify-start gap-2">
                <Cpu className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'مهندس ذكاء اصطناعي (AI Engineer) | LLMs, Vector RAG & CV'
                    : 'AI Engineer | LLMs, Healthcare Vector RAG & Computer Vision'}
                </span>
              </div>
            </div>

            {/* Focused, Crisp Bio - Single Paragraph with Zero Repetition */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'ar'
                ? 'خريج كلية الذكاء الاصطناعي بجامعة بنها (دفعة 2026) بتقدير ممتاز 98% في الرؤية الحاسوبية من معهد NTI، ومعتمد من NVIDIA. خبرة عملية في شركتي NOVEGATES و NamaSoft في بناء وتطوير خطوط أنابيب الـ RAG للقطاع الطبي، البحث الدلالي المتجهي (ChromaDB, FAISS)، وتصنيف ومعالجة النصوص بلغة بايثون.'
                : 'Recent AI Graduate from Benha University (Class of 2026) with a 98% Distinction in Computer Vision from NTI and NVIDIA certified. Industry experience at NOVEGATES and NamaSoft building healthcare RAG workflows, dense vector retrieval (ChromaDB, FAISS), and high-performance Python AI applications.'}
            </p>

            {/* Action Buttons & Links - Beautiful Single Clean Flow */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start items-center">
              
              {/* Primary CTA: Clean CV Button (No ATS Jargon) */}
              {onOpenResume && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
                >
                  <FileText className="w-4 h-4 text-blue-400 dark:text-blue-600 shrink-0" />
                  <span>{language === 'ar' ? 'استعراض الـ CV' : 'View CV'}</span>
                </motion.button>
              )}

              {/* WhatsApp Direct Chat */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalData.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
              </motion.a>

              {/* Social Icons Inline */}
              <div className="flex items-center gap-2 shrink-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalData.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors shadow-xs"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalData.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors shadow-xs"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Fast Interactive Playground Link */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 pt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <a href="#cv-playground" className="hover:underline flex items-center gap-1">
                <span>{language === 'ar' ? 'نماذج محاكاة تفاعلية حية لمشاريعي المنفذة في المتصفح' : 'Interactive Simulations of Implemented Projects'}</span>
                <span>↓</span>
              </a>
            </div>

            {/* Balanced, Proportional Stats Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {personalData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-blue-500/20 text-center shadow-xs hover:border-blue-500/50 transition-all"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">
                    {stat.label[language]}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Profile Photo Column - Clean Executive Studio Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-72 sm:w-80 lg:w-[340px] transform-gpu">
              
              {/* Soft Ambient Glow Behind Photo */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-30 dark:opacity-40 pointer-events-none transform-gpu"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.15) 50%, transparent 75%)',
                }}
              />
              
              {/* Clean, Refined Portrait Frame (No Clutter, No Cutoffs) */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-slate-950 shadow-2xl transition-all hover:border-blue-500/40 group">
                <img
                  src="./images/profile.jpg"
                  alt={personalData.name[language]}
                  className="w-full h-auto aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Elegant Status Pill Placed Cleanly Underneath Photo */}
              <div className="mt-3.5 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>
                    {language === 'ar' ? 'جاهز ومتاح للعمل الفوري' : 'Available for Immediate AI Roles'}
                  </span>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold border-s border-slate-300 dark:border-slate-700 ps-2 ms-0.5">
                    2026
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
