import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsList } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';
import { Award, ShieldCheck, Sparkles, Eye, Maximize2, X, CheckCircle2, Scan, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [selectedFullCert, setSelectedFullCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFullCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'الشهادات المعتمدة من NVIDIA و NTI' : 'Certified Credentials & Training'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'الشهادات والتراخيص المهنية المعتمدة' : 'Verified Professional Certifications'}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'ar'
            ? 'قف بالماوس على أي بطاقة لمعاينة الوثيقة الرسمية فورياً، أو اضغط عليها مباشرة لفتح الشهادة بالحجم الكامل.'
            : 'Hover over any card to reveal its official document preview, or click directly to view full resolution.'}
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {certificationsList.map((cert) => {
          const isHovered = hoveredCertId === cert.id;
          const isNti = cert.id === 'nti-cv-cert';
          const isGenAi = cert.id === 'genai-achievement';
          const isNvidia = cert.issuer.includes('NVIDIA');
          const isUdemy = cert.issuer.includes('Udemy');

          // Tailored dark theme gradients ranging between deep cyan/navy and obsidian
          const cardBgClass = isNti
            ? (isHovered
                ? 'bg-blue-50/90 dark:bg-gradient-to-br dark:from-[#122852] dark:via-[#0c1c3c] dark:to-[#071126] border-blue-500 shadow-xl ring-2 ring-blue-500/30'
                : 'bg-white dark:bg-gradient-to-br dark:from-[#0c1e40] dark:via-[#08152e] dark:to-[#050d1e] border-blue-500/40 hover:border-blue-400')
            : isGenAi
            ? (isHovered
                ? 'bg-cyan-50/90 dark:bg-gradient-to-br dark:from-[#0e2c45] dark:via-[#091f32] dark:to-[#051320] border-cyan-400 shadow-xl ring-2 ring-cyan-500/30'
                : 'bg-white dark:bg-gradient-to-br dark:from-[#092135] dark:via-[#071726] dark:to-[#040e18] border-cyan-500/40 hover:border-cyan-400')
            : isNvidia
            ? (isHovered
                ? 'bg-emerald-50/90 dark:bg-gradient-to-br dark:from-[#0d2a1f] dark:via-[#091f16] dark:to-[#05110d] border-emerald-400 shadow-xl ring-2 ring-emerald-500/30'
                : 'bg-white dark:bg-gradient-to-br dark:from-[#092017] dark:via-[#061610] dark:to-[#030d09] border-emerald-500/40 hover:border-emerald-400')
            : (isHovered
                ? 'bg-purple-50/90 dark:bg-gradient-to-br dark:from-[#1c1833] dark:via-[#141026] dark:to-[#0a0814] border-purple-400 shadow-xl ring-2 ring-purple-500/30'
                : 'bg-white dark:bg-gradient-to-br dark:from-[#141026] dark:via-[#0e0b1c] dark:to-[#07060f] border-slate-700/60 hover:border-purple-500/40');

          return (
            <div
              key={cert.id}
              onMouseEnter={() => setHoveredCertId(cert.id)}
              onMouseLeave={() => setHoveredCertId(null)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden group shadow-md ${cardBgClass}`}
            >
              {/* Top Accent Stripe */}
              <div className={`absolute top-0 inset-x-0 h-1 transition-all ${
                isNti
                  ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500'
                  : isGenAi
                  ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500'
                  : isNvidia
                  ? 'bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500'
                  : 'bg-gradient-to-r from-slate-400 via-purple-400 to-indigo-400'
              }`} />

              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`p-3 rounded-2xl transition-colors ${
                    isNti
                      ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                      : isGenAi
                      ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300'
                      : isNvidia
                      ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-purple-500/20 text-slate-700 dark:text-purple-300'
                  }`}>
                    <ShieldCheck className="w-6 h-6" />
                  </span>

                  <div className="flex items-center gap-1.5">
                    {cert.badgeText && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${
                        isNti
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                          : isGenAi
                          ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
                          : isNvidia
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}>
                        {cert.badgeText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-base sm:text-lg font-bold mb-2 leading-snug transition-colors ${
                  isHovered
                    ? (isGenAi ? 'text-cyan-600 dark:text-cyan-300' : isNvidia ? 'text-emerald-600 dark:text-emerald-300' : 'text-blue-600 dark:text-blue-400')
                    : 'text-slate-900 dark:text-slate-100'
                }`}>
                  {cert.title}
                </h3>

                {/* Issuer & Credential info */}
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </div>
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {cert.credentialId}
                  </div>
                )}
              </div>

              {/* Revealable Vision Preview Drawer */}
              <AnimatePresence>
                {isHovered && cert.image && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      onClick={() => setSelectedFullCert(cert)}
                      className="relative rounded-2xl overflow-hidden border-2 border-blue-500/50 bg-slate-950 shadow-xl cursor-zoom-in group/img transition-transform hover:scale-[1.01]"
                      title={language === 'ar' ? 'اضغط لتكبير الشهادة بالكامل' : 'Click to enlarge full certificate'}
                    >
                      {/* Image Thumbnail */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                      />

                      {/* Vision HUD Scanner Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

                      {/* Laser Scanline */}
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none animate-pulse top-1/2" />

                      {/* Quick Fullscreen Prompt Overlay */}
                      <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between z-10 px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'وثيقة رسمية معتمدة' : 'Verified Document'}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 font-mono group-hover/img:text-white transition-colors">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'اضغط للتكبير' : 'Click to Zoom'}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Clean Action Button - No Text Collision */}
              <div className="mt-5 pt-3 border-t border-slate-200/50 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setSelectedFullCert(cert)}
                  className={`w-full py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer shadow-xs group/btn ${
                    isNti
                      ? 'bg-blue-50/80 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300'
                      : isGenAi
                      ? 'bg-cyan-50/80 hover:bg-cyan-100 dark:bg-cyan-950/50 dark:hover:bg-cyan-900/60 border-cyan-200/80 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300'
                      : isNvidia
                      ? 'bg-emerald-50/80 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/60 border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  <span>{language === 'ar' ? 'معاينة الشهادة الكاملة' : 'View Full Certificate'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedFullCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFullCert(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-4 sm:p-6 z-10 space-y-4 max-h-[94vh] flex flex-col overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                      {selectedFullCert.badgeText}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                      {selectedFullCert.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    {selectedFullCert.issuer} {selectedFullCert.credentialId ? `• ${selectedFullCert.credentialId}` : ''}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFullCert(null)}
                  className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fullscreen Certificate Image Display */}
              <div className="overflow-auto rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 flex-1 min-h-[300px]">
                <img
                  src={selectedFullCert.image}
                  alt={selectedFullCert.title}
                  className="w-full h-auto max-h-[76vh] object-contain rounded-xl select-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
