import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsList } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';
import { Award, ShieldCheck, Sparkles, Eye, Maximize2, X, CheckCircle2, Scan } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [selectedFullCert, setSelectedFullCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'الشهادات المعتمدة مع خاصية المعاينة البصرية' : 'Verified Certifications with Vision Preview'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'الشهادات والتراخيص المهنية المعتمدة' : 'Verified Professional Certifications'}
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          {language === 'ar'
            ? '💡 قف بالماوس على أي بطاقة شهادة لمعاينة الوثيقة الرسمية فورياً بأسلوب Vision تفاعلي.'
            : '💡 Hover over any certificate card to reveal its official verified document preview in real-time.'}
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {certificationsList.map((cert) => {
          const isHovered = hoveredCertId === cert.id;

          return (
            <motion.div
              key={cert.id}
              layout
              onMouseEnter={() => setHoveredCertId(cert.id)}
              onMouseLeave={() => setHoveredCertId(null)}
              onClick={() => setHoveredCertId(isHovered ? null : cert.id)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                isHovered
                  ? 'bg-white dark:bg-slate-900/95 border-blue-500 dark:border-blue-400 shadow-2xl ring-2 ring-blue-500/20'
                  : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Vision Scan Light Accent (Visible on Hover) */}
              {isHovered && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-pulse" />
              )}

              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`p-3 rounded-2xl transition-colors ${
                    isHovered
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400'
                  }`}>
                    <ShieldCheck className="w-6 h-6" />
                  </span>

                  {cert.badgeText && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                      {cert.badgeText}
                    </span>
                  )}
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
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-slate-950 shadow-xl group/preview">
                      {/* Image Thumbnail */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                      />

                      {/* Vision HUD Scanner Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Vision Scanner Line */}
                      <motion.div
                        animate={{ y: [0, 180, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none opacity-80"
                      />

                      {/* Bottom Image Overlay Bar */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between z-10 px-2 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{language === 'ar' ? 'وثيقة رسمية معتمدة' : 'Verified Document'}</span>
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFullCert(cert);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>{language === 'ar' ? 'تكبير' : 'Zoom'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Card Footer: Subtle Hint when not hovered */}
              {!isHovered && (
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-2xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Scan className="w-3 h-3 text-blue-500" />
                    <span>{language === 'ar' ? 'قف هنا للمعاينة البصرية' : 'Hover for Vision preview'}</span>
                  </span>
                  <Eye className="w-3 h-3 opacity-60" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedFullCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFullCert(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Sheet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-4 sm:p-6 z-10 space-y-4 max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                    {selectedFullCert.title}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {selectedFullCert.issuer} {selectedFullCert.credentialId ? `• ${selectedFullCert.credentialId}` : ''}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedFullCert(null)}
                  className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fullscreen Certificate Image */}
              <div className="overflow-auto rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2">
                <img
                  src={selectedFullCert.image}
                  alt={selectedFullCert.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
