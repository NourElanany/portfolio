import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData, certificationsList } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl z-10 flex flex-col max-h-[95vh] overflow-hidden"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/90 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-slate-200">
                ATS-Compliant Resume (CV) • 100% Machine-Readable
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Direct PDF Download */}
              <a
                href="./Noureldin_Elanany_CV.pdf"
                download="Noureldin_Elanany_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer shadow-xs"
                title="Download Official PDF"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Download PDF</span>
              </a>

              {/* Print / Save as PDF */}
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ATS Standard Resume Sheet (Pure Single-Column, Clean Typography, English Only) */}
          <div className="overflow-y-auto p-4 sm:p-8 bg-slate-950 flex justify-center">
            <div
              ref={printRef}
              dir="ltr"
              id="printable-ats-resume"
              className="w-full max-w-3xl bg-white text-neutral-900 p-8 sm:p-12 shadow-2xl rounded-sm font-sans space-y-5 print:shadow-none print:p-0 print:m-0 print:w-full print:max-w-none text-[13px] leading-normal"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {/* 1. Header (Name & Contact) */}
              <header className="border-b-2 border-neutral-900 pb-3 text-center">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
                  Noureldin Osama Fathy Elanany
                </h1>

                <p className="text-sm font-bold text-neutral-800 tracking-wide mt-1 uppercase">
                  AI Engineer | Python | Large Language Models (LLMs) | Healthcare RAG | Computer Vision
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 mt-2 text-xs text-neutral-700 font-medium">
                  <span>Cairo, Egypt</span>
                  <span>|</span>
                  <a href={personalData.contacts.whatsapp} target="_blank" rel="noreferrer" className="hover:underline text-neutral-900">
                    +20 112 998 2673
                  </a>
                  <span>|</span>
                  <a href={`mailto:${personalData.contacts.email}`} className="hover:underline text-neutral-900">
                    {personalData.contacts.email}
                  </a>
                  <span>|</span>
                  <a href={personalData.contacts.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-neutral-900">
                    linkedin.com/in/nourelanany
                  </a>
                  <span>|</span>
                  <a href={personalData.contacts.github} target="_blank" rel="noreferrer" className="hover:underline text-neutral-900">
                    github.com/NourElanany
                  </a>
                </div>
              </header>

              {/* 2. Professional Summary */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-1.5">
                  Professional Summary
                </h2>
                <p className="text-xs text-neutral-800 leading-relaxed text-justify">
                  Results-driven Artificial Intelligence Graduate (Faculty of Artificial Intelligence, Benha University - Class of 2026) with specialized expertise in Python, Large Language Models (LLMs), Healthcare Retrieval-Augmented Generation (RAG) architectures, and Computer Vision (Score: 98% Excellent from National Telecommunication Institute - NTI). Certified by NVIDIA across Deep Learning, LLMs, and Prompt Engineering competencies. Practical engineering experience at NOVEGATES and NamaSoft developing end-to-end AI pipelines, text and sentiment classification models (BiLSTM), dense vector retrieval (ChromaDB, FAISS, Milvus), and dynamic query routing (LangGraph). Proven track record optimizing model inference latency, reducing LLM token costs by up to 70%, and eliminating hallucinations through prompt-grounded context. Available for immediate employment.
                </p>
              </section>

              {/* 3. Technical Skills (Pure Linear Single-Column Category Format) */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-1.5">
                  Technical Skills
                </h2>
                <ul className="space-y-1 text-xs text-neutral-800">
                  <li>
                    <strong className="text-neutral-950">• Programming & Languages:</strong> Python (OOP, Clean Architecture, AsyncIO), SQL, Java (LangChain4j enterprise integration)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• LLMs & Generative AI:</strong> Retrieval-Augmented Generation (RAG), Prompt Engineering, Dynamic Routing (LangGraph), Semantic Caching, Hallucination Reduction, OpenRouter API, Chunking & Tokenization
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Vector Databases & Search:</strong> ChromaDB, FAISS, Milvus, Zilliz, Dense Embeddings (Sentence Transformers), HNSW Indexing, Semantic Similarity Retrieval
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Deep Learning & NLP:</strong> PyTorch, TensorFlow, Keras, scikit-learn, BiLSTM, LSTM, CNN-LSTM, Text Classification, Sentiment Analysis, TF-IDF
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Computer Vision (98% NTI Distinction):</strong> OpenCV, MediaPipe (21 3D Hand Landmarks, 30+ FPS), Multi-Modal Medical Image Fusion (94% Accuracy), Object Detection, Image Preprocessing
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Deployment & Tools:</strong> Gradio, Streamlit, Flask REST APIs, Docker, Git, GitHub, Linux / CLI, Agile Methodologies
                  </li>
                </ul>
              </section>

              {/* 4. Professional Experience */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-2">
                  Professional Experience
                </h2>

                <div className="space-y-3">
                  {/* NOVEGATES */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Data Collector & AI Pipelines Member — <span className="font-semibold text-neutral-800">NOVEGATES</span></span>
                      <span className="font-normal text-neutral-600 text-xs">Jun 2026 – Oct 2026</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Spearheaded domain-specific data collection, validation, and preprocessing pipelines for healthcare AI applications.</li>
                      <li>Engineered automated data-cleansing routines ensuring high dataset integrity for downstream NLP classification models.</li>
                      <li>Collaborated within a cross-functional engineering team utilizing version control (Git) and agile development workflows.</li>
                    </ul>
                  </div>

                  {/* NamaSoft */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>AI Engineering Trainee — <span className="font-semibold text-neutral-800">NamaSoft</span></span>
                      <span className="font-normal text-neutral-600 text-xs">Jul 2025 – Nov 2025</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Completed an intensive 4-month professional AI Engineering program focusing on end-to-end Python ML and DL pipelines.</li>
                      <li>Implemented and benchmarked neural architectures (BiLSTM, CNN-LSTM) for sentiment analysis and sequential text classification.</li>
                      <li>Built lightweight, modular application interfaces using Streamlit and Flask to demonstrate real-time model predictions.</li>
                    </ul>
                  </div>

                  {/* NTI */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Computer Vision Specialist Trainee (Score: 98% Excellent) — <span className="font-semibold text-neutral-800">NTI & ITIDA</span></span>
                      <span className="font-normal text-neutral-600 text-xs">Jul 2025 – Aug 2025</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Completed 120-hour intensive Computer Vision program achieving the highest distinction evaluation of 98% (Excellent).</li>
                      <li>Implemented real-time video processing pipelines utilizing OpenCV and MediaPipe; optimized inference models for edge latency.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Selected AI & Engineering Projects */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-2">
                  Selected AI & Engineering Projects
                </h2>

                <div className="space-y-3">
                  {/* Project 1 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>WebMD AI Pipeline: ML, BiLSTM NLP & Medical RAG | <span className="font-normal text-neutral-700">Python, scikit-learn, BiLSTM, ChromaDB, OpenRouter API</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">GitHub</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Built an end-to-end healthcare review intelligence pipeline spanning automated data cleaning, drug-effectiveness classification, and review sentiment analysis using word- and character-level TF-IDF features with a BiLSTM network.</li>
                      <li>Implemented vector retrieval with ChromaDB and dynamic condition filters to power prompt-grounded, hallucination-free medical summaries via OpenRouter LLM API.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Enterprise Java RAG System with LangChain4j & Milvus | <span className="font-normal text-neutral-700">LangChain4j, Milvus, Zilliz, Java, Vector Search</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">Sub-15ms</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Designed and implemented enterprise-grade RAG pipelines utilizing LangChain4j integrated with MilvusEmbeddingStore.</li>
                      <li>Applied HNSW vector indexing algorithms achieving sub-15ms dense retrieval latency across technical repositories.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Dynamic LLM Routing Gateway & Cost Optimizer | <span className="font-normal text-neutral-700">Python, LangGraph, Sentence Transformers, Streamlit</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">-70% Token Cost</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Engineered an intelligent query router using LangGraph that evaluates prompt complexity dynamically to route queries between lightweight vs frontier models, slashing token costs by up to 70%.</li>
                      <li>Incorporated semantic caching with Sentence Transformers, retry/fallback logic, and built a dual-mode Streamlit testing interface.</li>
                    </ul>
                  </div>

                  {/* Project 4 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>WebMD Medical Semantic RAG Application | <span className="font-normal text-neutral-700">Python, Gradio, Sentence Transformers, FAISS</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">Zero Hallucination</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Developed an interactive Gradio application indexing healthcare reviews; engineered semantic chunking, metadata-aware vector embeddings, and top-k retrieval using FAISS.</li>
                      <li>Eliminated clinical hallucinations by constraining response generation strictly to verified retrieved drug review passages.</li>
                    </ul>
                  </div>

                  {/* Project 5 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Real-Time Video Computer Vision & Hand Landmark Tracking | <span className="font-normal text-neutral-700">Python, OpenCV, MediaPipe, NumPy</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">30+ FPS</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Engineered high-throughput computer vision pipeline tracking 21 3D hand landmarks in live video streams at 30+ FPS.</li>
                      <li>Integrated real-time gesture telemetry, bounding-box calculation, and low-latency rendering for interactive applications.</li>
                    </ul>
                  </div>

                  {/* Project 6 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-950">
                      <span>Multi-Modal Medical Image Fusion Diagnostic System | <span className="font-normal text-neutral-700">Python, PyTorch, OpenCV, Scikit-image</span></span>
                      <span className="font-normal text-neutral-600 text-2xs">94% Accuracy</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-xs text-neutral-800 leading-relaxed">
                      <li>Implemented dual-modality radiological image fusion combining structural MRI and functional PET scans, achieving a 94% diagnostic classification accuracy to assist clinical decision-making.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6. Education */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-1.5">
                  Education & Honors
                </h2>
                <div className="space-y-1 text-xs text-neutral-800">
                  <div className="flex justify-between items-baseline font-bold text-neutral-950">
                    <span>Bachelor of Science in Artificial Intelligence — <span className="font-semibold text-neutral-800">Faculty of Artificial Intelligence, Benha University</span></span>
                    <span className="font-normal text-neutral-600">2022 – 2026 (Graduated)</span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    • Major: Artificial Intelligence Engineering & Data Science (Class of 2026)
                  </p>
                  <p className="text-xs text-neutral-700">
                    • NTI Computer Vision Professional Program: Graduated with <strong>98% (Excellent Distinction)</strong>
                  </p>
                </div>
              </section>

              {/* 7. Certifications & Credentials */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-1.5">
                  Certifications & Credentials
                </h2>
                <ul className="space-y-0.5 text-xs text-neutral-800">
                  <li>
                    <strong className="text-neutral-950">• NVIDIA:</strong> Rapid Application Development with Large Language Models (LLMs) — Credential ID: <code className="font-mono text-2xs">szVIDKH8Qty0uNZQ-XoS1w</code> (Aug 2025)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• NVIDIA:</strong> Getting Started with Deep Learning — Credential ID: <code className="font-mono text-2xs">etKar9diTCytwki9TmGvgA</code> (Aug 2025)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• NVIDIA:</strong> Building LLM Applications With Prompt Engineering — Credential ID: <code className="font-mono text-2xs">xdIqRIVRSx6oak0MIOFfMQ</code> (Aug 2025)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• NTI & ITIDA:</strong> Computer Vision Professional Training (Score: 98% Excellent Distinction) — Student ID: <code className="font-mono text-2xs">230351</code> (120 Hours, Aug 2025)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Certificate of Achievement:</strong> Generative AI & Applied LLMs Applied Engineering (90 Hours, 3 Production RAG Projects)
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Udemy & SDE Arts:</strong> The Python Programming A-Z Definitive Diploma — Credential ID: <code className="font-mono text-2xs">UC-b1d5e03e-68ce-4939-ae7f-3b976c3ebf00</code>
                  </li>
                  <li>
                    <strong className="text-neutral-950">• Udemy & MTF Institute:</strong> Python Development and Python Programming Fundamentals — Credential ID: <code className="font-mono text-2xs">UC-3d38dcf0-860e-4d1b-9cb7-d599c09af47b</code>
                  </li>
                </ul>
              </section>

              {/* 8. Languages */}
              <section className="pt-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5 mb-1">
                  Languages
                </h2>
                <p className="text-xs text-neutral-800">
                  Arabic: Native | English: Professional Working Proficiency
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
