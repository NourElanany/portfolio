import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Radar, ChevronRight, Zap, Cpu } from 'lucide-react';

interface RadarAxis {
  id: string;
  name: { ar: string; en: string };
  score: number;
  highlight: string;
  tools: string[];
  keyProject: { ar: string; en: string };
}

const radarAxes: RadarAxis[] = [
  {
    id: 'ai-eng',
    name: { ar: 'هندسة الذكاء الاصطناعي (AI Engineering)', en: 'AI Engineering & Systems' },
    score: 98,
    highlight: 'Clean Architecture, Dual Python & Rust Microkernels, Production AI',
    tools: ['Python', 'Rust', 'Docker', 'FastAPI', 'Microkernel Architecture', 'Model Deployment'],
    keyProject: {
      ar: 'Symphony AIDE بيئة تطوير ذكية بكيرنل مزدوج ووكيل PPO',
      en: 'Symphony AIDE Dual Microkernel & PPO Reinforcement Agent',
    },
  },
  {
    id: 'cv',
    name: { ar: 'الرؤية الحاسوبية (Computer Vision)', en: 'Computer Vision (CV)' },
    score: 96,
    highlight: '94% Medical Anomaly Detection & 30+ FPS Real-Time Video',
    tools: ['OpenCV', 'MediaPipe', 'YOLO', 'Mask R-CNN', 'Medical Early Fusion', 'Canny/Sobel Filters'],
    keyProject: {
      ar: 'نظام تشخيص الأمراض الرئوية بالدمج المبكر وتتبع مفاصل اليد الحية',
      en: 'Multi-Modal Medical Early Fusion & Real-Time Sign Language 30+ FPS',
    },
  },
  {
    id: 'genai',
    name: { ar: 'الذكاء الاصطناعي التوليدي و RAG', en: 'Generative AI & LLMs' },
    score: 94,
    highlight: 'Milvus/Zilliz Vector DBs, LangChain4j, LangGraph Dynamic Routing',
    tools: ['LLMs', 'LangGraph', 'LangChain4j', 'Milvus', 'Zilliz', 'ChromaDB', 'FAISS'],
    keyProject: {
      ar: '3 مشاريع RAG إنتاجية بـ LangChain4j ونظام Dynamic LLM Routing',
      en: '3 Production RAG Projects with LangChain4j & Dynamic LLM Router',
    },
  },
  {
    id: 'dl',
    name: { ar: 'التعلم العميق (Deep Learning)', en: 'Deep Learning (DL)' },
    score: 94,
    highlight: 'Advanced CNNs, BiLSTM, Loss Optimization & Latent Embeddings',
    tools: ['PyTorch', 'TensorFlow', 'Keras', 'ResNet', 'BiLSTM', 'Transfer Learning'],
    keyProject: {
      ar: 'تصميم شبكات عصبية تلافيفية متعددة المدخلات ونماذج تسلسل زمني',
      en: 'Multi-Modal Convolutional Networks & Sequence Modeling',
    },
  },
  {
    id: 'systems',
    name: { ar: 'الأنظمة عالية الأداء (Rust & C++)', en: 'High-Perf Systems (Rust/C++)' },
    score: 88,
    highlight: 'Memory Safety, Zero-Cost Concurrency & Cloud Microservices',
    tools: ['Rust', 'C++', 'Java', 'Zero-GC Concurrency', 'Async I/O'],
    keyProject: {
      ar: 'Sanad و Symphony AIDE كيرنل عالي السرعة بلغة Rust',
      en: 'Sanad & Symphony AIDE High-Speed Rust Microservices',
    },
  },
  {
    id: 'mlops',
    name: { ar: 'نشر النماذج و MLOps (Deployment)', en: 'MLOps & Deployment' },
    score: 90,
    highlight: 'Containerized Inference, RESTful Endpoints & Sub-15ms Latency',
    tools: ['Docker', 'FastAPI', 'Git/GitHub', 'CI/CD Basics', 'Streamlit', 'Linux'],
    keyProject: {
      ar: 'حزم ونشر التطبيقات التفاعلية واستدعاء النماذج بأقل Latency',
      en: 'Containerized Model Serving & Sub-15ms Latency Endpoints',
    },
  },
];

