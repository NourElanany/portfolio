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
    ar: 'مهندس ذكاء اصطناعي | AI Engineer',
    en: 'AI Engineer | Computer Vision & Generative AI',
  },
  currentTitle: {
    ar: 'مهندس ذكاء اصطناعي (AI Engineer)',
    en: 'Artificial Intelligence Engineer',
  },
  subRole: {
    ar: 'التخصص الأساسي: هندسة الذكاء الاصطناعي (AI Engineering) مع تميز استثنائي في الرؤية الحاسوبية (Computer Vision) والذكاء الاصطناعي التوليدي (Generative AI)',
    en: 'Core Discipline: AI Engineering specializing in Computer Vision, Deep Learning & Generative AI',
  },
  bio: {
    ar: 'مهندس ذكاء اصطناعي في السنة النهائية بكلية الحاسبات والذكاء الاصطناعي - جامعة بنها (دفعة 2026). خبرة عملية في تصميم ونشر أنظمة الذكاء الاصطناعي المتكاملة، بدءاً من نماذج التشخيص الطبي بالرؤية الحاسوبية بدقة 94%، وتطوير بيئات هندسية متطورة بلغة بايثون ورست، إلى هندسة نماذج الـ LLMs وخطوط أنابيب الـ RAG، معتمد من NVIDIA ومتدرب بامتياز 98% في معهد NTI.',
    en: 'Final-year Artificial Intelligence Engineer with hands-on experience in Computer Vision, Deep Learning, and Generative AI. Proven ability to design and deploy end-to-end AI systems, including multi-modal medical diagnosis models (94% accuracy) and an AI-first development environment using Python and Rust. NVIDIA-certified with practical training in LLM orchestration, RAG pipelines (Milvus, Zilliz), and MLOps practices.',
  },
  contacts: {
    email: 'elananynour@gmail.com',
    phone: '+20 112 998 2673',
    whatsapp: 'https://wa.me/201129982673',
    linkedin: 'https://linkedin.com/in/nour-eldin-elanany',
    github: 'https://github.com/NourElanany',
  },
  education: {
    degree: {
      ar: 'بكالوريوس الذكاء الاصطناعي (B.Sc. in AI)',
      en: 'B.Sc. in Artificial Intelligence',
    },
    faculty: {
      ar: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
      en: 'Faculty of Computers & Artificial Intelligence, Benha University',
    },
    period: '2022 – 2026',
    focus: {
      ar: 'التعلم الآلي والروبوتات (Machine Learning & Robotics)',
      en: 'Focus: Machine Learning & Robotics',
    },
  },
  stats: [
    { value: 'AI Engineer', label: { ar: 'التخصص الأساسي', en: 'Core Specialization' } },
    { value: '98%', label: { ar: 'امتياز معهد NTI في الرؤية الحاسوبية', en: 'NTI Distinction in CV' } },
    { value: '94%', label: { ar: 'دقة التشخيص الطبي بالذكاء الاصطناعي', en: 'Medical AI Accuracy' } },
    { value: '15+', label: { ar: 'مشروع مفتوح المصدر على GitHub', en: 'GitHub AI Projects' } },
  ],
};

