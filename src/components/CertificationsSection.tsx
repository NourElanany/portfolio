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
          const isNvidia = cert.issuer.includes('NVIDIA');
          const isNti = cert.issuer.includes('NTI');

          return (
            <div
              key={cert.id}
              onMouseEnter={() => setHoveredCertId(cert.id)}
              onMouseLeave={() => setHoveredCertId(null)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
                isHovered
                  ? 'bg-white dark:bg-slate-900 border-blue-500 dark:border-blue-400 shadow-xl ring-2 ring-blue-500/20'
                  : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Top Accent Stripe */}
              <div className={`absolute top-0 inset-x-0 h-1 transition-all ${
                isHovered
                  ? 'bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-100'
                  : isNvidia
                  ? 'bg-emerald-500/80'
                  : isNti
                  ? 'bg-blue-500/80'
                  : 'bg-slate-300 dark:bg-slate-700'
              }`} />

              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`p-3 rounded-2xl transition-colors ${
                    isHovered
                      ? 'bg-blue-600 text-white shadow-md'
                      : isNvidia
                      ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400'
                  }`}>
                    <ShieldCheck className="w-6 h-6" />
                  </span>

                  <div className="flex items-center gap-1.5">
                    {cert.badgeText && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {cert.badgeText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-base sm:text-lg font-bold mb-2 leading-snug transition-colors ${
                  isHovered
                    ? 'text-blue-600 dark:text-blue-400'
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

              {/* Bottom Direct Zoom Button (100% Reliable Click) */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedFullCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'معاينة الشهادة الكاملة' : 'View Full Certificate'}</span>
                </button>

                <span className="text-2xs font-mono text-slate-400">
                  {cert.badgeText}
                </span>
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
