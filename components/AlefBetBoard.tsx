import React, { useState } from 'react';
import { Button } from './Button';

interface AlefBetBoardProps {
  onBack: () => void;
}

const LETTERS = [
  { char: 'א', name: 'Alef', word: 'Avraham', icon: '👴' },
  { char: 'ב', name: 'Bet', word: 'Bereshit', icon: '📖' },
  { char: 'ג', name: 'Gimel', word: 'Gamal', icon: '🐪' },
  { char: 'ד', name: 'Dalet', word: 'Delet', icon: '🚪' },
  { char: 'ה', name: 'Hei', word: 'Hashem', icon: '👑' },
  { char: 'ו', name: 'Vav', word: 'Vavid', icon: '⚓' },
  { char: 'ז', name: 'Zayin', word: 'Zait', icon: '🫒' },
  { char: 'ח', name: 'Jet', word: 'Jalá', icon: '🍞' },
  { char: 'ט', name: 'Tet', word: 'Tov', icon: '👍' },
  { char: 'י', name: 'Yod', word: 'Yisrael', icon: '🇮🇱' },
  { char: 'כ', name: 'Kaf', word: 'Keter', icon: '👑' },
  { char: 'ל', name: 'Lamed', word: 'Lev', icon: '❤️' },
  { char: 'מ', name: 'Mem', word: 'Mayim', icon: '💧' },
  { char: 'נ', name: 'Nun', word: 'Ner', icon: '🕯️' },
  { char: 'ס', name: 'Samej', word: 'Sefer', icon: '📚' },
  { char: 'ע', name: 'Ayin', word: 'Einayim', icon: '👀' },
  { char: 'פ', name: 'Pei', word: 'Pe', icon: '👄' },
  { char: 'צ', name: 'Tzadik', word: 'Tzedaká', icon: '🪙' },
  { char: 'ק', name: 'Kuf', word: 'Kof', icon: '🐒' },
  { char: 'ר', name: 'Resh', word: 'Rosh', icon: '🧠' },
  { char: 'ש', name: 'Shin', word: 'Shalom', icon: '🕊️' },
  { char: 'ת', name: 'Tav', word: 'Torá', icon: '📜' },
];

export const AlefBetBoard: React.FC<AlefBetBoardProps> = ({ onBack }) => {
  const [selected, setSelected] = useState<typeof LETTERS[0] | null>(null);

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in">
      <div className="w-full flex justify-between items-center mb-6">
         <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
         <h2 className="text-3xl md:text-5xl font-display font-bold text-torah-blue-deep drop-shadow-sm">
            Aprende Alef-Bet
         </h2>
         <div className="w-20"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Grid de Letras */}
        <div className="flex-1 bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-torah-blue-light">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 md:gap-4">
            {LETTERS.map((l) => (
              <button
                key={l.name}
                onClick={() => setSelected(l)}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-3xl md:text-4xl font-bold transition-all transform hover:scale-110 shadow-sm border-2 ${
                  selected?.name === l.name 
                    ? 'bg-torah-gold text-white border-yellow-500 scale-105 shadow-md' 
                    : 'bg-blue-50 text-torah-blue-deep border-blue-100 hover:bg-blue-100'
                }`}
              >
                {l.char}
              </button>
            ))}
          </div>
        </div>

        {/* Panel de Detalle */}
        <div className="w-full lg:w-96">
          <div className="bg-torah-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-torah-gold h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            {selected ? (
              <div className="animate-pop">
                <div className="text-9xl mb-4 font-bold text-torah-blue-deep drop-shadow-md">{selected.char}</div>
                <h3 className="text-4xl font-display font-extrabold text-torah-gold mb-2">{selected.name}</h3>
                <div className="mt-6 bg-white p-4 rounded-xl shadow-inner border border-gray-100 w-full">
                  <span className="text-5xl block mb-2">{selected.icon}</span>
                  <p className="text-xl text-gray-500 font-body">
                    <span className="font-bold text-torah-blue-deep">{selected.char}</span> de <span className="font-bold text-torah-blue-deep">{selected.word}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="opacity-50">
                <span className="text-8xl block mb-4">👆</span>
                <p className="text-2xl font-display font-bold text-gray-400">Toca una letra para aprender</p>
              </div>
            )}
            
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};