import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { User, GraduationCap, CheckCircle2, Cpu, Eye, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <User className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'نبذة عني والمسار الهندسي' : 'About Me & Engineering Journey'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {language === 'ar' ? 'الشغف والرؤية في هندسة الذكاء الاصطناعي' : 'Engineering Vision & Mission'}
        </h2>
      </div>

      <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/90 border border-slate-800 shadow-xl space-y-8">
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            {language === 'ar'
              ? 'أنا نور الدين أسامه فتحي العناني، مهندس ذكاء اصطناعي (AI Engineer) في سنتي النهائية بكلية الحاسبات والذكاء الاصطناعي بجامعة بنها (دفعة 2026). تخصصي الأساسي الذي أركز عليه هو هندسة أنظمة الذكاء الاصطناعي المتكاملة والقابلة للنشر السحابي والطرفي.'
              : 'I am Noureldin Osama Fathy Elanany, a final-year Artificial Intelligence Engineer from Benha University (Class of 2026). My primary focus is building scalable, end-to-end AI systems ready for production deployment.'}
          </p>
          <p>
            {language === 'ar'
              ? 'أجمع بين الفهم العميق للرؤية الحاسوبية (Computer Vision) ونماذج التشخيص الطبي بدقة 94%، وتطوير بيئات ذكاء اصطناعي سريعة بكيرنل مزدوج بلغة Python و Rust، وتدريب وكلاء التعلم المعزز (PPO)، إلى جانب بناء خطوط أنابيب الذكاء التوليدي والـ RAG باستخدام Milvus و Zilliz و LangChain4j.'
              : 'I merge deep theoretical intuition in Computer Vision (medical imaging at 94% accuracy) with rigorous software craftsmanship — from dual microkernels in Rust and Python to enterprise Generative AI and vector RAG pipelines.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-slate-800">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
            <GraduationCap className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-100">
                {language === 'ar' ? 'الدرجة الأكاديمية' : 'Education'}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {language === 'ar' ? 'بكالوريوس الذكاء الاصطناعي — كلية الحاسبات والذكاء الاصطناعي بجامعة بنها (2022 – 2026)' : 'B.Sc. in AI — Benha University (2022 – 2026)'}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-100">
                {language === 'ar' ? 'الجاهزية والفرص' : 'Career Availability'}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {language === 'ar' ? 'متاح لأدوار AI Engineer، والرؤية الحاسوبية، والذكاء التوليدي' : 'Open to AI Engineer, Computer Vision, and Generative AI roles'}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
