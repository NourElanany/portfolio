import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData, allProjectsList, experienceList, certificationsList } from '../data/portfolioData';
import type { ProjectItem, ExperienceItem, CertificationItem } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
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
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-bold text-sm sm:text-base text-slate-100">
                {language === 'ar' ? 'السيرة الذاتية الرسمية المعتمدة (ATS-Compliant CV)' : 'Official ATS-Compliant Resume'}
              </h3>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'ar' ? 'طباعة / حفظ كـ PDF' : 'Print / Save PDF'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content (Formatted for standard ATS single-column / clean print) */}
          <div
            ref={printRef}
            className="overflow-y-auto p-6 sm:p-10 text-slate-100 bg-slate-900 print:text-black print:bg-white print:p-0 font-sans space-y-6"
            id="printable-ats-resume"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-700 print:border-black pb-4 text-center sm:text-start">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black uppercase">
                {personalData.name.en}
              </h1>
              <p className="text-base sm:text-lg font-bold text-blue-400 print:text-blue-800 mt-1">
                AI Engineer | Computer Vision & Generative AI
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-3 text-xs sm:text-sm text-slate-300 print:text-slate-800 font-mono">
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
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-700 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
                Final-year Artificial Intelligence Engineer with hands-on experience in Computer Vision, Deep Learning, and Generative AI. Proven ability to design and deploy end-to-end AI systems, including multi-modal medical diagnosis models (94% accuracy) and an AI-first development environment using Python and Rust. NVIDIA-certified with practical training in LLM orchestration, RAG pipelines (Milvus, Zilliz), LangChain, and MLOps practices. Focused on clean code, scalable architectures, and production-ready AI solutions.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-700 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-black leading-relaxed">
                <div>
                  <strong>Programming:</strong> Python, C++, Java, Rust, SQL
                </div>
                <div>
                  <strong>AI & ML:</strong> Deep Learning, Computer Vision, Generative AI, LLMs, NLP, Reinforcement Learning (PPO), GANs, Transfer Learning
                </div>
                <div>
                  <strong>Frameworks & Libraries:</strong> PyTorch, TensorFlow, OpenCV, MediaPipe, LangChain4j, NumPy, Pandas, Scikit-learn, Matplotlib
                </div>
                <div>
                  <strong>Vector DBs & MLOps:</strong> Milvus, Zilliz, Docker, Git, CI/CD basics
                </div>
                <div className="sm:col-span-2">
                  <strong>Concepts:</strong> Clean Code, OOP, Data Structures & Algorithms, Microkernel Architecture, Model Deployment
                </div>
              </div>
            </div>

            {/* Experience & Professional Training */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-700 pb-1 mb-3">
                Experience & Professional Training
              </h2>
              <div className="space-y-4">
                {experienceList.map((exp: ExperienceItem) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline font-bold">
                      <span className="text-white print:text-black">
                        {exp.role.en} — <span className="text-blue-400 print:text-blue-800">{exp.company.en}</span>
                      </span>
                      <span className="text-slate-400 font-mono text-2xs sm:text-xs">
                        {exp.period.en}
                      </span>
                    </div>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-300 print:text-black leading-relaxed">
                      {exp.points.en.map((hl: string, i: number) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-700 pb-1 mb-3">
                Featured Projects
              </h2>
              <div className="space-y-3 text-xs">
                {allProjectsList.slice(0, 4).map((proj: ProjectItem) => (
                  <div key={proj.id} className="p-3 rounded-xl border border-slate-800 print:border-slate-400">
                    <div className="font-bold text-white print:text-black flex items-center justify-between">
                      <span>{proj.title.en}</span>
                      {proj.metrics && (
                        <span className="text-2xs font-mono font-bold text-blue-400 print:text-blue-800">
                          {proj.metrics.value}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 print:text-black mt-1 text-2xs leading-relaxed">
                      {proj.summary.en}
                    </p>
                    <div className="text-2xs font-mono text-slate-400 mt-1.5">
                      {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-200 print:text-black uppercase tracking-wider border-b border-slate-700 pb-1 mb-2">
                Education & Certifications
              </h2>
              <div className="text-xs space-y-1.5 text-slate-300 print:text-black leading-relaxed">
                <p>
                  <strong>B.Sc. in Artificial Intelligence</strong> — Faculty of Computers & Artificial Intelligence, Benha University (September 2022 – Expected Graduation: 2026). Focus: Machine Learning & Robotics.
                </p>
                <div>
                  <strong>Certifications:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-0.5">
                    {certificationsList.map((c: CertificationItem) => (
                      <li key={c.id}>
                        {c.title} — <em>{c.issuer}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
