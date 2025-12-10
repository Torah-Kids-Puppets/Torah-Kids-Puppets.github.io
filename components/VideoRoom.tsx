import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface VideoRoomProps {
  onBack: () => void;
  initialVideoId?: string | null;
}

type Category = 'BERESHIT' | 'SHEMOT' | 'VAYIKRA' | 'BAMIDBAR' | 'DEVARIM' | 'HOLIDAYS' | 'STORIES' | 'SHABAT';

interface YoutubeVideo {
  id: string;
  title: string;
  duration: string;
  category: Category;
  description?: string;
}

// --- CONFIGURACIÓN DE CATEGORÍAS (Cintas) ---
const categories: { id: Category; label: string; }[] = [
    { id: 'HOLIDAYS', label: '🎉 Fiestas y Especiales' },
    { id: 'SHABAT', label: '🕯️ Shabat Shalom' },
    { id: 'BERESHIT', label: '🦁 Libro de Bereshit' },
    { id: 'SHEMOT', label: '🌊 Libro de Shemot' },
    { id: 'VAYIKRA', label: '⚖️ Libro de Vayikrá' },
    { id: 'STORIES', label: '📖 Cuentos e Historias' },
];

// --- LISTA COMPLETA DE VIDEOS ---
const allVideos: YoutubeVideo[] = [
    // --- SPECIAL FEATURED (GENERAL INTRO) ---
    { id: 'dd8Bz3RAkgQ', title: '¿De qué trata la Torá? - Introducción Especial', duration: '27:57', category: 'STORIES', description: '¡Bienvenidos a Torah Kids Puppets! Descubre junto a Yosef, Benny y el Doc de qué se trata el libro más importante del mundo. En este episodio especial, aprenderemos por qué la Torá es nuestro mapa de vida, llena de historias increíbles, mitzvot y secretos para ser mejores personas cada día.' },

    // --- BERESHIT (Génesis) ---
    { id: 'XCP6sLsrT6Q', title: 'Parashat 1 Bereshit - Parashá en un minuto', duration: '0:59', category: 'BERESHIT' },
    { id: '8rAPAkIKRHE', title: 'Parashat 1 Bereshit - Estudio Completo', duration: '9:34', category: 'BERESHIT' },
    { id: 'bUu2W_fGqo8', title: 'Resumen Parashat 1 Bereshit con el Doc', duration: '5:59', category: 'BERESHIT' },
    { id: 'oLAULPrPEj8', title: 'Parashá 2 Noaj - Parashá en un minuto', duration: '0:59', category: 'BERESHIT' },
    { id: 'sMd0opDs2Ss', title: 'Estudiemos Parashat 2 Nóaj', duration: '12:49', category: 'BERESHIT' },
    { id: '6YoVDp5Jeqs', title: 'Resumen Parashat 2 Nóaj con el Doc', duration: '6:57', category: 'BERESHIT' },
    { id: 'hh4ppg7E5yI', title: 'Parashat 3 Lej Lejá - Parashá en un minuto', duration: '1:00', category: 'BERESHIT' },
    { id: 've0VT8f00fY', title: 'Estudiemos Parashat 3 Lej Lejá', duration: '13:17', category: 'BERESHIT' },
    { id: '--Z6J-rIgrk', title: 'Parashat 4 Vaierá - Estudio Completo', duration: '7:05', category: 'BERESHIT' },
    { id: 'oGBrpfV6Wug', title: 'Parashat 4 Vaierá - Parashá en un minuto', duration: '1:00', category: 'BERESHIT' },
    { id: 'msarrAETqGI', title: 'Parashá 5 Jaié Sará', duration: '0:59', category: 'BERESHIT' },
    { id: 'zkBk1z0u5-Q', title: 'Estudiemos Parashat 5 Jaié Saráh', duration: '5:59', category: 'BERESHIT' },
    { id: '-wxWR4UiXXI', title: 'Parashá 6 Toldot - Títeres', duration: '0:59', category: 'BERESHIT' },
    { id: '5GJFMWdIGbo', title: 'Parashat 6 Toldot - Estudio', duration: '5:23', category: 'BERESHIT' },
    { id: 'Olinh9ZgvYk', title: 'Parashá 7 Vaietzé', duration: '0:56', category: 'BERESHIT' },
    { id: 'biWskHeVKpU', title: 'Parashat 7 Vaietzé - Estudio', duration: '7:14', category: 'BERESHIT' },
    { id: 'pow5BUl1A5M', title: 'Parashá 8 Vaishlaj', duration: '0:55', category: 'BERESHIT' },
    { id: 'GOfB9q9vb_8', title: 'Parashat 8 Vaishlaj - Estudio', duration: '5:26', category: 'BERESHIT' },
    { id: 'mNPB8ICD0i8', title: 'Parashá 9 Vaieshev', duration: '1:00', category: 'BERESHIT' },
    { id: 'LeF_n_OXbNo', title: 'Parashat 9 Vaieshev - Estudio', duration: '4:48', category: 'BERESHIT' },
    { id: 'upcJnnNbcO8', title: 'Parashá 10 Miketz', duration: '1:00', category: 'BERESHIT' },
    { id: 'C3NQV3plamY', title: 'Parashat 10 Miketz - Estudio', duration: '6:00', category: 'BERESHIT' },
    { id: 'w4GK3pplW_Y', title: 'Parashá 11 Vaigash', duration: '0:57', category: 'BERESHIT' },
    { id: 'VfLg8ivtdFU', title: 'Parashat 11 Vaigash - Estudio', duration: '3:58', category: 'BERESHIT' },
    { id: 'p4gsg2bZ3jo', title: 'Parashá 12 Vaiejí', duration: '1:00', category: 'BERESHIT' },
    { id: 'WsR2TAyVZoY', title: 'Parashat 12 Vaieji - Estudio', duration: '5:02', category: 'BERESHIT' },

    // --- SHEMOT (Éxodo) ---
    { id: 'wWVrrqyVRls', title: 'Parashat 13 Shemot - Estudio Completo', duration: '8:32', category: 'SHEMOT' },
    { id: '0ZJUre6RjiY', title: 'Parashat 13 Shemot - Corto', duration: '0:55', category: 'SHEMOT' },
    { id: 'SDqAXlAfFj4', title: 'Parashat 14 Vaera - Corto', duration: '1:00', category: 'SHEMOT' },
    { id: 'r7fX55dNlqc', title: 'Parashat 14 Vaerá - Estudio', duration: '8:36', category: 'SHEMOT' },
    { id: 'FAgIYC7KhpU', title: 'Parashat 15 Bo - Estudio', duration: '12:38', category: 'SHEMOT' },
    { id: 'IFzPSegUYO4', title: 'Parsha en un minuto 15 Bo', duration: '0:44', category: 'SHEMOT' },
    { id: 'AwKQLzKyW5s', title: 'Parashat 16 Beshalaj - Estudio', duration: '11:27', category: 'SHEMOT' },
    { id: 'tWHKCkFBjvE', title: 'Parsha en un minuto 16 Beshalaj', duration: '0:47', category: 'SHEMOT' },
    { id: 'sHnaggaoroY', title: 'Parashat 17 Itró - Estudio', duration: '11:23', category: 'SHEMOT' },
    { id: '1ieTbEKPlRs', title: 'Parsha en un minuto 17 Itró', duration: '0:45', category: 'SHEMOT' },
    { id: '8UBu-rCS5sA', title: 'Parashat 18 Mishpatim - Estudio', duration: '8:38', category: 'SHEMOT' },
    { id: 'SOdBWtfb2hE', title: 'Parsha en un minuto 18 Mishapatim', duration: '0:52', category: 'SHEMOT' },
    { id: 'VdY9Giv2laY', title: 'Parashat 19 Terumáh - Estudio', duration: '5:58', category: 'SHEMOT' },
    { id: '3qsxRzFfggg', title: 'Parsha en un minuto 19 Terumah', duration: '0:48', category: 'SHEMOT' },
    { id: 'g2akTy5BB0Q', title: 'Parashat 20 Tetzavé - Estudio', duration: '6:21', category: 'SHEMOT' },
    { id: 'X6Y4-b4CG4M', title: 'Parsha en un minuto 20 Tetzaveh', duration: '0:48', category: 'SHEMOT' },
    { id: 'Bd4lU_MYILU', title: 'Parashat 21 Ki Tisá - Estudio', duration: '7:19', category: 'SHEMOT' },
    { id: 'pNfv65TyKDY', title: 'Parsha en un minuto 21 Ki tisa', duration: '0:49', category: 'SHEMOT' },
    { id: 'DfeuzcRBfto', title: 'Parashat 22 Vayakel - Estudio', duration: '6:00', category: 'SHEMOT' },
    { id: 'hyr1-ef09HM', title: 'Parsha en un minuto 22 Vayakel', duration: '0:43', category: 'SHEMOT' },
    { id: 'yk8hXQzolOM', title: 'Parashat 23 Pekudéi - Estudio', duration: '4:42', category: 'SHEMOT' },
    { id: 'rqyeTYOTRFM', title: 'Parsha en un minuto 23 Pekudei', duration: '0:50', category: 'SHEMOT' },

    // --- VAYIKRA (Levítico) ---
    { id: 'NwwUrSSDRvQ', title: 'Parashat 24 Vaikrá - Estudio', duration: '5:29', category: 'VAYIKRA' },
    { id: 'EC-Nnceu_ms', title: 'Parsha en un minuto 24 Vaikra', duration: '0:45', category: 'VAYIKRA' },
    { id: '81122QbTN70', title: 'Parashat Va\'Yikrá - Títeres', duration: '7:41', category: 'VAYIKRA' },
    { id: 'ROVgp6HBYgI', title: '¿Qué es Va\'Yikrá?', duration: '4:56', category: 'VAYIKRA' },
    { id: '1mDsNbou-Eg', title: 'Parashat 25 Tzav - Estudio', duration: '6:06', category: 'VAYIKRA' },
    { id: 'X9IApkMzbSw', title: 'Parashat Tzav - Versión Larga', duration: '14:40', category: 'VAYIKRA' },
    { id: 'uhGShtqf3l0', title: 'Parsha en un minuto 25 Tzav', duration: '0:53', category: 'VAYIKRA' },
    { id: '9Nhcw27C7fU', title: 'Parashat 26 Sheminí - Estudio', duration: '6:52', category: 'VAYIKRA' },
    { id: 'MwNi34vieEQ', title: 'Parsha en un minuto 26 Sheminí', duration: '0:52', category: 'VAYIKRA' },
    { id: 'M4RI6h5RxyY', title: 'Parsha en un minuto 26 Sheminí (Corto)', duration: '0:43', category: 'VAYIKRA' },
    { id: 'cUGfwEKJB_w', title: 'Parashat 27-28 Tazría-Metzorá', duration: '10:15', category: 'VAYIKRA' },
    { id: '-ORflM1R4H4', title: 'Parashat 27 Tazria - Estudio', duration: '4:52', category: 'VAYIKRA' },
    { id: '7LN0uQYABmU', title: 'Parashat 28 Metzora - Estudio', duration: '7:36', category: 'VAYIKRA' },

    // --- FIESTAS Y ESPECIALES ---
    { id: 'Defyt5gOBQo', title: 'Hagadá, Puppets y Matzá: La Historia de Pésaj', duration: '20:34', category: 'HOLIDAYS', description: '¡Únete a Benny, Yosef y todo el elenco en esta aventura épica para salir de Egipto! Un especial lleno de humor, canciones y mucha Matzá.' },
    { id: 'GHcExyGsd4o', title: 'Hagadá De Pesaj Animada (Clásica)', duration: '25:53', category: 'HOLIDAYS' },
    { id: '5wE1ZTeTOIU', title: '¡La Chispa de Janucá!', duration: '11:10', category: 'HOLIDAYS' },
    { id: 'vS3C7F1Okm4', title: 'Benny Has a Little Dreidel (Canción)', duration: '2:05', category: 'HOLIDAYS' },
    { id: 'o9mvIBnXtxE', title: 'Especial de Sukot', duration: '9:56', category: 'HOLIDAYS' },
    { id: '7kJmFPyS5xk', title: '¡Jag Sukot Sameaj!', duration: '0:16', category: 'HOLIDAYS' },
    { id: 'irjPXPav8dY', title: 'Trailer de Sukot', duration: '2:00', category: 'HOLIDAYS' },
    { id: 'jmtF9wiiqso', title: 'Sukkot Chistosadas con Yosef', duration: '0:26', category: 'HOLIDAYS' },
    { id: 'EW5JWXBlC78', title: 'Pesaj: La Salida de Egipto', duration: '9:50', category: 'HOLIDAYS' },
    { id: 'abrhe9Rg-EI', title: '¿Qué significa la palabra Pesaj?', duration: '5:53', category: 'HOLIDAYS' },
    { id: 'NeQJdLIVj0A', title: 'Matzah ¿Qué es la Matzah?', duration: '6:15', category: 'HOLIDAYS' },
    { id: 'K8MVkjuptEo', title: 'El Mar Rojo ¿Por qué se abrió?', duration: '7:20', category: 'HOLIDAYS' },
    { id: 'CblSXOlt6Vw', title: 'Rosh Hashaná - El comienzo del año', duration: '4:10', category: 'HOLIDAYS' },
    { id: 'SsW9fe9eWvs', title: 'Abib o Aviv - Mes de Nisán', duration: '4:47', category: 'HOLIDAYS' },
    { id: 'X2ACDIpXbI8', title: 'Rosh Jodesh Abib', duration: '4:55', category: 'HOLIDAYS' },
    { id: 'IhFRnooopPo', title: 'Parsha HaJodesh', duration: '1:00', category: 'HOLIDAYS' },
    { id: '1XCQgq6Eouo', title: 'Parshá Especial HaJodesh', duration: '1:19', category: 'HOLIDAYS' },
    { id: 'ZwxOaHvYZ1Y', title: 'Parsha Pará (Vaca Roja)', duration: '1:28', category: 'HOLIDAYS' },
    { id: 'J_h86yuU4Vo', title: 'Parsha Pará - Explicación', duration: '0:57', category: 'HOLIDAYS' },

    // --- SHABAT ---
    { id: 'ndf9CmDBHWY', title: 'Yosef y el Shabat', duration: '6:09', category: 'SHABAT' },
    { id: 'SlWuko2q-Y0', title: 'Shabat Shekalim - Títeres', duration: '0:59', category: 'SHABAT' },
    { id: 'hccDm7RF-Ls', title: 'Shabat Shekalim - Especial', duration: '2:10', category: 'SHABAT' },
    { id: 'LWITMNQEWTo', title: 'Shabat Zajor - ¡Recuerda!', duration: '1:00', category: 'SHABAT' },
    { id: 'Yja7jteJ3d4', title: 'Shabat Zajor - Explicación', duration: '1:10', category: 'SHABAT' },

    // --- STORIES (Cuentos e Historias) ---
    { id: 'uQdfLlJ98IQ', title: 'Cuentos: Tesoros de Pureza', duration: '3:05', category: 'STORIES' },
    { id: 'pIgwPuIPzPQ', title: 'Cuentos: David, el Buen Pastor', duration: '3:55', category: 'STORIES' },
    { id: 'ntU9gSXIU9w', title: 'Cuento: Todo es para bien', duration: '4:40', category: 'STORIES' },
    { id: 'EmSOWR29G9w', title: 'La Historia de Abraham: Fe y Familia', duration: '0:22', category: 'STORIES' },
    { id: 'YHOHnafmPOg', title: 'La prueba de Fe: Akedat Itzjak', duration: '1:20', category: 'STORIES' },
    { id: 'IlGe5gPb-ss', title: 'La promesa a Abraham: Viaje a Canaán', duration: '0:21', category: 'STORIES' },
    { id: 'u5Xln4-oUMw', title: 'El anuncio del nacimiento de Isaac', duration: '0:38', category: 'STORIES' },
    { id: 'BXHfjgtmiic', title: 'El pacto entre las partes', duration: '0:34', category: 'STORIES' },
    { id: 's4k_OBr2-aY', title: 'La travesía de Eliezer', duration: '1:29', category: 'STORIES' },
    { id: 'JgeYD242mdA', title: 'La historia de Sarah en Hebrón', duration: '0:28', category: 'STORIES' },
    { id: '2tNGQiZqfdQ', title: 'La sorprendente Historia de Noah', duration: '0:29', category: 'STORIES' },
];

