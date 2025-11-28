"use client";

import { useState, useRef, type ReactElement } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Eye, Palette, Sparkles } from "lucide-react";


const cardTemplates = [
  {
    id: "slate-rose-light",
    name: "Slate Rose Light",
    description: "Professional gradient with elegant finish",
    style: "bg-gradient-to-br from-slate-700 via-rose-700 to-slate-700",
    textColor: "text-white",
    accentColor: "text-rose-100",
    type: "Premium",
    glow: "shadow-rose-500/40",
    solidColor: "#334155"
  },
  {
    id: "sapphire", 
    name: "Sapphire Serenity",
    description: "Premium blue with sophisticated depth",
    style: "bg-blue-600",
    textColor: "text-white",
    accentColor: "text-blue-100",
    type: "Premium",
    glow: "shadow-blue-500/40",
    solidColor: "#2563eb"
  },
  {
    id: "golden",
    name: "Golden Majesty",
    description: "Luxurious gold with rich amber tones",
    style: "bg-amber-500",
    textColor: "text-white",
    accentColor: "text-amber-100",
    type: "Luxury",
    glow: "shadow-amber-500/40",
    solidColor: "#f59e0b"
  },
  {
    id: "silver",
    name: "Silver Sophistication",
    description: "Elegant silver with refined finish",
    style: "bg-gray-600",
    textColor: "text-white",
    accentColor: "text-gray-100",
    type: "Premium",
    glow: "shadow-gray-500/40",
    solidColor: "#4b5563"
  },
  {
    id: "royal",
    name: "Royal Majesty",
    description: "Regal purple with majestic depth",
    style: "bg-purple-600",
    textColor: "text-white",
    accentColor: "text-purple-100",
    type: "Luxury",
    glow: "shadow-purple-500/40",
    solidColor: "#9333ea"
  },
  {
    id: "crimson",
    name: "Crimson Passion",
    description: "Bold red with passionate intensity",
    style: "bg-red-600",
    textColor: "text-white",
    accentColor: "text-red-100",
    type: "Premium",
    glow: "shadow-red-500/40",
    solidColor: "#dc2626"
  },
  {
    id: "teal",
    name: "Teal Tranquility",
    description: "Calming teal with peaceful serenity",
    style: "bg-teal-600",
    textColor: "text-white",
    accentColor: "text-teal-100",
    type: "Premium",
    glow: "shadow-teal-500/40",
    solidColor: "#0d9488"
  },
  {
    id: "indigo",
    name: "Indigo Insight",
    description: "Deep indigo with intellectual depth",
    style: "bg-indigo-600",
    textColor: "text-white",
    accentColor: "text-indigo-100",
    type: "Premium",
    glow: "shadow-indigo-500/40",
    solidColor: "#4f46e5"
  },
  {
    id: "rose",
    name: "Rose Radiance",
    description: "Elegant rose with romantic charm",
    style: "bg-rose-600",
    textColor: "text-white",
    accentColor: "text-rose-100",
    type: "Premium",
    glow: "shadow-rose-500/40",
    solidColor: "#e11d48"
  },
  {
    id: "vibrant-gold",
    name: "Vibrant Gold",
    description: "Brilliant gold with luminous finish",
    style: "bg-yellow-500",
    textColor: "text-gray-900",
    accentColor: "text-yellow-800",
    type: "Luxury",
    glow: "shadow-yellow-500/40",
    solidColor: "#eab308"
  },
  {
    id: "slate-rose",
    name: "Slate Rose",
    description: "Deep slate with rose elegance",
    style: "bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900",
    textColor: "text-white",
    accentColor: "text-rose-100",
    type: "Premium",
    glow: "shadow-rose-500/40",
    solidColor: "#0f172a"
  }
];

