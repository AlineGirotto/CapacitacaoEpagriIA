import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, Play, ChevronLeft, ChevronRight, X, Brain, Cpu, Globe, MessageSquare, Network, Sparkles, Zap, Bot, Database, Mail, Grid3x3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import QRCode from 'react-qr-code';
import { slides } from '../data/slides';
import logoEpagri from '../img/logoEpagri.png';
import logoGemini from '../img/logoGemini.png';
import logoNotebook from '../img/logonotebook.png';
import logoGmail from '../img/logoGmail.png';
import logoDocs from '../img/logoDocs.png';
import logoPlanilha from '../img/logoPlanilha.png';
import logoAprese from '../img/logoAprese.png';

const timelineIcons = [Brain, MessageSquare, Cpu, Globe, Zap, Network, Database, Bot, Sparkles];

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-epagri-green/20 rounded-full blur-[128px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-epagri-olive/20 rounded-full blur-[128px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px]"
      />
    </div>
  );
};

const BackgroundAnimation = ({ type }: { type?: string }) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random() * 1.5,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 35 // Negative delay to spread them across the screen immediately
    }));
  }, []);

  if (!type || type === 'none') return null;
  if (type === 'tech') return <TechBackground />;

  let icons: string[] = [];
  if (type === 'coffee') icons = ['☕', '🥐', '🍩', '🍪', '💬'];
  if (type === 'lunch') icons = ['🍽️', '🥗', '🍝', '🍎', '🥤'];
  if (type === 'minilab') icons = ['💻', '⚙️', '🧪', '🚀', '🧠', '💡'];
  if (type === 'challenge') icons = ['🎯', '🧗', '🧩', '🏆', '⛰️'];
  if (type === 'handson') icons = ['🛠️', '🔨', '🔧', '🙌', '💪'];
  if (type === 'celebration') icons = ['🎉', '🥳', '🎊', '🍾', '🎈'];
  if (type === 'google') icons = ['📱', '💻', '☁️', '🤖', '🌐'];
  if (type === 'question') icons = ['❓', '❔', '🤔', '💭', '🧐'];

  if (icons.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      <style>{`
        @keyframes floatUp {
          0% { top: 110%; }
          100% { top: -20%; }
        }
        @keyframes rotateFull {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{ 
            left: p.left,
            transform: `scale(${p.scale})`,
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `-${p.delay}s`
          }}
        >
          <span 
            className="text-6xl inline-block"
            style={{
              animation: `rotateFull ${p.duration}s linear infinite`,
              animationDelay: `-${p.delay}s`
            }}
          >
            {icons[i % icons.length]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Presentation() {
  const [activeSlideId, setActiveSlideId] = useState(slides[0].id);
  const [activeSlideContext, setActiveSlideContext] = useState('');
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const startSlideshow = async () => {
    const idx = slides.findIndex(s => s.id === activeSlideId);
    setSlideIndex(idx >= 0 ? idx : 0);
    setIsSlideshow(true);
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to enable fullscreen:", err);
    }
  };

  const exitSlideshow = async () => {
    setIsSlideshow(false);
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to exit fullscreen:", err);
    }
    setTimeout(() => {
      const el = document.getElementById(slides[slideIndex].id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setSlideIndex(prev => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setSlideIndex(prev => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isSlideshow) {
        setIsSlideshow(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isSlideshow]);

  useEffect(() => {
    if (!isSlideshow) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Escape') {
        exitSlideshow();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSlideshow, nextSlide, prevSlide]);

  useEffect(() => {
    if (isSlideshow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSlideshow]);

  // Sync activeSlideId when in slideshow
  useEffect(() => {
    if (isSlideshow) {
      setActiveSlideId(slides[slideIndex].id);
    }
  }, [slideIndex, isSlideshow]);

  // Update context when active slide changes
  useEffect(() => {
    const slide = slides.find(s => s.id === activeSlideId);
    if (slide) {
      setActiveSlideContext(`
        Título: ${slide.title}
        Subtítulo: ${slide.subtitle}
        Conteúdo: ${slide.content}
        Exemplos: ${slide.examples ? JSON.stringify(slide.examples) : 'Nenhum exemplo específico nesta seção.'}
      `);
    }
  }, [activeSlideId]);

  const getInitialAnimation = (type?: string) => {
    switch(type) {
      case 'fade': return { opacity: 0 };
      case 'slide': return { opacity: 0, x: -50 };
      case 'pulse': return { opacity: 0, scale: 0.9 };
      case 'bounce': return { opacity: 0, y: -50 };
      case 'float': return { opacity: 0, y: 50 };
      default: return { opacity: 0, y: 50 };
    }
  };

  const getWhileInViewAnimation = (type?: string) => {
    switch(type) {
      case 'fade': return { opacity: 1 };
      case 'slide': return { opacity: 1, x: 0 };
      case 'pulse': return { opacity: 1, scale: 1 };
      case 'bounce': return { opacity: 1, y: 0 };
      case 'float': return { opacity: 1, y: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  const renderSidebar = (slide: typeof slides[0], isDark: boolean) => (
    <div className="space-y-6 sticky top-28">
      {slide.qrCode && (
        <div className={`p-8 rounded-3xl border flex flex-col items-center justify-center text-center ${
          isDark ? 'bg-white/5 border-white/10' : 
          'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
        }`}>
          <h3 className={`text-xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-epagri-dark'
          }`}>
              Acesse o material
          </h3>
          <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
            <QRCode value={slide.qrCode} size={200} level="H" />
          </div>
          <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Escaneie com a câmera do seu celular
          </p>
        </div>
      )}

      {slide.links && (
        <div className="grid grid-cols-1 gap-4">
          {slide.links.map((link, idx) => {
            const getIconComponent = (iconName: string) => {
              const logoMap: { [key: string]: string } = {
                'mail': logoGmail,
                'file-text': logoDocs,
                'grid': logoPlanilha,
                'presentation': logoAprese,
              };
              
              const logoPath = logoMap[iconName];
              if (logoPath) {
                return <img src={logoPath} alt={iconName} className="h-6 w-6 object-contain" />;
              }
              return <ExternalLink size={24} />;
            };

            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-6 rounded-2xl transition-all ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
                    : 'bg-white border-2 border-epagri-light/20 hover:border-epagri-green shadow-sm hover:shadow-md'
                }`}
              >
                <span className={`font-bold text-lg ${
                  isDark ? 'text-white' : 'text-epagri-dark group-hover:text-epagri-green'
                }`}>{link.title}</span>
                <div className={isDark ? 'text-epagri-olive' : 'text-epagri-red'}>
                  {getIconComponent(link.icon)}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderSpotlightQuote = (quote: string, isDark: boolean) => (
    <motion.div
      initial={{ opacity: 0, x: 70, scale: 0.85, rotate: -2 }}
      whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -6, 0],
        scale: [1, 1.03, 1],
        boxShadow: [
          '0 0 0px rgba(237,28,36,0.10)',
          '0 0 28px rgba(237,28,36,0.45)',
          '0 0 8px rgba(166,206,57,0.35)',
          '0 0 0px rgba(237,28,36,0.10)',
        ],
      }}
      transition={{
        x: { duration: 0.55, ease: 'easeOut' },
        opacity: { duration: 0.55, ease: 'easeOut' },
        scale: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
        y: { duration: 1.9, repeat: Infinity, ease: 'easeInOut' },
        boxShadow: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`mt-4 ml-auto w-fit max-w-full rounded-2xl border px-5 py-3 text-right ${
        isDark
          ? 'border-epagri-olive/40 bg-white/10 text-white'
          : 'border-epagri-red/30 bg-white text-epagri-dark'
      }`}
    >
      <p className="font-display text-xl md:text-2xl font-extrabold tracking-tight">
        {quote}
      </p>
    </motion.div>
  );

  const renderFormulaCards = (
    cards: NonNullable<typeof slides[0]['formulaCards']>,
    isDark: boolean,
    isPresentation = false,
    startNumber = 1,
  ) => {
    const gridClass =
      cards.length === 2
        ? 'md:grid-cols-2'
        : cards.length === 3
          ? 'md:grid-cols-2 xl:grid-cols-3'
          : 'md:grid-cols-2';

    return (
      <div className={`mt-8 grid grid-cols-1 ${gridClass} gap-5 md:gap-6`}>
        {cards.map((card, idx) => (
          <motion.div
            key={`${card.name}-${idx}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            animate={isPresentation ? { opacity: 1, y: 0, scale: 1 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
            className={`rounded-3xl border p-6 md:p-7 ${
              isDark
                ? 'bg-white/5 border-white/10 text-white'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 text-slate-800'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`font-display text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-epagri-dark'}`}>
                  {card.name}
                </h3>
                {card.acronym && (
                  <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>
                    {card.acronym}
                  </p>
                )}
              </div>
              <div className={`shrink-0 rounded-2xl px-3 py-2 text-sm font-black ${isDark ? 'bg-epagri-olive text-epagri-dark' : 'bg-epagri-dark text-white'}`}>
                {String(startNumber + idx).padStart(2, '0')}
              </div>
            </div>

            <p className={`mt-4 text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              {card.description}
            </p>

            <div className={`mt-5 rounded-2xl p-4 ${isDark ? 'bg-white/5' : 'bg-slate-50'}`}>
              <p className={`text-xs uppercase tracking-[0.18em] font-bold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                {card.exampleTitle || 'Exemplo'}
              </p>
              <div className="space-y-2">
                {card.exampleItems.map((item, itemIdx) => (
                  <div key={`${card.name}-item-${itemIdx}`} className="flex items-start gap-3">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${isDark ? 'bg-epagri-olive' : 'bg-epagri-red'}`}></span>
                    <p className={`text-sm md:text-[15px] leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderExampleText = (text: string, isDark: boolean) => {
    const lines = text.split('\n');

    return (
      <p className={`text-sm md:text-base italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          const match = trimmed.match(/^([^:]+):\s*(.*)$/);

          return (
            <React.Fragment key={`${trimmed}-${idx}`}>
              {trimmed.length === 0 ? (
                <br />
              ) : match ? (
                <>
                  <strong>{match[1]}:</strong> {match[2]}
                </>
              ) : (
                line
              )}
              {idx < lines.length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </p>
    );
  };

  const renderProductBadge = (
    badge: NonNullable<typeof slides[0]['productBadge']>,
    isDark: boolean,
    isPresentation = false,
  ) => {
    const isGemini = badge === 'gemini';
    const imageSrc = isGemini ? logoGemini : logoNotebook;
    const label = isGemini ? 'Gemini' : 'NotebookLM';
    const href = isGemini ? 'https://gemini.google.com' : 'https://notebooklm.google.com';

    return (
      <motion.a
        initial={{ opacity: 0, x: 20, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        animate={isPresentation ? { opacity: 1, x: 0, scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${label}`}
        className={`inline-flex items-center rounded-2xl border px-4 py-3 shadow-lg transition-transform hover:scale-[1.03] ${
          isDark ? 'bg-white/10 border-white/15' : 'bg-white border-slate-200'
        }`}
      >
        <img
          src={imageSrc}
          alt={`Logo ${label}`}
          className={`${isPresentation ? 'h-14 md:h-16' : 'h-12 md:h-14'} w-auto object-contain drop-shadow-sm`}
        />
      </motion.a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-epagri-olive/30 relative">
      {/* Global Tech Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-40">
        <div className="flex items-center gap-4">
          {/* Epagri Logo */}
          <div className="flex items-center gap-3">
            <img src={logoEpagri} alt="Logo Epagri" className="h-10 w-auto drop-shadow-sm" />
          </div>
          <div className="hidden md:block h-8 w-px bg-slate-200 mx-2"></div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">IA na Prática</h1>
            <p className="text-xs text-epagri-green font-semibold uppercase tracking-wider">Ecossistema Google e Produtividade</p>
          </div>
        </div>
        
        {/* Progress Dots & Present Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-2 mr-4">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={`#${slide.id}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeSlideId === slide.id ? 'bg-epagri-red w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para ${slide.title}`}
              />
            ))}
          </div>
          <button
            onClick={startSlideshow}
            className="flex items-center gap-2 bg-epagri-green text-white px-4 py-2 rounded-full font-bold hover:bg-epagri-dark transition-colors text-sm shadow-md"
          >
            <Play size={16} className="fill-current" />
            <span className="hidden sm:inline">Apresentar</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {slides.map((slide, index) => {
          const isDark = slide.theme === 'dark';
          const isAccent = slide.theme === 'accent';
          const shouldUseWideExamples = slide.id === 'minilab-1';
          
          return (
            <section
              key={slide.id}
              id={slide.id}
              className={`min-h-[80vh] flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden ${
                isDark ? 'bg-epagri-dark text-white' : 
                isAccent ? 'bg-slate-100 text-slate-900' : 
                'bg-white text-slate-900'
              }`}
            >
              <BackgroundAnimation type={slide.backgroundAnimation} />
              {/* Decorative elements */}
              {isDark && (
                <div className="absolute top-0 right-0 w-96 h-96 bg-epagri-green rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
              )}
              {isAccent && (
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-epagri-olive rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
              )}

              <motion.div
                initial={getInitialAnimation(slide.animationType)}
                whileInView={getWhileInViewAnimation(slide.animationType)}
                viewport={{ once: true, margin: "-20%" }}
                onViewportEnter={() => setActiveSlideId(slide.id)}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-7xl mx-auto w-full relative z-10"
              >
                {/* Section Header */}
                <div className="mb-6 md:mb-8 border-b border-slate-200/20 pb-4 md:pb-6">
                  <div className={`inline-flex items-center gap-3 px-5 py-2 text-sm font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6 shadow-sm ${
                    isDark ? 'bg-epagri-olive text-epagri-dark' : 
                    'bg-epagri-dark text-white'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current opacity-50"></span>
                    {slide.subtitle}
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight ${
                      isDark ? 'text-white' : 'text-epagri-dark'
                    }`}>
                      {slide.id === 'welcome' ? (
                        <motion.span
                          initial={{ backgroundPosition: '0% 50%' }}
                          animate={{ backgroundPosition: '100% 50%' }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                          className="bg-gradient-to-r from-white via-epagri-olive to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(166,206,57,0.3)]"
                        >
                          {slide.title}
                        </motion.span>
                      ) : (
                        slide.title
                      )}
                    </h2>

                    {slide.productBadge && (
                      <div className="flex justify-end md:shrink-0 md:pt-2 md:pl-6 md:ml-6">
                        {renderProductBadge(slide.productBadge, isDark)}
                      </div>
                    )}
                  </div>

                  {slide.spotlightQuote && renderSpotlightQuote(slide.spotlightQuote, isDark)}
                </div>

                {/* Section Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className={slide.links || slide.qrCode ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'}>
                    <div className={`prose prose-base md:prose-lg max-w-none leading-relaxed ${
                      isDark ? 'prose-invert prose-p:text-slate-200 prose-strong:text-white prose-li:text-slate-200' : 
                      'prose-slate prose-headings:text-epagri-dark prose-a:text-epagri-green hover:prose-a:text-epagri-dark prose-strong:text-slate-900'
                    }`}>
                      <ReactMarkdown>{slide.content}</ReactMarkdown>
                    </div>

                    {slide.formulaCards && renderFormulaCards(slide.formulaCards, isDark, false, slide.formulaStartNumber || 1)}


                    {slide.timeline && (
                      <div className="mt-8 md:mt-16 mb-4 md:mb-8 relative w-full flex items-center justify-between px-1 md:px-2">
                        {/* Main horizontal line */}
                        <div className={`absolute left-2 right-2 h-0.5 md:h-1 top-1/2 -translate-y-1/2 z-0 rounded-full ${isDark ? 'bg-epagri-olive/30' : 'bg-epagri-green/30'}`}></div>
                        
                        {slide.timeline.map((item, idx) => {
                          const isTopText = idx % 2 === 0;
                          const Icon = timelineIcons[idx % timelineIcons.length];
                          const isFirst = idx === 0;
                          const isLast = idx === slide.timeline!.length - 1;
                          const cardPositionClass = isFirst ? 'left-0' : isLast ? 'right-0' : 'left-1/2 -translate-x-1/2';
                          
                          return (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="relative z-10 hover:z-50 flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
                            >
                              {/* Top Section */}
                              <div className="relative flex flex-col items-center justify-end h-24 md:h-36 mb-1 w-full px-0.5 md:px-1">
                                {isTopText ? (
                                  <>
                                    <div className="flex flex-col items-center justify-end w-full transition-opacity duration-300 group-hover:opacity-0">
                                      <div className={`text-center mb-1 md:mb-2 w-full`}>
                                        <div className={`text-[8px] md:text-[11px] leading-tight line-clamp-3 md:line-clamp-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                          <span className={`font-bold block mb-0.5 truncate ${isDark ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                          <span className="hidden md:inline">{item.description}</span>
                                        </div>
                                      </div>
                                      <div className={`font-display font-black text-xs md:text-xl ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <div className={`w-px md:w-0.5 h-3 md:h-6 mt-1 ${isDark ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                    </div>
                                    
                                    {/* Hover Card for Top */}
                                    <div className={`absolute bottom-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100 ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                                      <div className={`font-display font-black text-sm md:text-base mb-1 ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <span className={`font-bold block mb-1 text-xs md:text-sm ${isDark ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                      <span className={`text-[10px] md:text-xs leading-relaxed block ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</span>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 md:mb-2 shadow-md ${isDark ? 'bg-epagri-olive text-epagri-dark' : 'bg-epagri-dark text-white'}`}>
                                      <Icon className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                    <div className={`w-px md:w-0.5 h-3 md:h-6 mt-1 ${isDark ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                  </>
                                )}
                              </div>

                              {/* Center Dot */}
                              <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full border-[1.5px] md:border-[3px] z-10 ${isDark ? 'bg-epagri-dark border-epagri-olive' : 'bg-white border-epagri-green'}`}></div>

                              {/* Bottom Section */}
                              <div className="relative flex flex-col items-center justify-start h-24 md:h-36 mt-1 w-full px-0.5 md:px-1">
                                {!isTopText ? (
                                  <>
                                    <div className="flex flex-col items-center justify-start w-full transition-opacity duration-300 group-hover:opacity-0">
                                      <div className={`w-px md:w-0.5 h-3 md:h-6 mb-1 ${isDark ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                      <div className={`font-display font-black text-xs md:text-xl ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <div className={`text-center mt-1 md:mt-2 w-full`}>
                                        <div className={`text-[8px] md:text-[11px] leading-tight line-clamp-3 md:line-clamp-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                          <span className={`font-bold block mb-0.5 truncate ${isDark ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                          <span className="hidden md:inline">{item.description}</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Hover Card for Bottom */}
                                    <div className={`absolute top-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100 ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                                      <div className={`font-display font-black text-sm md:text-base mb-1 ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <span className={`font-bold block mb-1 text-xs md:text-sm ${isDark ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                      <span className={`text-[10px] md:text-xs leading-relaxed block ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</span>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`w-px md:w-0.5 h-3 md:h-6 mb-1 ${isDark ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                    <div className={`w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mt-1 md:mt-2 shadow-md ${isDark ? 'bg-epagri-olive text-epagri-dark' : 'bg-epagri-dark text-white'}`}>
                                      <Icon className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                  </>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {slide.examples && !shouldUseWideExamples && (
                      <div className={`mt-12 grid grid-cols-1 gap-8 mx-auto ${
                        slide.examples.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 max-w-6xl'
                      }`}>
                        {slide.examples.map((ex, idx) => (
                          <div key={idx} className={`p-7 md:p-8 rounded-3xl border min-h-[230px] w-full ${
                            isDark ? 'bg-white/5 border-white/10' : 
                            'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                          }`}>
                            <h3 className={`text-lg font-bold flex items-center gap-2 mb-3 ${
                              isDark ? 'text-white' : 'text-epagri-dark'
                            }`}>
                              <CheckCircle2 className={isDark ? 'text-epagri-olive' : 'text-epagri-green'} size={20} />
                              {ex.area}
                            </h3>
                            {renderExampleText(ex.text, isDark)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sidebar (Links or QRCode only) */}
                  {(slide.links || slide.qrCode) && (
                    <div className="lg:col-span-5 xl:col-span-4">
                      {renderSidebar(slide, isDark)}
                    </div>
                  )}
                </div>

                {slide.examples && shouldUseWideExamples && (
                  <div className={`mt-12 grid grid-cols-1 gap-8 mx-auto ${
                    slide.examples.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 max-w-6xl'
                  }`}>
                    {slide.examples.map((ex, idx) => (
                      <div key={idx} className={`p-7 md:p-8 rounded-3xl border min-h-[230px] w-full ${
                        isDark ? 'bg-white/5 border-white/10' : 
                        'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                      }`}>
                        <h3 className={`text-lg font-bold flex items-center gap-2 mb-3 ${
                          isDark ? 'text-white' : 'text-epagri-dark'
                        }`}>
                          <CheckCircle2 className={isDark ? 'text-epagri-olive' : 'text-epagri-green'} size={20} />
                          {ex.area}
                        </h3>
                        {renderExampleText(ex.text, isDark)}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </section>
          );
        })}
      </main>

      {/* Slideshow Overlay */}
      <AnimatePresence>
        {isSlideshow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] flex flex-col justify-center overflow-hidden ${
              slides[slideIndex].theme === 'dark' ? 'bg-epagri-dark text-white' : 
              slides[slideIndex].theme === 'accent' ? 'bg-slate-100 text-slate-900' : 
              'bg-white text-slate-900'
            }`}
          >
            <BackgroundAnimation key={`bg-${slideIndex}`} type={slides[slideIndex].backgroundAnimation} />
            {/* Decorative elements */}
            {slides[slideIndex].theme === 'dark' && (
              <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-epagri-green rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            )}
            {slides[slideIndex].theme === 'accent' && (
              <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-epagri-olive rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            )}

            <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-12 relative z-10 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ 
                    opacity: 0, 
                    x: direction > 0 ? 50 : direction < 0 ? -50 : 0 
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0 
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: direction > 0 ? -50 : direction < 0 ? 50 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Section Header */}
                <div className="mb-6 md:mb-8 border-b border-slate-200/20 pb-4 md:pb-6">
                  <div className={`inline-flex items-center gap-3 px-5 py-2 text-sm md:text-base font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6 shadow-sm ${
                    slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive text-epagri-dark' : 
                    'bg-epagri-dark text-white'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current opacity-50"></span>
                    {slides[slideIndex].subtitle}
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight ${
                      slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'
                    }`}>
                      {slides[slideIndex].id === 'welcome' ? (
                        <motion.span
                          initial={{ backgroundPosition: '0% 50%' }}
                          animate={{ backgroundPosition: '100% 50%' }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                          className="bg-gradient-to-r from-white via-epagri-olive to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(166,206,57,0.3)]"
                        >
                          {slides[slideIndex].title}
                        </motion.span>
                      ) : (
                        slides[slideIndex].title
                      )}
                    </h2>

                    {slides[slideIndex].productBadge && (
                      <div className="flex justify-end md:shrink-0 md:pt-2 md:pl-6 md:ml-6">
                        {renderProductBadge(slides[slideIndex].productBadge, slides[slideIndex].theme === 'dark', true)}
                      </div>
                    )}
                  </div>

                  {slides[slideIndex].spotlightQuote && renderSpotlightQuote(slides[slideIndex].spotlightQuote, slides[slideIndex].theme === 'dark')}
                </div>

                {/* Section Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className={slides[slideIndex].links || slides[slideIndex].qrCode ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'}>
                    <div className={`prose prose-lg md:prose-xl max-w-none leading-relaxed ${
                      slides[slideIndex].theme === 'dark' ? 'prose-invert prose-p:text-slate-200 prose-strong:text-white prose-li:text-slate-200' : 
                      'prose-slate prose-headings:text-epagri-dark prose-a:text-epagri-green hover:prose-a:text-epagri-dark prose-strong:text-slate-900'
                    }`}>
                      <ReactMarkdown>{slides[slideIndex].content}</ReactMarkdown>
                    </div>

                    {slides[slideIndex].formulaCards && renderFormulaCards(slides[slideIndex].formulaCards, slides[slideIndex].theme === 'dark', true, slides[slideIndex].formulaStartNumber || 1)}


                    {slides[slideIndex].timeline && (
                      <div className="mt-8 md:mt-16 mb-4 md:mb-8 relative w-full flex items-center justify-between px-1 md:px-2">
                        {/* Main horizontal line */}
                        <div className={`absolute left-2 right-2 h-0.5 md:h-1 top-1/2 -translate-y-1/2 z-0 rounded-full ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive/30' : 'bg-epagri-green/30'}`}></div>
                        
                        {slides[slideIndex].timeline.map((item, idx) => {
                          const isTopText = idx % 2 === 0;
                          const Icon = timelineIcons[idx % timelineIcons.length];
                          const isFirst = idx === 0;
                          const isLast = idx === slides[slideIndex].timeline!.length - 1;
                          const cardPositionClass = isFirst ? 'left-0' : isLast ? 'right-0' : 'left-1/2 -translate-x-1/2';
                          
                          return (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="relative z-10 hover:z-50 flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
                            >
                              {/* Top Section */}
                              <div className="relative flex flex-col items-center justify-end h-24 md:h-36 mb-1 w-full px-0.5 md:px-1">
                                {isTopText ? (
                                  <>
                                    <div className="flex flex-col items-center justify-end w-full transition-opacity duration-300 group-hover:opacity-0">
                                      <div className={`text-center mb-1 md:mb-2 w-full`}>
                                        <div className={`text-[8px] md:text-[11px] leading-tight line-clamp-3 md:line-clamp-4 ${slides[slideIndex].theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                          <span className={`font-bold block mb-0.5 truncate ${slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                          <span className="hidden md:inline">{item.description}</span>
                                        </div>
                                      </div>
                                      <div className={`font-display font-black text-xs md:text-xl ${slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <div className={`w-px md:w-0.5 h-3 md:h-6 mt-1 ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                    </div>
                                    
                                    {/* Hover Card for Top */}
                                    <div className={`absolute bottom-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100 ${slides[slideIndex].theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                                      <div className={`font-display font-black text-sm md:text-base mb-1 ${slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <span className={`font-bold block mb-1 text-xs md:text-sm ${slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                      <span className={`text-[10px] md:text-xs leading-relaxed block ${slides[slideIndex].theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</span>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 md:mb-2 shadow-md ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive text-epagri-dark' : 'bg-epagri-dark text-white'}`}>
                                      <Icon className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                    <div className={`w-px md:w-0.5 h-3 md:h-6 mt-1 ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                  </>
                                )}
                              </div>

                              {/* Center Dot */}
                              <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full border-[1.5px] md:border-[3px] z-10 ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-dark border-epagri-olive' : 'bg-white border-epagri-green'}`}></div>

                              {/* Bottom Section */}
                              <div className="relative flex flex-col items-center justify-start h-24 md:h-36 mt-1 w-full px-0.5 md:px-1">
                                {!isTopText ? (
                                  <>
                                    <div className="flex flex-col items-center justify-start w-full transition-opacity duration-300 group-hover:opacity-0">
                                      <div className={`w-px md:w-0.5 h-3 md:h-6 mb-1 ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                      <div className={`font-display font-black text-xs md:text-xl ${slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <div className={`text-center mt-1 md:mt-2 w-full`}>
                                        <div className={`text-[8px] md:text-[11px] leading-tight line-clamp-3 md:line-clamp-4 ${slides[slideIndex].theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                          <span className={`font-bold block mb-0.5 truncate ${slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                          <span className="hidden md:inline">{item.description}</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Hover Card for Bottom */}
                                    <div className={`absolute top-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100 ${slides[slideIndex].theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                                      <div className={`font-display font-black text-sm md:text-base mb-1 ${slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'}`}>{item.year}</div>
                                      <span className={`font-bold block mb-1 text-xs md:text-sm ${slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'}`}>{item.title}</span>
                                      <span className={`text-[10px] md:text-xs leading-relaxed block ${slides[slideIndex].theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</span>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`w-px md:w-0.5 h-3 md:h-6 mb-1 ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive' : 'bg-epagri-green'}`}></div>
                                    <div className={`w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mt-1 md:mt-2 shadow-md ${slides[slideIndex].theme === 'dark' ? 'bg-epagri-olive text-epagri-dark' : 'bg-epagri-dark text-white'}`}>
                                      <Icon className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>
                                  </>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {slides[slideIndex].examples && slides[slideIndex].id !== 'minilab-1' && (
                      <div className={`mt-12 grid grid-cols-1 gap-8 mx-auto ${
                        slides[slideIndex].examples.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 max-w-6xl'
                      }`}>
                        {slides[slideIndex].examples.map((ex, idx) => (
                          <div key={idx} className={`p-7 md:p-8 rounded-3xl border min-h-[230px] w-full ${
                            slides[slideIndex].theme === 'dark' ? 'bg-white/5 border-white/10' : 
                            'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                          }`}>
                            <h3 className={`text-lg font-bold flex items-center gap-2 mb-3 ${
                              slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'
                            }`}>
                              <CheckCircle2 className={slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'} size={20} />
                              {ex.area}
                            </h3>
                            {renderExampleText(ex.text, slides[slideIndex].theme === 'dark')}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  {(slides[slideIndex].links || slides[slideIndex].qrCode) && (
                    <div className="lg:col-span-5 xl:col-span-4">
                      {renderSidebar(slides[slideIndex], slides[slideIndex].theme === 'dark')}
                    </div>
                  )}
                </div>

                {slides[slideIndex].examples && slides[slideIndex].id === 'minilab-1' && (
                  <div className={`mt-12 grid grid-cols-1 gap-8 mx-auto ${
                    slides[slideIndex].examples.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 max-w-6xl'
                  }`}>
                    {slides[slideIndex].examples.map((ex, idx) => (
                      <div key={idx} className={`p-7 md:p-8 rounded-3xl border min-h-[230px] w-full ${
                        slides[slideIndex].theme === 'dark' ? 'bg-white/5 border-white/10' : 
                        'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                      }`}>
                        <h3 className={`text-lg font-bold flex items-center gap-2 mb-3 ${
                          slides[slideIndex].theme === 'dark' ? 'text-white' : 'text-epagri-dark'
                        }`}>
                          <CheckCircle2 className={slides[slideIndex].theme === 'dark' ? 'text-epagri-olive' : 'text-epagri-green'} size={20} />
                          {ex.area}
                        </h3>
                        {renderExampleText(ex.text, slides[slideIndex].theme === 'dark')}
                      </div>
                    ))}
                  </div>
                )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[70] bg-black/40 backdrop-blur-md text-white px-6 py-3 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-bold mr-2">{slideIndex + 1} / {slides.length}</span>
              <button onClick={prevSlide} disabled={slideIndex === 0} className="p-2 rounded-full hover:bg-white/20 disabled:opacity-30 transition-colors"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} disabled={slideIndex === slides.length - 1} className="p-2 rounded-full hover:bg-white/20 disabled:opacity-30 transition-colors"><ChevronRight size={24} /></button>
              <div className="w-px h-6 bg-white/30 mx-2"></div>
              <button onClick={exitSlideshow} className="p-2 rounded-full hover:bg-white/20 transition-colors" title="Sair da apresentação"><X size={24} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
