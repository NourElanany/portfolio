import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="w-full py-10 bg-slate-200/70 dark:bg-[#03060c] border-t border-slate-300 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} {personalData.name[language]}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>AI Engineer</span>
          <span>•</span>
          <span>Computer Vision (NTI 98%)</span>
          <span>•</span>
          <span>Class of 2026</span>
        </div>
      </div>
    </footer>
  );
};
