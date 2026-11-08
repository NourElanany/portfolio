export interface ProjectItem {
  id: string;
  title: { ar: string; en: string };
  category: string;
  categoryKey: 'ai' | 'cv' | 'genai' | 'ml';
  summary: { ar: string; en: string };
  details: { ar: string[]; en: string[] };
  technologies: string[];
  metrics?: { label: { ar: string; en: string }; value: string };
  githubUrl: string;
  image?: string;
  isFeatured?: boolean;
  isPrivateTeamRepo?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  period: { ar: string; en: string };
  location: { ar: string; en: string };
  points: { ar: string[]; en: string[] };
  technologies: string[];
  isCurrent?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeText?: string;
  image?: string;
  credentialId?: string;
}

export interface AIPillar {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  tools: string[];
  badge: { ar: string; en: string };
  metrics: string;
}

export const personalData = {
  name: {
    ar: 'نور الدين أسامه فتحي العناني',
    en: 'Noureldin Osama Fathy Elanany',
    shortAr: 'نور الدين أسامه',
    shortEn: 'Noureldin Osama',
  },
  role: {
    ar: 'مهندس ذكاء اصطناعي | AI Engineer (Python, LLMs, NLP & CV)',
    en: 'AI Engineer | Python, LLMs, NLP & Computer Vision',
  },
  currentTitle: {
    ar: 'خريج ذكاء اصطناعي ومهندس AI (Recent AI Graduate)',
    en: 'Recent AI Graduate | AI Engineering Specialist',
  },
  subRole: {
    ar: 'خريج كلية الذكاء الاصطناعي (جامعة بنها 2026) — متخصص في بناء تطبيقات بايثون لنماذج اللغة الكبيرة (LLMs)، خطوط أنابيب الـ RAG للقطاع الطبي، وتطبيقات الرؤية الحاسوبية.',
    en: 'Recent AI Graduate (Benha University 2026) — Specializing in Python LLMs, Healthcare Vector RAG Pipelines, NLP Text Classification, and Computer Vision.',
  },
  bio: {
    ar: 'خريج حديث في الذكاء الاصطناعي من كلية الذكاء الاصطناعي بجامعة بنها (دفعة 2026). خبرة تطبيقية عملية في بناء تطبيقات البرمجة اللغوية العصبية (NLP) ونماذج اللغة الكبيرة (LLMs) باستخدام بايثون. طوّرت خطوط أنابيب استرجاع وتوليد RAG متخصصة للرعاية الصحية، ونماذج لتصنيف النصوص وتحليل المشاعر، ومكونات البحث الدلالي المتجهي (ChromaDB, FAISS). متمكن في الرؤية الحاسوبية (امتياز 98% من المعهد القومي للاتصالات NTI)، معتمد من NVIDIA، مع خبرة عملية في شركتي NOVEGATES و NamaSoft.',
    en: 'Recent Artificial Intelligence graduate (Benha University, Class of 2026) with practical project experience building Python-based NLP and LLM applications. Developed healthcare-focused review analysis and retrieval-augmented generation (RAG) workflows, text-classification models, and semantic retrieval components (ChromaDB, FAISS). Strong background in Computer Vision (NTI 98% Distinction), NVIDIA certified, with industry experience at NOVEGATES and NamaSoft.',
  },
  contacts: {
    email: 'elananynour@gmail.com',
    phone: '+20 112 998 2673',
    whatsapp: 'https://wa.me/201129982673',
    linkedin: 'https://linkedin.com/in/nour-eldin-elanany',
    github: 'https://github.com/NourElanany',
    location: {
      ar: 'القاهرة، مصر',
      en: 'Cairo, Egypt',
    },
  },
  education: {
    degree: {
      ar: 'بكالوريوس في الذكاء الاصطناعي (تم التخرج بنجاح)',
      en: "Bachelor's Degree in Artificial Intelligence (Graduated)",
    },
    faculty: {
      ar: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
      en: 'Faculty of Computers & Artificial Intelligence, Benha University',
    },
    period: '2022 – 2026',
    focus: {
      ar: 'التعلم الآلي، معالجة اللغات الطبيعية والروبوتات',
      en: 'Machine Learning, NLP & Robotics',
    },
    status: {
      ar: 'خريج حديث (Recent Graduate)',
      en: 'Recent Graduate',
    },
  },
  stats: [
    { value: 'دفعة 2026', label: { ar: 'خريج ذكاء اصطناعي رسمي', en: 'AI Graduate 2026' } },
    { value: '98%', label: { ar: 'امتياز NTI في الرؤية الحاسوبية', en: 'NTI Distinction in CV' } },
    { value: '94%', label: { ar: 'دقة التشخيص الطبي بالذكاء الاصطناعي', en: 'Medical AI Accuracy' } },
    { value: '15+', label: { ar: 'مشروع ذكاء اصطناعي على GitHub', en: 'GitHub AI Projects' } },
  ],
};

