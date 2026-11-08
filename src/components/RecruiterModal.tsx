import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { X, Sparkles, CheckCircle, Eye, Cpu, FileText, PhoneCall } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Header Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'ملخص مسؤولي التوظيف (30 ثانية)' : 'Recruiter 30-Second Fast Pitch'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100">
              {language === 'ar' ? personalData.name.ar : personalData.name.en}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Cpu className="w-4 h-4" />
                AI Engineer
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <Eye className="w-4 h-4" />
                Computer Vision & Generative AI
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">
                Class of 2026 (Benha University)
              </span>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
              <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                {language === 'ar' ? 'الـ Core: هندسة الذكاء الاصطناعي' : 'Core: AI Engineering'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تصميم أنظمة ذكاء اصطناعي إنتاجية، معمارية Microkernel بكيرنل مزدوج (Python + Rust)، ونشر النماذج السحابية.'
                  : 'Production AI systems, dual-ensemble microkernels (Python + Rust), and high-throughput model serving.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
              <div className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                {language === 'ar' ? 'الرؤية الحاسوبية (CV)' : 'Computer Vision Mastery'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تشخيص طبي بالدمج المبكر لصور الأشعة بدقة 94%، ومعالجة الفيديو المباشر وتتبع 21 مفصل لليد بـ 30+ FPS.'
                  : 'Early multi-modal medical fusion at 94% accuracy, real-time 30+ FPS MediaPipe hand landmark tracking.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {language === 'ar' ? 'الذكاء التوليدي والـ RAG' : 'Generative AI & LLMs'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? '3 مشاريع RAG إنتاجية بـ LangChain4j، وقواعد المتجهات Milvus و Zilliz، وتوجيه استفسارات الـ LLM بـ LangGraph.'
                  : '3 production RAGs with LangChain4j, Milvus/Zilliz vector stores, and LangGraph dynamic query routing.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
              <div className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                {language === 'ar' ? 'الاعتمادات والتراخيص' : 'Verified Credentials'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? '3 شهادات معتمدة من NVIDIA، وتدريب معهد NTI بنتيجة 98%، وأكثر من 15 مستودع كود مفتوح المصدر على GitHub.'
                  : '3 NVIDIA certifications, 98% NTI Computer Vision distinction, and 15+ verified GitHub repositories.'}
              </p>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-400">
              {language === 'ar' ? 'التواصل المباشر الفوري:' : 'Instant Direct Contact:'}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <a
                href={personalData.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={personalData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-[#0077B5] text-white hover:opacity-90 text-xs font-bold transition-all shadow-md"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-slate-950 text-white hover:bg-slate-800 text-xs font-bold transition-all border border-slate-800"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
                <span>GitHub</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'ar' ? 'استعراض الـ CV' : 'View CV'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
