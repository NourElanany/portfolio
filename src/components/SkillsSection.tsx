import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Eye, Layers, Terminal, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  const skillGroups = [
    {
      id: 'ai-engineering-core',
      title: { ar: 'الـ Core الأساسي: هندسة ونظم الذكاء الاصطناعي (AI Engineering)', en: 'Core Discipline: AI Engineering & Systems' },
      icon: Cpu,
      isPrimary: true,
      skills: [
        'End-to-End AI Systems',
        'Clean Code Architecture',
        'Microkernel Architecture (Rust + Python)',
        'Model Deployment & Serving',
        'Reinforcement Learning (PPO Agent)',
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'Low-Latency Inference Optimization',
      ],
    },
    {
      id: 'cv-mastery',
      title: { ar: 'الرؤية الحاسوبية ومعالجة الصور (Computer Vision)', en: 'Computer Vision & Visual Intelligence' },
      icon: Eye,
      isPrimary: true,
      skills: [
        'OpenCV',
        'MediaPipe (30+ FPS Pose/Landmarks)',
        'Early Feature Fusion (Medical Imaging)',
        'Object Detection Pipelines (YOLO)',
        'Semantic Segmentation (Mask R-CNN)',
        'Digital Image Processing (Canny, Sobel)',
        'Real-Time Live Video Processing',
        'Data Augmentation Strategies',
      ],
    },
    {
      id: 'genai-llms',
      title: { ar: 'الذكاء الاصطناعي التوليدي والـ RAG (Generative AI & LLMs)', en: 'Generative AI, LLMs & Vector RAG' },
      icon: Layers,
      isPrimary: false,
      skills: [
        'Large Language Models (LLMs)',
        'LangChain4j (Enterprise Java)',
        'LangGraph Dynamic Query Routing',
        'Milvus & Zilliz Vector DBs',
        'ChromaDB & FAISS Vector Search',
        'Prompt Engineering (NVIDIA Certified)',
        'RAG Hallucination Mitigation',
      ],
    },
    {
      id: 'dl-ml',
      title: { ar: 'التعلم العميق والآلي ومعالجة اللغات (DL, ML & NLP)', en: 'Deep Learning, ML & Arabic NLP' },
      icon: Database,
      isPrimary: false,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Convolutional Neural Networks (CNNs)',
        'Recurrent Networks (BiLSTM/RNNs)',
        'GANs & Generative Architectures',
        'Transfer Learning',
        'Scikit-learn (10+ Classifiers Evaluated)',
        'Arabic NLP (Tokenization, TF-IDF)',
      ],
    },
    {
      id: 'languages-mlops',
      title: { ar: 'لغات البرمجة والإنتاج والـ MLOps', en: 'Programming Languages & MLOps' },
      icon: Terminal,
      isPrimary: false,
      skills: [
        'Python (Expert)',
        'C++',
        'Java',
        'Rust',
        'SQL',
        'Docker & Containerization',
        'Git & GitHub Workflow',
        'CI/CD Basics & Linux',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'الترسانة والمهارات المعتمدة في الـ CV' : 'Technical Arsenal from Verified CV'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {language === 'ar' ? 'المهارات والتقنيات الهندسية' : 'Skills & Technical Capabilities'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className={`rounded-3xl p-7 sm:p-9 border transition-all ${
                group.isPrimary
                  ? 'bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 border-blue-500/50 shadow-lg md:col-span-2'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-3 rounded-2xl ${group.isPrimary ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {group.title[language]}
                  </h3>
                  {group.isPrimary && (
                    <span className="text-xs font-bold text-blue-400">
                      {language === 'ar' ? '★ الركائز الهندسية الأساسية' : '★ Core Engineering Pillars'}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium border ${
                      group.isPrimary
                        ? 'bg-blue-500/15 text-blue-300 border-blue-500/40'
                        : 'bg-slate-800 text-slate-200 border-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
