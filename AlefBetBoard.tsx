import React, { useState } from 'react';
import { Button } from './Button';
import { TORAH_DB } from '../services/dataService';
import { ParashaContent, TorahBook } from '../types';

interface ParashaCornerProps {
  onBack: () => void;
}

type Mode = 'dashboard' | 'lectura' | 'quiz';

export const ParashaCorner: React.FC<ParashaCornerProps> = ({ onBack }) => {
  const [selectedBook, setSelectedBook] = useState<TorahBook | null>(null);
  const [selectedParasha, setSelectedParasha] = useState<ParashaContent | null>(null);
  const [activeMode, setActiveMode] = useState<Mode>('dashboard');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Quiz State Local
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // --- NAVIGATION LOGIC ---
  const handlePrevParasha = () => {
    if (!selectedBook || !selectedParasha) return;
    const currentIndex = selectedBook.parashot.findIndex(p => p.id === selectedParasha.id);
    if (currentIndex > 0) {
        const prev = selectedBook.parashot[currentIndex - 1];
        if (prev.videoId) changeParasha(prev);
    }
  };

  const handleNextParasha = () => {
    if (!selectedBook || !selectedParasha) return;
    const currentIndex = selectedBook.parashot.findIndex(p => p.id === selectedParasha.id);
    if (currentIndex < selectedBook.parashot.length - 1) {
        const next = selectedBook.parashot[currentIndex + 1];
        if (next.videoId) changeParasha(next);
    }
  };

  const changeParasha = (parasha: ParashaContent) => {
      stopSpeaking();
      setSelectedParasha(parasha);
      setActiveMode('dashboard');
      setQuizAnswers({});
      setShowQuizResults(false);
  }

  const currentParashaIndex = selectedBook && selectedParasha 
    ? selectedBook.parashot.findIndex(p => p.id === selectedParasha.id) 
    : -1;
  
  const hasPrev = currentParashaIndex > 0 && !!selectedBook?.parashot[currentParashaIndex - 1].videoId;
  const hasNext = selectedBook && currentParashaIndex < selectedBook.parashot.length - 1 && !!selectedBook.parashot[currentParashaIndex + 1].videoId;

  // --- TTS LOGIC (Narración de Avraham) ---
  const handleSpeakSummary = () => {
    if (!selectedParasha) return;
    if (isSpeaking) {
        stopSpeaking();
        return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      // Unir resumen y mensaje para la narración
      const textToRead = `${selectedParasha.summary} ... El mensaje de esta semana es: ${selectedParasha.message}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'es-ES'; // Preferencia español
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const stopSpeaking = () => {
      if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
  };

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
        <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in">
           <div className="w-full flex justify-between items-center mb-8">
             <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-torah-gold drop-shadow-sm">
                📜 Elige un Libro
             </h2>
             <div className="w-20"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
              {TORAH_DB.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                    className={`group relative p-6 h-64 md:h-80 rounded-[2rem] border-4 text-center transition-all transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden shadow-lg ${book.color} bg-white flex flex-col items-center justify-between`}
                  >
                      {/* Decorative Background */}
                      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
                      
                      <div className="mt-4 transform group-hover:scale-110 transition-transform duration-500">
                         <span className="text-6xl md:text-7xl drop-shadow-md">{book.icon}</span>
                      </div>
                      
                      <div className="relative z-10 pb-4">
                          <h3 className="text-xl md:text-2xl font-display font-bold leading-tight mb-2">{book.name.split(' ')[0]}</h3>
                          <span className="text-xs font-bold uppercase tracking-widest opacity-70 bg-white/50 px-3 py-1 rounded-full">
                              {book.parashot.length} Parashot
                          </span>
                      </div>
                  </button>
              ))}
          </div>
        </div>
      );
  }

  // 2. VISTA DE LISTA DE PARASHOT
  if (selectedBook && !selectedParasha) {
      return (
          <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in">
            <div className="w-full flex justify-between items-center mb-6">
                <Button onClick={() => setSelectedBook(null)} variant="outline" size="sm">← Libros</Button>
                <h2 className="text-3xl font-display font-bold text-gray-800 flex items-center gap-2">
                    {selectedBook.icon} {selectedBook.name}
                </h2>
                <div className="w-20"></div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border-4 border-gray-100 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedBook.parashot.map((p, idx) => {
                        // Verificamos si hay video. Si el string está vacío o es null, es falso.
                        const hasVideo = Boolean(p.videoId && p.videoId.trim().length > 0);
                        
                        return (
                            <button
                                key={p.id}
                                onClick={() => {
                                    if(hasVideo) {
                                        changeParasha(p);
                                    }
                                }}
                                disabled={!hasVideo}
                                className={`
                                    relative flex flex-col items-center text-center p-4 rounded-2xl border-b-4 transition-all duration-300 overflow-hidden
                                    ${hasVideo 
                                        ? 'bg-amber-50 border-amber-200 hover:bg-white hover:border-torah-gold hover:shadow-xl hover:-translate-y-1 cursor-pointer group' 
                                        : 'bg-gray-100 border-gray-200 opacity-60 grayscale cursor-not-allowed'
                                    }
                                `}
                            >
                                {/* Badge de Estado */}
                                <div className="absolute top-2 right-2">
                                    {hasVideo ? (
                                        <div className="bg-green-100 text-green-600 rounded-full p-1 shadow-sm transform group-hover:scale-110 transition-transform">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 text-gray-500 rounded-full p-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                        </div>
                                    )}
                                </div>

                                <div className="w-full flex justify-start items-center text-xs font-bold text-gray-400 mb-2">
                                    <span className={`px-2 py-0.5 rounded-md ${hasVideo ? 'bg-amber-100 text-amber-800' : 'bg-gray-200'}`}>
                                        #{idx + 1}
                                    </span>
                                </div>
                                
                                <h4 className={`font-display font-bold text-lg leading-tight mb-1 ${hasVideo ? 'text-gray-800 group-hover:text-torah-blue-deep' : 'text-gray-500'}`}>
                                    {p.name}
                                </h4>
                                
                                {p.hebrewName && (
                                    <span className={`font-body font-bold text-sm ${hasVideo ? 'text-torah-gold' : 'text-gray-400'}`}>
                                        {p.hebrewName}
                                    </span>
                                )}

                                {!hasVideo && (
                                    <span className="mt-2 text-[10px] uppercase font-bold text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
                                        Próximamente
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
          </div>
      );
  }

  // 3. VISTA DE DETALLE (DASHBOARD)
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in pb-20">
       <div className="w-full flex justify-between items-center mb-4">
         <Button onClick={() => { setSelectedParasha(null); stopSpeaking(); }} variant="outline" size="sm">← Volver</Button>
         <div className="flex gap-2">
            {hasPrev && <Button onClick={handlePrevParasha} variant="secondary" size="sm" className="!px-3">◀ Ant</Button>}
            {hasNext && <Button onClick={handleNextParasha} variant="secondary" size="sm" className="!px-3">Sig ▶</Button>}
         </div>
      </div>

      {/* HEADER HERO */}
      <div className="w-full text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-torah-blue-deep mb-2 drop-shadow-sm">
             {selectedParasha?.name}
          </h1>
          {selectedParasha?.hebrewName && (
              <h2 className="text-3xl text-torah-gold font-bold font-display">{selectedParasha.hebrewName}</h2>
          )}
      </div>

      {/* TABS DE MODO */}
      <div className="flex justify-center gap-4 mb-8">
          <button 
             onClick={() => setActiveMode('dashboard')}
             className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${activeMode === 'dashboard' ? 'bg-torah-blue-deep text-white border-torah-blue-deep shadow-lg' : 'bg-white text-gray-500 border-gray-200'}`}
          >
             🏠 Tablero
          </button>
          <button 
             onClick={() => setActiveMode('lectura')}
             className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${activeMode === 'lectura' ? 'bg-torah-blue-deep text-white border-torah-blue-deep shadow-lg' : 'bg-white text-gray-500 border-gray-200'}`}
          >
             📜 Texto Completo
          </button>
          {selectedParasha?.quiz && (
             <button 
               onClick={() => setActiveMode('quiz')}
               className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${activeMode === 'quiz' ? 'bg-torah-blue-deep text-white border-torah-blue-deep shadow-lg' : 'bg-white text-gray-500 border-gray-200'}`}
            >
               🧠 Desafío
            </button>
          )}
      </div>

      {/* --- MODO DASHBOARD (NUEVO) --- */}
      {activeMode === 'dashboard' && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
              
              {/* COL 1: VIDEO (Grande) */}
              <div className="lg:col-span-2 space-y-6">
                  <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 relative group">
                      <iframe 
                        key={selectedParasha?.videoId}
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${selectedParasha?.videoId?.trim()}?autoplay=0&rel=0&playsinline=1&modestbranding=1&controls=1`}
                        title="Video de la Parasha" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                  </div>

                  {/* Tarjeta de Misión */}
                  {selectedParasha?.activity && (
                     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-[2rem] border-2 border-indigo-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                         <div className="text-5xl">🎯</div>
                         <div>
                             <h4 className="font-display font-bold text-indigo-900 text-lg uppercase tracking-wider mb-1">Misión Semanal</h4>
                             <p className="font-body font-medium text-indigo-800 text-lg leading-tight">{selectedParasha.activity}</p>
                         </div>
                     </div>
                  )}
              </div>

              {/* COL 2: RESUMEN Y DATOS */}
              <div className="flex flex-col gap-4">
                  
                  {/* Tarjeta Resumen + TTS */}
                  <div className="bg-white p-6 rounded-[2rem] border-2 border-gray-100 shadow-xl relative overflow-hidden group hover:border-torah-gold transition-colors">
                      <div className="flex justify-between items-start mb-3">
                         <h3 className="font-display font-bold text-xl text-gray-800">En resumen...</h3>
                         <button 
                            onClick={handleSpeakSummary}
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-all ${isSpeaking ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                         >
                            {isSpeaking ? '🛑 Detener' : '🔊 Escuchar'}
                         </button>
                      </div>
                      <p className="font-body text-gray-600 leading-relaxed mb-4">
                          {selectedParasha?.summary}
                      </p>
                      
                      {/* Mensaje Clave (Mini) */}
                      <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200 text-sm font-medium text-yellow-800 flex gap-2">
                          <span>💡</span>
                          <span className="italic">"{selectedParasha?.message}"</span>
                      </div>
                  </div>

                  {/* Tarjetas Pequeñas 2x2 */}
                  <div className="grid grid-cols-2 gap-4">
                      {/* Palabra Clave */}
                      {selectedParasha?.keyword ? (
                          <div className="bg-green-50 p-4 rounded-3xl border border-green-200 text-center flex flex-col items-center justify-center shadow-sm">
                              <span className="text-3xl mb-1">{selectedParasha.keyword.icon}</span>
                              <h5 className="font-display font-bold text-green-800 text-lg">{selectedParasha.keyword.word}</h5>
                              <span className="text-xs font-bold text-green-600 uppercase">{selectedParasha.keyword.translation}</span>
                          </div>
                      ) : (
                          <div className="bg-gray-50 p-4 rounded-3xl border border-gray-200 flex flex-col items-center justify-center opacity-50">
                             <span className="text-2xl">🤔</span>
                             <span className="text-xs font-bold mt-2">Próximamente</span>
                          </div>
                      )}

                      {/* Dato Curioso (Fun Fact) */}
                      {selectedParasha?.funFact ? (
                          <div className="bg-purple-50 p-4 rounded-3xl border border-purple-200 text-center flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                              <span className="text-xs font-bold text-purple-400 absolute top-2 right-2">?</span>
                              <span className="text-3xl mb-1">🤓</span>
                              <p className="text-[10px] font-bold text-purple-800 leading-tight">
                                  {selectedParasha.funFact}
                              </p>
                          </div>
                      ) : (
                          <div className="bg-gray-50 p-4 rounded-3xl border border-gray-200 flex flex-col items-center justify-center opacity-50">
                             <span className="text-2xl">🤐</span>
                          </div>
                      )}
                  </div>

              </div>
          </div>
      )}

      {/* --- MODO LECTURA --- */}
      {activeMode === 'lectura' && (
         <div className="animate-fade-in text-left max-w-3xl mx-auto">
             <div className="bg-[#fffdf5] p-8 md:p-12 rounded-[2rem] border-4 border-torah-gold shadow-inner relative max-h-[60vh] overflow-y-auto custom-scrollbar">
                 <h4 className="font-display font-bold text-2xl text-torah-blue-deep mb-6 text-center border-b-2 border-torah-gold/30 pb-4">
                     La Historia Completa
                 </h4>
                 <div className="font-body text-xl leading-relaxed text-gray-800 space-y-6">
                    {selectedParasha?.fullText 
                        ? selectedParasha.fullText.split('\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))
                        : <p className="italic text-gray-500 text-center">Avraham está escribiendo esta historia para ti. ¡Vuelve pronto!</p>
                    }
                 </div>
             </div>
        </div>
      )}

      {/* --- MODO QUIZ --- */}
      {activeMode === 'quiz' && selectedParasha?.quiz && (
        <div className="animate-fade-in text-left max-w-2xl mx-auto w-full">
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
                <div className="text-center py-10 animate-pop bg-white rounded-3xl shadow-xl border-4 border-torah-green">
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
  );
};
