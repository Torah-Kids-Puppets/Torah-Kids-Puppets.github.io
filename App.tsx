
import React, { useState } from 'react';
import { View } from './types';
import { AlefBetBoard } from './components/AlefBetBoard';
import { QuizArena } from './components/QuizArena';
import { ParashaCorner } from './components/ParashaCorner';
import { HolidayHall } from './components/HolidayHall';
import { CharacterGallery } from './components/CharacterGallery';
import { VideoRoom } from './components/VideoRoom';
import { BrachosGarden } from './components/BrachosGarden';

interface HeroProps {
  setView: (v: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4 w-full">
      {/* Logo Section */}
      <div className="mb-4 animate-float flex justify-center w-full relative min-h-[120px] items-center">
          {!imageError ? (
            <img 
                src="./img/logo.png" 
                alt="Torah Kids Puppets" 
                className="w-auto h-auto max-w-[260px] md:max-w-[380px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10"
                onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center animate-fade-in">
                {/* Fallback elegante si no hay imagen */}
                <div className="text-7xl mb-4 filter drop-shadow-xl animate-bounce-slow">🎭</div>
                <h1 className="text-6xl md:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-torah-blue-deep via-torah-blue-light to-torah-purple drop-shadow-sm tracking-tight px-4 text-center leading-tight">
                  Torah Kids Puppets
                </h1>
            </div>
          )}
      </div>

      <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mb-10 font-body font-medium leading-relaxed bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white shadow-sm mx-4">
        ¡Únete a <span className="font-bold text-torah-blue-deep">Yosef, Benny, Aharón</span> y todo el elenco! 
        Aprende Torá con humor, aventuras y valores para toda la familia.
      </p>

      {/* Main Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        
        {/* ALEF-BET */}
        <div onClick={() => setView(View.ALEFBET)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-torah-gold hover:bg-yellow-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-torah-gold opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🔡</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Aprende Alef-Bet</h3>
          <p className="text-sm text-gray-500 font-body">Descubre las letras sagradas jugando.</p>
        </div>

        {/* BRACHOT GARDEN */}
        <div onClick={() => setView(View.BRACHOT)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-green-400 hover:bg-green-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍏</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Jardín de Berajot</h3>
          <p className="text-sm text-gray-500 font-body">Bendiciones para la comida y Mitzvot.</p>
        </div>

        {/* TRIVIA */}
        <div onClick={() => setView(View.QUIZ)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-torah-blue-light hover:bg-blue-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-torah-blue-light opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🧠</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Trivia Torá</h3>
          <p className="text-sm text-gray-500 font-body">Demuestra cuánto sabes en este reto.</p>
        </div>

        {/* PARASHA (Updated Color: Brown/Gold - Amber-700) */}
        <div onClick={() => setView(View.PARASHA)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-amber-700 hover:bg-amber-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-700 opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">📜</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Parashá Semanal</h3>
          <p className="text-sm text-gray-500 font-body">Explora los 5 libros con Avraham.</p>
        </div>

        {/* VIDEOS */}
        <div onClick={() => setView(View.VIDEOS)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-holiday-pesach hover:bg-red-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-holiday-pesach opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍿</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Sala de Video</h3>
          <p className="text-sm text-gray-500 font-body">Disfruta de los mejores episodios.</p>
        </div>

        {/* HOLIDAYS */}
        <div onClick={() => setView(View.HOLIDAYS)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-torah-purple hover:bg-purple-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-torah-purple opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🍎</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Fiestas (Jaguim)</h3>
          <p className="text-sm text-gray-500 font-body">Explora el calendario con Benny.</p>
        </div>

        {/* CHARACTERS */}
        <div onClick={() => setView(View.CHARACTERS)} className="group cursor-pointer bg-torah-white p-6 rounded-[2rem] shadow-xl border-4 border-torah-orange hover:bg-orange-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden xl:col-span-2">
          <div className="absolute top-0 right-0 w-16 h-16 bg-torah-orange opacity-10 rounded-bl-[2rem]"></div>
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🎭</div>
          <h3 className="text-xl font-display font-bold text-torah-blue-deep mb-1">Conoce al Elenco</h3>
          <p className="text-sm text-gray-500 font-body">Descubre quién es quién en el estudio.</p>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [initialVideoId, setInitialVideoId] = useState<string | null>(null);

  const handleNavigateToVideo = (videoId?: string) => {
    if (videoId) setInitialVideoId(videoId);
    setCurrentView(View.VIDEOS);
  };

  const renderView = () => {
    switch (currentView) {
      case View.ALEFBET:
        return <AlefBetBoard onBack={() => setCurrentView(View.HOME)} />;
      case View.BRACHOT:
        return <BrachosGarden onBack={() => setCurrentView(View.HOME)} />;
      case View.QUIZ:
        return <QuizArena onBack={() => setCurrentView(View.HOME)} />;
      case View.PARASHA:
        return <ParashaCorner onBack={() => setCurrentView(View.HOME)} />;
      case View.HOLIDAYS:
        return <HolidayHall onBack={() => setCurrentView(View.HOME)} onNavigateToVideos={handleNavigateToVideo} />;
      case View.CHARACTERS:
        return <CharacterGallery onBack={() => setCurrentView(View.HOME)} />;
      case View.VIDEOS:
        return <VideoRoom onBack={() => setCurrentView(View.HOME)} initialVideoId={initialVideoId} />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  // Cast currentView to View to avoid TypeScript errors if type narrowing occurred
  const isVideoRoom = (currentView as View) === View.VIDEOS;

  return (
    <div className="min-h-screen bg-torah-ivory font-body text-gray-800 flex flex-col relative overflow-x-hidden">
       {/* Decorative Background Elements */}
       <div className="fixed -top-20 -left-20 w-64 h-64 bg-torah-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="fixed top-40 -right-20 w-72 h-72 bg-torah-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
       <div className="fixed -bottom-20 left-20 w-80 h-80 bg-torah-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
       
       {/* Pattern Overlay */}
       <div className="fixed inset-0 bg-pattern pointer-events-none"></div>

       {/* Header - HIDDEN IF IN VIDEO ROOM */}
       {!isVideoRoom && (
         <header className="p-4 flex justify-center sticky top-4 z-50">
            <nav className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-torah-blue-light flex justify-between items-center relative z-50">
               
               {/* Logo Home Button */}
               <button onClick={() => setCurrentView(View.HOME)} className="hover:scale-105 transition-transform active:scale-95 flex items-center pr-4 border-r border-gray-200" title="Inicio">
                  <img 
                    src="./img/logo.png" 
                    alt="Inicio" 
                    className="h-10 w-auto object-contain drop-shadow-sm"
                  />
                  <span className="font-display font-bold text-torah-blue-deep ml-3 text-lg hidden sm:block">Torah Kids Puppets</span>
               </button>
               
               {/* Dropdown Menu Trigger */}
               <div className="relative group ml-2">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-50 transition-all font-display font-bold text-torah-blue-deep text-lg group-hover:text-torah-blue-light focus:outline-none">
                      <span>Explorar</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                  </button>

                  {/* Dropdown Content */}
                  {/* pt-4 creates a safe hover zone so the mouse can reach the menu */}
                  <div className="absolute top-full right-0 mt-2 w-72 pt-4 hidden group-hover:block z-50">
                      <div className="bg-white rounded-3xl shadow-2xl border-2 border-torah-blue-light overflow-hidden animate-fade-in-up p-2 grid gap-1 relative z-50">
                          
                          {/* Triangle Tip */}
                          <div className="absolute -top-2 right-10 w-4 h-4 bg-white border-t-2 border-l-2 border-torah-blue-light transform rotate-45 z-0"></div>

                          <div className="relative z-10 bg-white rounded-2xl">
                            <button onClick={() => setCurrentView(View.ALEFBET)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-yellow-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🔡</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Alef-Bet</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Aprende hebreo</span>
                                </div>
                            </button>

                            <button onClick={() => setCurrentView(View.BRACHOT)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🍏</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Berajot</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Bendiciones</span>
                                </div>
                            </button>

                            <button onClick={() => setCurrentView(View.PARASHA)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">📜</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Parashá</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Historia Semanal</span>
                                </div>
                            </button>

                            <button onClick={() => setCurrentView(View.HOLIDAYS)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🍎</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Fiestas</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Calendario Judío</span>
                                </div>
                            </button>

                            <div className="h-px bg-gray-100 my-1"></div>

                            <button onClick={() => setCurrentView(View.QUIZ)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🧠</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Trivia</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Reto de preguntas</span>
                                </div>
                            </button>
                            
                            <button onClick={() => setCurrentView(View.VIDEOS)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🍿</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Videos</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Sala de Cine</span>
                                </div>
                            </button>

                            <button onClick={() => setCurrentView(View.CHARACTERS)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 rounded-2xl transition-colors text-left group/item">
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">🎭</span>
                                <div>
                                    <span className="block font-display font-bold text-torah-blue-deep leading-none">Personajes</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Conoce al elenco</span>
                                </div>
                            </button>
                          </div>

                      </div>
                  </div>
               </div>
            </nav>
         </header>
       )}

       <main className={`container mx-auto flex-1 flex items-center justify-center ${!isVideoRoom ? 'p-4' : 'p-0'} relative z-10`}>
         {renderView()}
       </main>

       {/* Footer - HIDDEN IF IN VIDEO ROOM */}
       {!isVideoRoom && (
         <footer className="p-8 text-center flex flex-col gap-3 bg-white/50 mt-10 border-t border-torah-gold/30 relative z-10">
           <p className="font-display font-bold text-torah-blue-deep">Torah Kids Puppets ©</p>
           <p className="text-sm font-body text-gray-500">Enseñando con el corazón ❤️ y la tradición</p>
         </footer>
       )}
    </div>
  );
}
