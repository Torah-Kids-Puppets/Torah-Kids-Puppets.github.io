
import React, { useState } from 'react';
import { Button } from './Button';

interface BrachosGardenProps {
  onBack: () => void;
}

interface Bracha {
    id: string;
    name: string;
    meaning: string;
    hebrew: string;
    transliteration: string;
    spanish: string;
    foods: string[];
    icon: string;
    color: string;
    borderColor: string;
}

const BRACHOT_DATA: Bracha[] = [
    {
        id: 'hamotzi',
        name: 'Hamotzí',
        meaning: 'Para el Pan',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Hamotzí Léjem Min Haáretz.',
        spanish: 'Bendito eres Tú Hashem, nuestro Dios, Rey del Universo, que extrae pan de la tierra.',
        foods: ['Jalá', 'Bagel', 'Pan', 'Matzá', 'Pita'],
        icon: '🍞',
        color: 'bg-yellow-50 text-yellow-800',
        borderColor: 'border-yellow-400'
    },
    {
        id: 'mezonot',
        name: 'Mezonot',
        meaning: 'Harinas (Pasteles/Pasta)',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם בּוֹרֵא מִינֵי מְזוֹנוֹת',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Boré Miné Mezonót.',
        spanish: 'Bendito eres Tú Hashem... Creador de especies de alimentos.',
        foods: ['Galletas', 'Pastel', 'Pasta', 'Cereal', 'Pretzel'],
        icon: '🍪',
        color: 'bg-orange-50 text-orange-800',
        borderColor: 'border-orange-400'
    },
    {
        id: 'hagafen',
        name: 'Hagafen',
        meaning: 'Vino y Jugo de Uva',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם בּוֹרֵא פְּרִי הַגָּפֶן',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Boré Prí Hagáfen.',
        spanish: 'Bendito eres Tú Hashem... Creador del fruto de la vid.',
        foods: ['Vino', 'Jugo de Uva'],
        icon: '🍇',
        color: 'bg-purple-50 text-purple-800',
        borderColor: 'border-purple-400'
    },
    {
        id: 'haetz',
        name: 'Haetz',
        meaning: 'Frutos del Árbol',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם בּוֹרֵא פְּרִי הָעֵץ',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Boré Prí Haétz.',
        spanish: 'Bendito eres Tú Hashem... Creador del fruto del árbol.',
        foods: ['Manzana', 'Naranja', 'Almendra', 'Aguacate', 'Uva'],
        icon: '🍎',
        color: 'bg-green-50 text-green-800',
        borderColor: 'border-green-400'
    },
    {
        id: 'haadama',
        name: 'Haadamá',
        meaning: 'Frutos de la Tierra',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם בּוֹרֵא פְּרִי הָאֲדָמָה',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Boré Prí Haadamá.',
        spanish: 'Bendito eres Tú Hashem... Creador del fruto de la tierra.',
        foods: ['Pepino', 'Zanahoria', 'Sandía', 'Plátano', 'Fresa'],
        icon: '🥕',
        color: 'bg-emerald-50 text-emerald-800',
        borderColor: 'border-emerald-600'
    },
    {
        id: 'shehakol',
        name: 'Shehakol',
        meaning: 'Todo lo demás',
        hebrew: 'בָּרוּךְ אַתָּה ה\' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ',
        transliteration: 'Baruj Atá Adon-ai Elo-heinu Mélej Haolám Shehakól Nihiá Bidvaró.',
        spanish: 'Bendito eres Tú Hashem... que todo fue hecho por Su palabra.',
        foods: ['Agua', 'Leche', 'Carne', 'Huevo', 'Dulces', 'Queso'],
        icon: '🥤',
        color: 'bg-blue-50 text-blue-800',
        borderColor: 'border-blue-400'
    }
];

const MITZVOT = [
    "Dale una sonrisa a alguien hoy.",
    "Ayuda a poner la mesa para la cena.",
    "Di 'Gracias' a mamá o papá por algo rico.",
    "Llama a tus abuelos solo para decir Hola.",
    "Guarda un juguete que no usaste tú.",
    "Di el Shemá Israel antes de dormir.",
    "Comparte tu merienda con un amigo.",
    "Da una moneda para Tzedaká.",
];