export default function Card3DViewer(): ReactElement {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const constraintsRef = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentTemplate = cardTemplates[selectedTemplate];

  const handleTemplateChange = (index: number) => {
    if (index !== selectedTemplate) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTemplate(index);
        setTimeout(() => setIsTransitioning(false), 150);
      }, 75);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || isDragging) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setMousePosition({
      x: mouseX / (rect.width / 2),
      y: mouseY / (rect.height / 2)
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };
  
  const sampleContent = {
    name: "Oussama A.",
    title: "Creative Director",
    company: "Rivorn Luxury Watches",
    phone: "+213 561 218 586",
    email: "contact@rivorn.com",
    website: "www.rivorn.com"
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextTemplate = () => {
    setSelectedTemplate((prev) => (prev + 1) % cardTemplates.length);
  };

  return (
    <div className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="luxury-card mafia-glow px-6 py-3 text-blue-400 text-sm font-semibold tracking-widest uppercase">
              Aperçu 3D Interactif
            </span>
          </motion.div>
          
          <motion.h2 
            className="mafia-heading text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visualisez Votre <span className="blue-accent">Carte</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez vos cartes de visite en 3D. Retournez, faites pivoter et explorez chaque détail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Card Viewer */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            ref={constraintsRef}
          >
            <div className="relative" style={{ perspective: "1200px", WebkitPerspective: "1200px" }}>
              <motion.div
                ref={cardRef}
                className={`relative w-80 h-52 cursor-grab active:cursor-grabbing ${currentTemplate.glow} color-transition`}
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                  filter: isDragging ? 'brightness(1.15) contrast(1.15) saturate(1.1)' : isHovering ? 'brightness(1.05) contrast(1.05)' : 'brightness(1)',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  rotateX: isHovering && !isDragging ? mousePosition.y * -10 : 0,
                  rotateZ: isHovering && !isDragging ? mousePosition.x * 5 : 0,
                  scale: isDragging ? 1.08 : isHovering ? 1.03 : 1,
                  y: isDragging ? -5 : isHovering ? -3 : 0,
                }}
                transition={{
                  duration: isDragging ? 0.2 : 0.4,
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileDrag={{ 
                  scale: 1.12,
                  rotateX: 20,
                  rotateZ: 10,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 40px ${currentTemplate.solidColor}50, 0 0 80px ${currentTemplate.solidColor}20`,
                  filter: 'brightness(1.2) contrast(1.2) saturate(1.2)',
                  transition: { duration: 0.1 }
                }}
              >
                {/* Card Front */}
                <div 
                  className="absolute inset-0 rounded-xl shadow-2xl border border-white/20 business-card-texture card-realistic color-transition card-text-smooth solid-color-card premium-finish"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg) translateZ(0.1px)",
                    WebkitTransform: "rotateY(0deg) translateZ(0.1px)",
                    backgroundColor: currentTemplate.solidColor,
                    boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px ${currentTemplate.solidColor}30`,
                    zIndex: isFlipped ? 1 : 2,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-xl" />
                  <div className="absolute inset-0 holographic rounded-xl opacity-20" />
                  <div className="relative h-full p-8 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    {/* Top Section */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold ${currentTemplate.textColor} mb-2 tracking-wide card-text-smooth`} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                            {sampleContent.name}
                          </h3>
                          <p className={`${currentTemplate.accentColor} text-sm font-medium mb-1 tracking-wide card-text-smooth`}>
                            {sampleContent.title}
                          </p>
                        </div>
                        <div className={`w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center`}>
                          <div className={`w-3 h-3 ${currentTemplate.accentColor.replace('text-', 'bg-')} rounded-full`} />
                        </div>
                      </div>
                      <div className={`h-px w-12 bg-white/40 mb-3`} />
                      <p className={`${currentTemplate.textColor} text-sm opacity-90 font-medium tracking-widest uppercase`}>
                        {sampleContent.company}
                      </p>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="space-y-2">
                      <div className={`h-px w-full bg-white/30 mb-3`} />
                      <div className="grid grid-cols-1 gap-1">
                        <p className={`${currentTemplate.textColor} text-xs opacity-80 font-medium`}>
                          📞 {sampleContent.phone}
                        </p>
                        <p className={`${currentTemplate.textColor} text-xs opacity-80 font-medium`}>
                          ✉️ {sampleContent.email}
                        </p>
                        <p className={`${currentTemplate.accentColor} text-xs font-semibold tracking-wider`}>
                          🌐 {sampleContent.website}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div 
                  className="absolute inset-0 rounded-xl shadow-2xl border border-white/20 business-card-texture card-realistic color-transition card-text-smooth solid-color-card premium-finish"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(0.1px)",
                    WebkitTransform: "rotateY(180deg) translateZ(0.1px)",
                    backgroundColor: currentTemplate.solidColor,
                    boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px ${currentTemplate.solidColor}30`,
                    zIndex: isFlipped ? 2 : 1,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-xl" />
                  <div className="absolute inset-0 holographic rounded-xl opacity-15" />
                  <div className="relative h-full p-6 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    {/* Header Section */}
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-3" style={{ boxShadow: `inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)` }}>
                        <Sparkles className={`w-8 h-8 ${currentTemplate.accentColor}`} />
                      </div>
                      <h4 className={`${currentTemplate.textColor} text-lg font-bold tracking-widest card-text-smooth`} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        RIVORN LUXURY
                      </h4>
                    </div>
                    
                    {/* Center Section */}
                    <div className="text-center space-y-2">
                      <div className={`h-px w-20 bg-white/40 mx-auto mb-3`} />
                      <p className={`${currentTemplate.textColor} text-sm opacity-95 font-semibold tracking-wide`}>
                        IMPRESSION PROFESSIONNELLE
                      </p>
                      <p className={`${currentTemplate.accentColor} text-xs font-medium tracking-wider uppercase opacity-90`}>
                        Cartes • Identité • Excellence
                      </p>
                      <div className={`h-px w-16 bg-white/30 mx-auto mt-3`} />
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="text-center">
                      <p className={`${currentTemplate.accentColor} text-xs font-bold tracking-wider uppercase mb-3`}>
                        Votre Image, Notre Excellence
                      </p>
                      <div className="flex justify-center gap-1">
                        <div className={`w-1.5 h-1.5 bg-white/60 rounded-full`} />
                        <div className={`w-1.5 h-1.5 bg-white/80 rounded-full`} />
                        <div className={`w-1.5 h-1.5 bg-white/60 rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h3 className="mafia-heading text-2xl text-white mb-6">
                Contrôles <span className="blue-accent">Interactifs</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.button
                  onClick={handleFlip}
                  className="luxury-card p-4 rounded-xl group hover:scale-105 transition-all duration-500 border border-blue-400/30 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-400/20"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    animate={{ rotate: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <RotateCcw className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                  <span className="text-white text-sm font-medium group-hover:text-blue-100 transition-colors duration-300">Retourner</span>
                </motion.button>
                
                <motion.button
                  onClick={nextTemplate}
                  className="luxury-card p-4 rounded-xl group hover:scale-105 transition-all duration-500 border border-blue-400/30 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-400/20"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Palette className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                  <span className="text-white text-sm font-medium group-hover:text-blue-100 transition-colors duration-300">Style</span>
                </motion.button>
              </div>
              
              {/* Color Palette */}
              <div className="mb-8">
                <h4 className="text-white text-lg font-semibold mb-4">Palette de Couleurs</h4>
                <div className="grid grid-cols-4 gap-2">
                  {cardTemplates.map((template, index) => (
                    <motion.button
                      key={template.id}
                      onClick={() => handleTemplateChange(index)}
                      className={`relative w-12 h-12 rounded-lg border-2 ${
                        selectedTemplate === index ? 'border-white scale-110 shadow-lg' : 'border-white/30 hover:border-white/60'
                      } transition-all duration-500 group overflow-hidden hover:shadow-md`}
                      style={{
                        backgroundColor: template.solidColor,
                        boxShadow: selectedTemplate === index 
                          ? `0 8px 25px ${template.solidColor}40, 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`
                          : `0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
                        opacity: isTransitioning && selectedTemplate === index ? 0.8 : 1,
                      }}
                      whileHover={{ 
                        scale: selectedTemplate === index ? 1.15 : 1.08,
                        y: -2,
                        boxShadow: `0 12px 30px ${template.solidColor}50, 0 6px 15px rgba(0,0,0,0.4)`,
                      }}
                      whileTap={{ scale: 0.9, y: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      title={template.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-lg" />
                      <div className="absolute inset-0 business-card-texture rounded-lg" />
                      <motion.div 
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: selectedTemplate === index 
                            ? 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'
                            : 'transparent',
                          backgroundSize: '200% 200%',
                        }}
                        animate={{
                          backgroundPosition: selectedTemplate === index ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                        }}
                        transition={{
                          duration: 2,
                          repeat: selectedTemplate === index ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                      {selectedTemplate === index && (
                        <motion.div 
                          className="absolute inset-0 border-2 border-white rounded-lg"
                          animate={{ 
                            opacity: [0.7, 1, 0.7],
                            boxShadow: [`0 0 5px ${template.solidColor}60`, `0 0 15px ${template.solidColor}80`, `0 0 5px ${template.solidColor}60`]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Style Actuel</h4>
              <div className="luxury-card p-4 rounded-xl border border-blue-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-4 h-4 rounded ${currentTemplate.style} border border-white/40`} />
                  <span className="text-white font-medium">{currentTemplate.name}</span>
                  <span className={`${currentTemplate.accentColor} text-sm px-2 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20`}>
                    {currentTemplate.type}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-2">
                  {currentTemplate.description}
                </p>
                <p className="text-white/50 text-xs">
                  Style {currentTemplate.type.toLowerCase()} avec finitions premium
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white/90 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Eye className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span>Glissez pour faire pivoter</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white/90 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ rotate: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <RotateCcw className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span>Cliquez pour retourner</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white/90 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <Palette className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span>Changez de style</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