export const aiPillars: AIPillar[] = [
  {
    id: 'ai-engineering',
    title: { ar: 'هندسة ونشر أنظمة الذكاء الاصطناعي (AI Systems & MLOps)', en: 'End-to-End AI Engineering & MLOps' },
    description: {
      ar: 'تصميم وبناء حلول ذكاء اصطناعي إنتاجية متكاملة وقابلة للتوسع (Clean Architecture)، دمج كيرنل مزدوج بلغة بايثون ورست، ونشر النماذج بحاويات Docker و APIs عالية السرعة.',
      en: 'Designing scalable, production-ready AI solutions with clean architecture, dual Python & Rust kernels (Symphony AIDE), and low-latency API containerization.',
    },
    tools: ['Python', 'Rust', 'Docker', 'FastAPI', 'Microkernels', 'Clean Code'],
    badge: { ar: 'الـ Core الأساسي', en: 'Core Discipline' },
    metrics: 'Production AI',
  },
  {
    id: 'computer-vision',
    title: { ar: 'الرؤية الحاسوبية والتشخيص الطبي (Computer Vision)', en: 'Computer Vision & Visual Intelligence' },
    description: {
      ar: 'خطوط أنابيب متقدمة للدمج المبكر لصور الأشعة (X-Ray & CT) بدقة 94%، ومعالجة الفيديو المباشر واستخراج 21 مفصل هيكلي لليد بـ MediaPipe بسرعة تفوق 30 FPS.',
      en: 'State-of-the-art Multi-Modal early feature fusion for medical imaging (94% accuracy), and real-time 30+ FPS skeletal hand landmark tracking via MediaPipe.',
    },
    tools: ['OpenCV', 'MediaPipe', 'YOLO', 'Mask R-CNN', 'Medical Imaging', 'TensorFlow'],
    badge: { ar: 'دقة 94% | 30+ FPS', en: '94% Acc | 30+ FPS' },
    metrics: '94% Accuracy',
  },
  {
    id: 'generative-ai',
    title: { ar: 'الذكاء الاصطناعي التوليدي والـ RAG (Generative AI & LLMs)', en: 'Generative AI, LLMs & Vector RAG' },
    description: {
      ar: 'بناء وتدريب أنظمة استرجاع وتوليد RAG متقدمة بقواعد بيانات المتجهات (Milvus & Zilliz)، وتوجيه استفسارات النماذج لغوياً بـ LangGraph و LangChain4j لتقليل التكلفة بنسبة 70%.',
      en: 'Architecting high-precision RAG pipelines using Milvus & Zilliz vector databases, LangGraph query routing, and LangChain4j enterprise integration.',
    },
    tools: ['LLMs', 'LangGraph', 'LangChain4j', 'Milvus', 'Zilliz', 'ChromaDB', 'FAISS'],
    badge: { ar: 'توفير 70% تكلفة', en: '70% Cost Optimized' },
    metrics: 'Enterprise RAG',
  },
  {
    id: 'deep-learning',
    title: { ar: 'التعلم العميق والمعزز (Deep & Reinforcement Learning)', en: 'Deep & Reinforcement Learning (PPO)' },
    description: {
      ar: 'تصميم شبكات عصبية عميقة (CNNs, BiLSTM, GANs)، وتدريب وكيل تعلم معزز (PPO Conductor) لتنظيم المهام الحوسبية وجدولة الموارد بذكاء.',
      en: 'Designing high-throughput deep neural networks (CNNs, BiLSTM, GANs) and reinforcement learning agents (PPO) for autonomous resource orchestration.',
    },
    tools: ['PyTorch', 'TensorFlow', 'PPO RL', 'CNNs', 'BiLSTM', 'Transfer Learning'],
    badge: { ar: 'معتمد من NVIDIA', en: 'NVIDIA Certified' },
    metrics: 'Advanced RL & DL',
  },
];

