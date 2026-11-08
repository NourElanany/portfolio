import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { X, Sparkles, CheckCircle2, Eye, Cpu, FileText, PhoneCall, Bot, Award, Zap, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window - Spacious Executive Fast-Track Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden transition-colors max-h-[92vh] flex flex-col"
        >
          {/* Header Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto space-y-6 pe-1">
            
            {/* Header Profile Summary */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
              <img
                src="./images/profile.jpg"
                alt={personalData.name[language]}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-blue-500/40 shadow-md shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'ملخص مسؤولي التوظيف والمديرين (30 ثانية)' : 'Recruiter & Hiring Fast-Track Pitch'}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{language === 'ar' ? 'جاهز ومتاح للعمل الفوري' : 'Available for Immediate Hire'}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                  {personalData.name[language]}
                </h2>

                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {language === 'ar'
                    ? 'مهندس ذكاء اصطناعي (AI Engineer) • خريج كلية الذكاء الاصطناعي بجامعة بنها (دفعة 2026)'
                    : 'AI Engineer • B.Sc. in Artificial Intelligence, Benha University (Class of 2026)'}
                </p>
              </div>
            </div>

            {/* Metrics Snapshot Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/40 text-center">
                <div className="text-xl font-mono font-extrabold text-blue-600 dark:text-blue-400">98%</div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'امتياز NTI (رؤية حاسوبية)' : 'NTI CV Distinction'}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-center">
                <div className="text-xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400">94%</div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'دقة التشخيص بالرؤية' : 'Medical CV Accuracy'}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 text-center">
                <div className="text-xl font-mono font-extrabold text-purple-600 dark:text-purple-400">0%</div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'نسبة هلوسة الـ RAG' : 'RAG Hallucination'}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-center">
                <div className="text-xl font-mono font-extrabold text-amber-600 dark:text-amber-400">15+</div>
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'مشروع موثق على GitHub' : 'GitHub AI Repos'}
                </div>
              </div>
            </div>

            {/* 4 Pillars of Competence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? '1. هندسة وتطبيقات الـ AI (Core)' : '1. AI Engineering & Python Core'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'بناء تطبيقات وحلول ذكاء اصطناعي إنتاجية بلغة بايثون، تصميم معماريات معيارية نظيفة، ودمج واجهات سريعة بـ Gradio و Streamlit و Flask.'
                    : 'Python AI production pipelines, modular clean architecture, and lightweight application interfaces (Gradio, Streamlit, Flask REST APIs).'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <Bot className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? '2. الذكاء التوليدي والـ RAG الطبي' : '2. Generative AI & Healthcare RAG'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'خطوط أنابيب استرجاع RAG متقدمة للقطاع الصحي بقواعد المتجهات ChromaDB و FAISS و Milvus، تصنيف المشاعر بـ BiLSTM، وتوجيه النماذج بـ LangGraph.'
                    : 'Healthcare RAG pipelines with ChromaDB, FAISS and Milvus vector stores, BiLSTM sentiment classification, and LangGraph complexity routing.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? '3. الرؤية الحاسوبية (امتياز 98% NTI)' : '3. Computer Vision (98% NTI)'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'تشخيص طبي بالدمج المبكر لصور الأشعة بدقة 94%، وتتبع 21 مفصل هيكلي لليد بالفيديو المباشر بسرعة 30+ FPS بـ MediaPipe.'
                    : 'Early multi-modal medical fusion at 94% accuracy, real-time 30+ FPS MediaPipe hand landmark tracking, and OpenCV video processing.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? '4. الخبرات الصناعية والاعتمادات' : '4. Industry Experience & Credentials'}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'خبرة عمل في NOVEGATES وتدريب في NamaSoft، 3 شهادات رسمية من NVIDIA، وامتياز 98% في معهد NTI.'
                    : 'Experience at NOVEGATES, AI Engineering training at NamaSoft, 3 verified NVIDIA credentials, and 98% NTI evaluation.'}
                </p>
              </div>

            </div>

            {/* Direct Instant Action Bar */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                {language === 'ar' ? 'الخطوة التالية المباشرة:' : 'Direct Hiring Actions:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                
                {/* View CV Primary Action */}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>{language === 'ar' ? 'استعراض الـ CV' : 'View Full CV'}</span>
                </button>

                {/* WhatsApp Chat */}
                <a
                  href={personalData.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${personalData.contacts.email}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold transition-all border border-slate-200 dark:border-slate-700"
                >
                  <Mail className="w-4 h-4 shrink-0 text-blue-500" />
                  <span>{language === 'ar' ? 'إرسال إيميل' : 'Send Email'}</span>
                </a>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
