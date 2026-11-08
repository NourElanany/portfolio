import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { MessageCircle, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingCTA: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 start-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-3 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-2.5 min-w-[220px]"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {language === 'ar' ? 'تواصل فوري مع نور الدين' : 'Quick Chat with Noureldin'}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href={personalData.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'محادثة عبر WhatsApp' : 'Chat via WhatsApp'}</span>
            </a>

            <a
              href={`mailto:${personalData.contacts.email}`}
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 text-xs font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send an Email'}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-xl hover:shadow-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <MessageCircle className="w-4 h-4" />
        <span>{language === 'ar' ? 'تواصل مباشر' : 'Quick Connect'}</span>
      </button>
    </div>
  );
};
