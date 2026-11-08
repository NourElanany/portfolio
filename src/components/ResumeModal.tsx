import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData, allProjectsList, experienceList, certificationsList } from '../data/portfolioData';
import type { ProjectItem, ExperienceItem, CertificationItem } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[92vh] overflow-hidden transition-colors"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                {language === 'ar' ? 'السيرة الذاتية الرسمية المعتمدة (CV)' : 'Official Resume (CV)'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="./Noureldin_Elanany_CV.pdf"
                download="Noureldin_Elanany_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-300 dark:border-slate-700 cursor-pointer"
                title="Download Official PDF"
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>{language === 'ar' ? 'تحميل PDF' : 'Download PDF'}</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'طباعة' : 'Print'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content (Formatted for standard ATS single-column / clean print) */}
          <div
            ref={printRef}
            className="overflow-y-auto p-6 sm:p-10 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 print:text-black print:bg-white print:p-0 font-sans space-y-6"
            id="printable-ats-resume"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-300 dark:border-slate-700 print:border-black pb-4 text-center sm:text-start">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black uppercase">
                {personalData.name.en}
              </h1>
              <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 print:text-blue-800 mt-1">
                AI ENGINEERING INTERN | PYTHON | LLMs | NLP
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-800 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Cairo, Egypt
                </span>
                <span>•</span>
                <a href={personalData.contacts.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  {personalData.contacts.phone}
                </a>
                <span>•</span>
                <a href={`mailto:${personalData.contacts.email}`} className="flex items-center gap-1 hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  {personalData.contacts.email}
                </a>
                <span>•</span>
                <a href={personalData.contacts.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                  LinkedIn
                </a>
                <span>•</span>
                <a href={personalData.contacts.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <GithubIcon className="w-3.5 h-3.5 fill-current" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                Recent Artificial Intelligence graduate with practical project experience building Python-based NLP and LLM applications. Developed healthcare-focused review analysis and retrieval-augmented generation (RAG) workflows, text-classification models, and semantic retrieval components. Familiar with data preparation, embeddings, vector search, prompt-grounded generation, and lightweight AI application interfaces. Seeking an AI Engineering internship to contribute to real-world healthcare technology projects.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                <div>
                  <strong>Programming:</strong> Python
                </div>
                <div>
                  <strong>AI / Machine Learning:</strong> LLMs, Retrieval-Augmented Generation (RAG), NLP, text classification, sentiment analysis, semantic search, embeddings, LSTM, BiLSTM, CNN-LSTM
                </div>
                <div>
                  <strong>Libraries & Frameworks:</strong> scikit-learn, TensorFlow/Keras, PyTorch, Sentence Transformers, LangGraph, FAISS, ChromaDB, pandas, NumPy
                </div>
                <div>
                  <strong>Applications & APIs:</strong> Gradio, Streamlit, Flask, OpenRouter API
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-3">
                Experience
              </h2>
              <div className="space-y-4">
                {experienceList.map((exp: ExperienceItem) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline font-bold">
                      <span className="text-slate-900 dark:text-white print:text-black">
                        {exp.role.en} — <span className="text-blue-600 dark:text-blue-400 print:text-blue-800">{exp.company.en}</span>
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono text-2xs sm:text-xs">
                        {exp.period.en}
                      </span>
                    </div>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                      {exp.points.en.map((hl: string, i: number) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected AI & NLP Projects */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-3">
                Selected AI & NLP Projects
              </h2>
              <div className="space-y-3 text-xs">
                {allProjectsList.filter(p => !p.isPrivateTeamRepo).slice(0, 4).map((proj: ProjectItem) => (
                  <div key={proj.id} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-400">
                    <div className="font-bold text-slate-900 dark:text-white print:text-black flex items-center justify-between">
                      <span>{proj.title.en}</span>
                      {proj.metrics && (
                        <span className="text-2xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-blue-800">
                          {proj.metrics.value}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 print:text-black mt-1 text-2xs leading-relaxed">
                      {proj.summary.en}
                    </p>
                    <div className="text-2xs font-mono text-slate-500 dark:text-slate-400 mt-1.5">
                      {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Education & Certifications
              </h2>
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                <p>
                  <strong>Bachelor's Degree, Artificial Intelligence</strong> — Faculty of Artificial Intelligence, Benha University (2022 – 2026 Graduated).
                </p>
                <div>
                  <strong>Certifications & Training:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-0.5">
                    {certificationsList.map((c: CertificationItem) => (
                      <li key={c.id}>
                        {c.title} — <em>{c.issuer}</em> {c.badgeText ? `(${c.badgeText})` : ''}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>Languages:</strong> Arabic: Native | English: B1 (Intermediate)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
