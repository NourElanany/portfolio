import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { User, GraduationCap, CheckCircle2, Cpu, Eye, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'نبذة عني والمسار الهندسي' : 'About Me & Engineering Journey'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'الشغف والرؤية في هندسة الذكاء الاصطناعي' : 'Engineering Vision & Mission'}
        </h2>
      </div>

      <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-gradient-to-br dark:from-[#0b172a] dark:via-[#07101e] dark:to-[#040810] border border-slate-200 dark:border-blue-500/20 shadow-md dark:shadow-xl space-y-8">
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            {language === 'ar'
              ? 'أنا نور الدين أسامه فتحي العناني، خريج حديث في الذكاء الاصطناعي من كلية الذكاء الاصطناعي بجامعة بنها (دفعة 2026). تخصصي الأساسي الذي أركز عليه هو هندسة وتطوير أنظمة الذكاء الاصطناعي بلغة بايثون، وخطوط أنابيب الـ RAG للقطاع الطبي، وتطبيقات الرؤية الحاسوبية عالية الأداء.'
              : 'I am Noureldin Osama Fathy Elanany, a recent Artificial Intelligence graduate from Benha University (Class of 2026). My primary specialization is building scalable Python-based AI applications, healthcare RAG workflows, text classification models, and high-performance Computer Vision pipelines.'}
          </p>
          <p>
            {language === 'ar'
              ? 'أجمع بين التطبيق العملي الموثق في تحليل وتصنيف المراجعات الطبية، واسترجاع المتجهات الدلالية بـ ChromaDB و FAISS و Milvus، وتوجيه استفسارات الـ LLMs بـ LangGraph، والتميز في الرؤية الحاسوبية بتقدير ممتاز 98% من المعهد القومي للاتصالات NTI.'
              : 'I merge practical enterprise engineering with robust algorithmic grounding: healthcare review sentiment analysis, dense vector indexing via ChromaDB and FAISS, dynamic LLM routing with LangGraph, and a 98% Excellent benchmark in Computer Vision from NTI.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                {language === 'ar' ? 'الدرجة الأكاديمية' : 'Education'}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {language === 'ar' ? 'بكالوريوس الذكاء الاصطناعي — كلية الحاسبات والذكاء الاصطناعي بجامعة بنها (2022 – 2026 تم التخرج)' : "B.Sc. in AI — Benha University (2022 – 2026 Graduated)"}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                {language === 'ar' ? 'الجاهزية والفرص' : 'Career Availability'}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {language === 'ar' ? 'جاهز للانضمام كمهندس ذكاء اصطناعي (AI Engineer / Intern)' : 'Seeking an AI Engineering role/internship to contribute to production technology'}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
