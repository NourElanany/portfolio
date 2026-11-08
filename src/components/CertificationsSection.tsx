import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsList } from '../data/portfolioData';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="certifications" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'الشهادات المعتمدة من NVIDIA و NTI' : 'Certified Credentials & Training'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'الشهادات والتراخيص المهنية' : 'Verified Professional Certifications'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsList.map((cert) => (
          <div
            key={cert.id}
            className="p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                {cert.badgeText && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    {cert.badgeText}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              {cert.issuer}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
