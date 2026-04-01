import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Lightbulb, CheckCircle2, Coffee, UtensilsCrossed } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { slides } from '../data/slides';

export default function SlideDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentSlide = slides[currentIndex];

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < slides.length) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md">
            <Lightbulb className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Capacitação IA na Prática</h1>
            <p className="text-sm text-emerald-600 font-medium">EPAGRI - Ecossistema Google</p>
          </div>
        </div>
        
        {/* Progress Bar with Indicators */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium text-slate-500">
          <span>{currentIndex + 1}</span>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span>{slides.length}</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Slide Area */}
        <div className="flex-1 relative overflow-hidden bg-slate-100/50 flex flex-col">
          <div className="flex-1 relative w-full max-w-5xl mx-auto p-4 md:p-8 lg:p-12 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-full"
              >
                {/* Slide Header */}
                <div className="bg-emerald-50 border-b border-emerald-100 p-8 md:px-12">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {currentSlide.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {currentSlide.title}
                  </h2>
                </div>

                {/* Slide Body */}
                <div className="p-8 md:px-12 overflow-y-auto flex-1">
                  <div className="prose prose-lg prose-slate max-w-none prose-headings:text-emerald-800 prose-a:text-emerald-600 hover:prose-a:text-emerald-500 prose-strong:text-slate-800">
                    <ReactMarkdown>{currentSlide.content}</ReactMarkdown>
                  </div>

                  {/* Examples Section */}
                  {currentSlide.examples && (
                    <div className="mt-8 space-y-4">
                      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-500" size={20} />
                        Exemplos Práticos na EPAGRI
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentSlide.examples.map((ex, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">
                              Área: {ex.area}
                            </span>
                            <p className="text-sm text-slate-700 italic">"{ex.text}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links Section */}
                  {currentSlide.links && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentSlide.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-4 bg-white border-2 border-emerald-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all shadow-sm hover:shadow-md"
                        >
                          <span className="font-semibold text-slate-800 group-hover:text-emerald-700">{link.title}</span>
                          <ExternalLink size={20} className="text-emerald-400 group-hover:text-emerald-600" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="h-20 bg-white border-t border-slate-200 flex items-center justify-between px-6 md:px-12 z-10 shrink-0">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              <ChevronLeft size={20} />
              Anterior
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-emerald-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg"
            >
              Próximo
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="w-full lg:w-[400px] xl:w-[450px] bg-slate-100 border-l border-slate-200 p-4 shrink-0 flex flex-col h-[500px] lg:h-auto">
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-800">Assistente de Dúvidas</h3>
            <p className="text-sm text-slate-600 mt-2">
              O modo principal da apresentação usa um robô tutor contextual.
              Este layout alternativo foi mantido apenas como fallback.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
