import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Eye, Layers, Terminal, Database, Sparkles, CheckCircle2, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  const skillGroups = [
    {
      id: 'ai-ml-nlp-rag',
      title: { ar: 'الذكاء الاصطناعي، نماذج الـ LLMs والـ RAG ومعالجة اللغات (NLP)', en: 'AI, LLMs, Vector RAG & NLP Classification' },
      icon: Bot,
      isPrimary: true,
      skills: [
        'Large Language Models (LLMs)',
        'Retrieval-Augmented Generation (RAG)',
        'Natural Language Processing (NLP)',
        'Text Classification & Categorization',
        'Clinical Review Sentiment Analysis',
        'Semantic Vector Search',
        'Dense Embeddings Generation',
        'LSTM & BiLSTM Neural Networks',
        'CNN-LSTM Feature Hybridization',
        'Prompt Grounding & Verification',
      ],
    },
    {
      id: 'libraries-frameworks',
      title: { ar: 'المكتبات وأطر العمل الهندسية (Libraries & Frameworks)', en: 'Libraries & Frameworks' },
      icon: Layers,
      isPrimary: false,
      skills: [
        'scikit-learn',
        'TensorFlow / Keras',
        'PyTorch',
        'Sentence Transformers',
        'LangGraph',
        'FAISS Vector Engine',
        'ChromaDB Vector Store',
        'Milvus & Zilliz',
        'pandas',
        'NumPy',
      ],
    },
    {
      id: 'applications-apis',
      title: { ar: 'تطوير الواجهات والـ APIs (Applications & APIs)', en: 'Applications, Interfaces & APIs' },
      icon: Terminal,
      isPrimary: false,
      skills: [
        'Gradio Interactive UIs',
        'Streamlit Dashboards',
        'Flask RESTful APIs',
        'OpenRouter API Integration',
        'Python (Core Language)',
        'Git & GitHub Version Control',
        'Docker Basics',
        'Clean Architecture & Modular Code',
      ],
    },
    {
      id: 'cv-edge',
      title: { ar: 'الرؤية الحاسوبية وتتبع الفيديو (Computer Vision - NTI 98%)', en: 'Computer Vision & Edge Processing' },
      icon: Eye,
      isPrimary: false,
      skills: [
        'OpenCV',
        'MediaPipe (30+ FPS Pose Landmarks)',
        'Early Feature Fusion (94% Clinical Acc)',
        'Object Detection (YOLO)',
        'Image Preprocessing & Edge Detection',
        'Real-Time Live Video Processing',
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'الترسانة والمهارات التقنية المعتمدة' : 'Verified Technical Skills'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'المهارات والتقنيات الهندسية' : 'Skills & Technical Capabilities'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl p-7 sm:p-9 border transition-all ${
                group.isPrimary
                  ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gradient-to-br dark:from-[#131d3d] dark:via-[#0e162f] dark:to-[#080d1d] border-blue-300 dark:border-indigo-500/40 shadow-lg md:col-span-2'
                  : 'bg-white dark:bg-gradient-to-br dark:from-[#0d142b] dark:via-[#090e1f] dark:to-[#050812] border-slate-200 dark:border-indigo-900/30 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-3 rounded-2xl ${group.isPrimary ? 'bg-blue-600 text-white' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {group.title[language]}
                  </h3>
                  {group.isPrimary && (
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {language === 'ar' ? '★ التخصص والخبرة الأساسية' : '★ Core Specialization'}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
