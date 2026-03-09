import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

interface VideoRoomProps {
  onBack: () => void;
  initialVideoId?: string | null;
}

// Actualizamos los tipos para incluir las nuevas categorías de Shorts
type Category = 
  'HOLIDAYS' | 
  'SHABAT' | 
  'STORIES_PARASHA' | 
  'STORIES_TRADITION' | 
  'BERESHIT' | 
  'SHEMOT' | 
  'VAYIKRA' |
  'SHORTS_BERESHIT' |
  'SHORTS_SHEMOT' |
  'SHORTS_VAYIKRA';

interface YoutubeVideo {
  id: string;
  title: string;
  duration: string;
  category: Category;
  description?: string;
}

// --- CONFIGURACIÓN DE CATEGORÍAS (Nueva Jerarquía) ---
const categories: { id: Category; label: string; }[] = [
    // 1. Lo más destacado y recurrente
    { id: 'HOLIDAYS', label: '🎉 Fiestas y Especiales' },
    { id: 'SHABAT', label: '🕯️ Shabat' },
    
    // 2. Bloque Bereshit (Estudio + Shorts)
    { id: 'BERESHIT', label: '🦁 Libro de Bereshit (Estudios)' },
    { id: 'SHORTS_BERESHIT', label: '⏱️ Bereshit en 1 Minuto' },

    // 3. Bloque Shemot (Estudio + Shorts)
    { id: 'SHEMOT', label: '🌊 Libro de Shemot (Estudios)' },
    { id: 'SHORTS_SHEMOT', label: '⏱️ Shemot en 1 Minuto' },

    // 4. Bloque Vayikrá (Estudio + Shorts)
    { id: 'VAYIKRA', label: '⚖️ Libro de Vayikrá (Estudios)' },
    { id: 'SHORTS_VAYIKRA', label: '⏱️ Vayikrá en 1 Minuto' },

    // 5. Cuentos e Historias (Al final)
    { id: 'STORIES_PARASHA', label: '🎭 Cuentos de la Parashá' },
    { id: 'STORIES_TRADITION', label: '📖 Cuentos de la Tradición' },
];

