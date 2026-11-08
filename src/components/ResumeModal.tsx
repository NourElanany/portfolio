import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData, certificationsList } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Download, Globe, Award, Briefcase, Code, GraduationCap, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [cvLang, setCvLang] = useState<'en' | 'ar'>(language);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const isAr = cvLang === 'ar';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[94vh] overflow-hidden transition-colors"
        >
          {/* Header Action Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 shrink-0 gap-3">
            
            {/* Title & Live Status */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                {isAr ? 'السيرة الذاتية الرسمية الشاملة (CV)' : 'Official Comprehensive AI Resume (CV)'}
              </h3>
            </div>

            {/* Language Switcher + Actions */}
            <div className="flex items-center gap-2">
              
              {/* Language Switcher inside CV */}
              <div className="flex items-center rounded-xl bg-slate-200/80 dark:bg-slate-800/80 p-0.5 border border-slate-300 dark:border-slate-700 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCvLang('en')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    !isAr
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setCvLang('ar')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    isAr
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  العربية
                </button>
              </div>

              {/* Download Official PDF */}
              <a
                href="./Noureldin_Elanany_CV.pdf"
                download="Noureldin_Elanany_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-300 dark:border-slate-700 cursor-pointer"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline">{isAr ? 'تحميل PDF' : 'Download PDF'}</span>
              </a>

              {/* Print / Save PDF */}
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                title="Print / Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAr ? 'طباعة' : 'Print'}</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div
            ref={printRef}
            dir={isAr ? 'rtl' : 'ltr'}
            className="overflow-y-auto p-6 sm:p-10 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 print:text-black print:bg-white print:p-0 font-sans space-y-6"
            id="printable-cv-content"
          >
            {/* Header */}
            <div className="border-b-2 border-slate-300 dark:border-slate-700 print:border-black pb-4 text-center sm:text-start">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black uppercase">
                {isAr ? personalData.name.ar : personalData.name.en}
              </h1>
              
              <p className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 print:text-blue-800 mt-1">
                {isAr
                  ? 'مهندس ذكاء اصطناعي (AI Engineer) | بايثون • النماذج اللغوية (LLMs & RAG) • الرؤية الحاسوبية'
                  : 'AI ENGINEER | PYTHON | LLMs, HEALTHCARE RAG & NLP | COMPUTER VISION'}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-600 dark:text-slate-300 print:text-slate-800 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {isAr ? 'القاهرة، مصر' : 'Cairo, Egypt'}
                </span>
                <span>•</span>
                <a href={personalData.contacts.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  {personalData.contacts.phone}
                </a>
                <span>•</span>
                <a href={`mailto:${personalData.contacts.email}`} className="flex items-center gap-1 hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  {personalData.contacts.email}
                </a>
                <span>•</span>
                <a href={personalData.contacts.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                  LinkedIn
                </a>
                <span>•</span>
                <a href={personalData.contacts.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <GithubIcon className="w-3.5 h-3.5 fill-current" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'النبذة المهنية' : 'Professional Summary'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                {isAr
                  ? 'خريج كلية الذكاء الاصطناعي بجامعة بنها (دفعة 2026) متخصص في بناء وتطوير تطبيقات بايثون للذكاء الاصطناعي التوليدي، وهندسة خطوط أنابيب الـ RAG للقطاع الطبي، وتطبيقات الرؤية الحاسوبية. حاصل على امتياز 98% في برنامج الرؤية الحاسوبية من المعهد القومي للاتصالات (NTI)، ومعتمد رسمياً من NVIDIA بـ 3 شهادات في الـ Deep Learning و LLMs و Prompt Engineering. خبرة تطبيقية عملية في شركتي NOVEGATES و NamaSoft في تجهيز البيانات، نماذج تصنيف النصوص والمشاعر (BiLSTM)، والبحث الدلالي المتجهي (ChromaDB, FAISS, Milvus)، والتوجيه الديناميكي للنماذج (LangGraph). جاهز ومتاح للعمل الفوري والمساهمة في مشاريع هندسة الذكاء الاصطناعي الإنتاجية.'
                  : 'Results-driven Artificial Intelligence Graduate (Faculty of Artificial Intelligence, Benha University - Class of 2026) specialized in building Python-powered Generative AI applications, Healthcare RAG pipelines, and Computer Vision solutions. Achieved a 98% (Excellent) Distinction score in Computer Vision from the National Telecommunication Institute (NTI), and hold 3 official NVIDIA certifications across Deep Learning, LLMs, and Prompt Engineering. Practical engineering experience at NOVEGATES and NamaSoft developing end-to-end AI pipelines, text and sentiment classification models (BiLSTM), dense vector retrieval (ChromaDB, FAISS, Milvus), and dynamic query routing (LangGraph). Available for immediate full-time employment to build scalable AI systems.'}
              </p>
            </div>

            {/* Comprehensive Technical Skills */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'المهارات التقنية التخصصية' : 'Technical Skills & Core Competencies'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• لغات البرمجة:' : '• Programming:'}
                  </strong>{' '}
                  Python (OOP, Clean Architecture, Async), SQL, Java (LangChain4j integration)
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• الذكاء التوليدي والـ LLMs:' : '• Generative AI & LLMs:'}
                  </strong>{' '}
                  RAG Architectures, Dynamic Query Routing, Prompt Engineering, Semantic Caching, Hallucination Reduction, LangGraph, OpenRouter API
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• قواعد بيانات المتجهات والبحث:' : '• Vector DBs & Retrieval:'}
                  </strong>{' '}
                  ChromaDB, FAISS, Milvus, Zilliz, Dense Embeddings (Sentence Transformers), HNSW Indexing
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• التعلم العميق ومعالجة اللغات:' : '• Deep Learning & NLP:'}
                  </strong>{' '}
                  PyTorch, TensorFlow / Keras, scikit-learn, BiLSTM, CNN-LSTM, Text Classification, Sentiment Analysis, TF-IDF
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• الرؤية الحاسوبية (امتياز 98% NTI):' : '• Computer Vision (98% NTI):'}
                  </strong>{' '}
                  OpenCV, MediaPipe (21 3D Hand Landmarks, 30+ FPS), Medical Image Multi-Modal Fusion (94% Accuracy), Object Detection
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <strong className="text-slate-900 dark:text-white print:text-black">
                    {isAr ? '• النشر والأدوات الهندسية:' : '• Deployment & Tools:'}
                  </strong>{' '}
                  Gradio, Streamlit, Flask REST APIs, Docker, Git / GitHub, Linux/Bash
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'الخبرات والتدريب العملي' : 'Professional Experience & Industrial Training'}</span>
              </h2>
              
              <div className="space-y-4">
                {/* NOVEGATES */}
                <div className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-slate-900 dark:text-white print:text-black">
                      {isAr ? 'فريق هندسة وتجهيز بيانات الذكاء الاصطناعي' : 'Data & AI Engineering Team Member'} —{' '}
                      <span className="text-blue-600 dark:text-blue-400 print:text-blue-800">NOVEGATES</span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-2xs sm:text-xs">
                      {isAr ? 'يونيو 2026 – أكتوبر 2026' : 'Jun 2026 – Oct 2026'}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                    <li>
                      {isAr
                        ? 'قيادة عمليات جمع وتدقيق وتجهيز مجموعات البيانات الموجهة لنماذج الذكاء الاصطناعي ومعالجة اللغات الطبيعية للقطاع الصحي.'
                        : 'Spearheaded domain-specific data collection, validation, and preprocessing pipelines for healthcare AI applications.'}
                    </li>
                    <li>
                      {isAr
                        ? 'تطبيق معايير فحص جودة البيانات وتنقيتها لضمان أعلى دقة عند تدريب نماذج التصنيف والتوليد اللاحقة.'
                        : 'Implemented quality-assurance and automated data-cleaning routines to guarantee high dataset integrity for downstream models.'}
                    </li>
                    <li>
                      {isAr
                        ? 'العمل ضمن فريق هندسي متكامل بالاعتماد على أدوات التحكم في الإصدارات Git ومنهجيات التطوير السريع.'
                        : 'Collaborated within an agile engineering team utilizing version control and collaborative software workflows.'}
                    </li>
                  </ul>
                </div>

                {/* NamaSoft */}
                <div className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-slate-900 dark:text-white print:text-black">
                      {isAr ? 'مهندس ذكاء اصطناعي متدرب' : 'AI Engineering Trainee'} —{' '}
                      <span className="text-blue-600 dark:text-blue-400 print:text-blue-800">NamaSoft</span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-2xs sm:text-xs">
                      {isAr ? 'يوليو 2025 – نوفمبر 2025' : 'Jul 2025 – Nov 2025'}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                    <li>
                      {isAr
                        ? 'إتمام برنامج تدريبي مهني مكثف لمدة 4 أشهر في بناء خطوط أنابيب تعلم الآلة والتعلم العميق بلغة بايثون.'
                        : 'Completed an intensive 4-month professional training program focused on end-to-end Python ML and DL pipelines.'}
                    </li>
                    <li>
                      {isAr
                        ? 'بناء وتقييم شبكات عصبية متقدمة (BiLSTM, CNN-LSTM) لتصنيف النصوص وتحليل المشاعر بدقة عالية.'
                        : 'Engineered and benchmarked neural architectures (BiLSTM, CNN-LSTM) for sentiment analysis and sequence modeling.'}
                    </li>
                    <li>
                      {isAr
                        ? 'ربط النماذج بواجهات برمجية خفيفة وتفاعلية (Streamlit, Flask REST APIs) لاختبار استجابة النماذج في الوقت الفعلي.'
                        : 'Built modular application interfaces using Streamlit and Flask to demonstrate real-time model predictions.'}
                    </li>
                  </ul>
                </div>

                {/* NTI */}
                <div className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-slate-900 dark:text-white print:text-black">
                      {isAr ? 'أخصائي رؤية حاسوبية معتمد (امتياز 98%)' : 'Certified Computer Vision Specialist (98% Distinction)'} —{' '}
                      <span className="text-blue-600 dark:text-blue-400 print:text-blue-800">NTI & ITIDA</span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-2xs sm:text-xs">
                      {isAr ? 'يوليو 2025 – أغسطس 2025' : 'Jul 2025 – Aug 2025'}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                    <li>
                      {isAr
                        ? 'إتمام 120 ساعة تدريب عملي مكثف في معالجة الصور والفيديو المباشر، والحصول على التقييم النهائي بتقدير ممتاز 98%.'
                        : 'Completed 120 intensive hours in image preprocessing, object detection, and video inference, graduating with 98% (Excellent).'}
                    </li>
                    <li>
                      {isAr
                        ? 'تنفيذ خطوط معالجة بصرية فائقة السرعة بالاعتماد على OpenCV و MediaPipe لتتبع 21 مفصل يدوي بسرعة 30+ إطار/ثانية.'
                        : 'Built high-throughput visual inference pipelines using OpenCV and MediaPipe for 21 3D hand landmarks tracking at 30+ FPS.'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comprehensive Featured Projects */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'أبرز المشاريع الهندسية المنفذة' : 'Selected Flagship AI & Engineering Projects'}</span>
              </h2>

              <div className="space-y-3 text-xs">
                {/* Project 1: WebMD Pipeline */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '1. خط أنابيب الذكاء الاصطناعي الطبي المتكامل (WebMD AI Pipeline)'
                        : '1. WebMD AI Pipeline: ML, BiLSTM NLP & Medical RAG'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-blue-800">
                      GitHub Repo
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'بناء نظام متكامل لتحليل بيانات ومراجعات المرضى الطبية: تنظيف وتجهيز البيانات، تصنيف فعالية الأدوية، تحليل مشاعر المراجعات بنموذج BiLSTM، ونظام RAG بقاعدة ChromaDB للرد التوليدي الموثق بدون هلوسة عبر OpenRouter API.'
                      : 'Built an end-to-end healthcare review intelligence pipeline: automated data cleaning, drug-effectiveness classification, BiLSTM sentiment analysis, and ChromaDB vector retrieval with prompt-grounded medical answers via OpenRouter API.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Python • scikit-learn • BiLSTM • ChromaDB • OpenRouter API • Streamlit
                  </div>
                </div>

                {/* Project 2: Enterprise Java RAG with LangChain4j & Milvus */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '2. نظام الـ RAG المؤسسي بـ LangChain4j وقواعد Milvus و Zilliz'
                        : '2. Enterprise Java RAG with LangChain4j & Milvus / Zilliz'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-blue-800">
                      Sub-15ms Latency
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'تصميم وتنفيذ 3 أنظمة RAG إنتاجية موجهة للبيئات المؤسسية بالاعتماد على LangChain4j و MilvusEmbeddingStore، مع تطبيق فهارس HNSW للبحث المتجهي السريع في زمن استجابة أقل من 15 مللي ثانية.'
                      : 'Engineered production RAG workflows using LangChain4j integrated with MilvusEmbeddingStore, leveraging HNSW vector indexing algorithms for sub-15ms retrieval latency across enterprise codebases and documents.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    LangChain4j • Milvus • Zilliz • RAG • Java • Vector Search
                  </div>
                </div>

                {/* Project 3: Dynamic LLM Routing Gateway */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '3. موجه نماذج اللغة الديناميكي لخفض تكلفة التوكنز (Dynamic LLM Router)'
                        : '3. Dynamic LLM Routing Gateway & Cost Optimizer'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-emerald-600 dark:text-emerald-400 print:text-emerald-800">
                      -70% Token Cost
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'بوابة توجيه ذكية تقيس مدى تعقيد الاستفسارات آلياً وتوجهها ديناميكياً بين النماذج السريعة والخفيفة أو النماذج المعرفية الكبرى، مع تخزين دلالي مؤقت (Semantic Caching) يخفض استهلاك التوكنز بنسبة 70%.'
                      : 'Implemented a multi-tier query routing gateway using LangGraph: assesses prompt complexity dynamically to route between small vs frontier models, incorporating semantic caching to reduce token spend by up to 70%.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Python • LangGraph • Sentence Transformers • Streamlit • Clean Code
                  </div>
                </div>

                {/* Project 4: WebMD Semantic RAG App */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '4. تطبيق الاسترجاع الدلالي الطبي (WebMD Medical RAG Application)'
                        : '4. WebMD Medical Semantic RAG Application'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-blue-800">
                      Zero Hallucination
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'تطبيق Gradio متقدم لفهرسة مراجعات الأدوية: تقسيم النصوص (Chunking)، تضمينات مدركة للبيانات الوصفية، بحث دلالي عبر FAISS، وتوليد إجابات دقيقة مثبتة بالمراجع الطبية.'
                      : 'Developed a medical query interface in Gradio: document chunking, metadata-aware dense vector embeddings (FAISS), and prompt-grounded context response generation eliminating clinical hallucinations.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Python • Gradio • Sentence Transformers • FAISS • Prompt Engineering
                  </div>
                </div>

                {/* Project 5: Real-time Hand Tracking & Vision */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '5. معمل تتبع مفاصل اليد بالفيديو المباشر (Real-Time MediaPipe Vision)'
                        : '5. Real-Time Video Computer Vision & Hand Landmark Tracking'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-blue-800">
                      30+ FPS Live
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'نظام رؤية حاسوبية حي يتتبع 21 مفصل هيكلي لليد بدقة فائقة في الوقت الفعلي بسرعة تتجاوز 30 إطاراً في الثانية، مع تصنيف الحركات وتوليد حدود الرصد التفاعلية.'
                      : 'Engineered a real-time computer vision system tracking 21 3D hand landmarks at 30+ FPS via OpenCV and MediaPipe, featuring real-time gesture telemetry and bounding-box inference.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Python • OpenCV • MediaPipe • NumPy • Real-Time Streaming
                  </div>
                </div>

                {/* Project 6: Medical Image Multi-Modal Fusion */}
                <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                    <span>
                      {isAr
                        ? '6. نظام الدمج البصري للصور الطبية وتشخيص الأورام (Multi-Modal Medical Fusion)'
                        : '6. Multi-Modal Medical Image Fusion Diagnostic System'}
                    </span>
                    <span className="text-2xs font-mono font-bold text-emerald-600 dark:text-emerald-400 print:text-emerald-800">
                      94% Accuracy
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 leading-relaxed">
                    {isAr
                      ? 'دمج مبكر للصور الشعاعية ثنائية النمط (MRI و PET) لتعزيز دقة التشخيص السريري الأولي، محققاً نسبة دقة استدلال بلغت 94% في رصد الآفات المرضية.'
                      : 'Dual-modality radiological image fusion combining structural MRI and functional PET scans, achieving a 94% diagnostic classification accuracy to assist clinical decision-making.'}
                  </p>
                  <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Python • PyTorch • OpenCV • Scikit-image • Deep Learning
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Honors */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'التعليم الأكاديمي والتقديرات' : 'Education & Academic Honors'}</span>
              </h2>
              
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-slate-900 dark:text-white print:text-black text-xs sm:text-sm">
                      {isAr
                        ? 'بكالوريوس في علوم الذكاء الاصطناعي — كلية الذكاء الاصطناعي، جامعة بنها'
                        : "Bachelor's Degree in Artificial Intelligence — Faculty of Artificial Intelligence, Benha University"}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-2xs sm:text-xs">
                      2022 – 2026 (Graduated)
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 print:text-blue-800 font-semibold mt-0.5">
                    {isAr
                      ? 'تخصص: علوم وهندسة الذكاء الاصطناعي (Class of 2026)'
                      : 'Major: Artificial Intelligence Engineering & Data Science (Class of 2026)'}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 print:border-none print:p-0">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-blue-900 dark:text-blue-200 print:text-black text-xs sm:text-sm">
                      {isAr
                        ? 'دبلومة الرؤية الحاسوبية المعتمدة (120 ساعة) — المعهد القومي للاتصالات (NTI) و ITIDA'
                        : 'Computer Vision Professional Diploma (120 Hours) — NTI & ITIDA'}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                      {isAr ? 'امتياز 98%' : 'Score: 98% (Excellent)'}
                    </span>
                  </div>
                  <p className="text-2xs text-slate-600 dark:text-slate-400 print:text-slate-800 mt-0.5">
                    Student ID: 230351 • Summer 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Official Certifications (All 7 Credentials) */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span>{isAr ? 'الشهادات والتراخيص المهنية المعتمدة (7 شهادات)' : 'Official Certifications & Credentials'}</span>
              </h2>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certificationsList.map((c) => (
                  <li key={c.id} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-400 print:p-1">
                    <div className="font-bold text-slate-900 dark:text-white print:text-black">
                      {c.title}
                    </div>
                    <div className="text-2xs font-semibold text-blue-600 dark:text-blue-400 print:text-blue-800 mt-0.5">
                      {c.issuer} {c.badgeText ? `• ${c.badgeText}` : ''}
                    </div>
                    {c.credentialId && (
                      <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        ID: {c.credentialId}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 print:border-black flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <div>
                <strong className="text-slate-800 dark:text-slate-200 print:text-black">
                  {isAr ? 'اللغات:' : 'Languages:'}
                </strong>{' '}
                {isAr
                  ? 'العربية (اللغة الأم - Native) | الإنجليزية (كفاءة مهنية - Professional Working Proficiency)'
                  : 'Arabic (Native) • English (Professional Working Proficiency)'}
              </div>
              <div className="text-2xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ {isAr ? 'جاهز للانضمام والعمل الفوري' : 'Available for Immediate Hire'}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
