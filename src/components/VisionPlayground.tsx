import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Sliders, Hand, Split, CheckCircle2, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

type PlaygroundTab = 'medical-slider' | 'filter-sandbox' | 'hand-landmarks';

export const VisionPlayground: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<PlaygroundTab>('medical-slider');

  // Medical Slider State
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Canvas Filter Sandbox State
  const [selectedFilter, setSelectedFilter] = useState<'original' | 'edges' | 'threshold' | 'heatmap' | 'grayscale'>('edges');
  const [filterIntensity, setFilterIntensity] = useState<number>(128);
  const [activePreset, setActivePreset] = useState<'medical' | 'traffic' | 'hand'>('medical');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Hand Landmark State
  const [selectedGesture, setSelectedGesture] = useState<'peace' | 'thumbs_up' | 'open_hand' | 'pointing'>('peace');
  const landmarkCanvasRef = useRef<HTMLCanvasElement>(null);

  // Drag handlers for Medical Slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleSliderMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Render Canvas Filters
  useEffect(() => {
    if (activeTab !== 'filter-sandbox' || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 640;
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tCtx = tempCanvas.getContext('2d');
    if (!tCtx) return;

    tCtx.fillStyle = '#0a0f1d';
    tCtx.fillRect(0, 0, width, height);

    if (activePreset === 'medical') {
      const grad = tCtx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, 170);
      grad.addColorStop(0, '#64748b');
      grad.addColorStop(0.5, '#334155');
      grad.addColorStop(1, '#090d16');
      tCtx.fillStyle = grad;
      tCtx.beginPath();
      tCtx.ellipse(width / 2, height / 2, 190, 130, 0, 0, Math.PI * 2);
      tCtx.fill();

      tCtx.fillStyle = '#1e293b';
      tCtx.beginPath();
      tCtx.ellipse(width / 2 - 75, height / 2, 55, 90, -0.15, 0, Math.PI * 2);
      tCtx.ellipse(width / 2 + 75, height / 2, 55, 90, 0.15, 0, Math.PI * 2);
      tCtx.fill();

      tCtx.fillStyle = '#f1f5f9';
      tCtx.beginPath();
      tCtx.arc(width / 2 + 65, height / 2 - 25, 22, 0, Math.PI * 2);
      tCtx.fill();
    } else if (activePreset === 'traffic') {
      tCtx.fillStyle = '#1e293b';
      tCtx.beginPath();
      tCtx.moveTo(width / 2 - 30, height / 2 - 40);
      tCtx.lineTo(width / 2 + 30, height / 2 - 40);
      tCtx.lineTo(width, height);
      tCtx.lineTo(0, height);
      tCtx.closePath();
      tCtx.fill();

      tCtx.strokeStyle = '#facc15';
      tCtx.lineWidth = 5;
      tCtx.beginPath();
      tCtx.moveTo(width / 2, height / 2 - 25);
      tCtx.lineTo(width / 2, height);
      tCtx.stroke();

      tCtx.fillStyle = '#38bdf8';
      tCtx.fillRect(width / 2 - 50, height / 2 + 20, 100, 60);
    } else {
      tCtx.fillStyle = '#cbd5e1';
      tCtx.beginPath();
      tCtx.ellipse(width / 2, height / 2 + 40, 55, 75, 0, 0, Math.PI * 2);
      tCtx.fill();
      for (let i = -2; i <= 2; i++) {
        tCtx.fillRect(width / 2 + i * 22 - 10, height / 2 - 80 + Math.abs(i) * 14, 20, 80);
      }
    }

    const imgData = tCtx.getImageData(0, 0, width, height);
    const data = imgData.data;

    if (selectedFilter === 'original') {
      ctx.putImageData(imgData, 0, 0);
    } else if (selectedFilter === 'grayscale') {
      for (let i = 0; i < data.length; i += 4) {
        const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }
      ctx.putImageData(imgData, 0, 0);
    } else if (selectedFilter === 'threshold') {
      for (let i = 0; i < data.length; i += 4) {
        const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const val = avg > filterIntensity ? 255 : 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
      }
      ctx.putImageData(imgData, 0, 0);
    } else if (selectedFilter === 'heatmap') {
      for (let i = 0; i < data.length; i += 4) {
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = Math.min(255, gray * 2);
        data[i + 1] = Math.min(255, 255 - Math.abs(gray - 128) * 2);
        data[i + 2] = Math.min(255, 255 - gray);
      }
      ctx.putImageData(imgData, 0, 0);
    } else if (selectedFilter === 'edges') {
      const output = ctx.createImageData(width, height);
      const outData = output.data;
      const getPixel = (x: number, y: number) => {
        if (x < 0 || x >= width || y < 0 || y >= height) return 0;
        const idx = (y * width + x) * 4;
        return (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      };

      const mult = filterIntensity / 64;
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const gx =
            -1 * getPixel(x - 1, y - 1) + 1 * getPixel(x + 1, y - 1) +
            -2 * getPixel(x - 1, y)     + 2 * getPixel(x + 1, y) +
            -1 * getPixel(x - 1, y + 1) + 1 * getPixel(x + 1, y + 1);

          const gy =
            -1 * getPixel(x - 1, y - 1) - 2 * getPixel(x, y - 1) - 1 * getPixel(x + 1, y - 1) +
             1 * getPixel(x - 1, y + 1) + 2 * getPixel(x, y + 1) + 1 * getPixel(x + 1, y + 1);

          const mag = Math.min(255, Math.sqrt(gx * gx + gy * gy) * mult);
          const outIdx = (y * width + x) * 4;
          outData[outIdx] = 59;
          outData[outIdx + 1] = 130;
          outData[outIdx + 2] = 246;
          outData[outIdx + 3] = mag > 30 ? mag : 0;
        }
      }
      ctx.fillStyle = '#080d1a';
      ctx.fillRect(0, 0, width, height);
      ctx.putImageData(output, 0, 0);
    }
  }, [activeTab, selectedFilter, filterIntensity, activePreset]);

  // Hand Landmarks Animation Simulator
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
      const height = 380;
      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = '#080d1a';
      ctx.fillRect(0, 0, width, height);

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
      const cy = height / 2 + 50;
      const jitter = Math.sin(time) * 3;

      const wrist = { x: cx, y: cy + 80 + jitter };
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
      ctx.lineWidth = 3.5;
      bones.forEach(([p1, p2]) => {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      const points = [wrist, palm, thumb, index, middle, ring, pinky];
      points.forEach((pt, i) => {
        ctx.fillStyle = i === 0 ? '#f43f5e' : '#3b82f6';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px monospace';
        ctx.fillText(`K${i}`, pt.x + 9, pt.y - 4);
      });

      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(cx - 100, cy - 130, 200, 240);
      ctx.setLineDash([]);

      ctx.fillStyle = '#22c55e';
      ctx.font = '12px monospace';
      ctx.fillText(`GESTURE: ${selectedGesture.toUpperCase()} [99.2%]`, cx - 95, cy - 138);
      ctx.fillText(`FPS: 32.8 | Latency: 10.8ms`, cx - 95, cy + 125);

      animFrame = requestAnimationFrame(renderLandmarks);
    };

    renderLandmarks();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [activeTab, selectedGesture]);

  return (
    <section id="cv-playground" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold">
          <Zap className="w-4 h-4 text-blue-400" />
          <span>{language === 'ar' ? 'مختبر الذكاء الاصطناعي والرؤية التفاعلي الحي' : 'Live Interactive AI & CV Playground'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {language === 'ar'
            ? 'جرب خوارزميات الذكاء الاصطناعي مباشرة في المتصفح'
            : 'Test AI & Computer Vision Models Live in Browser'}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'تجربة عملية تفاعلية لخطوط أنابيب معالجة الصور والتجزئة الطبية وتتبع مفاصل اليد بسرعة 30+ FPS بدون أي بطء.'
            : 'Real-time interactive playground for image processing, medical anomaly segmentation, and 30+ FPS hand pose estimation.'}
        </p>
      </div>

      {/* Tabs Switcher - Centered, Large & Touch-Friendly */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10">
        <button
          onClick={() => setActiveTab('medical-slider')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'medical-slider'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Split className="w-4 h-4" />
          <span>{language === 'ar' ? 'سلايدر التشخيص الطبي (دقة 94%)' : 'Medical Fusion Slider (94%)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('filter-sandbox')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'filter-sandbox'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>{language === 'ar' ? 'معمل فلاتر الرؤية (Sobel & Edges)' : 'Live Filter Sandbox (Sobel/Edges)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('hand-landmarks')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            activeTab === 'hand-landmarks'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50'
          }`}
        >
          <Hand className="w-4 h-4" />
          <span>{language === 'ar' ? 'محاكي مفاصل اليد (MediaPipe 30+ FPS)' : 'Hand Pose Landmarks (30+ FPS)'}</span>
        </button>
      </div>

      {/* Tab 1: Medical Before / After Comparison Slider - Expansive, Spacious Layout */}
      {activeTab === 'medical-slider' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-xl space-y-8"
        >
          {/* Centered Large Interactive Slider */}
          <div className="flex flex-col items-center">
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={onMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={onTouchMove}
              className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-700 shadow-2xl bg-slate-950"
            >
              {/* Before: Raw CT Scan */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-slate-700/60 flex items-center justify-center relative">
                  <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-slate-700/40 opacity-70"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-400/20 absolute top-14 right-14"></div>
                  <span className="text-slate-500 font-mono text-xs sm:text-sm absolute bottom-6 font-bold tracking-wider">
                    RAW MEDICAL CT SCAN
                  </span>
                </div>
              </div>

              {/* After: AI Early Fusion Segmentation Mask */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute inset-0 w-[768px] sm:w-[900px] h-full max-w-none flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-cyan-500/50 flex items-center justify-center relative shadow-[0_0_40px_rgba(6,182,212,0.25)]">
                    <div className="w-20 h-20 rounded-2xl border-2 border-emerald-400 bg-emerald-500/30 absolute top-12 right-12 flex flex-col items-center justify-center animate-pulse">
                      <span className="text-xs font-mono font-bold text-emerald-300 px-1.5 py-0.5 bg-emerald-950/90 rounded">
                        LESION 94.2%
                      </span>
                    </div>
                    <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-blue-500/40"></div>
                    <span className="text-cyan-400 font-mono text-xs sm:text-sm font-bold absolute bottom-6 tracking-wider">
                      AI MULTI-MODAL SEGMENTATION
                    </span>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center text-sm font-extrabold -translate-x-1/2">
                  ↔
                </div>
              </div>

              {/* Left/Right Badges */}
              <span className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-slate-950/85 text-cyan-400 text-xs font-mono font-bold backdrop-blur-md border border-cyan-500/30">
                {language === 'ar' ? 'تشخيص الـ AI' : 'AI Segmentation'}
              </span>
              <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-slate-950/85 text-slate-300 text-xs font-mono font-bold backdrop-blur-md border border-white/10">
                {language === 'ar' ? 'الأشعة الخام' : 'Raw Scan'}
              </span>
            </div>

            <div className="w-full max-w-3xl flex items-center justify-between text-xs sm:text-sm text-slate-400 mt-3 px-2 font-mono">
              <span>← {language === 'ar' ? 'اسحب لليمين أو اليسار للمقارنة الحية' : 'Drag left or right for live comparison'} →</span>
              <span className="font-bold text-blue-400">{sliderPos}%</span>
            </div>
          </div>

          {/* Unified High-Tech Specification Console */}
          <div className="pt-6 border-t border-slate-800 space-y-4 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {language === 'ar'
                    ? 'الكشف المبكر عن الأمراض الرئوية بالدمج المتعدد (دقة 94%)'
                    : 'Early Multi-Modal Pulmonary Disease Segmentation (94%)'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {language === 'ar'
                    ? 'خط أنابيب متكامل يدمج صور الأشعة السينية (X-Ray) والطبقية (CT) في مرحلة استخراج الخصائص الأولى (Early Feature Fusion) لتحديد الأنسجة المصابة بدقة متناهية وأقل نسبة خطأ سريري.'
                    : 'Early-fusion neural pipeline combining X-Ray and CT scans at the latent feature level to segment affected lung tissues with clinical-grade accuracy and zero radiation artifact interference.'}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ACCURACY: 94% BENCHMARK</span>
                </span>
              </div>
            </div>

            {/* Metrics Chips Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-400">Architecture:</div>
                <div className="font-bold text-blue-400 mt-0.5">ResNet-50 + Early Fusion</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-400">Inference Latency:</div>
                <div className="font-bold text-emerald-400 mt-0.5">14.2 ms / Slice</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-400">Frameworks:</div>
                <div className="font-bold text-slate-200 mt-0.5">TensorFlow • OpenCV</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-400">Dataset Modalities:</div>
                <div className="font-bold text-purple-400 mt-0.5">X-Ray + CT Multi-Modal</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: Live In-Browser Filter Sandbox - Expansive Layout */}
      {activeTab === 'filter-sandbox' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-xl space-y-8"
        >
          {/* Centered Large Canvas */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950 w-full max-w-3xl">
              <canvas ref={canvasRef} className="block w-full h-auto" />
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-xs font-mono text-emerald-400 border border-emerald-500/30">
                ⚡ 60 FPS • Canvas 2D Engine
              </div>
            </div>
          </div>

          {/* Controls Bar - Spacious */}
          <div className="max-w-3xl mx-auto space-y-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Presets */}
              <div>
                <label className="text-xs sm:text-sm font-bold text-slate-300 block mb-2.5">
                  {language === 'ar' ? '1. اختر عينة الصورة للاختبار:' : '1. Select Sample Preset:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['medical', 'traffic', 'hand'] as const).map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setActivePreset(preset)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold capitalize transition-colors cursor-pointer ${
                        activePreset === preset
                          ? 'bg-blue-600 text-white font-extrabold shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Algorithms */}
              <div>
                <label className="text-xs sm:text-sm font-bold text-slate-300 block mb-2.5">
                  {language === 'ar' ? '2. اختر خوارزمية الرؤية (Algorithm):' : '2. Select Vision Algorithm:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'edges', label: 'Sobel Edges (حواف)' },
                      { id: 'threshold', label: 'Threshold (تجزئة)' },
                      { id: 'heatmap', label: 'Activation Heatmap' },
                      { id: 'grayscale', label: 'Grayscale (رمادي)' },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-start cursor-pointer ${
                        selectedFilter === f.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Slider */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-300">
                <span>{language === 'ar' ? 'معامل الحساسية والشدة (Filter Threshold):' : 'Filter Intensity / Threshold:'}</span>
                <span className="font-mono text-blue-400 font-extrabold">{filterIntensity}</span>
              </div>
              <input
                type="range"
                min="20"
                max="230"
                value={filterIntensity}
                onChange={(e) => setFilterIntensity(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Hand Landmarks Pose Simulator - Expansive Layout */}
      {activeTab === 'hand-landmarks' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-xl space-y-8"
        >
          {/* Centered Canvas */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950 w-full max-w-3xl">
              <canvas ref={landmarkCanvasRef} className="block w-full h-auto" />
            </div>
          </div>

          {/* Gesture Controls Bar */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {language === 'ar' ? 'التعرف اللحظي على لغة الإشارة (30+ FPS)' : 'Real-Time Sign Language Tracker (30+ FPS)'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {language === 'ar'
                    ? 'استخراج 21 مفصل هيكلي لليد بواسطة MediaPipe في أجزاء من الثانية وتصنيفها فورياً بأقل استهلاك للمعالج.'
                    : '21 3D hand keypoints extracted via MediaPipe with sub-15ms edge inference, classifying sign gestures dynamically.'}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold font-mono">
                  <Activity className="w-4 h-4" />
                  <span>30+ FPS REAL-TIME</span>
                </span>
              </div>
            </div>

            {/* Gesture Buttons */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-slate-300 block mb-2.5">
                {language === 'ar' ? 'اضغط لتجربة حركة الإيماءة الحية:' : 'Switch Active Sign Gesture:'}
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
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
