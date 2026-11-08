import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="relative w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-xs">
          <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{language === 'ar' ? 'ابدأ محادثة فورية' : 'Get In Touch'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {language === 'ar' ? 'تواصل معي مباشرة' : 'Connect & Collaborate'}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {language === 'ar'
            ? 'متاح لفرص العمل في هندسة الذكاء الاصطناعي (AI Engineering)، مشاريع الرؤية الحاسوبية، والذكاء الاصطناعي التوليدي.'
            : 'Open to AI Engineer roles, Computer Vision development, and Generative AI collaborations.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* WhatsApp */}
        <motion.a
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45 }}
          href={personalData.contacts.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-7 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#081f18] dark:via-[#051510] dark:to-[#030d0a] border border-slate-200 dark:border-emerald-500/25 hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 w-fit mb-5 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">WhatsApp</div>
            <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-1 font-mono">
              {personalData.contacts.phone}
            </div>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45, delay: 0.05 }}
          href={`mailto:${personalData.contacts.email}`}
          className="p-7 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#091a33] dark:via-[#061224] dark:to-[#030913] border border-slate-200 dark:border-blue-500/25 hover:border-blue-500/60 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 w-fit mb-5 group-hover:scale-110 transition-transform">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Email</div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-1 truncate font-mono">
              {personalData.contacts.email}
            </div>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45, delay: 0.1 }}
          href={personalData.contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-7 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#08182f] dark:via-[#051122] dark:to-[#030a14] border border-slate-200 dark:border-sky-500/25 hover:border-sky-400/60 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-500/15 text-[#0077B5] dark:text-[#38bdf8] w-fit mb-5 group-hover:scale-110 transition-transform">
            <LinkedinIcon className="w-7 h-7 fill-current" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">LinkedIn</div>
            <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0077B5] dark:group-hover:text-[#38bdf8] transition-colors mt-1 font-mono">
              nour-eldin-elanany
            </div>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45, delay: 0.15 }}
          href={personalData.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-7 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#141221] dark:via-[#0e0c17] dark:to-[#07060b] border border-slate-200 dark:border-purple-500/25 hover:border-purple-400/60 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-purple-500/15 text-slate-900 dark:text-purple-300 w-fit mb-5 group-hover:scale-110 transition-transform">
            <GithubIcon className="w-7 h-7 fill-current" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">GitHub</div>
            <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mt-1 font-mono">
              NourElanany
            </div>
          </div>
        </motion.a>
      </div>
      </div>
    </section>
  );
};