export const aiPillars: AIPillar[] = [
  {
    id: 'ai-engineering',
    title: { ar: 'هندسة ونشر حلول الذكاء الاصطناعي (AI Engineering & Python)', en: 'AI Engineering & Python Production Pipelines' },
    description: {
      ar: 'بناء تطبيقات وحلول ذكاء اصطناعي إنتاجية بلغة بايثون، تصميم معماريات نظيفة (Clean Architecture)، دمج واجهات خفيفة بـ Gradio و Streamlit و Flask، ونشر النماذج عبر واجهات برمجية APIs عالية الاعتمادية.',
      en: 'Designing scalable, production-ready AI solutions with clean architecture, Python-based pipeline orchestration, and lightweight application interfaces (Gradio, Streamlit, Flask).',
    },
    tools: ['Python', 'LangGraph', 'Streamlit', 'Gradio', 'Flask', 'OpenRouter API', 'Clean Code'],
    badge: { ar: 'الـ Core الأساسي', en: 'Core Discipline' },
    metrics: 'Production AI',
  },
  {
    id: 'generative-ai',
    title: { ar: 'الذكاء الاصطناعي التوليدي والـ RAG (Generative AI, LLMs & RAG)', en: 'Generative AI, LLMs & Vector RAG' },
    description: {
      ar: 'تطوير خطوط أنابيب متقدمة للاسترجاع والتوليد RAG بقواعد المتجهات (ChromaDB, FAISS, Milvus)، وتوجيه استفسارات النماذج ذكياً بـ LangGraph لتوفير حتى 70% من التكلفة ومنع الهلوسة الطبية.',
      en: 'Architecting high-precision RAG pipelines using ChromaDB and FAISS vector databases, semantic caching, and LangGraph query complexity routing with 70% cost savings.',
    },
    tools: ['LLMs', 'RAG', 'ChromaDB', 'FAISS', 'Milvus', 'Sentence Transformers', 'LangChain4j'],
    badge: { ar: 'توفير 70% تكلفة', en: '70% Cost Optimized' },
    metrics: 'Enterprise RAG',
  },
  {
    id: 'nlp-machine-learning',
    title: { ar: 'معالجة اللغات الطبيعية وتصنيف النصوص (NLP & Deep Learning)', en: 'NLP, Sentiment Analysis & Neural Models' },
    description: {
      ar: 'تحليل وتصنيف المشاعر للنصوص الطبية والعامة، دمج خصائص TF-IDF مع شبكات BiLSTM و CNN-LSTM، واستخراج الكيانات وتصنيف فاعلية الأدوية بدقة عالية.',
      en: 'Text classification, sentiment analysis on clinical reviews, hybrid TF-IDF + BiLSTM and CNN-LSTM feature fusion, and semantic embedding re-ranking.',
    },
    tools: ['scikit-learn', 'BiLSTM', 'CNN-LSTM', 'TensorFlow', 'PyTorch', 'TF-IDF', 'Transformers'],
    badge: { ar: 'معتمد من NVIDIA', en: 'NVIDIA Certified' },
    metrics: 'Advanced NLP',
  },
  {
    id: 'computer-vision',
    title: { ar: 'الرؤية الحاسوبية والتشخيص الطبي (Computer Vision & Edge)', en: 'Computer Vision & Visual Intelligence' },
    description: {
      ar: 'خطوط أنابيب متقدمة للدمج المبكر لصور الأشعة (X-Ray & CT) بدقة 94%، ومعالجة الفيديو المباشر واستخراج 21 مفصل هيكلي لليد بـ MediaPipe بسرعة تفوق 30 FPS بتقدير 98% ممتاز من NTI.',
      en: 'Multi-Modal early feature fusion for medical imaging (94% accuracy), and real-time 30+ FPS skeletal hand landmark tracking via MediaPipe. NTI 98% Excellent.',
    },
    tools: ['OpenCV', 'MediaPipe', 'YOLO', 'TensorFlow', 'Medical Scans', 'Scikit-learn'],
    badge: { ar: 'امتياز NTI 98%', en: 'NTI 98% Distinction' },
    metrics: '94% Acc | 30+ FPS',
  },
];