// Video destacado para el Banner Principal (Hero) - VIDEO MÁS GENERAL
const FEATURED_VIDEO = allVideos.find(v => v.id === 'dd8Bz3RAkgQ') || allVideos[0];

export const VideoRoom: React.FC<VideoRoomProps> = ({ onBack, initialVideoId }) => {
  const [playingVideo, setPlayingVideo] = useState<YoutubeVideo | null>(null);
  const [showFeaturedInfo, setShowFeaturedInfo] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auto-play si viene de un link externo
  useEffect(() => {
    if (initialVideoId) {
      const found = allVideos.find(v => v.id === initialVideoId);
      if (found) setPlayingVideo(found);
    }
  }, [initialVideoId]);

  const handleShare = () => {
    if (!playingVideo) return;
    const link = `https://youtu.be/${playingVideo.id}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Si hay un video reproduciéndose, mostramos la VISTA DE REPRODUCCIÓN (NETFLIX STYLE)
  if (playingVideo) {
    const categoryVideos = allVideos.filter(v => v.category === playingVideo.category);
    const currentIndex = categoryVideos.findIndex(v => v.id === playingVideo.id);
    const prevVideo = currentIndex > 0 ? categoryVideos[currentIndex - 1] : null;
    const nextVideo = currentIndex < categoryVideos.length - 1 ? categoryVideos[currentIndex + 1] : null;
    
    // Existing logic for slidebar (exclude current)
    const relatedVideos = categoryVideos.filter(v => v.id !== playingVideo.id);
    const categoryLabel = categories.find(c => c.id === playingVideo.category)?.label || 'Relacionados';

    return (
      <div className="fixed inset-0 z-[70] w-full h-full bg-[#141414] text-white font-body overflow-y-auto animate-fade-in custom-scrollbar">
         
         {/* 1. Fondo del Video Actual (Cover Art Difuminado) */}
         <div className="fixed inset-0 z-0">
            <img 
               src={`https://img.youtube.com/vi/${playingVideo.id}/maxresdefault.jpg`} 
               alt="Background" 
               className="w-full h-full object-cover blur-md opacity-30 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-black/60"></div>
         </div>

         {/* 2. Navbar de Navegación del Player */}
         <div className="relative z-50 flex justify-between items-center p-6 md:px-12">
            <button 
              onClick={() => setPlayingVideo(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="p-2 rounded-full bg-black/40 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </div>
              <span className="font-bold text-lg hidden md:inline">Volver a Explorar</span>
            </button>
            <div className="font-display font-bold text-2xl tracking-wider drop-shadow-md">
               <span className="text-torah-gold">TKP</span>
               <span className="text-white">+</span>
           </div>
         </div>

         {/* 3. Contenido Principal */}
         <div className="relative z-10 px-6 md:px-16 pt-4 pb-20 max-w-[1920px] mx-auto">
            
            {/* Reproductor Grande - FIXED FOR ERROR 153 */}
            <div className="w-full aspect-video max-h-[70vh] bg-black shadow-2xl rounded-2xl overflow-hidden border border-gray-800/50 relative mb-8 ring-1 ring-white/10">
                <iframe 
                    key={playingVideo.id} 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${playingVideo.id.trim()}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1&showinfo=0`}
                    title={playingVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>

            {/* Acciones: Compartir y Respaldo */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center md:justify-start items-center">
               <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-sm font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-2 rounded-full border border-gray-600 shadow-lg active:scale-95"
               >
                  <span>{copied ? '✅' : '🔗'}</span>
                  <span>{copied ? '¡Enlace Copiado!' : 'Compartir'}</span>
               </button>

               <a 
                 href={`https://www.youtube.com/watch?v=${playingVideo.id}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-white rounded-full px-4 py-2 bg-black/50"
               >
                 <span>⚠️ ¿Problemas?</span>
                 <span className="font-bold underline">Ver en YouTube</span>
               </a>
            </div>

            {/* Info del Video */}
            <div className="flex flex-col md:flex-row gap-8 mb-16">
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Estreno</span>
                    <span className="text-green-400 font-bold text-sm">98% Coincidencia</span>
                    <span className="text-gray-400 font-medium text-sm">{playingVideo.duration} min</span>
                    <span className="border border-gray-600 text-gray-400 text-xs px-1 rounded-sm">HD</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                    {playingVideo.title}
                  </h1>
                  
                  <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                    {playingVideo.description || `Acompaña a Yosef, Benny y todo el elenco en este emocionante episodio de ${categoryLabel}. Una aventura llena de enseñanzas de la Torá, risas y valores para toda la familia.`}
                  </p>
               </div>
               
               <div className="flex-none w-full md:w-64 flex flex-col gap-2 text-sm text-gray-400">
                  <p><span className="text-gray-600 font-bold block mb-1">Elenco:</span> Yosef, Benny, Aharón, Keter</p>
                  <p><span className="text-gray-600 font-bold block mb-1">Género:</span> Educativo, Títeres, Torá</p>
                  <p><span className="text-gray-600 font-bold block mb-1">Categoría:</span> {categoryLabel}</p>
               </div>
            </div>

            {/* 4. Barra de Navegación y Episodios */}
            <div className="animate-fade-in-up">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4 border-b border-gray-800 pb-4">
                     <div>
                        <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                            Más episodios de <span className="text-torah-gold">{categoryLabel}</span>
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Estás viendo el episodio {currentIndex + 1} de {categoryVideos.length}
                        </p>
                     </div>
                     
                     <div className="flex gap-3">
                         <Button 
                            variant="outline"
                            onClick={() => prevVideo && setPlayingVideo(prevVideo)}
                            disabled={!prevVideo}
                            className={`!py-2 !px-4 text-sm flex items-center gap-2 ${!prevVideo ? 'opacity-30 cursor-not-allowed border-gray-700 text-gray-500 !bg-transparent' : '!bg-gray-800 !text-white !border-gray-600 hover:!bg-white hover:!text-black'}`}
                         >
                             ◀ Anterior
                         </Button>
                         <Button 
                            variant="outline"
                            onClick={() => nextVideo && setPlayingVideo(nextVideo)}
                            disabled={!nextVideo}
                            className={`!py-2 !px-4 text-sm flex items-center gap-2 ${!nextVideo ? 'opacity-30 cursor-not-allowed border-gray-700 text-gray-500 !bg-transparent' : '!bg-white !text-black !border-white hover:!bg-gray-200'}`}
                         >
                             Siguiente ▶
                         </Button>
                     </div>
                 </div>
                 
                 {relatedVideos.length > 0 && (
                     <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {relatedVideos.map((video, idx) => (
                           <div 
                               key={video.id}
                               onClick={() => setPlayingVideo(video)}
                               className="relative flex-none w-64 md:w-80 aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-50 hover:shadow-2xl group bg-[#202020] border border-transparent hover:border-gray-500"
                           >
                               {/* Miniatura Slidebar */}
                               <img 
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                                    alt={video.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                               />
                               
                               <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-0 transition-opacity">
                                   <div className="bg-black/60 rounded px-1.5 py-0.5 text-[10px] font-bold text-white">{video.duration}</div>
                               </div>

                               {/* Info Hover Overlay */}
                               <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                                   <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                     <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                   </div>
                                   <h4 className="font-bold text-sm text-center text-white line-clamp-2">
                                       {video.title}
                                   </h4>
                               </div>
                               
                               {/* Barra de progreso visual (decorativa) */}
                               <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700"></div>
                           </div>
                        ))}
                     </div>
                 )}
            </div>
         </div>
      </div>
    );
  }

  // --- VISTA DE NAVEGACIÓN (HOME / EXPLORAR) ---
  return (
    // fixed inset-0 z-[60] para cubrir toda la app (incluido el header principal)
    <div className="fixed inset-0 z-[60] w-full bg-[#141414] text-white font-body overflow-y-auto overflow-x-hidden animate-fade-in custom-scrollbar">
       
       {/* Navbar Flotante VideoRoom */}
       <div className="fixed top-0 left-0 w-full p-4 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex justify-between items-center h-20">
           <Button onClick={onBack} variant="outline" className="!bg-black/40 !text-white !border-white/30 hover:!bg-white hover:!text-black !px-4 !py-1 !text-sm backdrop-blur-sm">
             ← Salir
           </Button>
           
           {/* LOGO TKP+ CON ESTILO KIDS FLIX */}
           <div className="font-display font-bold text-3xl tracking-wider drop-shadow-md hidden md:block">
               <span className="text-torah-gold">TKP</span>
               <span className="text-white">+</span>
           </div>
       </div>

       {/* MODAL DE INFORMACIÓN (Estilo Pop-up Premium) */}
       {showFeaturedInfo && (
           <div className="fixed inset-0 z-[80] flex justify-center items-center p-4 md:p-8 animate-fade-in">
               {/* Backdrop con Blur intenso */}
               <div 
                  className="absolute inset-0 bg-black/70 backdrop-blur-lg"
                  onClick={() => setShowFeaturedInfo(false)}
               ></div>
               
               {/* Contenedor del Modal */}
               <div className="bg-[#181818] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative z-10 animate-pop border border-gray-700">
                   
                   {/* Botón de Cerrar */}
                   <button 
                      onClick={() => setShowFeaturedInfo(false)} 
                      className="absolute top-4 right-4 z-30 bg-[#181818] text-white rounded-full p-2 transition-all hover:bg-white hover:text-black shadow-lg"
                   >
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                   
                   {/* Cabecera con Imagen */}
                   <div className="relative h-64 md:h-[450px] w-full">
                       <img 
                          src={`https://img.youtube.com/vi/${FEATURED_VIDEO.id}/maxresdefault.jpg`} 
                          className="w-full h-full object-cover" 
                          alt="Featured Banner" 
                       />
                       {/* Gradiente para que el texto resalte */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
                       
                       <div className="absolute bottom-10 left-8 max-w-2xl">
                           <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 drop-shadow-2xl leading-none">
                               {FEATURED_VIDEO.title}
                           </h2>
                           <div className="flex gap-4">
                                <button 
                                    onClick={() => { setShowFeaturedInfo(false); setPlayingVideo(FEATURED_VIDEO); }}
                                    className="bg-white text-black px-8 py-3 rounded-md font-bold text-xl flex items-center gap-3 hover:bg-gray-200 transition-colors shadow-xl"
                                >
                                    <span>▶</span> Reproducir
                                </button>
                           </div>
                       </div>
                   </div>

                   {/* Cuerpo de Información */}
                   <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#181818]">
                       <div className="md:col-span-2 text-gray-300 text-lg leading-relaxed">
                           <div className="flex items-center gap-4 mb-6 text-sm font-bold tracking-wide">
                               <span className="text-green-400">98% Coincidencia</span>
                               <span className="text-gray-400">2024</span>
                               <span className="border border-gray-500 px-1.5 py-0.5 rounded text-gray-400">HD</span>
                               <span>{FEATURED_VIDEO.duration} min</span>
                           </div>
                           <p className="font-medium text-white/90">
                               {FEATURED_VIDEO.description || "Sin descripción disponible."}
                           </p>
                       </div>
                       <div className="text-sm text-gray-400 space-y-4">
                           <div className="space-y-1">
                               <span className="text-gray-500 block text-xs uppercase tracking-wider">Elenco:</span>
                               <p className="text-white">Yosef, Benny, Aharón, Keter, Dr. Avraham</p>
                           </div>
                           <div className="space-y-1">
                               <span className="text-gray-500 block text-xs uppercase tracking-wider">Géneros:</span>
                               <p className="text-white">Educativo, Judío, Infantil</p>
                           </div>
                           <div className="space-y-1">
                               <span className="text-gray-500 block text-xs uppercase tracking-wider">Vibra:</span>
                               <p className="text-white">Divertido, Inspirador, Con Valores</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )}

       {/* HERO SECTION (Video Destacado Gigante) */}
       <div className="relative w-full min-h-[70vh] flex flex-col justify-end">
           {/* Fondo del Hero */}
           <div className="absolute inset-0 w-full h-full">
               <img 
                 src={`https://img.youtube.com/vi/${FEATURED_VIDEO.id}/maxresdefault.jpg`} 
                 alt="Hero Background" 
                 className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-black/30"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/20 to-transparent"></div>
           </div>

           {/* Contenido del Hero */}
           <div className="relative w-full px-6 pb-12 pt-32 md:px-16 md:pb-16 flex flex-col items-start gap-4 md:max-w-3xl z-30 pointer-events-none">
               <div className="flex items-center gap-2 mb-2 animate-float pointer-events-auto">
                   <span className="bg-torah-gold text-black px-3 py-1 text-xs font-bold uppercase tracking-widest rounded shadow-lg">
                       Destacado
                   </span>
                   <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded border border-white/20">
                       Intro
                   </span>
               </div>
               
               <h1 className="text-3xl md:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-2xl pointer-events-auto">
                   {FEATURED_VIDEO.title}
               </h1>
               <p className="text-sm md:text-lg text-gray-200 line-clamp-3 md:line-clamp-none font-medium drop-shadow-lg max-w-xl pointer-events-auto">
                   {FEATURED_VIDEO.description}
               </p>
               
               <div className="flex gap-4 mt-4 pointer-events-auto">
                   <button 
                        onClick={() => setPlayingVideo(FEATURED_VIDEO)}
                        className="bg-white text-black px-6 md:px-8 py-3 rounded-md font-bold text-lg md:text-xl flex items-center gap-2 hover:bg-gray-200 transition-colors transform hover:scale-105 shadow-xl z-40"
                   >
                       <span className="text-2xl">▶</span> Reproducir
                   </button>
                   <button 
                        onClick={() => setShowFeaturedInfo(true)}
                        className="bg-gray-500/50 backdrop-blur-md text-white px-6 md:px-8 py-3 rounded-md font-bold text-lg md:text-xl flex items-center gap-2 hover:bg-gray-500/70 transition-colors z-40"
                   >
                       <span>ⓘ</span> Más Info
                   </button>
               </div>
           </div>
       </div>

       {/* ROWS (Cintas de Categorías) */}
       <div className="flex flex-col gap-8 relative z-40 px-4 md:px-12 pb-20 pt-4 bg-gradient-to-b from-[#141414] to-black">
           {categories.map((cat) => {
               const categoryVideos = allVideos.filter(v => v.category === cat.id);
               if (categoryVideos.length === 0) return null;

               return (
                   <div key={cat.id} className="flex flex-col gap-3 group/row">
                       <h3 className="text-lg md:text-2xl font-display font-bold text-gray-200 group-hover/row:text-torah-gold transition-colors cursor-pointer pl-2 flex items-center gap-2 drop-shadow-md">
                           {cat.label} <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{categoryVideos.length}</span>
                       </h3>
                       
                       <div className="flex gap-4 overflow-x-auto pb-8 pt-4 px-2 snap-x scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                           {categoryVideos.map((video) => (
                               <div 
                                   key={video.id}
                                   onClick={() => setPlayingVideo(video)}
                                   className="relative flex-none w-56 md:w-80 aspect-video rounded-md overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:z-50 hover:shadow-2xl group bg-[#202020] border border-transparent hover:border-gray-500"
                               >
                                   <img 
                                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                                        alt={video.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                                   />
                                   
                                   <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-0 transition-opacity">
                                       <div className="bg-black/60 rounded px-1.5 py-0.5 text-[10px] font-bold text-white">{video.duration}</div>
                                   </div>

                                   <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black via-black/80 to-transparent">
                                       <div className="flex items-center gap-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                           <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs pl-0.5 shadow-lg">▶</div>
                                           <span className="border border-gray-500 text-gray-300 text-[10px] px-1 rounded">HD</span>
                                       </div>
                                       
                                       <h4 className="font-bold text-xs md:text-sm text-white leading-tight mb-1 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                           {video.title.replace('Torah Kids Puppets |', '').replace('Parashá', '').replace('Parashat', '').trim()}
                                       </h4>
                                       
                                       <div className="flex justify-between items-center mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                                ⏱ {video.duration} min
                                            </span>
                                       </div>
                                   </div>

                                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 group-hover:hidden">
                                       <div className="h-full bg-red-600 w-1/4"></div>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               );
           })}
       </div>
    </div>
  );
};