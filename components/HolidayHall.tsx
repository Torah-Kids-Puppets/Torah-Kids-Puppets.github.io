import React, { useState } from 'react';
import { Button } from './Button';
import { getHolidayInfo } from '../services/geminiService';

interface HolidayHallProps {
  onBack: () => void;
  onNavigateToVideos: (videoId: string) => void;
}

const holidays = [
    { name: "Rosh Hashaná", icon: "🍎", date: "Tishrei", videoId: "CblSXOlt6Vw" },
    { name: "Yom Kipur", icon: "⚖️", date: "Tishrei", videoId: "LWITMNQEWTo" }, // Shabat Zajor como fallback educativo
    { name: "Sucot", icon: "⛺", date: "Tishrei", videoId: "o9mvIBnXtxE" },
    { name: "Jánuca", icon: "🕎", date: "Kislev", videoId: "5wE1ZTeTOIU" },
    { name: "Tu Bishvat", icon: "🌳", date: "Shevat", videoId: "SsW9fe9eWvs" },
    { name: "Purim", icon: "🎭", date: "Adar", videoId: "LWITMNQEWTo" },
    { name: "Pésaj", icon: "🍷", date: "Nisán", videoId: "Defyt5gOBQo" },
    { name: "Shavuot", icon: "⛰️", date: "Siván", videoId: "dd8Bz3RAkgQ" }, // Intro Torá como fallback
];

export const HolidayHall: React.FC<HolidayHallProps> = ({ onBack, onNavigateToVideos }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [info, setInfo] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSelect = async (holiday: typeof holidays[0]) => {
      setSelected(holiday.name);
      setLoading(true);
      setInfo("");
      const text = await getHolidayInfo(holiday.name);
      setInfo(text);
      setLoading(false);
  };

  const getSelectedVideoId = () => {
      return holidays.find(h => h.name === selected)?.videoId || "";
  }

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in">
       <div className="w-full flex justify-between items-center mb-6">
         <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
         <h2 className="text-3xl md:text-4xl font-display font-bold text-torah-purple flex items-center gap-2 drop-shadow-sm">
            🎉 Fiestas Judías
         </h2>
         <div className="w-20"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Grid of Holidays */}
          <div className="bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-torah-purple grid grid-cols-2 sm:grid-cols-3 gap-4 h-fit">
             {holidays.map((h) => (
                 <button 
                    key={h.name}
                    onClick={() => handleSelect(h)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                        selected === h.name 
                        ? 'bg-torah-purple text-white scale-105 shadow-lg ring-4 ring-purple-200' 
                        : 'bg-purple-50 hover:bg-purple-100 text-purple-900 hover:scale-105'
                    }`}
                 >
                     <span className="text-4xl mb-2 drop-shadow-md">{h.icon}</span>
                     <span className="font-display font-bold text-sm text-center leading-tight">{h.name}</span>
                 </button>
             ))}
          </div>

          {/* Info Box */}
          <div className="bg-torah-white p-8 rounded-[2rem] shadow-xl border-4 border-torah-green flex flex-col items-center justify-center text-center min-h-[400px] relative overflow-visible transition-all">
              <div className="absolute -top-5 -right-5 text-7xl rotate-12 animate-bounce-slow z-20">🌀</div> {/* Benny Icon */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-torah-green opacity-10 rounded-full blur-2xl"></div>
              
              {!selected ? (
                  <div className="flex flex-col items-center justify-center h-full opacity-60 relative z-10">
                      <span className="text-7xl block mb-4">📅</span>
                      <p className="text-2xl font-display font-bold text-torah-blue-deep">Elige una fiesta para aprender más con Benny.</p>
                  </div>
              ) : (
                  <div className="relative z-10 w-full flex flex-col gap-6 animate-pop items-center">
                     <h3 className="text-4xl font-display font-extrabold text-torah-green mb-2 border-b-2 border-dashed border-green-200 pb-2">{selected}</h3>
                     
                     {loading ? (
                         <div className="flex flex-col items-center py-8">
                            <span className="text-5xl animate-spin mb-4">🌀</span>
                            <p className="text-gray-400 font-bold text-xl">Benny está buscando...</p>
                         </div>
                     ) : (
                         <>
                             <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100 text-left shadow-sm w-full">
                                <p className="text-xl leading-relaxed font-body font-medium text-gray-700">
                                    <span className="font-bold text-torah-green mr-2">Benny dice:</span>
                                    "{info}"
                                </p>
                             </div>

                             <Button 
                                onClick={() => onNavigateToVideos(getSelectedVideoId())} 
                                variant="primary" 
                                size="lg"
                                className="shadow-xl hover:scale-105 transition-transform flex items-center gap-3 px-8"
                             >
                                <span>🎥</span> Ver Video
                             </Button>
                         </>
                     )}
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};