export const allProjectsList: ProjectItem[] = [
  {
    id: 'webmd-ai-pipeline',
    title: { ar: 'WebMD AI Pipeline: ML, NLP & RAG — خط أنابيب متكامل لتحليل بيانات الأدوية', en: 'WebMD AI Pipeline: ML, NLP & RAG' },
    category: 'Healthcare Analytics, NLP & Generative AI',
    categoryKey: 'genai',
    summary: {
      ar: 'خط أنابيب ذكاء اصطناعي متكامل للرعاية الصحية يشمل تنظيف البيانات، تصنيف فاعلية الأدوية، تحليل مشاعر المراجعات بنموذج BiLSTM، ونظام RAG للإجابة عن الأسئلة الطبية.',
      en: 'End-to-end healthcare review pipeline spanning data cleaning, drug-effectiveness classification, review sentiment analysis, and RAG-based question answering over WebMD drug reviews.',
    },
    details: {
      ar: [
        'بناء خط أنابيب متكامل من جمع البيانات والـ EDA وحتى الاسترجاع والتوليد المعزز (RAG).',
        'دمج خصائص TF-IDF على مستوى الكلمات والحروف مع شبكة عصيبة BiLSTM لتصنيف المشاعر.',
        'تطبيق استرجاع المتجهات بـ ChromaDB مع فلاتر اختيارية للأدوية والحالات المرضية قبل التوليد اللغوي.',
      ],
      en: [
        'Built a healthcare-review pipeline spanning data cleaning, drug-effectiveness classification, and review sentiment analysis.',
        'Combined word- and character-level TF-IDF features with a BiLSTM for sentiment classification.',
        'Implemented vector retrieval with optional drug and condition filters before LLM-based Arabic summaries.',
      ],
    },
    technologies: ['Python', 'scikit-learn', 'BiLSTM', 'ChromaDB', 'OpenRouter API', 'NLP', 'RAG'],
    metrics: { label: { ar: 'المراحل', en: 'Phases' }, value: 'ML + NLP + RAG' },
    githubUrl: 'https://github.com/NourElanany/webmd-ai-pipeline-ml-rag-llm',
    isFeatured: true,
  },
  {
    id: 'webmd-review-rag',
    title: { ar: 'WebMD Review RAG Application — تطبيق استرجاع وتوليد مراجعات المرضى', en: 'WebMD Review RAG Application (Gradio & FAISS)' },
    category: 'Generative AI & Semantic Retrieval',
    categoryKey: 'genai',
    summary: {
      ar: 'تطبيق تفاعلي بواجهة Gradio لفهرسة مراجعات WebMD واسترجاع المقاطع الأكثر صلة دلالياً باستخدام FAISS وتوليد ردود موثقة بالسياق.',
      en: 'Interactive Gradio application indexing WebMD review passages with FAISS and Sentence Transformers, generating grounded context answers.',
    },
    details: {
      ar: [
        'تطوير واجهة مستخدم سريعة بـ Gradio لفهرسة بيانات المراجعات والاستعلام اللحظي.',
        'تجزئة النصوص (Chunking) مع استخراج متجهات التضمين المحتوية على الميتا-داتا (Metadata-aware embeddings).',
        'استرجاع دلالي دقيق لأفضل المقاطع (Semantic Top-k Retrieval) وتوليد إجابات خالية من الهلوسة.',
      ],
      en: [
        'Developed a Gradio interface to index WebMD review data and query retrieved review passages.',
        'Implemented chunking, metadata-aware embeddings, and semantic top-k retrieval.',
        'Context-grounded response generation preventing medical hallucinations.',
      ],
    },
    technologies: ['Python', 'Gradio', 'Sentence Transformers', 'FAISS', 'Vector Search'],
    metrics: { label: { ar: 'الواجهة', en: 'Interface' }, value: 'Gradio + FAISS' },
    githubUrl: 'https://github.com/NourElanany/webmd-ai-pipeline-ml-rag-llm',
    isFeatured: true,
  },
  {
    id: 'dynamic-llm-routing',
    title: { ar: 'نظام توجيه استفسارات الـ LLM الذكي (توفير 70% تكلفة الحوسبة)', en: 'Dynamic LLM Routing System (LangGraph)' },
    category: 'Generative AI & LLM Systems',
    categoryKey: 'genai',
    summary: {
      ar: 'هندسة معمارية متطورة لتوجيه استفسارات المستخدمين ديناميكياً للنموذج الأنسب حسب صعوبة المهمة باستخدام LangGraph والتخزين الدلالي المؤقت، مما يوفر 70% من التكلفة.',
      en: 'Intelligent prompt router directing user queries across model tiers based on task complexity using LangGraph, semantic response caching, and retry/fallback logic with Streamlit.',
    },
    details: {
      ar: [
        'تطبيق التوجيه اللحظي حسب صعوبة الاستعلام (Query-Complexity Routing) عبر شرائح النماذج المختلفة.',
        'إضافة التخزين الدلالي المؤقت (Semantic Response Caching) ومنطق إعادة المحاولة والبدائل (Retry / Fallback).',
        'لوحة تحكم تفاعلية بـ Streamlit للاختبار الفردي والمجموعات (Single-query & Batch testing).',
      ],
      en: [
        'Implemented query-complexity routing across model tiers to optimize latency and compute expenses.',
        'Added semantic response caching, retry/fallback logic, and token consumption analytics.',
        'Built Streamlit interface supporting single-query and automated batch benchmarking.',
      ],
    },
    technologies: ['Python', 'LangGraph', 'Sentence Transformers', 'Streamlit', 'LLM Routing'],
    metrics: { label: { ar: 'توفير التكلفة', en: 'Cost Saved' }, value: '70% Cost Optimized' },
    githubUrl: 'https://github.com/NourElanany/Dynamic-LLM-Routing-System',
    isFeatured: true,
  },
  {
    id: 'arabic-rag-system',
    title: { ar: 'نظام الإجابة الذاتي على الأسئلة باللغة العربية (Arabic Retrieval-Augmented Q&A)', en: 'Arabic Retrieval-Augmented Q&A System' },
    category: 'NLP & Generative AI',
    categoryKey: 'genai',
    summary: {
      ar: 'تطبيق ذكي للإجابة عن الأسئلة باللغة العربية يدمج بين الاسترجاع الدلالي والكلمات المفتاحية (FAISS + TF-IDF) مع إعادة ترتيب السياق والتحقق من صحة الإجابة.',
      en: 'Arabic question-answering application combining semantic and keyword retrieval, context re-ranking, answer generation, and response validation using Flask and FAISS.',
    },
    details: {
      ar: [
        'دمج البحث الدلالي المتجهي بفهرس FAISS مع خوارزميات الكلمات المفتاحية TF-IDF للنصوص العربية.',
        'إعادة ترتيب السياق (Context Re-ranking) والتحقق من دقة وموثوقية الإجابة المولدة.',
        'واجهة خلفية متكاملة بإطار عمل Flask مخصصة للمعالجة فائقة السرعة.',
      ],
      en: [
        'Combined dense semantic vector retrieval via FAISS with sparse keyword TF-IDF matching.',
        'Implemented context re-ranking, prompt grounding, and response verification filters.',
        'Engineered responsive Flask backend API handling low-latency query sessions.',
      ],
    },
    technologies: ['Python', 'Flask', 'FAISS', 'TF-IDF', 'Transformers', 'Arabic NLP'],
    metrics: { label: { ar: 'النوع', en: 'Architecture' }, value: 'Hybrid RAG + Flask' },
    githubUrl: 'https://github.com/NourElanany/RAG-Retrieval-Augmented-Generation-Q-A-System',
    isFeatured: true,
  },
  {
    id: 'disease-detection-cv',
    title: { ar: 'نظام تشخيص الأمراض الرئوية بالدمج المبكر (دقة سريرية 94%)', en: 'Multi-Modal Pulmonary Disease Diagnostic System' },
    category: 'Computer Vision & Healthcare AI',
    categoryKey: 'cv',
    summary: {
      ar: 'نظام تشخيص طبي متقدم للكشف عن الالتهاب الرئوي وسرطان الرئة بالدمج المبكر (Early Multi-Modal Feature Fusion) بين صور X-Ray و CT scans بدقة إجمالية 94%.',
      en: 'A clinical diagnostic system detecting pneumonia and lung cancer using Early Multi-Modal Feature Fusion of X-Ray and CT scans, achieving 94% overall classification accuracy.',
    },
    details: {
      ar: [
        'بناء خط أنابيب متكامل لمعالجة وتنقية صور الأشعة السينية والمقطعية.',
        'تحقيق دقة تصنيف 94% عبر دمج الخصائص العصبية في المراحل المبكرة (Early Fusion).',
        'تدريب وتقييم النماذج باستخدام TensorFlow وفق المعايير الإكلينيكية المعتمدة.',
      ],
      en: [
        'Engineered an end-to-end preprocessing and enhancement pipeline for clinical scans.',
        'Achieved 94% diagnostic classification accuracy via early feature fusion.',
        'Trained and validated deep models using TensorFlow adhering to medical benchmarks.',
      ],
    },
    technologies: ['Computer Vision', 'TensorFlow', 'Python', 'Multi-Modal Fusion', 'Medical Imaging'],
    metrics: { label: { ar: 'الدقة السريرية', en: 'Accuracy' }, value: '94% Benchmark' },
    githubUrl: 'https://github.com/NourElanany/Training-projects-DeepLearning_ComputerVision-',
    isFeatured: true,
  },
  {
    id: 'sign-language-cv',
    title: { ar: 'نظام التعرف اللحظي على لغة الإشارة بالفيديو المباشر (30+ FPS)', en: 'Real-Time Live Video Sign Language Classifier' },
    category: 'Computer Vision & Human-AI Interaction',
    categoryKey: 'cv',
    summary: {
      ar: 'نظام فائق السرعة ومنخفض الكمون للتعرف على إيماءات اليد في الوقت الفعلي عبر كاميرا الفيديو المباشرة باستخدام استخراج 21 مفصل هيكلي بواسطة MediaPipe.',
      en: 'A low-latency real-time sign recognition pipeline utilizing MediaPipe 21 3D landmarks, optimized for live video streams with instantaneous classification.',
    },
    details: {
      ar: [
        'استخراج 21 نقطة مفصلية لليد في أجزاء من الثانية بمعدل إطارات يتجاوز 30 FPS.',
        'تدريب نماذج تصنيف سريعة بـ Scikit-learn للتعرف الفوري على الإشارات.',
        'معالجة حية مباشرة من الكاميرا بأقل استهلاك لموارد المعالج.',
      ],
      en: [
        'Extracted 21 key landmarks per hand frame at 30+ FPS with sub-15ms latency.',
        'Trained rapid Scikit-learn classifiers for instantaneous gesture mapping.',
        'Live webcam feed processing optimized for edge deployment.',
      ],
    },
    technologies: ['OpenCV', 'MediaPipe', 'Python', 'Scikit-learn', 'Computer Vision'],
    metrics: { label: { ar: 'السرعة اللحظية', en: 'Speed' }, value: '30+ FPS Live' },
    githubUrl: 'https://github.com/NourElanany/Training-projects-DeepLearning_ComputerVision-',
    isFeatured: true,
  },
  {
    id: 'rag-langchain4j',
    title: { ar: 'أنظمة RAG المؤسسية بلغة جافا باستخدام LangChain4j و Milvus', en: 'Enterprise Java RAG with LangChain4j & Milvus' },
    category: 'Enterprise AI & Java',
    categoryKey: 'genai',
    summary: {
      ar: 'بناء 3 مشاريع ذكاء اصطناعي توليدي على مستوى إنتاجي للمؤسسات باستخدام LangChain4j وقواعد بيانات المتجهات (Milvus & Zilliz).',
      en: 'Built 3 production-level Generative AI projects using LangChain4j and enterprise vector databases (Milvus, Zilliz).',
    },
    details: {
      ar: [
        'تكامل نماذج الذكاء الاصطناعي مع تطبيقات Java المؤسسية.',
        'تخزين المتجهات واسترجاع الوثائق بالاعتماد على تقنيات التضمين Milvus و Zilliz.',
        'تطبيق مبادئ الكود النظيف للحد من الهلوسة وخفض زمن الاستجابة.',
      ],
      en: [
        'Integrated state-of-the-art LLM capabilities into JVM enterprise applications.',
        'Vector store embedding indexing and similarity search with Milvus & Zilliz.',
        'Applied clean code principles to optimize LLM response quality and latency.',
      ],
    },
    technologies: ['LangChain4j', 'Milvus', 'Zilliz', 'RAG', 'Java', 'Vector Search'],
    metrics: { label: { ar: 'المشاريع', en: 'Projects' }, value: '3 Production RAGs' },
    githubUrl: 'https://github.com/NourElanany/rag-langchain4j',
  },
  {
    id: 'arabic-sentiment-analysis',
    title: { ar: 'نظام تحليل المشاعر للنصوص العربية (NLP & ML Benchmark)', en: 'Arabic Clinical & Text Sentiment Analysis' },
    category: 'Natural Language Processing & ML',
    categoryKey: 'ml',
    summary: {
      ar: 'خط أنابيب متكامل لمعالجة وتنظيف النصوص العربية المتقدمة، مع تقييم أكثر من 10 نماذج تعلم آلي كلاسيكية، وتحقيق أعلى دقة باستخدام TF-IDF ومصنف ExtraTrees.',
      en: 'Arabic text preprocessing and cleaning pipeline evaluating 10+ classical ML algorithms, yielding benchmark accuracy with TF-IDF and ExtraTrees Classifier.',
    },
    details: {
      ar: [
        'بناء خوارزميات متقدمة لمعالجة وتطبيع واستخلاص الجذور للنصوص العربية.',
        'تقييم ومقارنة أداء أكثر من 10 نماذج تعلم آلي مختلفة.',
        'تحقيق أعلى دقة تصنيف باستخدام مصفوفات TF-IDF ونموذج ExtraTrees Classifier.',
      ],
      en: [
        'Designed custom Arabic tokenization, normalization, and semantic preprocessing.',
        'Benchmarked 10+ classical machine learning classifiers on complex corpora.',
        'Achieved state-of-the-art results using TF-IDF vectorization and ExtraTrees.',
      ],
    },
    technologies: ['Python', 'NLP', 'Machine Learning', 'TF-IDF', 'ExtraTrees', 'Scikit-learn'],
    metrics: { label: { ar: 'النماذج', en: 'Models' }, value: '10+ Evaluated' },
    githubUrl: 'https://github.com/NourElanany/NLP-Neural-Networks',
  },
  {
    id: 'symphony-aide',
    title: { ar: 'Symphony AIDE — بيئة تطوير ذكية متطورة بلغة بايثون ورست (مشروع فريق عمل خاص)', en: 'Symphony AIDE — AI-First Microkernel Platform (Private Team Project)' },
    category: 'AI Systems & Reinforcement Learning',
    categoryKey: 'ai',
    summary: {
      ar: 'مشروع فريق عمل خاص: بيئة تطوير برمجية مصممة بمعمارية Microkernel تجمع بين سرعة لغة Rust ومرونة بايثون، ويديرها وكيل تعلم معزز PPO لتوزيع المهام الحوسبية.',
      en: 'Private collaborative team project: AI development platform featuring a dual-ensemble microkernel architecture with Rust for speed, Python for model orchestration, and a PPO agent.',
    },
    details: {
      ar: [
        'معمارية Microkernel متقدمة لدمج مكونات Rust فائقة الأداء مع نماذج بايثون.',
        'تطوير وكيل "Conductor" بالتعلم المعزز PPO لجدولة سير العمل وتوزيع الموارد الحوسبية.',
        'مشروع مغلق ومحمي لفريق العمل (Private Enterprise Codebase).',
      ],
      en: [
        'Designed a dual-ensemble microkernel architecture for AI-assisted software engineering.',
        'Developed "Conductor", a PPO-based reinforcement learning agent orchestrating workflows.',
        'Proprietary team collaboration codebase (Private Repository).',
      ],
    },
    technologies: ['Python', 'Rust', 'Reinforcement Learning (PPO)', 'Microkernel', 'Team Collaboration'],
    metrics: { label: { ar: 'المستودع', en: 'Access' }, value: '🔒 Private Team Repo' },
    githubUrl: '',
    isPrivateTeamRepo: true,
  },
  {
    id: 'sanad-rust-microservices',
    title: { ar: 'Sanad — منظومة خدمات مصغرة عالية الأداء بلغة Rust', en: 'Sanad — High-Performance Rust Microservices Engine' },
    category: 'Systems & High-Performance Engineering',
    categoryKey: 'ai',
    summary: {
      ar: 'منظومة خدمات مصغرة سريعة وآمنة للذاكرة مكتوبة بلغة Rust، تركز على تقديم أداء فائق وموثوقية عالية لمعالجة الطلبات المتزامنة لأحمال الذكاء الاصطناعي.',
      en: 'High-performance, memory-safe backend microservice architecture crafted in Rust, built for concurrent high-volume AI workload processing.',
    },
    details: {
      ar: [
        'الاستفادة من أمان الذاكرة في Rust (Zero-cost abstractions) دون جامع قمامة.',
        'معالجة متزامنة غير متزامنة (Asynchronous) بكفاءة مع استهلاك منخفض للموارد.',
        'بناء واجهات برمجية قوية مهيأة للاستخدام في بيئات الحوسبة السحابية.',
      ],
      en: [
        'Leveraged Rust zero-cost abstractions and memory safety with zero GC overhead.',
        'Asynchronous event loop handling concurrent high-throughput workloads.',
        'Resilient API service design tailored for containerized cloud deployment.',
      ],
    },
    technologies: ['Rust', 'Concurrency', 'High Performance', 'Microservices', 'Zero GC'],
    metrics: { label: { ar: 'السرعة', en: 'Speed' }, value: 'Rust Concurrency' },
    githubUrl: 'https://github.com/NourElanany/Sanad',
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'novegates',
    role: {
      ar: 'جامع بيانات ضمن فريق الهندسة (Data Collector, Engineering Team)',
      en: 'Data Collector, Engineering Team',
    },
    company: {
      ar: 'NOVEGATES',
      en: 'NOVEGATES',
    },
    period: {
      ar: 'يونيو 2026 – أكتوبر 2026',
      en: 'Jun 2026 – Oct 2026',
    },
    location: {
      ar: 'القاهرة، مصر',
      en: 'Cairo, Egypt',
    },
    points: {
      ar: [
        'العمل ضمن فريق الهندسة التقني في جمع وإعداد وهيكلة مجموعات البيانات التقنية.',
        'فحص جودة وتجهيز البيانات اللازمة لتدريب وتقييم نماذج الذكاء الاصطناعي بدقة وموثوقية عالية.',
      ],
      en: [
        'Worked in a data-collection role within the Engineering team.',
        'Validated, cleaned, and structured high-integrity technical datasets for model evaluation.',
      ],
    },
    technologies: ['Data Collection', 'Data Quality', 'Engineering Workflows', 'Python'],
    isCurrent: false,
  },
  {
    id: 'namasoft',
    role: {
      ar: 'متدرب في هندسة الذكاء الاصطناعي (AI Engineering Trainee)',
      en: 'AI Engineering Trainee',
    },
    company: {
      ar: 'NamaSoft',
      en: 'NamaSoft',
    },
    period: {
      ar: 'يوليو 2025 – نوفمبر 2025',
      en: 'Jul 2025 – Nov 2025',
    },
    location: {
      ar: 'القاهرة، مصر',
      en: 'Cairo, Egypt',
    },
    points: {
      ar: [
        'إتمام برنامج تدريب هندسة الذكاء الاصطناعي المكثف بنجاح على مدار 4 أشهر كاملة.',
        'بناء وتطوير واختبار حلول الذكاء الاصطناعي ونماذج معالجة اللغات الطبيعية وربطها مع أنظمة العمل الإنتاجية.',
      ],
      en: [
        'Completed a four-month intensive AI Engineering training program.',
        'Engineered, tested, and integrated applied machine learning and NLP solutions into enterprise workflows.',
      ],
    },
    technologies: ['AI Engineering', 'Machine Learning', 'NLP', 'Python', 'Enterprise Solutions'],
    isCurrent: false,
  },
  {
    id: 'nti-cv',
    role: {
      ar: 'متدرب رؤية حاسوبية (Computer Vision Trainee - تقييم 98% ممتاز)',
      en: 'Computer Vision Trainee — NTI (98% Excellent)',
    },
    company: {
      ar: 'المعهد القومي للاتصالات (NTI)',
      en: 'National Telecommunication Institute (NTI)',
    },
    period: {
      ar: 'يوليو 2025 – أغسطس 2025',
      en: 'Jul 2025 – Aug 2025',
    },
    location: {
      ar: 'القاهرة، مصر',
      en: 'Cairo, Egypt',
    },
    points: {
      ar: [
        'إتمام برنامج مكثف في الرؤية الحاسوبية لمدة 120 ساعة بنتيجة تقييم نهائي 98% (ممتاز).',
        'تنفيذ خطوط معالجة أولية للصور، وأنابيب اكتشاف الكائنات وتجزئة الصور، ومسارات نشر النماذج.',
        'خبرة عملية على مجموعات بيانات حقيقية وتحسين سرعة استدعاء النماذج (Inference Speed).',
      ],
      en: [
        'Completed 120-hour intensive Computer Vision program; final evaluation: 98% (Excellent).',
        'Implemented image preprocessing, object detection pipelines, and model deployment workflows.',
        'Hands-on experience with real-world datasets and model optimization for inference speed.',
      ],
    },
    technologies: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Object Detection', 'Inference Speed'],
    isCurrent: false,
  },
  {
    id: 'genai-training',
    role: {
      ar: 'متدرب في هندسة الذكاء الاصطناعي التوليدي والـ RAG',
      en: 'Generative AI & LLMs Trainee',
    },
    company: {
      ar: 'برنامج تدريب الذكاء الاصطناعي التوليدي المكثف',
      en: 'Generative AI Intensive Program',
    },
    period: {
      ar: 'صيف 2025',
      en: 'Summer 2025',
    },
    location: {
      ar: 'عن بُعد / هجين (Remote / Hybrid)',
      en: 'Remote / Hybrid',
    },
    points: {
      ar: [
        'إتمام أكثر من 90 ساعة تدريب عملي في النماذج اللغوية الكبيرة (LLMs) ومعماريات الذكاء الاصطناعي التوليدي.',
        'تصميم وتنفيذ أنظمة RAG متقدمة بالاعتماد على قواعد بيانات المتجهات Milvus و Zilliz.',
        'تطبيق التوجيه الديناميكي ومبادئ الكود النظيف لتحسين استجابة النماذج وخفض استهلاك التوكنز.',
      ],
      en: [
        'Completed 90+ hours of intensive hands-on training in Large Language Models and modern AI architectures.',
        'Designed and implemented RAG systems using Milvus and Zilliz vector databases.',
        'Applied dynamic routing and clean code principles to optimize LLM response quality and latency.',
      ],
    },
    technologies: ['LLMs', 'LangChain4j', 'Milvus', 'Zilliz', 'RAG', 'Dynamic Routing', 'Clean Code'],
    isCurrent: false,
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'nvidia-llm',
    title: 'Rapid Application Development with Large Language Models (LLMs)',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'Aug 23, 2025',
    credentialId: 'szVIDKH8Qty0uNZQ-XoS1w',
    image: '/images/certificates/nvidia-llm.png',
  },
  {
    id: 'nvidia-dl',
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'Aug 23, 2025',
    credentialId: 'etKar9diTCytwki9TmGvgA',
    image: '/images/certificates/nvidia-deep-learning.png',
  },
  {
    id: 'nti-cv-cert',
    title: 'Computer Vision Training (Score: 98% Excellent)',
    issuer: 'National Telecommunication Institute (NTI) & ITIDA',
    badgeText: 'Jul–Aug 2025',
    credentialId: 'Student ID: 230351 • 120 Hours',
    image: '/images/certificates/nti-cv.png',
  },
  {
    id: 'nvidia-prompt',
    title: 'Building LLM Applications With Prompt Engineering',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'Aug 21, 2025',
    credentialId: 'xdIqRIVRSx6oak0MIOFfMQ',
    image: '/images/certificates/nvidia-prompt-engineering.png',
  },
  {
    id: 'genai-achievement',
    title: 'Generative AI & LLMs Applied Engineering (90 Hours)',
    issuer: 'Certificate of Achievement',
    badgeText: 'Summer 2025',
    credentialId: '3 Production RAG Projects (Milvus & Zilliz)',
    image: '/images/certificates/genai-achievement.png',
  },
  {
    id: 'udemy-python-az',
    title: 'The Python Programming A-Z Definitive Diploma',
    issuer: 'Udemy • SDE Arts',
    badgeText: 'Feb 9, 2025',
    credentialId: 'UC-b1d5e03e-68ce-4939-ae7f-3b976c3ebf00',
    image: '/images/certificates/udemy-python-az.png',
  },
  {
    id: 'udemy-fundamentals',
    title: 'Python Development and Python Programming Fundamentals',
    issuer: 'Udemy • MTF Institute',
    badgeText: 'Aug 28, 2025',
    credentialId: 'UC-3d38dcf0-860e-4d1b-9cb7-d599c09af47b',
    image: '/images/certificates/udemy-fundamentals.png',
  },
];

export const technicalSkills = {
  programming: ['Python'],
  aiAndML: [
    'LLMs',
    'Retrieval-Augmented Generation (RAG)',
    'NLP',
    'Text Classification',
    'Sentiment Analysis',
    'Semantic Search',
    'Dense Embeddings',
    'LSTM',
    'BiLSTM',
    'CNN-LSTM',
    'Computer Vision',
  ],
  librariesAndFrameworks: [
    'scikit-learn',
    'TensorFlow / Keras',
    'PyTorch',
    'Sentence Transformers',
    'LangGraph',
    'FAISS',
    'ChromaDB',
    'Milvus',
    'OpenCV',
    'MediaPipe',
    'pandas',
    'NumPy',
  ],
  applicationsAndAPIs: [
    'Gradio',
    'Streamlit',
    'Flask',
    'OpenRouter API',
    'Docker',
    'Git / GitHub',
  ],
  languages: [
    { name: { ar: 'العربية (اللغة الأم)', en: 'Arabic (Native)' }, level: 'Native' },
    { name: { ar: 'الإنجليزية (مستوى متوسط B1)', en: 'English (B1 Intermediate)' }, level: 'B1 Intermediate' },
  ],
};
