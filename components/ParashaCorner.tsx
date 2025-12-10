import React, { useState } from 'react';
import { Button } from './Button';
import { TORAH_DB } from '../services/geminiService';
import { ParashaContent, TorahBook } from '../types';

interface ParashaCornerProps {
  onBack: () => void;
}

type Tab = 'resumen' | 'lectura' | 'video' | 'quiz';

export const ParashaCorner: React.FC<ParashaCornerProps> = ({ onBack }) => {
  const [selectedBook, setSelectedBook] = useState<TorahBook | null>(null);
  const [selectedParasha, setSelectedParasha] = useState<ParashaContent | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('resumen');
  
  // Quiz State Local
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // --- NAVIGATION LOGIC ---
  const handlePrevParasha = () => {
    if (!selectedBook || !selectedParasha) return;
    const currentIndex = selectedBook.parashot.findIndex(p => p.id === selectedParasha.id);
    if (currentIndex > 0) {
        const prev = selectedBook.parashot[currentIndex - 1];
        if (prev.videoId) setSelectedParasha(prev); // Only navigate if it exists/valid
        setActiveTab('resumen');
        setQuizAnswers({});
        setShowQuizResults(false);
    }
  };

  const handleNextParasha = () => {
    if (!selectedBook || !selectedParasha) return;
    const currentIndex = selectedBook.parashot.findIndex(p => p.id === selectedParasha.id);
    if (currentIndex < selectedBook.parashot.length - 1) {
        const next = selectedBook.parashot[currentIndex + 1];
        if (next.videoId) setSelectedParasha(next);
        setActiveTab('resumen');
        setQuizAnswers({});
        setShowQuizResults(false);
    }
  };

  const currentParashaIndex = selectedBook && selectedParasha 
    ? selectedBook.parashot.findIndex(p => p.id === selectedParasha.id) 
    : -1;
  
  const hasPrev = currentParashaIndex > 0 && !!selectedBook?.parashot[currentParashaIndex - 1].videoId;
  const hasNext = selectedBook && currentParashaIndex < selectedBook.parashot.length - 1 && !!selectedBook.parashot[currentParashaIndex + 1].videoId;

  // --- QUIZ LOGIC ---
  const handleQuizAnswer = (qIndex: number, optionIndex: number) => {
      setQuizAnswers(prev => ({...prev, [qIndex]: optionIndex}));
  };

  const calculateScore = () => {
      if (!selectedParasha?.quiz) return 0;
      let score = 0;
      selectedParasha.quiz.forEach((q, idx) => {
          if (quizAnswers[idx] === q.correctAnswer) score++;
      });
      return score;
  };

  // 1. VISTA DE LIBROS (JUMASH)
  if (!selectedBook) {
      return (
        <div className="flex flex-col items-center max-w-5xl mx-auto p-4 w-full animate-fade-in">
           <div className="w-full flex justify-between items-center mb-8">
             <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-torah-gold drop-shadow-sm">
                📜 Parashot
             </h2>
             <div className="w-20"></div>
          </div>
          
          <p className="text-xl text-center text-gray-600 mb-10 font-body">Elige un libro para empezar a estudiar con Avraham:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {TORAH_DB.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                    className={`group relative p-8 rounded-[2.5rem] border-4 text-left transition-all transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden shadow-lg ${book.color} bg-white`}
                  >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-current opacity-10 rounded-bl-[100%]"></div>
                      <span className="text-6xl mb-4 block group-hover:scale-110 transition-transform">{book.icon}</span>
                      <h3 className="text-2xl font-display font-bold mb-2">{book.name}</h3>
                      <p className="font-body font-bold opacity-70">{book.parashot.length} Parashot</p>
                  </button>
              ))}
          </div>
        </div>
      );
  }

  // 2. VISTA DE LISTA DE PARASHOT (Estilo Cuadrícula Visual)
  if (selectedBook && !selectedParasha) {
      return (
          <div className="flex flex-col items-center max-w-5xl mx-auto p-4 w-full animate-fade-in">
            <div className="w-full flex justify-between items-center mb-6">
                <Button onClick={() => setSelectedBook(null)} variant="outline" size="sm">← Volver a Libros</Button>
                <h2 className="text-3xl font-display font-bold text-gray-800 flex items-center gap-2">
                    {selectedBook.icon} {selectedBook.name}
                </h2>
                <div className="w-20"></div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border-4 border-gray-100 w-full min-h-[400px]">
                {selectedBook.parashot.length === 0 ? (
                    <div className="text-center py-20 opacity-50">
                        <span className="text-6xl">🚧</span>
                        <p className="mt-4 text-xl font-display">¡Estamos escribiendo este libro!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedBook.parashot.map((p, idx) => {
                            const hasVideo = p.videoId && p.videoId.length > 0;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => {
                                        if(hasVideo) {
                                            setSelectedParasha(p);
                                            setActiveTab('resumen');
                                            setQuizAnswers({});
                                            setShowQuizResults(false);
                                        }
                                    }}
                                    disabled={!hasVideo}
                                    className={`relative flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all group aspect-square justify-center
                                        ${hasVideo 
                                            ? 'hover:bg-blue-50 border-gray-100 hover:border-torah-blue-light cursor-pointer hover:shadow-lg' 
                                            : 'opacity-60 bg-gray-50 border-dashed border-gray-200 cursor-not-allowed grayscale'
                                        }
                                    `}
                                >
                                    <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </div>

                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-sm text-3xl transition-transform ${hasVideo ? 'bg-torah-gold text-white group-hover:scale-110' : 'bg-gray-200 text-gray-400'}`}>
                                        {/* CAMBIO AQUÍ: Icono de Rollo de Torá (📜) en lugar de Claqueta (🎬) */}
                                        {hasVideo ? '📜' : '🔒'}
                                    </div>
                                    
                                    <h4 className={`font-display font-bold text-lg leading-tight mb-1 ${hasVideo ? 'text-torah-blue-deep' : 'text-gray-500'}`}>
                                        {p.name}
                                    </h4>
                                    
                                    {p.hebrewName && (
                                        <span className={`font-body font-bold text-sm ${hasVideo ? 'text-torah-gold' : 'text-gray-400'}`}>
                                            {p.hebrewName}
                                        </span>
                                    )}

                                    {!hasVideo && (
                                        <span className="text-[10px] uppercase font-bold bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full mt-2">
                                            Próximamente
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
          </div>
      );
  }

  // 3. VISTA DE DETALLE (CONTENIDO)
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-4 w-full animate-fade-in">
       <div className="w-full flex justify-between items-center mb-6">
         <Button onClick={() => { setSelectedParasha(null); }} variant="outline" size="sm">← Volver a Lista</Button>
      </div>

      <div className="bg-torah-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border-4 border-torah-gold w-full relative overflow-visible">
         
         {/* Navigation Arrows (Absolute) */}
         {hasPrev && (
             <button 
                onClick={handlePrevParasha}
                className="absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border-2 border-torah-blue-light text-2xl hover:bg-blue-50 transition-all z-30"
                title="Parashá Anterior"
             >
                 ◀
             </button>
         )}
         {hasNext && (
             <button 
                onClick={handleNextParasha}
                className="absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border-2 border-torah-blue-light text-2xl hover:bg-blue-50 transition-all z-30"
                title="Siguiente Parashá"
             >
                 ▶
             </button>
         )}

         <div className="text-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-torah-blue-deep mb-2">
                {selectedParasha?.name}
            </h3>
            {selectedParasha?.hebrewName && <p className="text-3xl text-torah-gold font-bold mb-6 font-display drop-shadow-sm">{selectedParasha.hebrewName}</p>}

            {/* Tabs de Navegación Interna */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 bg-gray-100 p-2 rounded-full w-fit mx-auto">
                <button 
                    onClick={() => setActiveTab('resumen')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base ${activeTab === 'resumen' ? 'bg-white text-torah-blue-deep shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    📖 Resumen
                </button>
                <button 
                    onClick={() => setActiveTab('lectura')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base ${activeTab === 'lectura' ? 'bg-white text-torah-blue-deep shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    📜 Leer Historia
                </button>
                <button 
                    onClick={() => setActiveTab('video')}
                    className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base ${activeTab === 'video' ? 'bg-white text-torah-blue-deep shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    🎥 Video
                </button>
                {selectedParasha?.quiz && selectedParasha.quiz.length > 0 && (
                    <button 
                        onClick={() => setActiveTab('quiz')}
                        className={`px-4 md:px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base ${activeTab === 'quiz' ? 'bg-white text-torah-blue-deep shadow-sm scale-105' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        🧠 Trivia
                    </button>
                )}
            </div>
            
            {/* --- CONTENIDO SEGÚN TAB --- */}

            {activeTab === 'video' && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-xl border-4 border-gray-200 animate-pop">
                            <iframe 
                            key={selectedParasha?.videoId}
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${selectedParasha?.videoId?.trim()}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1&showinfo=0`}
                            title="Video de la Parasha" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Botón de Respaldo */}
                     <div className="flex justify-center">
                        <a 
                          href={`https://www.youtube.com/watch?v=${selectedParasha?.videoId}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-500 hover:text-torah-blue-deep transition-colors bg-gray-100 px-4 py-2 rounded-full border border-gray-200"
                        >
                          <span>⚠️ ¿Problemas para ver?</span>
                          <span className="font-bold underline">Abrir en YouTube</span>
                        </a>
                     </div>
                </div>
            )}

            {activeTab === 'lectura' && (
                <div className="animate-fade-in text-left">
                     <div className="bg-[#fffdf5] p-8 md:p-12 rounded-[2rem] border-4 border-torah-gold shadow-inner relative max-h-[60vh] overflow-y-auto custom-scrollbar">
                         {/* Decoración tipo pergamino */}
                         <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-yellow-900/10 to-transparent pointer-events-none"></div>
                         
                         <h4 className="font-display font-bold text-2xl text-torah-blue-deep mb-6 text-center border-b-2 border-torah-gold/30 pb-4">
                             La Historia de {selectedParasha?.name}
                         </h4>
                         
                         <div className="font-body text-xl md:text-2xl leading-relaxed text-gray-800 space-y-6">
                            {selectedParasha?.fullText 
                                ? selectedParasha.fullText.split('\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                  ))
                                : <p className="italic text-gray-500 text-center">Avraham está escribiendo esta historia para ti. ¡Vuelve pronto!</p>
                            }
                         </div>

                         <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-900/10 to-transparent pointer-events-none"></div>
                     </div>
                </div>
            )}

            {activeTab === 'resumen' && (
                <div className="space-y-8 animate-fade-in text-left">
                    {/* Resumen Principal Expandido */}
                    <div className="bg-torah-ivory p-6 md:p-10 rounded-[2rem] border-l-8 border-torah-gold text-lg md:text-2xl leading-relaxed font-body text-gray-800 relative shadow-sm">
                        <p>{selectedParasha?.summary || "¡Hola! Benny y el equipo están escribiendo el resumen de esta Parashá. Mientras tanto, puedes ver el video para aprender todo sobre ella."}</p>
                    </div>

                    {/* Mensaje Central */}
                    {selectedParasha?.message && (
                        <div className="bg-blue-50 p-6 md:p-8 rounded-[2rem] border-4 border-white shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
                            <div className="bg-white p-4 rounded-full shadow-md text-4xl">💡</div>
                            <div>
                                <h4 className="font-display font-bold text-torah-blue-deep text-xl uppercase tracking-wide mb-2">Mensaje Clave</h4>
                                <p className="font-display font-bold text-torah-blue-deep text-2xl md:text-3xl italic">"{selectedParasha?.message}"</p>
                            </div>
                        </div>
                    )}

                    {/* Rincón de Reflexión (Anteriormente Actividad) */}
                    {selectedParasha?.activity && (
                        <div className="bg-purple-50 p-8 rounded-[2rem] border-4 border-purple-200 text-center relative overflow-hidden group hover:border-purple-300 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                            
                            <span className="block text-5xl mb-4 animate-bounce-slow relative z-10">💭</span>
                            <h4 className="font-display font-bold text-3xl text-purple-900 mb-4 relative z-10">Rincón de Reflexión</h4>
                            
                            <div className="bg-white/80 p-6 rounded-2xl backdrop-blur-sm relative z-10">
                                <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed font-body">
                                    {selectedParasha.activity}
                                </p>
                            </div>
                            
                            <div className="mt-4 text-purple-700 font-bold text-sm uppercase tracking-widest relative z-10">
                                Para conversar en familia
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'quiz' && selectedParasha?.quiz && (
                <div className="animate-fade-in text-left">
                    {!showQuizResults ? (
                        <div className="space-y-6">
                            {selectedParasha.quiz.map((q, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                                    <p className="font-display font-bold text-lg mb-4 text-torah-blue-deep flex gap-2">
                                        <span className="bg-torah-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">{idx + 1}</span>
                                        {q.question}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {q.options.map((opt, optIdx) => (
                                            <button
                                                key={optIdx}
                                                onClick={() => handleQuizAnswer(idx, optIdx)}
                                                className={`p-3 rounded-lg text-left text-sm font-bold border-2 transition-all
                                                    ${quizAnswers[idx] === optIdx 
                                                        ? 'bg-blue-100 border-blue-400 text-blue-800' 
                                                        : 'bg-gray-50 border-transparent hover:border-gray-300 text-gray-600'
                                                    }
                                                `}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-center mt-6">
                                <Button 
                                    onClick={() => setShowQuizResults(true)} 
                                    disabled={Object.keys(quizAnswers).length < selectedParasha.quiz.length}
                                >
                                    Ver Resultados
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-10 animate-pop">
                             <div className="text-6xl mb-4">🏆</div>
                             <h4 className="text-3xl font-display font-bold text-torah-blue-deep mb-2">
                                 ¡Resultados!
                             </h4>
                             <p className="text-xl mb-6">
                                 Acertaste <span className="font-bold text-torah-gold">{calculateScore()}</span> de {selectedParasha.quiz.length}
                             </p>
                             <Button onClick={() => { setQuizAnswers({}); setShowQuizResults(false); }}>Intentar de nuevo</Button>
                        </div>
                    )}
                </div>
            )}

        </div>
      </div>
    </div>
  );
};