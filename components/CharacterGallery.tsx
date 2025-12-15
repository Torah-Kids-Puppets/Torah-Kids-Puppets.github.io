import React, { useState } from 'react';
import { Button } from './Button';

interface CharacterGalleryProps {
  onBack: () => void;
}

// Interfaz actualizada para incluir la ruta de la imagen
interface CastMember {
    name: string;
    icon: string; // Emoji de respaldo
    image: string; // Ruta de la imagen real
    role: string;
    bio: string;
    colorClass: string;
    borderColor: string;
}

// NOTA: Las imágenes deben estar en la carpeta public/img/characters/
// Asegúrate de que los nombres de archivo coincidan exactamente (yosef.png, keter.png, etc.)
const cast: CastMember[] = [
    { 
        name: 'Yosef', 
        icon: '👦', 
        image: '/img/characters/yosef.png',
        role: 'Presentador y Director de Producción', 
        bio: 'Es nuestro personaje principal y el Director de Producción del programa. Junto a la Princesa, te introduce los temas y te da resúmenes fáciles de entender. ¡Es el alma de Torá Kids Puppets!',
        colorClass: 'bg-blue-50 text-torah-blue-deep',
        borderColor: 'border-torah-blue-light'
    },
    { 
        name: 'Princesa Keter', 
        icon: '👸', 
        image: '/img/characters/keter.png',
        role: 'Reportera y Presentadora', 
        bio: 'Es una de nuestras reporteras estrella. Le encanta cocinar panquesillos 🧁. Ella te explica los temas de forma breve, sencilla y divertida para que aprendas rápido.',
        colorClass: 'bg-pink-50 text-pink-800',
        borderColor: 'border-torah-pink'
    },
    { 
        name: 'Arush', 
        icon: '👨‍🚒', 
        image: '/img/characters/arush.png',
        role: 'El Bombero', 
        bio: '¡Boom! Es el experto en la "llama interna" 🔥. Sabe cómo apagar las llamas de las peleas que surgen entre nosotros. Arush te explica las cosas difíciles de forma súper resumida y fácil de comprender.',
        colorClass: 'bg-red-50 text-red-800',
        borderColor: 'border-red-400'
    },
    { 
        name: 'Dr. Avraham (Avi)', 
        icon: '👨‍⚕️', 
        image: '/img/characters/avraham.png',
        role: 'Médico y Jefe de Edición', 
        bio: 'Es nuestro Médico 🩺 y nuestro Jefe de Cámaras y Edición 🎥. Te explica todo detalladamente para que no pierdas ni un solo detalle.',
        colorClass: 'bg-teal-50 text-teal-800',
        borderColor: 'border-torah-teal'
    },
    { 
        name: 'Benny', 
        icon: '🌀', 
        image: '/img/characters/benny.png',
        role: 'El Curioso', 
        bio: 'Siempre lleno de energía y preguntas. Benny representa a todos los niños que quieren aprender. A veces se confunde un poco, ¡pero eso hace que aprender sea más divertido!',
        colorClass: 'bg-orange-50 text-orange-800',
        borderColor: 'border-torah-orange'
    },
    { 
        name: 'Aharón', 
        icon: '🕊️', 
        image: '/img/characters/aharon.png',
        role: 'El Pacificador', 
        bio: 'Ama la paz y persigue la paz. Como el Aharón de la Torá, siempre busca que todos se lleven bien y nos enseña sobre el amor al prójimo.',
        colorClass: 'bg-purple-50 text-purple-800',
        borderColor: 'border-purple-300'
    },
    { 
        name: 'Ezra', 
        icon: '👮', 
        image: '/img/characters/ezra.png',
        role: 'El Guardián', 
        bio: 'Ezra ayuda a mantener el orden y nos recuerda la importancia de cumplir las reglas y las Mitzvot con cuidado y atención.',
        colorClass: 'bg-indigo-50 text-indigo-800',
        borderColor: 'border-indigo-300'
    },
];

// Sub-componente para manejar la carga de imagen individualmente
const CharacterAvatar: React.FC<{ member: CastMember }> = ({ member }) => {
    const [imgError, setImgError] = useState(false);

    // Si ocurre un error, mostramos el emoji con un estilo bonito
    if (imgError) {
        return (
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-4 bg-white shadow-md mb-4 transform hover:scale-110 transition-transform duration-300 relative z-10 ${member.borderColor}`}>
                 <span className="text-6xl md:text-7xl filter drop-shadow-sm">{member.icon}</span>
            </div>
        );
    }

    // Si la imagen carga bien
    return (
        <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 bg-white shadow-md mb-4 transform hover:scale-110 transition-transform duration-300 relative z-10 ${member.borderColor}`}>
            <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
            />
        </div>
    );
};

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto p-4 w-full animate-fade-in">
       <div className="w-full flex justify-between items-center mb-8">
         <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
         <h2 className="text-4xl md:text-5xl font-display font-bold text-torah-blue-deep drop-shadow-sm">
            🎭 Elenco Estelar
         </h2>
         <div className="w-20"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center">
          {cast.map((c) => (
              <div key={c.name} className={`rounded-[2.5rem] p-6 border-4 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white relative overflow-hidden ${c.borderColor}`}>
                  {/* Fondo decorativo superior */}
                  <div className={`absolute top-0 left-0 w-full h-24 ${c.colorClass} opacity-50 rounded-b-[50%] transform -translate-y-8 scale-150`}></div>
                  
                  {/* Avatar Inteligente (Imagen o Emoji) */}
                  <CharacterAvatar member={c} />
                  
                  <h3 className="text-2xl font-display font-extrabold text-gray-800 mb-2 relative z-10">{c.name}</h3>
                  
                  <span className="px-4 py-1 rounded-full text-xs md:text-sm font-bold bg-white border-2 border-gray-100 text-gray-500 mb-4 shadow-sm uppercase tracking-wide relative z-10">
                    {c.role}
                  </span>
                  
                  <p className="text-gray-600 font-body font-medium leading-relaxed relative z-10 text-sm md:text-base">{c.bio}</p>
              </div>
          ))}
      </div>
    </div>
  );
};