// --- LISTA ACTUALIZADA Y CLASIFICADA ---
const allVideos: YoutubeVideo[] = [
    // --- FIESTAS Y ESPECIALES ---
    { id: 'rP9CG-5NV1o', title: 'El Milagroso Aceite de Janucá', duration: '10:00', category: 'HOLIDAYS', description: '¡Un especial increíble! Descubre la historia del milagro del aceite que duró 8 días en el Templo Sagrado.' },
    { id: 'Defyt5gOBQo', title: 'Hagadá, Puppets y Matzá | Historia de Pesaj', duration: '20:34', category: 'HOLIDAYS', description: '¡Bienvenidos a Hagadá, Puppets y Matzá! 🎭🍷 La Gran Noche de la Libertad. Pesaj la Fiesta de la libertad.' },
    { id: 'NeQJdLIVj0A', title: 'Matzah ¿Qué es la Matzah?', duration: '6:15', category: 'HOLIDAYS', description: 'Descubre junto a Yosef qué es este pan plano y por qué lo comemos en Pésaj.' },
    { id: '1XCQgq6Eouo', title: 'Parashá especial Parshá HaJodesh', duration: '1:19', category: 'HOLIDAYS', description: '¿Por qué Nisan es el primer mes del calendario judío? Descubre el significado de Shabat HaJodesh y Pésaj.' },
    { id: 'ZwxOaHvYZ1Y', title: 'Parsha Pará (Vaca Roja)', duration: '1:28', category: 'HOLIDAYS', description: 'Descubre el significado de Shabat Pará. Parashá en un minuto.' },
    { id: 'vS3C7F1Okm4', title: 'Benny Has a Little Dreidel (Canción)', duration: '2:05', category: 'HOLIDAYS', description: 'Get ready for a song full of joy, light, and fun! Benny takes us into the world of the dreidel.' },
    { id: '5wE1ZTeTOIU', title: '¡La Chispa de Janucá!', duration: '11:10', category: 'HOLIDAYS', description: 'Únete a Keter, Avraham, Yosef, Ezra y Aharon mientras celebran la maravillosa festividad de Janucá.' },
    { id: '7kJmFPyS5xk', title: 'חג סוכות שמח | Jag Sukot Sameaj', duration: '0:16', category: 'HOLIDAYS', description: 'Un saludo especial para la fiesta de Sukot.' },
    { id: 'jmtF9wiiqso', title: 'Sukkot Chistosadas - Yosef y los dátiles', duration: '0:26', category: 'HOLIDAYS', description: 'Momentos divertidos con Yosef en la Sucá.' },

    // --- SHABAT ---
    { id: 'ndf9CmDBHWY', title: 'Yosef y el Shabat', duration: '6:09', category: 'SHABAT', description: 'Acompaña a Yosef a descubrir la magia y la alegría del día sagrado de descanso.' },

    // --- BERESHIT (ESTUDIOS LARGOS) ---
    { id: '8rAPAkIKRHE', title: 'Estudiemos Parashat 1 Bereshit', duration: '9:34', category: 'BERESHIT', description: 'Acompáñanos en este emocionante viaje a través del principio de todo.' },
    { id: 'bUu2W_fGqo8', title: 'Resumen Parashat 1 Bereshit con el Doc', duration: '5:59', category: 'BERESHIT', description: 'El Doctor Avraham nos resume los puntos clave del comienzo del mundo.' },
    { id: 'sMd0opDs2Ss', title: 'Estudiemos Parashat 2 Nóaj', duration: '12:49', category: 'BERESHIT', description: '¡La historia continúa con la Parashat Noaj! Descubre la asombrosa historia de Noé y el arca.' },
    { id: '6YoVDp5Jeqs', title: 'Resumen Parashat 2 Nóaj con el Doc', duration: '6:57', category: 'BERESHIT', description: 'Resumen detallado de la historia del Diluvio y el Arca con el Doc.' },
    { id: 've0VT8f00fY', title: 'Estudiemos Parashat 3 Lej Lejá', duration: '13:17', category: 'BERESHIT', description: '¡Prepárate para la emocionante travesía de la Parashat Lej Lejá! Únete a nosotros mientras exploramos el viaje de Abraham.' },
    { id: '--Z6J-rIgrk', title: 'Estudiemos Parashat 4 Vaierá', duration: '7:05', category: 'BERESHIT', description: '¡La Parashat Vayerá nos espera! Explora la historia de Abraham y los ángeles.' },
    { id: 'zkBk1z0u5-Q', title: 'Estudiemos Parashat 5 Jaié Saráh', duration: '5:59', category: 'BERESHIT', description: 'Descubre la historia de Rivkáh y la búsqueda de una esposa para Itzjak.' },
    { id: '5GJFMWdIGbo', title: 'Estudiemos Parashat 6 Toldot', duration: '5:23', category: 'BERESHIT', description: 'Exploraremos las generaciones que siguieron a Isaac y Rebeca.' },
    { id: 'biWskHeVKpU', title: 'Estudiemos Parashat 7 Vaietzé', duration: '7:14', category: 'BERESHIT', description: 'Únete al Doc y al Poli en esta aventura llena de sueños, engaños, y la promesa divina.' },
    { id: 'GOfB9q9vb_8', title: 'Estudiemos Parashat 8 Vaishlaj', duration: '5:26', category: 'BERESHIT', description: 'Desentrañamos los misterios de la reconciliación entre Iaacov y su hermano Eisav.' },
    { id: 'LeF_n_OXbNo', title: 'Estudiemos Parashat 9 Vaieshev', duration: '4:48', category: 'BERESHIT', description: 'Acompaña al Doc y a Yosef mientras estudiamos la historia de Yosef y sus hermanos.' },
    { id: 'C3NQV3plamY', title: 'Estudiemos Parashat 10 Miketz', duration: '6:00', category: 'BERESHIT', description: '¿Qué sucede cuando Yosef acusa a sus hermanos de espionaje?' },
    { id: 'VfLg8ivtdFU', title: 'Estudiemos Parashat 11 Vaigash', duration: '3:58', category: 'BERESHIT', description: 'Descubrimos cómo la reunión entre Iosef y sus hermanos alcanza su clímax.' },
    { id: 'WsR2TAyVZoY', title: 'Estudiemos Parashat 12 Vaieji', duration: '5:02', category: 'BERESHIT', description: 'La bendición de Iaacov a sus nietos y el final del libro de Bereshit.' },

    // --- SHORTS BERESHIT (Incluye los antiguos mal clasificados) ---
    { id: 'XCP6sLsrT6Q', title: 'Parashá 1 Bereshit - En un minuto', duration: '0:59', category: 'SHORTS_BERESHIT' },
    { id: '2tNGQiZqfdQ', title: 'La sorprendente Historia de Noah', duration: '0:29', category: 'SHORTS_BERESHIT' },
    { id: 'oLAULPrPEj8', title: 'Parashá 2 Noaj - En un minuto', duration: '0:59', category: 'SHORTS_BERESHIT' },
    { id: 'hh4ppg7E5yI', title: 'Parashat 3 Lej Lejá - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },
    { id: 'EmSOWR29G9w', title: 'La Historia de Abraham: Lecciones de Fe', duration: '0:22', category: 'SHORTS_BERESHIT' },
    { id: 'u5Xln4-oUMw', title: 'El Increíble Anuncio a Abraham', duration: '0:38', category: 'SHORTS_BERESHIT' },
    { id: 'IlGe5gPb-ss', title: 'La promesa de Di-s a Abraham', duration: '0:21', category: 'SHORTS_BERESHIT' },
    { id: 'BXHfjgtmiic', title: 'El pacto entre las partes', duration: '0:34', category: 'SHORTS_BERESHIT' },
    { id: 'oGBrpfV6Wug', title: 'Parashá 4 Vaierá - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },
    { id: 'JgeYD242mdA', title: 'La Triste historia de la muerte de Sarah', duration: '0:28', category: 'SHORTS_BERESHIT' },
    { id: 's4k_OBr2-aY', title: 'La travesía de Eliezer', duration: '1:29', category: 'SHORTS_BERESHIT' },
    { id: 'YHOHnafmPOg', title: 'La prueba de Fe: Akedat Izjak', duration: '1:20', category: 'SHORTS_BERESHIT' },
    { id: 'msarrAETqGI', title: 'Parashá 5 Jaié Sará - En un minuto', duration: '0:59', category: 'SHORTS_BERESHIT' },
    { id: '-wxWR4UiXXI', title: 'Parashá 6 Toldot - En un minuto', duration: '0:59', category: 'SHORTS_BERESHIT' },
    { id: 'Olinh9ZgvYk', title: 'Parashá 7 Vaietzé - En un minuto', duration: '0:56', category: 'SHORTS_BERESHIT' },
    { id: 'pow5BUl1A5M', title: 'Parashá 8 Vaishlaj - En un minuto', duration: '0:55', category: 'SHORTS_BERESHIT' },
    { id: 'mNPB8ICD0i8', title: 'Parashá 9 Vaieshev - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },
    { id: 'upcJnnNbcO8', title: 'Parashá 10 Miketz - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },
    { id: 'w4GK3pplW_Y', title: 'Parashá 11 Vaigash - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },
    { id: 'p4gsg2bZ3jo', title: 'Parashá 12 Vaiejí - En un minuto', duration: '1:00', category: 'SHORTS_BERESHIT' },

    // --- SHEMOT (ESTUDIOS LARGOS) ---
    { id: 'wWVrrqyVRls', title: 'Parashat 13 Shemot - Estudio Completo', duration: '8:32', category: 'SHEMOT', description: 'Desde la opresión en Egipto hasta el encuentro de Moshé con la zarza ardiente.' },
    { id: 'r7fX55dNlqc', title: 'Parashat 14 Vaerá - Estudio', duration: '8:36', category: 'SHEMOT', description: 'Aventura a través de los golpes que Hashem envió a Egipto para liberar el pueblo de Israel.' },
    { id: 'FAgIYC7KhpU', title: 'Parashat 15 Bo - Estudio', duration: '12:38', category: 'SHEMOT', description: 'Las últimas de las plagas, el primer pésaj y la salida de Egipto.' },
    { id: 'AwKQLzKyW5s', title: 'Parashat 16 Beshalaj - Estudio', duration: '11:27', category: 'SHEMOT', description: 'Únete a nosotros para explorar el milagroso cruce del Mar Rojo.' },
    { id: 'sHnaggaoroY', title: 'Parashat 17 Itró - Estudio', duration: '11:23', category: 'SHEMOT', description: 'Conoce a Itró y acompaña a Moisés en su travesía hacia el liderazgo.' },
    { id: '8UBu-rCS5sA', title: 'Parashat 18 Mishpatim - Estudio', duration: '8:38', category: 'SHEMOT', description: 'Exploraremos las fascinantes leyes divinas que nos guían hacia un mundo de justicia.' },
    { id: 'VdY9Giv2laY', title: 'Parashat 19 Terumáh - Estudio', duration: '5:58', category: 'SHEMOT', description: 'Descubriremos los secretos del Mishkán, el Santuario Divino.' },
    { id: 'g2akTy5BB0Q', title: 'Parashat 20 Tetzavé - Estudio', duration: '6:21', category: 'SHEMOT', description: 'Descubrimos el significado detrás de las vestiduras sagradas de los Kohaním.' },
    { id: 'Bd4lU_MYILU', title: 'Parashat 21 Ki Tisá - Estudio', duration: '7:19', category: 'SHEMOT', description: 'Desde la construcción del Santuario hasta el incidente del becerro de oro.' },
    { id: 'DfeuzcRBfto', title: 'Parashat 22 Vayakel - Estudio', duration: '6:00', category: 'SHEMOT', description: 'Sagradas instrucciones divinas para la construcción del Santuario.' },
    { id: 'yk8hXQzolOM', title: 'Parashat 23 Pekudéi - Estudio', duration: '4:42', category: 'SHEMOT', description: 'Exploraremos el asombroso relato del completamiento del Mishkán.' },

    // --- SHORTS SHEMOT ---
    { id: '0ZJUre6RjiY', title: 'Parashat 13 Shemot - Corto', duration: '1:00', category: 'SHORTS_SHEMOT' },
    { id: 'SDqAXlAfFj4', title: 'Parashat 14 Vaera - Corto', duration: '1:00', category: 'SHORTS_SHEMOT' },
    { id: 'IFzPSegUYO4', title: 'Parsha en un minuto 15 Bo', duration: '0:44', category: 'SHORTS_SHEMOT' },
    { id: 'tWHKCkFBjvE', title: 'Parsha en un minuto 16 Beshalaj', duration: '0:47', category: 'SHORTS_SHEMOT' },
    { id: '1ieTbEKPlRs', title: 'Parsha en un minuto 17 Itró', duration: '0:45', category: 'SHORTS_SHEMOT' },
    { id: 'SOdBWtfb2hE', title: 'Parsha en un minuto 18 Mishapatim', duration: '0:52', category: 'SHORTS_SHEMOT' },
    { id: '3qsxRzFfggg', title: 'Parsha en un minuto 19 Terumah', duration: '0:48', category: 'SHORTS_SHEMOT' },
    { id: 'X6Y4-b4CG4M', title: 'Parsha en un minuto 20 Tetzaveh', duration: '0:48', category: 'SHORTS_SHEMOT' },
    { id: 'pNfv65TyKDY', title: 'Parsha en un minuto 21 Ki tisa', duration: '0:49', category: 'SHORTS_SHEMOT' },
    { id: 'hyr1-ef09HM', title: 'Parsha en un minuto 22 Vayakel', duration: '0:43', category: 'SHORTS_SHEMOT' },
    { id: 'rqyeTYOTRFM', title: 'Parsha en un minuto 23 Pekudei', duration: '0:50', category: 'SHORTS_SHEMOT' },

    // --- VAYIKRA (ESTUDIOS LARGOS) ---
    { id: 'NwwUrSSDRvQ', title: 'Parashat 24 Vaikrá - Estudio', duration: '5:29', category: 'VAYIKRA', description: 'Nos sumergiremos en el significado y la profundidad de los sacrificios y ofrendas.' },
    { id: '1mDsNbou-Eg', title: 'Parashat 25 Tzav - Estudio', duration: '6:06', category: 'VAYIKRA', description: 'Profundizaremos en las responsabilidades y derechos de los Kohaním.' },
    { id: '9Nhcw27C7fU', title: 'Parashat 26 Sheminí - Estudio', duration: '6:52', category: 'VAYIKRA', description: 'Exploramos las leyes de kashrut y aprendemos sobre la santidad.' },
    { id: '-ORflM1R4H4', title: 'Parashat 27 Tazria - Estudio', duration: '4:52', category: 'VAYIKRA', description: 'Leyes de pureza e impureza y lo que sucede cuando nace un bebé.' },
    { id: 'cUGfwEKJB_w', title: 'Parashat 27-28 Tazría-Metzorá', duration: '10:15', category: 'VAYIKRA', description: 'Aprenderemos sobre la importancia de nuestras palabras y el Lashón Hará.' },
    { id: '7LN0uQYABmU', title: 'Parashat 28 Metzora - Estudio', duration: '7:36', category: 'VAYIKRA', description: 'Descubrimos cómo se purificaba a quienes padecían de tzaráat.' },

    // --- SHORTS VAYIKRA ---
    { id: 'EC-Nnceu_ms', title: 'Parsha en un minuto 24 Vaikra', duration: '0:45', category: 'SHORTS_VAYIKRA' },
    { id: 'uhGShtqf3l0', title: 'Parsha en un minuto 25 Tzav', duration: '0:53', category: 'SHORTS_VAYIKRA' },
    { id: 'MwNi34vieEQ', title: 'Parsha en un minuto 26 Sheminí', duration: '0:52', category: 'SHORTS_VAYIKRA' },
    { id: 'M4RI6h5RxyY', title: 'Parsha en un minuto 26 Sheminí (Corto)', duration: '0:43', category: 'SHORTS_VAYIKRA' },

    // --- CUENTOS DE LA PARASHÁ ---
    { id: 'cqd6YZU86nM', title: '¿Por qué el Rabino NO quiso rezar?', duration: '5:00', category: 'STORIES_PARASHA', description: 'El enemigo invisible. Una lección de Parashat Bereshit.' },
    { id: 'MIhXjY5Fo7c', title: '¿Noaj fue egoísta?', duration: '5:00', category: 'STORIES_PARASHA', description: 'El Tzadik del abrigo de piel. Reflexión sobre Parashat Noaj.' },
    { id: 'NLB8leKLO4k', title: '¿Etrog o Caballo? La decisión más difícil', duration: '5:00', category: 'STORIES_PARASHA', description: 'Un dilema divertido y profundo de la Parashat Vaijí.' },
    { id: 'h10wQ1V3yt0', title: 'Un cuento que enciende el corazón', duration: '5:00', category: 'STORIES_PARASHA', description: 'Una historia conmovedora sobre la Parashá Ajarei Mot.' },
    { id: 'Koao7Pp7CwI', title: '💎 Un Experto - Cuento de la Parashá Kedoshim', duration: '5:15', category: 'STORIES_PARASHA', description: 'En este hermoso cuento inspirado en la Parashá Kedoshim, descubrimos que no todo lo valioso brilla a simple vista…' },
    { id: 'nvzRK0GQZgk', title: '¿Qué hacía un Rebe en un Casino?', duration: '5:00', category: 'STORIES_PARASHA', description: 'Una historia sorprendente de Cuentos de la Parashá.' },

    // --- CUENTOS DE LA TRADICIÓN ---
    { id: 'pIgwPuIPzPQ', title: 'David, el Buen Pastor', duration: '3:55', category: 'STORIES_TRADITION', description: 'Cómo un joven pastor se convirtió en un rey amado por su pueblo al cuidar de sus ovejas.' },
    { id: 'ntU9gSXIU9w', title: 'Todo es para bien (Gam Zu Letová)', duration: '4:40', category: 'STORIES_TRADITION', description: 'Asombrosa historia de Rabí Akiva y la valiosa lección que nos deja: Todo es para Bien.' },
    { id: 'uQdfLlJ98IQ', title: 'Tesoros de Pureza', duration: '3:05', category: 'STORIES_TRADITION', description: 'Una historia llena de intrigas, valores y aprendizajes con Rabí Shmuel.' },
];

// Video destacado: Pesaj Special por su calidad y duración
const FEATURED_VIDEO = allVideos.find(v => v.id === 'Defyt5gOBQo') || allVideos[0];

export const VideoRoom: React.FC<VideoRoomProps> = ({ onBack, initialVideoId }) => {
  const [playingVideo, setPlayingVideo] = useState<YoutubeVideo | null>(null);
  const [showFeaturedInfo, setShowFeaturedInfo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  
  // ESTADO DEL BUSCADOR (Overlay Mode)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-play si viene de un link externo
  useEffect(() => {
    if (initialVideoId) {
      const found = allVideos.find(v => v.id === initialVideoId);
      if (found) setPlayingVideo(found);
    }
  }, [initialVideoId]);

  // Focus en input cuando se abre el overlay de búsqueda
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  // Evitar scroll del body cuando el buscador está abierto
  useEffect(() => {
    if (isSearchOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSearchOpen]);

  // Resetear la expansión de descripción cuando cambia el video
  useEffect(() => {
    setIsDescExpanded(false);
  }, [playingVideo]);

  const handleShare = () => {
    if (!playingVideo) return;
    const link = `https://youtu.be/${playingVideo.id}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Lógica de filtrado para el buscador
  const filteredVideos = searchTerm 
    ? allVideos.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        categories.find(c => c.id === video.category)?.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
    
  const handlePlayFromSearch = (video: YoutubeVideo) => {
      setPlayingVideo(video);
      setIsSearchOpen(false);
      setSearchTerm('');
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

    // Description Logic
    const fullDescription = playingVideo.description || `Acompaña a Yosef, Benny y todo el elenco en este emocionante episodio de ${categoryLabel}. Una aventura llena de enseñanzas de la Torá, risas y valores para toda la familia.`;
    const isLongDescription = fullDescription.length > 250;
    const displayedDescription = isDescExpanded || !isLongDescription ? fullDescription : `${fullDescription.substring(0, 250)}...`;

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
            
            {/* Reproductor Grande */}
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
                  
                  <div className="max-w-4xl">
                      <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed transition-all duration-300">
                        {displayedDescription}
                      </p>
                      {isLongDescription && (
                          <button 
                              onClick={() => setIsDescExpanded(!isDescExpanded)}
                              className="mt-2 text-torah-gold hover:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-1 transition-colors"
                          >
                              {isDescExpanded ? 'Leer menos' : 'Leer más'}
                              <span className="text-lg">{isDescExpanded ? '▴' : '▾'}</span>
                          </button>
                      )}
                  </div>
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
                        {relatedVideos.map((video) => (
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
           
           {/* 1. IZQUIERDA: Botón Salir */}
           <div className="flex-none w-24">
             <Button onClick={onBack} variant="outline" className="!bg-black/40 !text-white !border-white/30 hover:!bg-white hover:!text-black !px-4 !py-1 !text-sm backdrop-blur-sm">
                 ← Salir
             </Button>
           </div>
           
           {/* 2. DERECHA: Buscador + Logo */}
           <div className="flex-1 flex justify-end items-center gap-4">
               {/* Botón de Búsqueda (Trigger) */}
               <button 
                   onClick={() => setIsSearchOpen(true)}
                   className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-all hover:scale-110"
                   title="Buscar videos"
               >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               </button>

               {/* LOGO TKP+ */}
               <div className="font-display font-bold text-3xl tracking-wider drop-shadow-md hidden md:block select-none">
                   <span className="text-torah-gold">TKP</span>
                   <span className="text-white">+</span>
               </div>
           </div>
       </div>

       {/* --- SEARCH OVERLAY (PANTALLA COMPLETA) --- */}
       {isSearchOpen && (
           <div className="fixed inset-0 z-[100] bg-[#141414]/95 backdrop-blur-xl animate-fade-in flex flex-col items-center pt-24 px-4 overflow-y-auto custom-scrollbar">
                
                {/* Botón Cerrar (Top Right) */}
                <button 
                    onClick={() => { setIsSearchOpen(false); setSearchTerm(''); }}
                    className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Input de Búsqueda Gigante */}
                <div className="w-full max-w-4xl mb-12">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="¿Qué quieres ver hoy?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent border-b-2 border-gray-700 text-3xl md:text-6xl text-white placeholder-gray-600 focus:outline-none focus:border-torah-gold py-4 font-display font-bold text-center transition-colors"
                    />
                </div>

                {/* Resultados de Búsqueda en el Overlay */}
                {searchTerm ? (
                   <div className="w-full max-w-7xl animate-fade-in-up pb-20">
                       <h3 className="text-xl font-bold text-gray-400 mb-6 px-2">
                           Resultados para "{searchTerm}" <span className="text-torah-gold">({filteredVideos.length})</span>
                       </h3>
                       
                       {filteredVideos.length > 0 ? (
                           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                               {filteredVideos.map((video) => (
                                   <div 
                                       key={video.id}
                                       onClick={() => handlePlayFromSearch(video)}
                                       className="relative aspect-video rounded-md overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group bg-[#202020] border border-transparent hover:border-gray-500"
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
                                       <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black via-black/80 to-transparent">
                                           <div className="flex items-center gap-2 mb-2">
                                               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs pl-0.5 shadow-lg">▶</div>
                                           </div>
                                           <h4 className="font-bold text-sm text-white leading-tight mb-1 line-clamp-2">
                                               {video.title}
                                           </h4>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       ) : (
                           <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                               <div className="text-6xl mb-4">🤷‍♂️</div>
                               <p className="text-xl font-bold">Benny no encontró videos con ese nombre.</p>
                           </div>
                       )}
                   </div>
               ) : (
                   /* Estado vacío del buscador: Sugerencias */
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl opacity-50 hover:opacity-100 transition-opacity">
                        {['Janucá', 'Shabat', 'Parashá', 'Pesaj'].map(tag => (
                            <button 
                                key={tag}
                                onClick={() => setSearchTerm(tag)}
                                className="p-4 border border-gray-700 rounded-xl hover:bg-white/10 text-gray-300 font-bold transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                   </div>
               )}
           </div>
       )}

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
                       Pesaj
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