export const SkillRadarSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeAxis, setActiveAxis] = useState<RadarAxis>(radarAxes[0]);

  const size = 320;
  const center = size / 2;
  const radius = center - 40;
  const totalAxes = radarAxes.length;

  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const polygonPoints = radarAxes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.score);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <section id="tech-radar" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <Radar className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'مصفوفة الكفاءة ومطياف التخصص' : 'Engineering Competency Radar'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {language === 'ar'
            ? 'توزيع التخصص: هندسة الذكاء الاصطناعي والرؤية الحاسوبية'
            : 'Core Competency: AI Engineering & Vision Benchmark'}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'تمثيل بياني تفاعلي يبرز القوة المتفوقة في هندسة أنظمة الذكاء الاصطناعي (98%) مدعومة بالرؤية الحاسوبية والذكاء التوليدي.'
            : 'Interactive radar representation showcasing AI Engineering excellence (98%) backed by Computer Vision and Generative AI.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-xl">
        
        {/* SVG Interactive Radar Chart */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center select-none">
          <div className="relative">
            <svg width={size} height={size} className="overflow-visible">
              {[25, 50, 75, 100].map((level) => {
                const ringPoints = radarAxes
                  .map((_, i) => {
                    const { x, y } = getCoordinates(i, level);
                    return `${x},${y}`;
                  })
                  .join(' ');
                return (
                  <polygon
                    key={level}
                    points={ringPoints}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-800"
                  />
                );
              })}

              {radarAxes.map((_, i) => {
                const { x, y } = getCoordinates(i, 100);
                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-800"
                  />
                );
              })}

              <polygon
                points={polygonPoints}
                className="fill-blue-500/25 stroke-blue-500 stroke-2 transition-all duration-300"
              />

              {radarAxes.map((axis, i) => {
                const { x, y } = getCoordinates(i, axis.score);
                const isSelected = activeAxis.id === axis.id;
                const labelPos = getCoordinates(i, 115);

                return (
                  <g key={axis.id} className="cursor-pointer" onClick={() => setActiveAxis(axis)}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 7 : 5}
                      className={`${
                        isSelected
                          ? 'fill-blue-500 stroke-white stroke-2'
                          : 'fill-slate-600 hover:fill-blue-400'
                      } transition-all`}
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-2xs font-bold font-mono transition-colors ${
                        isSelected
                          ? 'fill-blue-400 font-extrabold'
                          : 'fill-slate-400'
                      }`}
                    >
                      {axis.score}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="text-center mt-4 text-xs text-slate-400">
            {language === 'ar'
              ? '💡 اضغط على أي محور في الرسم لاستعراض التفاصيل والمشاريع المرتبطة'
              : '💡 Click any axis or point to inspect benchmark details & technologies'}
          </div>
        </div>

        {/* Selected Axis Detail Card */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-2xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                {language === 'ar' ? 'المجال الهندسي المحدد' : 'Selected Domain'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100">
                {activeAxis.name[language]}
              </h3>
            </div>
            <div className="text-end">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-400">
                {activeAxis.score}%
              </span>
              <div className="text-2xs text-slate-400">
                {language === 'ar' ? 'مؤشر الكفاءة' : 'Competency Index'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-1">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>{language === 'ar' ? 'المعيار القياسي المنجز' : 'Achieved Benchmark'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {activeAxis.highlight}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 block">
              {language === 'ar' ? 'المشروع التطبيقي الأبرز على GitHub:' : 'Flagship Applied Project on GitHub:'}
            </span>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium flex items-center justify-between">
              <span>{activeAxis.keyProject[language]}</span>
              <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 rtl:rotate-180" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 block">
              {language === 'ar' ? 'الأدوات والتقنيات الأساسية:' : 'Core Tools & Frameworks:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {activeAxis.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
