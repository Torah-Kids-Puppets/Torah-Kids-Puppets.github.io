import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { Sticker } from '../types';

interface StoryTimeProps {
  onBack: () => void;
}

// Backgrounds for the scene
const BACKGROUNDS = [
    { id: 'studio', name: 'Estudio TV', color: 'bg-blue-100', pattern: 'radial-gradient(circle, #ffffff 20%, #e0f2fe 20%)' },
    { id: 'park', name: 'Parque', color: 'bg-green-100', pattern: 'repeating-linear-gradient(45deg, #dcfce7 0px, #dcfce7 10px, #bbf7d0 10px, #bbf7d0 20px)' },
    { id: 'egypt', name: 'Egipto', color: 'bg-yellow-100', pattern: 'linear-gradient(to bottom, #fef9c3 0%, #fde047 100%)' },
    { id: 'space', name: 'Espacio', color: 'bg-indigo-900', pattern: 'radial-gradient(white 1px, transparent 1px)' }, // Stars
];

// Assets to place
const ASSETS = [
    { id: 'yosef', type: 'character', src: '👦', name: 'Yosef' },
    { id: 'benny', type: 'character', src: '🌀', name: 'Benny' },
    { id: 'aharon', type: 'character', src: '🕊️', name: 'Aharón' },
    { id: 'ezra', type: 'character', src: '👮', name: 'Ezra' },
    { id: 'avraham', type: 'character', src: '👴', name: 'Avraham' },
    { id: 'keter', type: 'character', src: '👸', name: 'Keter' },
    { id: 'torah', type: 'prop', src: '📜', name: 'Torá' },
    { id: 'menorah', type: 'prop', src: '🕎', name: 'Menorá' },
    { id: 'shofar', type: 'prop', src: '📯', name: 'Shofar' },
    { id: 'apple', type: 'prop', src: '🍎', name: 'Manzana' },
    { id: 'gift', type: 'prop', src: '🎁', name: 'Regalo' },
];

export const StoryTime: React.FC<StoryTimeProps> = ({ onBack }) => {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [background, setBackground] = useState(BACKGROUNDS[0]);
  const [selectedStickerId, setSelectedStickerId] = useState<number | null>(null);
  
  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const addSticker = (asset: typeof ASSETS[0]) => {
      const newSticker: Sticker = {
          id: Date.now(),
          type: asset.type as 'character' | 'prop',
          content: asset.src,
          x: 150 + Math.random() * 50,
          y: 150 + Math.random() * 50,
          scale: 1
      };
      setStickers([...stickers, newSticker]);
  };

  const removeSelected = () => {
      if (selectedStickerId) {
          setStickers(stickers.filter(s => s.id !== selectedStickerId));
          setSelectedStickerId(null);
      }
  };

  // Basic Drag Logic (Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent, id: number) => {
      e.stopPropagation();
      setSelectedStickerId(id);
      setIsDragging(true);
      const sticker = stickers.find(s => s.id === id);
      if (sticker) {
        // Calculate offset relative to the sticker's current position
        dragOffset.current = { 
            x: e.clientX - sticker.x, 
            y: e.clientY - sticker.y 
        };
      }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
      if (isDragging && selectedStickerId) {
          setStickers(prev => prev.map(s => {
              if (s.id === selectedStickerId) {
                  return {
                      ...s,
                      x: e.clientX - dragOffset.current.x,
                      y: e.clientY - dragOffset.current.y
                  };
              }
              return s;
          }));
      }
  };

  const handlePointerUp = () => {
      setIsDragging(false);
  };

  return (
    <div 
        className="flex flex-col items-center max-w-7xl mx-auto p-2 md:p-4 w-full h-screen md:h-auto select-none"
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
    >
      <div className="w-full flex justify-between items-center mb-4">
         <Button onClick={onBack} variant="outline" size="sm">← Salir</Button>
         <h2 className="text-2xl md:text-4xl font-display font-bold text-torah-blue-deep text-center flex items-center gap-2">
            🎨 Estudio de Títeres
         </h2>
         <div className="flex gap-2">
            {selectedStickerId && (
                <button 
                    onClick={removeSelected}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-md animate-pop"
                    title="Eliminar"
                >
                    🗑️
                </button>
            )}
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
        
        {/* CANVAS AREA */}
        <div className="flex-1 relative order-2 lg:order-1">
            <div 
                className={`w-full aspect-video md:aspect-auto md:h-[600px] rounded-[2rem] border-8 border-torah-gold shadow-2xl relative overflow-hidden transition-all duration-500 ${background.color}`}
                style={{ 
                    backgroundImage: background.pattern, 
                    backgroundSize: background.id === 'space' ? '20px 20px' : 'auto' 
                }}
            >
                {/* Background Label */}
                <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-gray-500 pointer-events-none">
                    Escenario: {background.name}
                </div>

                {/* STICKERS */}
                {stickers.map(sticker => (
                    <div
                        key={sticker.id}
                        onPointerDown={(e) => handlePointerDown(e, sticker.id)}
                        className={`absolute cursor-move transform transition-transform hover:scale-105 active:scale-110 flex items-center justify-center
                            ${selectedStickerId === sticker.id ? 'ring-4 ring-blue-400 rounded-full bg-white/20' : ''}
                        `}
                        style={{
                            left: sticker.x, // Note: In a real app, calculate relative to container bounds
                            top: sticker.y,
                            fontSize: sticker.type === 'character' ? '6rem' : '4rem',
                            zIndex: selectedStickerId === sticker.id ? 50 : 10,
                            touchAction: 'none' // Critical for touch dragging
                        }}
                    >
                        {sticker.content}
                    </div>
                ))}

                {stickers.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                        <p className="text-3xl font-display text-torah-blue-deep font-bold text-center">
                            ¡Arrastra personajes<br/>aquí!
                        </p>
                    </div>
                )}
            </div>
        </div>

        {/* TOOLS PANEL */}
        <div className="w-full lg:w-80 bg-white rounded-[2rem] shadow-xl border-4 border-torah-blue-light p-6 flex flex-col gap-6 order-1 lg:order-2 h-fit">
            
            {/* Background Selector */}
            <div>
                <h3 className="font-display font-bold text-lg text-gray-700 mb-3">1. Elige Fondo</h3>
                <div className="grid grid-cols-2 gap-2">
                    {BACKGROUNDS.map(bg => (
                        <button
                            key={bg.id}
                            onClick={() => setBackground(bg)}
                            className={`p-2 rounded-xl border-2 text-sm font-bold transition-all ${background.id === bg.id ? 'border-torah-blue-deep bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                            {bg.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Assets Selector */}
            <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-gray-700 mb-3">2. Añadir Títeres</h3>
                <div className="grid grid-cols-3 gap-3 max-h-[300px] overflow-y-auto custom-scrollbar p-1">
                    {ASSETS.map(asset => (
                        <button
                            key={asset.id}
                            onClick={() => addSticker(asset)}
                            className="flex flex-col items-center justify-center p-2 rounded-xl border border-gray-200 hover:bg-yellow-50 hover:border-torah-gold transition-all bg-white shadow-sm active:scale-95"
                        >
                            <span className="text-3xl mb-1">{asset.src}</span>
                            <span className="text-[10px] font-bold text-gray-500">{asset.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-800 text-center">
                💡 Tip: Toca un personaje para moverlo.
            </div>
        </div>

      </div>
    </div>
  );
};