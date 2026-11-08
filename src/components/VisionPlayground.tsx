import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Hand, CheckCircle2, Zap, Cpu, Sparkles, Network, ArrowRight, ExternalLink, RefreshCw, BarChart2, ShieldCheck, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type PlaygroundTab = 'llm-router' | 'symphony-orchestrator' | 'hand-landmarks';

export const VisionPlayground: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<PlaygroundTab>('llm-router');

  // ==========================================
  // Tab 1 State: Dynamic LLM Routing Simulator
  // ==========================================
  interface QueryPreset {
    id: string;
    textAr: string;
    textEn: string;
    intentAr: string;
    intentEn: string;
    complexity: 'Low' | 'Medium' | 'High';
    routedTier: 'Fast Tier (Llama 3 8B)' | 'Deep Reasoning (Claude 3.5 Sonnet)' | 'Specialized Agent (BiLSTM / Medical)';
    routedTierAr: string;
    tokenCost: string;
    costSaved: string;
    latency: string;
    accuracy: string;
  }

  const queryPresets: QueryPreset[] = [
    {
      id: 'simple-summary',
      textAr: 'لخص لي المقال ده في 3 نقاط سريعة وركز على النتائج الأساسية فقط.',
      textEn: 'Summarize this research paper in 3 key takeaways focusing only on experimental metrics.',
      intentAr: 'تلخيص مباشر وسريع (Simple Summarization)',
      intentEn: 'Direct Summarization',
      complexity: 'Low',
      routedTier: 'Fast Tier (Llama 3 8B)',
      routedTierAr: 'الشريحة السريعة الاقتصادية (Llama 3 8B)',
      tokenCost: '$0.00012',
      costSaved: '78%',
      latency: '115 ms',
      accuracy: '98.8%',
    },
    {
      id: 'deep-architecture',
      textAr: 'حلل معمارية كيرنل مزدوجة بلغة بايثون ورست وكيفية إدارة الذاكرة بدون تضارب في خيوط المعالجة.',
      textEn: 'Architect a dual-ensemble microkernel between Rust & Python with zero-cost memory safety across worker threads.',
      intentAr: 'تفكير برمجي عميق وهندسة نظم (High-Reasoning Systems)',
      intentEn: 'Complex Code Reasoning',
      complexity: 'High',
      routedTier: 'Deep Reasoning (Claude 3.5 Sonnet)',
      routedTierAr: 'شريحة التفكير العميق (Claude 3.5 Sonnet)',
      tokenCost: '$0.00340',
      costSaved: '42%',
      latency: '520 ms',
      accuracy: '99.4%',
    },
    {
      id: 'medical-extraction',
      textAr: 'استخرج أسماء الأدوية وموانع الاستعمال والجرعات من تقرير سريري طبي لمريض سكري.',
      textEn: 'Extract clinical drug entities, contraindications, and dosage schedules from an oncology EHR report.',
      intentAr: 'استخراج كيانات طبية متخصصة (Domain NER Extraction)',
      intentEn: 'Domain Extraction',
      complexity: 'Medium',
      routedTier: 'Specialized Agent (BiLSTM / Medical)',
      routedTierAr: 'وكيل طبي متخصص ومدرب محلياً (Medical Vector RAG)',
      tokenCost: '$0.00085',
      costSaved: '65%',
      latency: '240 ms',
      accuracy: '97.9%',
    },
  ];

  const [selectedQuery, setSelectedQuery] = useState<QueryPreset>(queryPresets[0]);
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const [routingStep, setRoutingStep] = useState<number>(3); // 1: Evaluating, 2: Dispatching, 3: Completed

  const triggerRouting = (preset: QueryPreset) => {
    setSelectedQuery(preset);
    setIsRouting(true);
    setRoutingStep(1);

    setTimeout(() => {
      setRoutingStep(2);
      setTimeout(() => {
        setRoutingStep(3);
        setIsRouting(false);
      }, 350);
    }, 350);
  };

  // ==========================================
  // Tab 2 State: Symphony AIDE Microkernel & PPO
  // ==========================================
  const [activeTaskType, setActiveTaskType] = useState<'neural' | 'rust-worker' | 'ppo-optimize'>('neural');
  const [orchestratorMetrics, setOrchestratorMetrics] = useState({
    tasksDispatched: 1420,
    rustMemorySafeRate: 100,
    latencyMs: 0.82,
    ppoReward: 0.942,
  });

  const dispatchTask = (type: 'neural' | 'rust-worker' | 'ppo-optimize') => {
    setActiveTaskType(type);
    setOrchestratorMetrics((prev) => ({
      tasksDispatched: prev.tasksDispatched + Math.floor(Math.random() * 8) + 1,
      rustMemorySafeRate: 100,
      latencyMs: +(0.65 + Math.random() * 0.35).toFixed(2),
      ppoReward: +(0.93 + Math.random() * 0.04).toFixed(3),
    }));
  };

  // ==========================================
  // Tab 3 State: Hand Landmarks Animation Simulator
  // ==========================================
  const [selectedGesture, setSelectedGesture] = useState<'peace' | 'thumbs_up' | 'open_hand' | 'pointing'>('peace');
  const landmarkCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (activeTab !== 'hand-landmarks' || !landmarkCanvasRef.current) return;
    const canvas = landmarkCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const renderLandmarks = () => {
      time += 0.04;
      const width = 640;
      const height = 360;
      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = '#080d1a';
      ctx.fillRect(0, 0, width, height);

      // Grid background
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 32) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      const cx = width / 2;
      const cy = height / 2 + 45;
      const jitter = Math.sin(time) * 3;

      const wrist = { x: cx, y: cy + 75 + jitter };
      const palm = { x: cx, y: cy + jitter };

      let thumb = { x: cx - 65, y: cy + 12 + jitter };
      let index = { x: cx - 30, y: cy - 85 + jitter };
      let middle = { x: cx, y: cy - 98 + jitter };
      let ring = { x: cx + 30, y: cy - 85 + jitter };
      let pinky = { x: cx + 60, y: cy - 60 + jitter };

      if (selectedGesture === 'peace') {
        index = { x: cx - 30, y: cy - 105 + jitter };
        middle = { x: cx + 18, y: cy - 105 + jitter };
        ring = { x: cx + 24, y: cy - 12 + jitter };
        pinky = { x: cx + 42, y: cy - 6 + jitter };
      } else if (selectedGesture === 'thumbs_up') {
        thumb = { x: cx - 12, y: cy - 90 + jitter };
        index = { x: cx + 18, y: cy - 12 + jitter };
        middle = { x: cx + 24, y: cy + 6 + jitter };
        ring = { x: cx + 30, y: cy + 24 + jitter };
        pinky = { x: cx + 36, y: cy + 42 + jitter };
      } else if (selectedGesture === 'pointing') {
        index = { x: cx, y: cy - 115 + jitter };
        middle = { x: cx + 18, y: cy - 12 + jitter };
        ring = { x: cx + 24, y: cy + 6 + jitter };
        pinky = { x: cx + 30, y: cy + 24 + jitter };
      }

      const bones = [
        [wrist, palm],
        [palm, thumb],
        [palm, index],
        [palm, middle],
        [palm, ring],
        [palm, pinky],
      ];

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      bones.forEach(([from, to]) => {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      const joints = [wrist, palm, thumb, index, middle, ring, pinky];
      joints.forEach((pt, i) => {
        ctx.fillStyle = i === 0 ? '#f43f5e' : '#10b981';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // HUD Overlay
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px monospace';
      ctx.fillText(`MediaPipe: 21 Landmarks tracked`, 20, 30);
      ctx.fillText(`Inference: 11.4ms (32.8 FPS)`, 20, 48);

      animFrame = requestAnimationFrame(renderLandmarks);
    };

    renderLandmarks();
    return () => cancelAnimationFrame(animFrame);
  }, [activeTab, selectedGesture]);

  return (
    <section id="cv-playground" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <Zap className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'مختبر أنظمة الذكاء الاصطناعي التفاعلي الحي' : 'Live Interactive AI Systems Playground'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar'
            ? 'جرب مشاريع وهندسة الذكاء الاصطناعي مباشرة في المتصفح'
            : 'Test AI Systems & Engineering Models Live in Browser'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'محاكاة حية وتفاعلية لمشاريعي الإنتاجية: توجيه استفسارات الـ LLM بـ LangGraph، جدولة معمارية Symphony AIDE بنواة Rust، وتتبع مفاصل اليد بـ MediaPipe.'
            : 'Interactive live demos of production AI projects: Dynamic LLM Routing with LangGraph, Symphony AIDE microkernel orchestration, and 30+ FPS hand landmark tracking.'}
        </p>
      </div>

      {/* Tabs Switcher - Centered, Large & Touch-Friendly */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10">
        <button
          onClick={() => setActiveTab('llm-router')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'llm-router'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/40'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Network className="w-4 h-4 text-emerald-400" />
          <span>{language === 'ar' ? 'توجيه نماذج الـ LLM الذكي (توفير 70% تكلفة)' : 'Dynamic LLM Router (70% Cost Saved)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('symphony-orchestrator')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'symphony-orchestrator'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/40'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Cpu className="w-4 h-4 text-purple-400" />
          <span>{language === 'ar' ? 'Symphony AIDE (نواة Rust + وكيل PPO)' : 'Symphony AIDE (Rust + PPO RL)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('hand-landmarks')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'hand-landmarks'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/40'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Hand className="w-4 h-4 text-cyan-400" />
          <span>{language === 'ar' ? 'محاكي مفاصل اليد (MediaPipe 30+ FPS)' : 'Hand Pose Landmarks (30+ FPS)'}</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* Tab 1: Dynamic LLM Routing Simulator (Project 1) */}
      {/* ========================================================= */}
      {activeTab === 'llm-router' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Header & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                  LangGraph • Streamlit • Python
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                  70% Cost Reduction
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {language === 'ar'
                  ? 'محاكي توجيه النماذج الذكي (Dynamic LLM Routing System)'
                  : 'Dynamic LLM Routing Simulator'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                {language === 'ar'
                  ? 'اختر استفساراً أدناه لمشاهدة كيف يحلل محرك LangGraph صعوبة المهمة ونوايا المستخدم، ويوجهها للشريحة الأنسب لخفض التكلفة بنسبة 70%.'
                  : 'Select a query below to simulate how LangGraph evaluates prompt complexity and dynamically dispatches it to the optimal model tier.'}
              </p>
            </div>

            <a
              href="https://github.com/NourElanany/Dynamic-LLM-Routing-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-blue-600 text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{language === 'ar' ? 'مستودع المشروع على GitHub' : 'View on GitHub'}</span>
            </a>
          </div>

          {/* Preset Prompts Selection */}
          <div className="space-y-3">
            <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">
              {language === 'ar' ? '1. اختر نوع الاستفسار للاختبار الحي:' : '1. Select a Sample Query to Test Live:'}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {queryPresets.map((preset) => {
                const isSelected = selectedQuery.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => triggerRouting(preset)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-slate-400 dark:hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          preset.complexity === 'Low'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : preset.complexity === 'High'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          Complexity: {preset.complexity}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium line-clamp-3">
                        "{language === 'ar' ? preset.textAr : preset.textEn}"
                      </p>
                    </div>
                    <span className="text-[11px] text-blue-500 dark:text-blue-400 font-bold mt-3 block">
                      {language === 'ar' ? preset.intentAr : preset.intentEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Routing Pipeline Canvas Visualizer */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-slate-100 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400">
                ⚡ LangGraph Pipeline Execution State
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active Router Node
              </span>
            </div>

            {/* Pipeline Step Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Node 1: Query Ingestion */}
              <div className={`p-4 rounded-2xl border transition-all ${
                routingStep >= 1 ? 'border-blue-500/60 bg-blue-950/30' : 'border-slate-800 bg-slate-900/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-blue-400 font-bold">Node 1: Evaluator</span>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {language === 'ar' ? 'تحليل النية والصعوبة' : 'Intent & Complexity Scorer'}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-2">
                  Tokens: ~38 | Score: {selectedQuery.complexity === 'High' ? '0.89 (Deep)' : selectedQuery.complexity === 'Low' ? '0.14 (Fast)' : '0.48 (Special)'}
                </div>
              </div>

              {/* Node 2: Dynamic Routing Engine */}
              <div className={`p-4 rounded-2xl border transition-all ${
                routingStep >= 2 ? 'border-purple-500/60 bg-purple-950/30' : 'border-slate-800 bg-slate-900/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-purple-400 font-bold">Node 2: Dispatcher</span>
                  <Network className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {language === 'ar' ? 'محرك التوجيه اللحظي' : 'Adaptive Model Dispatch'}
                </div>
                <div className="text-[11px] text-purple-300 font-mono mt-2">
                  Target: {selectedQuery.routedTier}
                </div>
              </div>

              {/* Node 3: Synthesis & Metrics */}
              <div className={`p-4 rounded-2xl border transition-all ${
                routingStep >= 3 ? 'border-emerald-500/60 bg-emerald-950/30' : 'border-slate-800 bg-slate-900/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold">Node 3: Execution</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {language === 'ar' ? 'الاستجابة وتوفير التكلفة' : 'Inference & Cost Log'}
                </div>
                <div className="text-[11px] text-emerald-300 font-mono mt-2">
                  Latency: {selectedQuery.latency} • Saved: {selectedQuery.costSaved}
                </div>
              </div>
            </div>

            {/* Telemetry Chips Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Estimated Cost:</span>
                <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">{selectedQuery.tokenCost}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Compute Saved:</span>
                <span className="text-sm font-bold font-mono text-blue-400 mt-0.5 block">↓ {selectedQuery.costSaved} Reduction</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Roundtrip Latency:</span>
                <span className="text-sm font-bold font-mono text-amber-400 mt-0.5 block">⚡ {selectedQuery.latency}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Intent Precision:</span>
                <span className="text-sm font-bold font-mono text-purple-400 mt-0.5 block">{selectedQuery.accuracy}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================= */}
      {/* Tab 2: Symphony AIDE Microkernel & PPO Agent (Project 2) */}
      {/* ========================================================= */}
      {activeTab === 'symphony-orchestrator' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Header & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-400 text-xs font-mono font-bold border border-purple-500/30">
                  Rust + Python Ensemble
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                  Reinforcement Learning (PPO)
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {language === 'ar'
                  ? 'Symphony AIDE — معمارية Microkernel ووكيل PPO الذكي'
                  : 'Symphony AIDE — Microkernel & PPO Conductor Simulator'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                {language === 'ar'
                  ? 'منظومة تطوير تجمع بين سرعة وأمان لغة Rust مع مرونة نماذج بايثون، ويديرها وكيل PPO لتنظيم المهام وتفادي اختناق الذاكرة.'
                  : 'Dual-ensemble microkernel uniting Rust memory safety with Python AI flexibility, driven by an autonomous PPO Conductor agent.'}
              </p>
            </div>

            <a
              href="https://github.com/NourElanany/Symphony-AIDE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-blue-600 text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{language === 'ar' ? 'مستودع المشروع على GitHub' : 'View on GitHub'}</span>
            </a>
          </div>

          {/* Interactive Task Dispatching Buttons */}
          <div className="space-y-3">
            <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">
              {language === 'ar' ? '1. أرسل مهمة للنظام لمشاهدة توزيع المهام اللحظي:' : '1. Dispatch Task to Microkernel Plane:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => dispatchTask('neural')}
                className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                  activeTaskType === 'neural'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-blue-500">
                  <Activity className="w-4 h-4" />
                  <span className="font-bold text-xs sm:text-sm">Python AI Plane</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {language === 'ar' ? 'مهمة استدلال عميق ومصفوفات بـ PyTorch' : 'PyTorch neural model inference task'}
                </p>
              </button>

              <button
                onClick={() => dispatchTask('rust-worker')}
                className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                  activeTaskType === 'rust-worker'
                    ? 'border-purple-500 bg-purple-50/50 dark:bg-purple-950/40 shadow-md ring-2 ring-purple-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-xs sm:text-sm">Rust Native Engine</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {language === 'ar' ? 'تنفيذ خيوط متزامنة آمنة للذاكرة بأقل من 1ms' : 'Zero-cost memory-safe worker threads (<1ms)'}
                </p>
              </button>

              <button
                onClick={() => dispatchTask('ppo-optimize')}
                className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                  activeTaskType === 'ppo-optimize'
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                  <Gauge className="w-4 h-4" />
                  <span className="font-bold text-xs sm:text-sm">PPO Conductor Agent</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {language === 'ar' ? 'إعادة موازنة الموارد بالتعلم المعزز' : 'Adaptive RL workload balancing policy'}
                </p>
              </button>
            </div>
          </div>

          {/* Microkernel Plane Visual Architecture */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-slate-100 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400">
                ⚡ Symphony AIDE Microkernel Plane Monitor
              </span>
              <span className="text-xs font-mono text-purple-400">
                Conductor Policy: PPO Actor-Critic
              </span>
            </div>

            {/* Architecture Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-blue-400 font-bold">Plane 1: Python AI Runtime</div>
                <div className="text-sm font-bold text-slate-200">PyTorch & Tensor Orchestration</div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 animate-pulse w-3/4 rounded-full" />
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">Channel: Zero-Copy IPC Shared Mem</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/40 space-y-2">
                <div className="text-xs font-mono text-purple-400 font-bold">Core: PPO RL Conductor</div>
                <div className="text-sm font-bold text-slate-200">Autonomous Task Scheduler</div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 animate-pulse w-5/6 rounded-full" />
                </div>
                <span className="text-[11px] text-purple-300 font-mono block">Reward: +{orchestratorMetrics.ppoReward} Converged</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-bold">Plane 2: Rust Safe Kernel</div>
                <div className="text-sm font-bold text-slate-200">Low-Latency Native Execution</div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 animate-pulse w-full rounded-full" />
                </div>
                <span className="text-[11px] text-emerald-300 font-mono block">Overhead: {orchestratorMetrics.latencyMs} ms / dispatch</span>
              </div>
            </div>

            {/* Live Telemetry Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Tasks Dispatched:</span>
                <span className="text-sm font-bold font-mono text-blue-400 mt-0.5 block">{orchestratorMetrics.tasksDispatched}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Rust Memory Safety:</span>
                <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">100% Zero-Panic</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">Dispatch Latency:</span>
                <span className="text-sm font-bold font-mono text-amber-400 mt-0.5 block">{orchestratorMetrics.latencyMs} ms</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono block">PPO Policy Stability:</span>
                <span className="text-sm font-bold font-mono text-purple-400 mt-0.5 block">99.2% Optimal</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================= */}
      {/* Tab 3: Hand Landmarks Pose Simulator (Project 3) */}
      {/* ========================================================= */}
      {activeTab === 'hand-landmarks' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Header & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                  MediaPipe • OpenCV • Scikit-learn
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                  30+ FPS Real-Time
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {language === 'ar' ? 'التعرف اللحظي على لغة الإشارة وإيماءات اليد (30+ FPS)' : 'Real-Time Sign Language & Hand Landmarks Tracker'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                {language === 'ar'
                  ? 'استخراج 21 مفصل هيكلي لليد في أجزاء من الثانية وتصنيفها فورياً بالفيديو المباشر بأقل استهلاك للمعالج.'
                  : 'Sub-15ms extraction of 21 3D hand keypoints via MediaPipe, classifying sign gestures dynamically in live video.'}
              </p>
            </div>

            <a
              href="https://github.com/NourElanany/Training-projects-DeepLearning_ComputerVision-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-blue-600 text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{language === 'ar' ? 'مستودع المشروع على GitHub' : 'View on GitHub'}</span>
            </a>
          </div>

          {/* Centered Canvas */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950 w-full max-w-3xl">
              <canvas ref={landmarkCanvasRef} className="block w-full h-auto" />
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-xs font-mono text-emerald-400 border border-emerald-500/30">
                ⚡ 30+ FPS • MediaPipe 21 Joints
              </div>
            </div>
          </div>

          {/* Gesture Controls Bar */}
          <div className="max-w-3xl mx-auto space-y-4">
            <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">
              {language === 'ar' ? 'اضغط لتجربة حركة الإيماءة الحية وتصنيفها:' : 'Switch Active Sign Gesture:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(
                [
                  { id: 'peace', label: 'علامة النصر (✌️ Peace)' },
                  { id: 'thumbs_up', label: 'إعجاب (👍 Thumbs Up)' },
                  { id: 'pointing', label: 'إشارة (👉 Pointing)' },
                  { id: 'open_hand', label: 'كف مفتوح (✋ Open Hand)' },
                ] as const
              ).map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGesture(g.id)}
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                    selectedGesture === g.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