export const BrachosGarden: React.FC<BrachosGardenProps> = ({ onBack }) => {
  const [selectedBracha, setSelectedBracha] = useState<Bracha | null>(null);
  const [dailyMitzvah, setDailyMitzvah] = useState<string | null>(null);

  const generateMitzvah = () => {
      const random = MITZVOT[Math.floor(Math.random() * MITZVOT.length)];
      setDailyMitzvah(random);
  };

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto p-4 w-full animate-fade-in">
       {/* Header */}
       <div className="w-full flex justify-between items-center mb-6">
         <Button onClick={onBack} variant="outline" size="sm">← Inicio</Button>
         <h2 className="text-3xl md:text-5xl font-display font-bold text-torah-green drop-shadow-sm flex items-center gap-2">
            🌳 Jardín de Berajot
         </h2>
         <div className="w-20"></div>
       </div>

       <div className="flex flex-col lg:flex-row gap-8 w-full">
            
            {/* LEFT: Grid de Selección */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 h-fit">
                {BRACHOT_DATA.map((b) => (
                    <button
                        key={b.id}
                        onClick={() => setSelectedBracha(b)}
                        className={`p-4 rounded-2xl border-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center aspect-square text-center
                            ${selectedBracha?.id === b.id 
                                ? `ring-4 ring-offset-2 ring-blue-300 ${b.color} ${b.borderColor} scale-105` 
                                : `bg-white border-gray-100 hover:border-blue-200`
                            }
                        `}
                    >
                        <span className="text-5xl mb-2 filter drop-shadow-sm">{b.icon}</span>
                        <h3 className="font-display font-bold text-xl text-gray-800 leading-tight">{b.name}</h3>
                        <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wide">{b.meaning}</p>
                    </button>
                ))}
            </div>

            {/* RIGHT: Panel de Detalle */}
            <div className="w-full lg:w-[450px] flex flex-col gap-6">
                
                {/* Visualizador de Brajá */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-torah-blue-light relative overflow-hidden min-h-[400px]">
                    {selectedBracha ? (
                        <div className="animate-pop text-center relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="text-7xl mb-2 animate-bounce-slow">{selectedBracha.icon}</div>
                                <h3 className="text-4xl font-display font-extrabold text-torah-blue-deep mb-1">
                                    {selectedBracha.name}
                                </h3>
                                <p className="text-gray-500 font-bold mb-6">({selectedBracha.meaning})</p>

                                {/* Texto Hebreo */}
                                <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 mb-4 shadow-inner">
                                    <p className="font-display font-bold text-2xl text-blue-900 leading-relaxed" dir="rtl">
                                        {selectedBracha.hebrew}
                                    </p>
                                </div>

                                {/* Texto Fonética */}
                                <p className="font-body italic text-gray-600 mb-2 font-medium">
                                    "{selectedBracha.transliteration}"
                                </p>
                                
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-4">
                                    Ejemplos:
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {selectedBracha.foods.map(f => (
                                        <span key={f} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold border border-gray-200">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center opacity-40">
                             <span className="text-8xl mb-4">🍽️</span>
                             <p className="text-2xl font-display font-bold text-gray-500 text-center">
                                 ¡Tengo hambre!<br/>
                                 ¿Qué vamos a comer?
                             </p>
                             <p className="text-sm mt-4">Selecciona un alimento para ver su bendición.</p>
                        </div>
                    )}
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-100 to-transparent"></div>
                </div>

                {/* Generador de Mitzvá */}
                <div className="bg-torah-gold/20 p-6 rounded-[2rem] border-4 border-torah-gold border-dashed text-center relative">
                    <h4 className="font-display font-bold text-torah-blue-deep text-xl mb-3 flex items-center justify-center gap-2">
                        <span>✨</span> Mitzvá del Día <span>✨</span>
                    </h4>
                    
                    {dailyMitzvah ? (
                        <div className="animate-pop">
                            <p className="text-xl font-body font-bold text-gray-800 mb-4">
                                "{dailyMitzvah}"
                            </p>
                            <Button onClick={generateMitzvah} variant="outline" size="sm" className="bg-white">
                                Otra idea
                            </Button>
                        </div>
                    ) : (
                        <Button onClick={generateMitzvah} variant="primary" className="shadow-lg w-full">
                            ¡Dame una misión!
                        </Button>
                    )}
                </div>

            </div>
       </div>
    </div>
  );
};
