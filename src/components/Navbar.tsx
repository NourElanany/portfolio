import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { personalData } from '../data/portfolioData';
import { Sun, Moon, Globe, Menu, X, Sparkles, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenRecruiter?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiter, onOpenResume }) => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: language === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '#cv-playground', label: language === 'ar' ? 'المعمل التفاعلي' : 'AI Sandbox' },
    { href: '#skills', label: language === 'ar' ? 'المهارات' : 'Skills' },
    { href: '#experience', label: language === 'ar' ? 'الخبرات' : 'Experience' },
    { href: '#certifications', label: language === 'ar' ? 'الشهادات' : 'Certifications' },
    { href: '#contact', label: language === 'ar' ? 'تواصل' : 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
              {language === 'ar' ? personalData.name.shortAr : personalData.name.shortEn}
            </span>
            <span className="hidden sm:block text-[11px] text-blue-600 dark:text-blue-400 font-semibold tracking-wide whitespace-nowrap">
              {language === 'ar' ? 'مهندس ذكاء اصطناعي | AI Engineer' : 'AI Engineer | Recent Graduate'}
            </span>
          </div>
        </a>

        {/* Desktop Links - Spaced & Clean */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls - Guaranteed Single Line, No Wrapping */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-nowrap">
          {/* Recruiter Quick Pitch - Shown on Medium+ */}
          {onOpenRecruiter && (
            <button
              onClick={onOpenRecruiter}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors cursor-pointer whitespace-nowrap shrink-0 leading-none select-none"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">{language === 'ar' ? 'ملخص التوظيف (30s)' : '30s Pitch'}</span>
            </button>
          )}

          {/* Clean CV Button - Single Line, Strictly "CV" */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 leading-none select-none"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">{language === 'ar' ? 'استعراض الـ CV' : 'View CV'}</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800 shrink-0"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'التحويل للوضع الليلي'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Compact Modern Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-blue-500 transition-colors cursor-pointer bg-slate-50 dark:bg-slate-900/60 whitespace-nowrap shrink-0"
            title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Mobile Menu Button - Shown when screen is < lg */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shrink-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-5 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1.5"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Fast-Action Buttons */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              {onOpenRecruiter && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenRecruiter();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'ملخص التوظيف (30s)' : '30s Pitch'}</span>
                </button>
              )}

              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">{language === 'ar' ? 'استعراض الـ CV' : 'View CV'}</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