export const allProjectsList: ProjectItem[] = [
  {
    id: 'symphony-aide',
    title: { ar: 'Symphony AIDE — بيئة تطوير ذكية متطورة بلغة بايثون ورست', en: 'Symphony AIDE — AI-First Python & Rust Platform' },
    category: 'AI Systems & Reinforcement Learning',
    categoryKey: 'ai',
    summary: {
      ar: 'بيئة تطوير برمجية متطورة مصممة بمعمارية Microkernel تجمع بين سرعة لغة Rust ومرونة Python، يديرها وكيل تعلم معزز PPO لتوزيع المهام الحوسبية والمساعدة البرمجية.',
      en: 'An AI-first development environment featuring a dual-ensemble microkernel architecture with Rust for speed, Python for model orchestration, and a PPO reinforcement agent.',
    },
    details: {
      ar: [
        'معمارية Microkernel متقدمة لدمج مكونات Rust فائقة الأداء مع نماذج بايثون.',
        'تطوير وكيل "Conductor" بالتعلم المعزز PPO لجدولة سير العمل وتوزيع الموارد الحوسبية.',
        'كود نظيف وأنظمة متزامنة آمنة للذاكرة موجهة لإنتاج برمجيات الذكاء الاصطناعي.',
      ],
      en: [
        'Designed a dual-ensemble microkernel architecture for AI-assisted software engineering.',
        'Developed "Conductor", a PPO-based reinforcement learning agent orchestrating workflows.',
        'Integrated Rust for zero-cost memory safety with Python for seamless AI pipelines.',
      ],
    },
    technologies: ['Python', 'Rust', 'Reinforcement Learning (PPO)', 'Microkernel', 'Clean Code'],
    metrics: { label: { ar: 'المعمارية', en: 'Architecture' }, value: 'Rust + Python Core' },
    githubUrl: 'https://github.com/NourElanany/Symphony-AIDE',
    isFeatured: true,
  },
  {
    id: 'disease-detection-cv',
    title: { ar: 'نظام تشخيص الأمراض بالرؤية الحاسوبية والدمج المبكر (دقة 94%)', en: 'Multi-Modal Pulmonary Disease Diagnostic System' },
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
    id: 'arabic-sentiment-analysis',
    title: { ar: 'نظام تحليل المشاعر للنصوص العربية (NLP & ML)', en: 'Arabic Clinical & Text Sentiment Analysis' },
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
    isFeatured: true,
  },
  {
    id: 'dynamic-llm-routing',
    title: { ar: 'نظام توجيه استفسارات الـ LLM الديناميكي (توفير 70% تكلفة)', en: 'Dynamic LLM Routing System (LangGraph)' },
    category: 'Generative AI & LLM Engineering',
    categoryKey: 'genai',
    summary: {
      ar: 'هندسة معمارية متطورة لتوجيه استفسارات المستخدمين ديناميكياً للنموذج الأنسب حسب صعوبة المهمة باستخدام LangGraph و Streamlit، مما وفر 70% من التكلفة الحوسبية.',
      en: 'Intelligent prompt router directing user queries to the optimal LLM based on task complexity using LangGraph, Python, and Streamlit, saving up to 70% compute costs.',
    },
    details: {
      ar: [
        'تصميم محرك تقييم يحلل صعوبة الاستفسار قبل إرساله للنماذج الباهظة.',
        'توفير حتى 70% من استهلاك التوكنز عبر التوجيه الذكي للنماذج الاقتصادية.',
        'لوحة تحكم Streamlit لمراقبة مسار القرارات وزمن الاستجابة والتكلفة.',
      ],
      en: [
        'Engineered an evaluation routing graph analyzing query intent and complexity.',
        'Saved up to 70% in token expenditure through smart tiered model dispatch.',
        'Built real-time Streamlit monitoring dashboard for routing metrics and latency.',
      ],
    },
    technologies: ['GenAI', 'LangGraph', 'LLM Routing', 'Streamlit', 'Python', 'Prompt Engineering'],
    metrics: { label: { ar: 'توفير التكلفة', en: 'Cost Saved' }, value: '70% Cost Optimized' },
    githubUrl: 'https://github.com/NourElanany/Dynamic-LLM-Routing-System',
  },
  {
    id: 'webmd-ai-pipeline',
    title: { ar: 'WebMD AI Pipeline — خط أنابيب متكامل من الـ ML إلى الـ RAG والـ LLM', en: 'WebMD AI Pipeline — End-to-End ML, RAG & LLM' },
    category: 'Healthcare Analytics & Generative AI',
    categoryKey: 'genai',
    summary: {
      ar: 'خط أنابيب ذكاء اصطناعي خماسي المراحل: تحليل بيانات (EDA)، تعلم آلي، تصنيف مشاعر بـ BiLSTM، بحث دلالي RAG بقاعدة متجهات، وتوليد إجابات دقيقة بنماذج لغوية.',
      en: 'Five-phase enterprise AI pipeline on WebMD drug reviews: exploratory data analysis, classical ML, BiLSTM sentiment classification, vector RAG, and OpenRouter LLM generation.',
    },
    details: {
      ar: [
        'بناء خط أنابيب متكامل يجمع 5 مراحل من الـ EDA حتى الـ RAG والـ LLM.',
        'واجهة تفاعلية بـ Tkinter تستعرض رسومات وتحليلات كل مرحلة على حدة.',
        'تخزين واسترجاع دلالي فائق الدقة لآلاف مراجعات المرضى باستخدام قواعد المتجهات.',
      ],
      en: [
        'Built full 5-stage pipeline bridging EDA, ML, BiLSTM, RAG, and LLM synthesis.',
        'Interactive Tkinter analytics visualizer rendering phase-by-phase model benchmarks.',
        'High-density vector indexing and similarity retrieval using ChromaDB.',
      ],
    },
    technologies: ['Scikit-learn', 'BiLSTM', 'ChromaDB', 'RAG', 'OpenRouter LLM', 'Python'],
    metrics: { label: { ar: 'مراحل الذكاء', en: 'Phases' }, value: '5-Stage Pipeline' },
    githubUrl: 'https://github.com/NourElanany/webmd-ai-pipeline-ml-rag-llm',
  },
  {
    id: 'rag-langchain4j',
    title: { ar: 'أنظمة RAG المؤسسية بلغة جافا باستخدام LangChain4j', en: 'Enterprise Java RAG with LangChain4j' },
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
    id: 'image-processing-studio',
    title: { ar: 'Image-Processing Studio — منصة معالجة الصور الرقمية المتقدمة', en: 'Image-Processing Studio — Advanced CV GUI' },
    category: 'Computer Vision Software',
    categoryKey: 'cv',
    summary: {
      ar: 'تطبيق برمجي مبني بلغة بايثون بواجهة مستخدم رسومية حديثة لتطبيق خوارزميات معالجة الصور مثل كشف الحواف (Edge Detection) والفلاتر الترددية.',
      en: 'Comprehensive Python desktop application providing an intuitive GUI for advanced digital image processing algorithms.',
    },
    details: {
      ar: [
        'تنفيذ خوارزميات كشف الحواف (Sobel, Canny, Prewitt) والفلاتر المكانية.',
        'واجهة استخدام عصرية تفاعلية تتيح معاينة الفروق بين العمليات في الوقت الفعلي.',
        'هندسة معمارية نظيفة تدعم التوسعة لأي خوارزميات تصنيف صور جديدة.',
      ],
      en: [
        'Implemented edge operators (Sobel, Canny, Prewitt) and spatial filters.',
        'Interactive modern UI enabling real-time visual comparison of processed filters.',
        'Modular, maintainable architecture designed for rapid algorithm prototyping.',
      ],
    },
    technologies: ['Digital Image Processing', 'OpenCV', 'GUI Architecture', 'Python'],
    metrics: { label: { ar: 'الفلاتر', en: 'Filters' }, value: 'Multi-Filter Suite' },
    githubUrl: 'https://github.com/NourElanany/Image-Processing',
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
  {
    id: 'arabic-rag-system',
    title: { ar: 'نظام الإجابة الذاتي على الأسئلة باللغة العربية (Enhanced RAG)', en: 'Arabic High-Precision RAG Q&A System' },
    category: 'Generative AI & NLP',
    categoryKey: 'genai',
    summary: {
      ar: 'نظام استرجاع معلومات متقدم يدمج بين البحث الدلالي بفهرس FAISS ومعالجة اللغة العربية المتقدمة للحد من الهلوسة وتقديم إجابات موثوقة.',
      en: 'Production-ready Arabic RAG question answering engine pairing FAISS semantic search with specialized Arabic preprocessing and hallucination mitigation.',
    },
    details: {
      ar: [
        'فهرسة دلالية عالية الكفاءة عبر FAISS Indexing للبحث فائق السرعة.',
        'خوارزميات تحليل واسترجاع السياق الدلالي الملائم باللغة العربية.',
        'تقييم موثوقية الإجابات وحساب درجات الثقة (Confidence Scoring).',
      ],
      en: [
        'High-speed semantic vector indexing using FAISS for low-latency retrieval.',
        'Engineered custom Arabic text normalization, tokenization, and context ranking.',
        'Implemented hallucination guards and answer confidence metrics.',
      ],
    },
    technologies: ['Arabic NLP', 'RAG', 'FAISS', 'Python', 'Vector Search'],
    metrics: { label: { ar: 'اللغة', en: 'Language' }, value: 'Arabic RAG' },
    githubUrl: 'https://github.com/NourElanany/RAG-Retrieval-Augmented-Generation-Q-A-System',
  },
  {
    id: 'workout-recommender',
    title: { ar: 'محرك توصيات التمارين الرياضية بالتعلم الآلي', en: 'Personalized Workout Recommender System' },
    category: 'Machine Learning',
    categoryKey: 'ml',
    summary: {
      ar: 'نظام توصية مخصص للتمارين الرياضية وخطة اللياقة البدنية مبني على خوارزميات التعلم الآلي لتخصيص البرامج بناء على أهداف ومستوى المتدرب.',
      en: 'Machine learning recommendation engine suggesting personalized fitness and workout regimens based on trainee goals, body metrics, and fitness levels.',
    },
    details: {
      ar: [
        'بناء خوارزميات فلترة مبنية على المحتوى لمطابقة التمارين المناسبة.',
        'تحليل المتغيرات البدنية وتوليد خطط تدريبية متوازنة ديناميكياً.',
        'توفير واجهة تفاعلية سهلة الاستخدام لاختبار التوصيات فورياً.',
      ],
      en: [
        'Engineered content-based filtering algorithms matching workouts to user profiles.',
        'Analyzed physiological variables to generate dynamically balanced workout splits.',
        'Interactive UI delivering real-time regimen adaptation and tracking.',
      ],
    },
    technologies: ['Machine Learning', 'Scikit-learn', 'Recommendation Systems', 'Python'],
    metrics: { label: { ar: 'النوع', en: 'Type' }, value: 'ML Recommender' },
    githubUrl: 'https://github.com/NourElanany/workout_recommender',
  },
  {
    id: 'assistant-my-pc',
    title: { ar: 'Assistant My PC — أداة أتمتة إدارة نظام التشغيل', en: 'Assistant My PC — OS Automation Engine' },
    category: 'System Automation',
    categoryKey: 'ai',
    summary: {
      ar: 'أداة برمجية بلغة بايثون مخصصة لمساعدة المستخدم في إدارة وتنظيم وأتمتة المهام اليومية على نظام التشغيل وتحسين إنتاجية النظام.',
      en: 'Custom Python software tool designed to manage, optimize, and automate desktop operating system tasks to improve productivity and performance.',
    },
    details: {
      ar: [
        'أتمتة المهام المتكررة وإدارة الموارد على الحاسوب.',
        'واجهة تفاعلية بسيطة وسريعة الاستجابة.',
        'بناء أدوات صيانة وتحسين أداء الذاكرة والملفات.',
      ],
      en: [
        'Automated routine OS tasks and resource monitoring routines.',
        'Responsive, lightweight interface for instant task execution.',
        'Maintenance utilities optimizing memory footprint and disk cleanup.',
      ],
    },
    technologies: ['Python', 'System Automation', 'OS Utilities'],
    metrics: { label: { ar: 'النوع', en: 'Type' }, value: 'Automation' },
    githubUrl: 'https://github.com/NourElanany/assistant_my_pc',
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'genai-training',
    role: {
      ar: 'متدرب في هندسة الذكاء الاصطناعي التوليدي (Generative AI Intensive Trainee)',
      en: 'Generative AI Intensive Training — Trainee',
    },
    company: {
      ar: 'برنامج تدريب الذكاء الاصطناعي التوليدي المكثف',
      en: 'Generative AI Intensive Training (Remote / Hybrid)',
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
        'إتمام أكثر من 90 ساعة تدريب عملي مكثف في النماذج اللغوية الكبيرة (LLMs) ومعماريات الذكاء الاصطناعي الحديثة.',
        'بناء 3 مشاريع ذكاء اصطناعي توليدي على المستوى الإنتاجي باستخدام LangChain4j.',
        'تصميم وتنفيذ أنظمة RAG متقدمة بالاعتماد على قواعد بيانات المتجهات Milvus و Zilliz.',
        'تطبيق التوجيه الديناميكي ومبادئ الكود النظيف لتحسين استجابة النماذج وخفض زمن الكمون (Latency).',
      ],
      en: [
        'Completed 90+ hours of intensive hands-on training in Large Language Models and modern AI architectures.',
        'Built 3 production-level Generative AI projects using LangChain4j.',
        'Designed and implemented RAG systems using Milvus and Zilliz vector databases.',
        'Applied dynamic routing and clean code principles to optimize LLM response quality and latency.',
      ],
    },
    technologies: ['LLMs', 'LangChain4j', 'Milvus', 'Zilliz', 'RAG', 'Dynamic Routing', 'Clean Code'],
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
      en: 'July 2025 – August 2025',
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
    technologies: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Object Detection', 'Model Deployment', 'Inference Speed'],
    isCurrent: false,
  },
  {
    id: 'academic-research',
    role: {
      ar: 'طالب وباحث هندسة ذكاء اصطناعي (AI Engineering Student & Researcher)',
      en: 'AI Engineering Student & Researcher',
    },
    company: {
      ar: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
      en: 'Faculty of Computers & Artificial Intelligence, Benha University',
    },
    period: {
      ar: 'سبتمبر 2022 – متوقع التخرج: 2026',
      en: 'September 2022 – Expected Graduation: 2026',
    },
    location: {
      ar: 'بنها، مصر',
      en: 'Benha, Egypt',
    },
    points: {
      ar: [
        'طالب في السنة النهائية ببرنامج الذكاء الاصطناعي، تخصص دقيق في التعلم الآلي والروبوتات (ML & Robotics).',
        'تطوير نظام تشخيص الأمراض الرئوية بالدمج المبكر لصور X-Ray و CT scans بدقة 94%.',
        'بناء أكثر من 15 مستودع كود مفتوح المصدر في مجالات الرؤية واللغات وهندسة النظم على GitHub.',
      ],
      en: [
        'Final-year Artificial Intelligence student focusing on Machine Learning & Robotics (Expected Graduation: 2026).',
        'Engineered 94% accurate multi-modal pulmonary diagnostic systems combining X-Ray & CT scans.',
        'Authored and published 15+ open-source AI projects across vision, NLP, and system engineering on GitHub.',
      ],
    },
    technologies: ['Machine Learning', 'Robotics', 'Python', 'C++', 'Java', 'Rust', 'Algorithms'],
    isCurrent: true,
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'nvidia-llms',
    title: 'Rapid Application Development with Large Language Models (LLMs)',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'NVIDIA Certified',
  },
  {
    id: 'nvidia-prompt',
    title: 'Building LLM Applications with Prompt Engineering',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'NVIDIA Certified',
  },
  {
    id: 'nvidia-dl',
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badgeText: 'NVIDIA Certified',
  },
  {
    id: 'nti-cv',
    title: 'Computer Vision Intensive Training (Score: 98% Excellent)',
    issuer: 'National Telecommunication Institute (NTI)',
    badgeText: 'NTI 98% Distinction',
  },
  {
    id: 'iti-ai',
    title: 'AI For Everyone',
    issuer: 'Mahara-Tech (Information Technology Institute - ITI)',
    badgeText: 'ITI Certified',
  },
  {
    id: 'udemy-python',
    title: 'The Python Programming A-Z Definitive Diploma',
    issuer: 'Udemy Professional Certification',
    badgeText: 'Python Diploma',
  },
];
