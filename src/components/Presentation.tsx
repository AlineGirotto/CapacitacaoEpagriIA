import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Brain, Cpu, Globe, MessageSquare, Network, Sparkles, Zap, Bot, Database, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import QRCode from 'react-qr-code';
import { slides } from '../data/slides';
import logoEpagri from '../img/logoEpagri.png';
import logoGemini from '../img/logoGemini.png';
import logoNotebook from '../img/logonotebook.png';
import logoGmail from '../img/logoGmail.png';
import logoDocs from '../img/logoDocs.png';
import logoPlanilha from '../img/logoPlanilha.png';
import logoAprese from '../img/logoAprese.png';
import imagemPresenca from '../img/presenca.png';

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

const BackgroundAnimation = ({
  type,
  productBadge,
}: {
  type?: string;
  productBadge?: 'gemini' | 'notebooklm';
}) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      scale: 0.5 + Math.random() * 1.5,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 35
    }));
  }, []);

  if (!type || type === 'none') return null;
  if (type === 'tech') return <TechBackground />;

  let icons: string[] = [];
  const useToolLogos = productBadge === 'gemini' || productBadge === 'notebooklm';
  if (type === 'coffee') icons = ['☕', '🥐', '🍩', '🍪', '💬'];
  if (type === 'lunch') icons = ['🍽️', '🥗', '🍝', '🍎', '🥤'];
  if (type === 'minilab') icons = ['💻', '⚙️', '🧪', '🚀', '🧠', '💡'];
  if (type === 'challenge') icons = ['🎯', '🧩', '🏆', '👾', '🏅'];
  if (type === 'handson') icons = ['🛠️', '🔨', '🔧', '🙌', '💪'];
  if (type === 'celebration') icons = ['🎉', '🥳', '🎊', '🍾', '🎈'];
  if (type === 'google') icons = ['📱', '💻', '☁️', '🤖', '🌐'];
  if (type === 'question') icons = ['❓', '❔', '🤔', '💭', '🧐'];
  if (type === 'prompt') icons = ['💬', '📝', '✍️', '⚙️', '📰'];
  if (type === 'marketplace') icons = ['🛒', '🏢', '💰', '📦', '🛍️'];
  if (type === 'pluss') icons = ['➕', '✨', '💡', '❓', '❗'];
  if (type === 'leis') icons = ['⚖️', '📜', '👩‍⚖️', '🏛️', '🔍'];

  if (!useToolLogos && icons.length === 0) return null;

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
          {useToolLogos ? (
            <img
              src={productBadge === 'gemini' ? logoGemini : logoNotebook}
              alt={productBadge === 'gemini' ? 'Logo Gemini' : 'Logo NotebookLM'}
              className="w-12 h-12 md:w-14 md:h-14 object-contain inline-block"
              style={{
                animation: `rotateFull ${p.duration}s linear infinite`,
                animationDelay: `-${p.delay}s`,
                filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.35))',
                opacity: 0.92,
              }}
            />
          ) : (
            <span
              className="text-6xl inline-block"
              style={{
                animation: `rotateFull ${p.duration}s linear infinite`,
                animationDelay: `-${p.delay}s`
              }}
            >
              {icons[i % icons.length]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Presentation() {
  const [activeSlideId, setActiveSlideId] = useState(slides[0].id);
  const [activeTimelineItem, setActiveTimelineItem] = useState<string | null>(null);

  const toggleTimelineItem = (key: string) => {
    setActiveTimelineItem((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    setActiveTimelineItem(null);
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

  const getLinkIconComponent = (iconName: string, size = 24) => {
    const logoMap: { [key: string]: string } = {
      mail: logoGmail,
      'file-text': logoDocs,
      grid: logoPlanilha,
      presentation: logoAprese,
    };

    const logoPath = logoMap[iconName];
    if (logoPath) {
      return <img src={logoPath} alt={iconName} className="object-contain" style={{ width: size, height: size }} />;
    }

    if (iconName === 'download') {
      return <Download size={size} />;
    }

    if (iconName === 'sparkles') {
      return <Sparkles size={size} />;
    }

    return <ExternalLink size={size} />;
  };

  const renderLinksWithQRCodes = (
    links: { title: string; url: string; icon: string }[],
    isDark: boolean,
    showQRCode = true,
  ) => (
    <div className="mt-12 w-full flex justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {links.map((link) => (
          <motion.div
            key={link.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`rounded-2xl border p-6 flex flex-col items-center justify-center text-center ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/30'
            }`}
          >
            <div className={`mb-4 ${isDark ? 'text-epagri-olive' : 'text-epagri-red'}`}>
              {getLinkIconComponent(link.icon, 22)}
            </div>
            <h4 className={`text-sm md:text-base font-bold ${showQRCode ? 'mb-6' : 'mb-4'} line-clamp-2 ${isDark ? 'text-white' : 'text-epagri-dark'}`}>
              {link.title}
            </h4>
            {showQRCode && (
              <div className="bg-white p-4 rounded-lg shadow-inner mb-6 flex items-center justify-center">
                <QRCode value={link.url} size={160} level="H" />
              </div>
            )}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-full font-semibold transition-all ${
                isDark
                  ? 'bg-epagri-olive text-epagri-dark hover:bg-epagri-olive/80'
                  : 'bg-epagri-green text-white hover:bg-epagri-green/90'
              }`}
            >
              {getLinkIconComponent(link.icon, 16)}
              <span>Acessar</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSidebar = (slide: typeof slides[0], isDark: boolean) => (
    <div className="space-y-6 sticky top-28">
      {slide.qrCode && (
        <div className={`p-8 rounded-3xl border flex flex-col items-center justify-center text-center ${
          isDark ? 'bg-white/5 border-white/10' : 
          'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
        }`}>
          {slide.id !== 'presenca' && (
            <h3 className={`text-xl mb-6 font-bold ${
              isDark ? 'text-white' : 'text-epagri-dark'
            }`}>
                Acesse o material
            </h3>
          )}
          <div className="bg-white rounded-xl shadow-inner p-4 mb-4">
            {slide.id === 'presenca' ? (
              <img src={imagemPresenca} alt="QR Code Presença" className="w-[300px] h-[300px] object-contain" />
            ) : (
              <QRCode value={slide.qrCode} size={200} level="H" />
            )}
          </div>
          {slide.id !== 'presenca' && (
            <p className={`text-sm ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Escaneie com a câmera do seu celular
            </p>
          )}
        </div>
      )}

      {slide.links && (
        <div className="grid grid-cols-1 gap-4">
          {slide.links.map((link, idx) => {
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
                  {getLinkIconComponent(link.icon, 24)}
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
      initial={{ opacity: 0, x: 70, scale: 0.88, rotate: -2 }}
      whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -4, 0],
        boxShadow: [
          '0 0 0px rgba(0,0,0,0)',
          '0 0 16px rgba(237,28,36,0.58), 0 0 42px rgba(166,206,57,0.35)',
          '0 0 26px rgba(237,28,36,0.82), 0 0 70px rgba(166,206,57,0.56)',
          '0 0 14px rgba(237,28,36,0.52), 0 0 38px rgba(166,206,57,0.36)',
        ],
      }}
      transition={{
        x: { duration: 0.55, ease: 'easeOut' },
        opacity: { duration: 0.55, ease: 'easeOut' },
        y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        boxShadow: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`mt-8 md:mt-10 ml-auto w-fit max-w-full rounded-xl border-2 px-6 py-3 text-right backdrop-blur-sm ${
        isDark
          ? 'border-epagri-olive/80 bg-black/45'
          : 'border-epagri-red/80 bg-slate-900/90'
      }`}
      style={{
        transformOrigin: 'right center',
      }}
    >
      <motion.p
        className="font-display text-xl md:text-2xl font-black tracking-[0.08em] uppercase"
        animate={{
          opacity: [1, 0.92, 1, 0.86, 1],
          textShadow: [
            '0 0 4px rgba(255,255,255,0.95), 0 0 10px rgba(237,28,36,0.9), 0 0 22px rgba(237,28,36,0.8), 0 0 38px rgba(166,206,57,0.58)',
            '0 0 2px rgba(255,255,255,0.82), 0 0 8px rgba(237,28,36,0.65), 0 0 16px rgba(237,28,36,0.55), 0 0 26px rgba(166,206,57,0.38)',
            '0 0 4px rgba(255,255,255,1), 0 0 12px rgba(237,28,36,1), 0 0 28px rgba(237,28,36,0.9), 0 0 44px rgba(166,206,57,0.68)',
            '0 0 1px rgba(255,255,255,0.72), 0 0 6px rgba(237,28,36,0.5), 0 0 14px rgba(237,28,36,0.45), 0 0 22px rgba(166,206,57,0.3)',
            '0 0 4px rgba(255,255,255,0.95), 0 0 10px rgba(237,28,36,0.9), 0 0 22px rgba(237,28,36,0.8), 0 0 38px rgba(166,206,57,0.58)',
          ],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ color: '#fff6ff' }}
      >
        {quote}
      </motion.p>
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
      <p className={`text-sm md:text-base italic text-justify ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
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

  const isSupportExample = (slideId: string, area: string) =>
    slideId === 'celebration' && area === 'Dúvidas e Suporte';

  const renderSupportCard = (text: string, isDark: boolean, isPresentation = false) => {
    const lines = text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const team = lines.find((line) => line.toLowerCase().startsWith('equipe ')) || '';
    const emails = lines.filter((line) => line.includes('@'));
    const phoneRegex = /(\(?\d{2}\)?\s*\d{4,5}[-\s]?\d{4})/;
    const phoneContactLines = lines.filter((line) => phoneRegex.test(line));
    const parsedPhoneContacts = phoneContactLines
      .map((line, idx) => {
        const [rawLabel, ...rest] = line.split(':');
        const valueSource = rest.length > 0 ? rest.join(':') : line;
        const valueMatch = valueSource.match(phoneRegex);
        if (!valueMatch) return null;

        const cleanLabel = rawLabel
          ? rawLabel
              .replace(/^contato\s*/i, '')
              .replace(/^telefone\s*/i, '')
              .trim()
          : '';

        return {
          label: cleanLabel ? `Telefone ${cleanLabel}` : `Telefone ${idx + 1}`,
          value: valueMatch[1].replace(/\s+/g, ' ').trim(),
        };
      })
      .filter((item): item is { label: string; value: string; suffix?: string } => item !== null);

    const phoneLine = lines.find((line) => line.toLowerCase().startsWith('telefone:')) || '';
    const extensionLine = lines.find((line) => line.toLowerCase().startsWith('ramal:')) || '';
    const closingLine =
      lines.find((line) => line.toLowerCase().startsWith('estamos à disposição')) || '';

    const phone = phoneLine.replace(/^Telefone:\s*/i, '').trim();
    const extension = extensionLine.replace(/^Ramal:\s*/i, '').trim();
    const fallbackContacts = [
      phone ? { label: 'Telefone 1', value: phone } : null,
      extension ? { label: 'Telefone 2', value: extension, suffix: '(ramal)' } : null,
    ].filter(Boolean) as { label: string; value: string; suffix?: string }[];
    const phoneContacts = parsedPhoneContacts.length > 0 ? parsedPhoneContacts : fallbackContacts;

    return (
      <div
        className={`w-full rounded-3xl border p-8 md:p-9 text-center ${isPresentation ? 'max-h-[80vh] overflow-y-auto' : ''} ${
          isDark
            ? 'bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-white/20 shadow-2xl shadow-black/20'
            : 'bg-gradient-to-br from-white via-slate-50 to-white border-slate-200 shadow-xl shadow-slate-300/40'
        }`}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-epagri-green text-white shadow-lg">
          <CheckCircle2 size={24} />
        </div>
        <h3 className={`font-display font-black ${isPresentation ? 'text-2xl md:text-3xl' : 'text-2xl md:text-3xl'} ${isDark ? 'text-white' : 'text-epagri-dark'}`}>
          Dúvidas e Suporte
        </h3>
        {team && (
          <p className={`mt-3 ${isPresentation ? 'text-base md:text-lg' : 'text-base md:text-lg'} italic ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            {team}
          </p>
        )}

        {emails.length > 0 && (
          <div className="mt-6">
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>
              E-mail
            </p>
            <div className="mt-2 space-y-1">
              {emails.map((email) => (
                <p
                  key={email}
                  className={`${isPresentation ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-semibold break-all ${isDark ? 'text-white' : 'text-epagri-dark'}`}
                >
                  {email}
                </p>
              ))}
            </div>
          </div>
        )}

        {phoneContacts.length > 0 && (
          <div className={`mt-6 grid grid-cols-1 gap-3 ${phoneContacts.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {phoneContacts.map((contact) => (
              <div
                key={`${contact.label}-${contact.value}`}
                className={`rounded-2xl border px-4 py-3 ${isDark ? 'bg-white/10 border-white/15' : 'bg-white border-slate-200'}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.14em] ${isDark ? 'text-epagri-olive' : 'text-epagri-green'}`}>
                  {contact.label}
                </p>
                <p className={`mt-1 ${isPresentation ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-black ${isDark ? 'text-white' : 'text-epagri-dark'}`}>
                  {contact.value}
                </p>
                {contact.suffix && (
                  <p className={`mt-1 text-xs uppercase tracking-[0.14em] ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                    {contact.suffix}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {closingLine && (
          <p className={`mt-6 ${isPresentation ? 'text-base md:text-lg' : 'text-lg md:text-xl'} italic font-medium ${isDark ? 'text-slate-100' : 'text-slate-700'}`}>
            {closingLine}
          </p>
        )}
      </div>
    );
  };

  const renderExampleCard = (
    ex: { area: string; text: string },
    isDark: boolean,
    slideId: string,
    isPresentation = false,
  ) => {
    if (isSupportExample(slideId, ex.area)) {
      return renderSupportCard(ex.text, isDark, isPresentation);
    }

    return (
      <div className={`p-7 md:p-8 rounded-3xl border min-h-[230px] w-full ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
      }`}>
        <h3 className={`text-lg font-bold flex items-center gap-2 mb-3 ${isDark ? 'text-white' : 'text-epagri-dark'}`}>
          <CheckCircle2 className={isDark ? 'text-epagri-olive' : 'text-epagri-green'} size={20} />
          {ex.area}
        </h3>
        {renderExampleText(ex.text, isDark)}
      </div>
    );
  };

  const renderProductBadge = (
    badge: NonNullable<typeof slides[0]['productBadge']>,
    isDark: boolean,
  ) => {
    const isGemini = badge === 'gemini';
    const imageSrc = isGemini ? logoGemini : logoNotebook;
    const label = isGemini ? 'Gemini' : 'NotebookLM';
    const href = isGemini ? 'https://gemini.google.com' : 'https://notebooklm.google.com';

    return (
      <motion.a
        initial={{ opacity: 0, x: 20, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
          className="h-12 md:h-14 w-auto object-contain drop-shadow-sm"
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
        
        {/* Progress Dots */}
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
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {slides.map((slide) => {
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
              <BackgroundAnimation type={slide.backgroundAnimation} productBadge={slide.productBadge} />
              {/* Decorative elements */}
              {isDark && (
                <div className="absolute top-0 right-0 w-96 h-96 bg-epagri-green rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
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
                  <div className={(slide.links || slide.qrCode) && slide.id !== 'materiais' ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'}>
                    <div className={`prose prose-base md:prose-lg max-w-none leading-relaxed text-justify prose-p:text-justify prose-li:text-justify prose-table:w-full prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-slate-300 prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-slate-200 prose-td:px-3 prose-td:py-2 prose-tr:even:bg-slate-50 ${
                      isDark ? 'prose-invert prose-p:text-slate-200 prose-strong:text-white prose-li:text-slate-200 prose-th:border-slate-600 prose-td:border-slate-700 prose-tr:even:bg-white/5' : 
                      'prose-slate prose-headings:text-epagri-dark prose-a:text-epagri-green hover:prose-a:text-epagri-dark prose-strong:text-slate-900'
                    }`}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{slide.content}</ReactMarkdown>
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
                          const timelineKey = `${slide.id}-${idx}`;
                          const isTimelineActive = activeTimelineItem === timelineKey;
                          
                          return (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="relative z-10 hover:z-50 flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
                              role="button"
                              tabIndex={0}
                              aria-expanded={isTimelineActive}
                              onClick={() => toggleTimelineItem(timelineKey)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleTimelineItem(timelineKey);
                                }
                              }}
                            >
                              {/* Top Section */}
                              <div className="relative flex flex-col items-center justify-end h-24 md:h-36 mb-1 w-full px-0.5 md:px-1">
                                {isTopText ? (
                                  <>
                                    <div className={`flex flex-col items-center justify-end w-full transition-opacity duration-300 ${isTimelineActive ? 'opacity-0' : 'group-hover:opacity-0'}`}>
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
                                    <div className={`absolute bottom-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 ${isTimelineActive ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100'} ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
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
                                    <div className={`flex flex-col items-center justify-start w-full transition-opacity duration-300 ${isTimelineActive ? 'opacity-0' : 'group-hover:opacity-0'}`}>
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
                                    <div className={`absolute top-2 ${cardPositionClass} w-48 md:w-64 p-3 md:p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 ${isTimelineActive ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100'} ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
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
                          <div key={idx}>{renderExampleCard(ex, isDark, slide.id)}</div>
                        ))}
                      </div>
                    )}

                    {slide.id === 'materiais' && slide.links && renderLinksWithQRCodes(slide.links, isDark, false)}
                  </div>

                  {/* Sidebar (Links or QRCode only) - não exibe no slide de materiais */}
                  {(slide.links || slide.qrCode) && slide.id !== 'materiais' && (
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
                      <div key={idx}>{renderExampleCard(ex, isDark, slide.id)}</div>
                    ))}
                  </div>
                )}
              </motion.div>
            </section>
          );
        })}
      </main>

    </div>
  );
}
