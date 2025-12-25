
import { QuizData, TorahBook } from '../types';

// ==========================================
// 1. BASE DE DATOS DE PARASHOT (JUMASH)
// ==========================================

export const TORAH_DB: TorahBook[] = [
  {
    id: "bereshit",
    name: "Bereshit (Génesis)",
    icon: "🦁",
    color: "bg-green-100 border-green-300 text-green-800",
    parashot: [
      {
        id: "p1",
        name: "Bereshit",
        hebrewName: "בְּרֵאשִׁית",
        summary: "¡Todo comienza aquí! En seis días Hashem creó el mundo y en el séptimo descansó.",
        fullText: "En el comienzo, cuando todo estaba oscuro y vacío, Hashem decidió crear el mundo. Dijo: '¡Que haya luz!', y la oscuridad se fue. Durante seis días, creó cosas maravillosas: el cielo azul, la tierra firme, el sol para el día y la luna para la noche. Llenó los mares de peces y el cielo de pájaros.\n\nEl sexto día fue muy especial: Hashem creó a los animales y, finalmente, al primer hombre y la primera mujer, Adam y Javá. Los puso en un jardín hermoso llamado Gan Edén. Pero el séptimo día, Hashem hizo algo diferente: ¡Descansó! Y nos regaló el Shabat, un día para parar y disfrutar de todo lo que Él creó.",
        message: "Hashem nos dio un mundo precioso y somos sus socios para cuidarlo.",
        videoId: "8rAPAkIKRHE", 
        activity: "Hashem creó el mundo con palabras. Piensa: ¿Cómo usaste tus palabras hoy?",
        funFact: "La primera letra de la Torá es la 'Bet' (ב). Está cerrada por tres lados y abierta hacia adelante, enseñándonos que no debemos preguntar qué pasó antes, ¡sino mirar hacia el futuro!",
        keyword: { word: "Bereshit", translation: "En el comienzo", icon: "🌱" },
        quiz: [
            { question: "¿Qué creó Hashem el primer día?", options: ["Los animales", "La Luz", "El Sol", "Las plantas"], correctAnswer: 1 },
            { question: "¿Cómo se llamaba el jardín de Adam y Javá?", options: ["Parque Jurásico", "Gan Edén", "Bosque Mágico", "Jardín Botánico"], correctAnswer: 1 },
            { question: "¿Qué día descansó Hashem?", options: ["Lunes", "Viernes", "Shabat", "Domingo"], correctAnswer: 2 }
        ]
      },
      {
        id: "p2",
        name: "Nóaj",
        hebrewName: "נֹחַ",
        summary: "El gran diluvio y el Arca de Nóaj. El arcoíris como señal de paz.",
        fullText: "Pasó el tiempo y la gente se portaba muy mal. Hashem estaba triste y decidió limpiar el mundo con mucha agua. Pero había un hombre bueno llamado Nóaj. Hashem le dijo: 'Construye un barco gigante, un Arca (Teivá)'.\n\nNóaj tardó mucho tiempo en construirla. Cuando empezó a llover, subió al Arca con su familia y una pareja de cada animal del mundo. Llovió 40 días y 40 noches. Nóaj trabajó muy duro dándole de comer a todos los animales (¡el león comía muy tarde!).\n\nCuando paró la lluvia, envió una paloma para ver si había tierra seca. Al salir, vieron un hermoso Arcoíris: la promesa de Hashem de nunca más traer un diluvio así.",
        message: "Ser bueno cuando los demás no lo son requiere mucha valentía.",
        videoId: "sMd0opDs2Ss", 
        activity: "Nóaj alimentó a los animales antes de comer él. ¡Alimenta a tu mascota antes de comer tú!",
        keyword: { word: "Teivá", translation: "Arca / Palabra", icon: "⛵" },
        funFact: "El nombre 'Nóaj' significa 'Descanso' o 'Comodidad'. ¡Pero curiosamente él trabajó más duro que nadie cuidando a miles de animales en el Arca!",
        quiz: [
            { question: "¿Qué envió Nóaj para ver si había tierra?", options: ["Un águila", "Una paloma", "Un loro", "Un búho"], correctAnswer: 1 },
            { question: "¿Cuál es la señal del pacto de Hashem?", options: ["El trueno", "El arcoíris", "La lluvia", "El viento"], correctAnswer: 1 },
            { question: "¿Cuántos días llovió?", options: ["7", "40", "100", "365"], correctAnswer: 1 }
        ]
      },
      {
        id: "p3",
        name: "Lej Lejá",
        hebrewName: "לֶךְ-לְךָ",
        summary: "El viaje de Avraham. Deja su casa para ir a la tierra que Hashem le mostrará.",
        fullText: "Un día, Hashem le habló a Avraham: 'Lej Lejá', vete para ti, por tu propio bien. Deja tu casa y ve a la tierra que Yo te mostraré. Avraham no hizo preguntas, confió en Hashem y viajó a Canaán con su esposa Sará y su sobrino Lot.\n\nEn el camino pasaron muchas aventuras. Hubo peleas entre los pastores de Lot y los de Avraham, así que tuvieron que separarse. Luego, hubo una guerra y Avraham tuvo que rescatar a Lot. Hashem le prometió a Avraham que sus hijos serían tantos como las estrellas del cielo. ¡Y eso que todavía no tenía hijos! Al final, hicieron el Brit Milá como señal del pacto con D-s.",
        message: "A veces hay que dejar la comodidad para crecer.",
        videoId: "ve0VT8f00fY", 
        activity: "¿Qué cosa difícil tienes que hacer hoy? Di 'Lej Lejá' y hazlo con valentía.",
        keyword: { word: "Emuná", translation: "Fe / Confianza", icon: "🌟" },
        funFact: "Avraham tenía una tienda abierta por los cuatro lados para ver si venían invitados desde cualquier dirección. ¡Le encantaba recibir visitas!",
        quiz: [
            { question: "¿Qué significa Lej Lejá?", options: ["Vete para ti", "Quédate aquí", "Corre rápido", "Duerme"], correctAnswer: 0 },
            { question: "¿A dónde viajó Avraham?", options: ["Egipto", "Canaán", "Babilonia", "Roma"], correctAnswer: 1 },
            { question: "¿Con qué comparó Hashem a los hijos de Avraham?", options: ["Rocas", "Peces", "Estrellas", "Árboles"], correctAnswer: 2 }
        ]
      },
      {
        id: "p4",
        name: "Vaierá",
        hebrewName: "וַיֵּרָא",
        summary: "La tienda abierta de Avraham. Ángeles visitan y anuncian el nacimiento de Itzjak.",
        fullText: "Hacía mucho calor y Avraham estaba dolorido, pero estaba sentado afuera de su tienda esperando invitados. ¡De repente vio a tres hombres! Corrió a recibirlos, les dio agua y comida. Pero no eran hombres... ¡eran ángeles!\n\nUno le dio una noticia increíble: Sará, aunque era viejita, tendría un bebé. Sará se rió de alegría. El bebé se llamó Itzjak (que significa 'risa').\n\nMás tarde, Hashem probó la fe de Avraham pidiéndole algo muy difícil con su hijo Itzjak, pero al final todo salió bien y un ángel lo detuvo. Avraham demostró que amaba a Hashem más que a nada.",
        message: "Recibir invitados (Hajnasa Orjim) es una mitzvá gigante.",
        videoId: "--Z6J-rIgrk",
        keyword: { word: "Hajnasa Orjim", translation: "Hospitalidad", icon: "⛺" },
        funFact: "Avraham plantó un 'Eshel' (un huerto/posada). Eshel son las iniciales en hebreo de 'Comer, Beber y Acompañar'. ¡Era el mejor anfitrión del mundo!",
        quiz: [
            { question: "¿Quiénes visitaron a Avraham?", options: ["Comerciantes", "Ángeles", "Soldados", "Pastores"], correctAnswer: 1 },
            { question: "¿Cómo se llamó el hijo de Sará?", options: ["Yosef", "Yishmael", "Itzjak", "Yaakov"], correctAnswer: 2 },
            { question: "¿Qué ciudad fue destruida?", options: ["Jerusalén", "Sodoma", "Jevrón", "Beer Sheva"], correctAnswer: 1 }
        ]
      },
      {
        id: "p5",
        name: "Jaié Sará",
        hebrewName: "חַיֵּי שָׂרָה",
        summary: "Eliezer busca esposa para Itzjak y encuentra a Rivká por su gran bondad.",
        fullText: "Después de que Sará falleció, Avraham quería encontrar la esposa perfecta para su hijo Itzjak. Envió a su sirviente Eliezer a un viaje largo. Eliezer llegó a un pozo y rezó: 'Hashem, la chica que me dé agua a mí y también ofrezca agua a mis camellos, esa será la indicada'.\n\nEn ese momento salió Rivká. No solo le dio agua a él, sino que corrió una y otra vez para llenar el agua para los 10 camellos sedientos. ¡Eso es muchísimo trabajo! Eliezer supo que su bondad (Jesed) la hacía perfecta. Rivká viajó con él y se casó con Itzjak.",
        message: "La bondad (Jesed) es lo más importante al elegir amigos.",
        videoId: "zkBk1z0u5-Q",
        keyword: { word: "Jesed", translation: "Bondad", icon: "❤️" },
        funFact: "En esta parashá, Avraham compró la Cueva de Majpelá en Jevrón. Es el primer lugar de la Tierra de Israel que fue propiedad oficial del pueblo judío.",
        quiz: [
            { question: "¿Qué lugar compró Avraham?", options: ["Una casa", "La Cueva de Majpelá", "Un pozo", "Un palacio"], correctAnswer: 1 },
            { question: "¿Qué hizo Rivká?", options: ["Cantó", "Dio agua a los camellos", "Cocinó", "Leyó"], correctAnswer: 1 },
            { question: "¿Quién fue el esposo de Rivká?", options: ["Avraham", "Itzjak", "Yishmael", "Eliezer"], correctAnswer: 1 }
        ]
      },
      {
        id: "p6",
        name: "Toldot",
        hebrewName: "תּוֹלְדֹת",
        summary: "Yaakov y Esav: dos hermanos diferentes. La venta de la primogenitura.",
        fullText: "Rivká tuvo mellizos: Esav, que era peludo y cazador, y Yaakov, que era tranquilo y estudiaba. Un día, Esav llegó muy cansado del campo. Yaakov estaba cocinando un guiso de lentejas rojas.\n\nEsav dijo: '¡Dame de ese rojo!'. Yaakov respondió: 'Te doy si me vendes tu primogenitura'. A Esav no le importaban las cosas espirituales, así que la vendió por un plato de comida.\n\nMás tarde, cuando Itzjak era viejito y ciego, quiso bendecir a Esav. Pero Rivká sabía que Yaakov debía recibir la bendición. Lo ayudó a disfrazarse con pieles de cabra y Yaakov recibió la bendición especial.",
        message: "Debemos valorar las cosas espirituales más que un plato de comida.",
        videoId: "5GJFMWdIGbo",
        keyword: { word: "Bejorá", translation: "Primogenitura", icon: "🥣" },
        funFact: "Los sabios dicen que Yaakov y Esav eran tan diferentes que incluso cuando estaban en la panza de su mamá, ¡peleaban por ver quién salía primero!",
        quiz: [
            { question: "¿Qué cocinaba Yaakov?", options: ["Sopa", "Lentejas rojas", "Arroz", "Pizza"], correctAnswer: 1 },
            { question: "¿A quién quería bendecir Itzjak?", options: ["A Yaakov", "A Esav", "A Rivká", "A Eliezer"], correctAnswer: 1 },
            { question: "¿Qué vendió Esav?", options: ["Su arco", "Su primogenitura", "Su caballo", "Su tienda"], correctAnswer: 1 }
        ]
      },
      {
        id: "p7",
        name: "Vaietzé",
        hebrewName: "וַיֵּצֵא",
        summary: "El sueño de la escalera. Yaakov trabaja por Rajel y forma su familia.",
        fullText: "Escapando de la furia de su hermano Esav, Yaakov se fue a Jarán. En el camino, durmió con una piedra de almohada y tuvo un sueño increíble: una escalera apoyada en la tierra que llegaba hasta el cielo, ¡y ángeles subían y bajaban por ella! Hashem le prometió estar siempre con él.\n\nAl llegar a Jarán, conoció a Rajel en el pozo. Trabajó 7 años para casarse con ella, pero su tío Labán lo engañó y le dio a su hermana Leá. ¡Tuvo que trabajar otros 7 años por Rajel! Allí nacieron las tribus de Israel. Aunque Labán trató de engañarlo muchas veces, Hashem bendijo a Yaakov y se hizo muy rico.",
        message: "El esfuerzo y la honestidad siempre traen recompensa.",
        videoId: "biWskHeVKpU",
        keyword: { word: "Sulam", translation: "Escalera", icon: "🪜" },
        funFact: "Cuando Yaakov llegó al pozo, había una piedra gigante tapándolo. Él era tan fuerte que la levantó él solo, ¡como si fuera un corcho de una botella!",
        quiz: [
            { question: "¿Qué vio Yaakov en su sueño?", options: ["Un barco", "Una escalera con ángeles", "Un templo", "Un pozo"], correctAnswer: 1 },
            { question: "¿Por quién trabajó Yaakov 7 años primero?", options: ["Por Leá", "Por Rajel", "Por dinero", "Por ovejas"], correctAnswer: 1 },
            { question: "¿Quién engañó a Yaakov?", options: ["Esav", "Itzjak", "Labán", "Yosef"], correctAnswer: 2 }
        ]
      },
      {
        id: "p8",
        name: "Vaishlaj",
        hebrewName: "וַיִּשְׁלַח",
        summary: "El encuentro con Esav y la lucha con el ángel. Yaakov se convierte en Israel.",
        fullText: "Yaakov regresó a casa para encontrarse con su hermano Esav. Tenía miedo, así que se preparó de tres formas: rezó, envió regalos y preparó a su familia para defenderse.\n\nLa noche antes del encuentro, Yaakov cruzó el río y se quedó solo. Un ángel misterioso apareció y luchó con él toda la noche hasta el amanecer. El ángel no pudo ganarle, pero lo lastimó en la pierna. El ángel lo bendijo y le cambió el nombre a 'Israel': el que lucha con lo Divino y vence. Al día siguiente, Esav corrió a abrazarlo y se reconciliaron.",
        message: "Nuestras luchas nos hacen más fuertes si confiamos en Hashem.",
        videoId: "GOfB9q9vb_8",
        keyword: { word: "Israel", translation: "El que lucha con D-s", icon: "🇮🇱" },
        funFact: "¿Por qué se quedó solo Yaakov de noche? ¡Porque volvió a cruzar el río para buscar unos jarritos pequeños que se le olvidaron! Nos enseña a valorar cada cosa que tenemos.",
        quiz: [
            { question: "¿Con quién luchó Yaakov?", options: ["Con Esav", "Con un oso", "Con un ángel", "Con Labán"], correctAnswer: 2 },
            { question: "¿Qué nuevo nombre recibió Yaakov?", options: ["Avraham", "Israel", "Yosef", "Moshé"], correctAnswer: 1 },
            { question: "¿Qué hizo Yaakov antes de ver a Esav?", options: ["Durmió", "Rezó y mandó regalos", "Huyó", "Peleó"], correctAnswer: 1 }
        ]
      },
      {
        id: "p9",
        name: "Vaieshev",
        hebrewName: "וַיֵּשֶׁב",
        summary: "La túnica de colores, los sueños de Yosef y la venta a Egipto.",
        fullText: "Iaakov le regaló a su hijo Yosef una túnica especial de muchos colores. Yosef también tenía sueños donde sus hermanos se inclinaban ante él (como manojos de trigo o estrellas). Esto hizo que sus hermanos tuvieran muchos celos.\n\nUn día, cuando Yosef fue a verlos, lo arrojaron a un pozo y lo vendieron a unos comerciantes que iban a Egipto. Le dijeron a su padre que un animal lo había atacado. En Egipto, Yosef pasó por muchas pruebas difíciles, pero Hashem siempre estaba con él y todo lo que hacía prosperaba.",
        message: "Los celos son malos, debemos estar felices por lo que tienen los demás.",
        videoId: "LeF_n_OXbNo",
        keyword: { word: "Ketonet", translation: "Túnica", icon: "🧥" },
        funFact: "La Torá cuenta que Yosef era muy guapo, ¡dicen que su rostro se parecía exactamente al de su padre Yaakov!",
        quiz: [
            { question: "¿Qué le regaló Iaakov a Yosef?", options: ["Un sombrero", "Una túnica de colores", "Un caballo", "Un anillo"], correctAnswer: 1 },
            { question: "¿A dónde llevaron a Yosef?", options: ["A Canaán", "A Egipto", "A Jarán", "A Sodoma"], correctAnswer: 1 },
            { question: "¿Qué sentían los hermanos por Yosef?", options: ["Alegría", "Celos", "Miedo", "Amor"], correctAnswer: 1 }
        ]
      },
      {
        id: "p10",
        name: "Miketz",
        hebrewName: "מִקֵּץ",
        summary: "De la prisión al palacio. Yosef interpreta los sueños del Faraón y salva a Egipto.",
        fullText: "El Faraón tuvo sueños extraños: 7 vacas gordas eran comidas por 7 vacas flacas, y 7 espigas llenas por 7 vacías. Nadie entendía. El copero se acordó de Yosef en la cárcel. Yosef dijo: 'Dios dará la respuesta'.\n\nExplicó que vendrían 7 años de abundancia y 7 de hambre. Aconsejó guardar comida. El Faraón quedó tan impresionado que lo nombró virrey de Egipto. Cuando llegó el hambre, los hermanos de Yosef bajaron a comprar comida. Se inclinaron ante él sin reconocerlo. ¡Los sueños se cumplieron!",
        message: "De la oscuridad más profunda puede salir la luz más grande.",
        videoId: "C3NQV3plamY",
        keyword: { word: "Jalom", translation: "Sueño", icon: "💭" },
        funFact: "Cuando Yosef se presentó ante el Faraón, el ángel Gabriel le enseñó 70 idiomas en una noche. ¡Yosef sabía más idiomas que el propio Faraón!",
        quiz: [
            { question: "¿Qué soñó el Faraón?", options: ["Ovejas", "Vacas gordas y flacas", "Un río", "Árboles"], correctAnswer: 1 },
            { question: "¿Qué significaban los sueños?", options: ["Lluvia", "Años de comida y hambre", "Guerra", "Fiesta"], correctAnswer: 1 },
            { question: "¿En qué se convirtió Yosef?", options: ["Panadero", "Virrey de Egipto", "Pastor", "Soldado"], correctAnswer: 1 }
        ]
      },
      {
        id: "p11",
        name: "Vaigash",
        hebrewName: "וַיִּגַּשׁ",
        summary: "¡Yo soy Yosef! La familia se reúne y baja a Egipto.",
        fullText: "Biniamín fue acusado de robar la copa de plata de Yosef. Yehudá se acercó valientemente a Yosef y se ofreció como esclavo en lugar de su hermano pequeño. Al ver este amor fraternal, Yosef no pudo aguantar más.\n\nOrdenó que todos salieran y gritó llorando: '¡Ani Yosef! ¡Yo soy Yosef! ¿Mi padre vive todavía?'. Los hermanos estaban asustados, pero él los consoló: 'No fueron ustedes, fue D-s quien me envió para salvar vidas'. La familia entera bajó a Egipto y se instaló en Goshen.",
        message: "El perdón une a la familia y sana todas las heridas del pasado.",
        videoId: "VfLg8ivtdFU",
        keyword: { word: "Slijá", translation: "Perdón", icon: "🤝" },
        funFact: "Para contarle a Yaakov que Yosef estaba vivo sin asustarlo, Séraj (la hija de Asher) tocó el arpa y cantó suavemente la noticia.",
        quiz: [
            { question: "¿Quién defendió a Biniamín?", options: ["Reuvén", "Yehudá", "Leví", "Shimón"], correctAnswer: 1 },
            { question: "¿Qué dijo Yosef al revelarse?", options: ["¡Sorpresa!", "¡Yo soy Yosef!", "¡Váyanse!", "¡Hola!"], correctAnswer: 1 },
            { question: "¿Por qué envió Hashem a Yosef a Egipto?", options: ["Castigo", "Para salvar vidas", "Para ser rico", "Paseo"], correctAnswer: 1 }
        ]
      },
      {
        id: "p12",
        name: "Vaiejí",
        hebrewName: "וַיְחִי",
        summary: "Las bendiciones finales de Yaakov a sus hijos y nietos.",
        fullText: "Yaakov vivió sus últimos 17 años feliz en Egipto. Antes de morir, llamó a Yosef y bendijo a sus hijos, Efraín y Menashé, cruzando sus manos para dar la bendición principal al menor. Por eso bendecimos a los niños los viernes: 'Que Dios te haga como Efraín y Menashé'.\n\nLuego reunió a las 12 tribus y les dio a cada uno una bendición especial según su carácter. Yaakov pidió ser enterrado en la Cueva de Majpelá en Israel. Y así termina el primer libro de la Torá: ¡Jazak, Jazak V'nitchazek!",
        message: "Nuestra fuerza está en mantener la tradición de nuestros padres.",
        videoId: "WsR2TAyVZoY",
        keyword: { word: "Jazak", translation: "Sé fuerte", icon: "💪" },
        funFact: "Esta es la única parashá que es 'cerrada' (no hay espacio en blanco antes de empezarla en el rollo de la Torá). Esto es porque Yaakov quiso revelar cuándo llegaría el Mesías, pero Hashem se lo ocultó.",
        quiz: [
            { question: "¿A quiénes bendijo Iaakov primero?", options: ["A sus hijos", "A Efraín y Menashé", "Al Faraón", "A sus sirvientes"], correctAnswer: 1 },
            { question: "¿Dónde pidió ser enterrado Iaakov?", options: ["En Egipto", "En el Nilo", "En la Cueva de Majpelá", "En el desierto"], correctAnswer: 2 },
            { question: "¿Qué libro termina con esta parashá?", options: ["Shemot", "Bereshit", "Vayikrá", "Bamidbar"], correctAnswer: 1 }
        ]
      }
    ]
  },
  {
    id: "shemot",
    name: "Shemot (Éxodo)",
    icon: "🌊",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    parashot: [
      {
        id: "p13",
        name: "Shemot",
        hebrewName: "שְׁמוֹת",
        summary: "Esclavitud en Egipto. Moshé en la canasta y la Zarza Ardiente.",
        fullText: "Un nuevo Faraón esclavizó a los hebreos y ordenó tirar a los bebés al Nilo. La mamá de Moshé, Iojeved, lo puso en una canasta en el río. La hija del Faraón lo salvó y lo crió en el palacio.\n\nDe grande, Moshé vio el sufrimiento de sus hermanos y tuvo que huir a Midián. Allí, mientras cuidaba ovejas, vio una zarza que ardía pero no se consumía. Hashem le habló: 'Quítate los zapatos, este lugar es santo. Ve a Egipto y dile al Faraón: ¡Deja ir a mi pueblo!'.",
        message: "Incluso en los momentos difíciles, Hashem prepara nuestra salvación.",
        videoId: "wWVrrqyVRls",
        keyword: { word: "Sneh", translation: "Zarza", icon: "🔥" },
        funFact: "Moshé tenía 'boca pesada' (tartamudeaba) porque de bebé se metió un carbón caliente en la boca para probar que no quería la corona del Faraón.",
        quiz: [
            { question: "¿Dónde puso la mamá a Moshé?", options: ["En la cuna", "En una canasta en el río", "En el desierto", "En el bosque"], correctAnswer: 1 },
            { question: "¿Qué vio Moshé en el desierto?", options: ["Un león", "Una zarza ardiente", "Un ángel", "Un río"], correctAnswer: 1 },
            { question: "¿Qué debía decirle Moshé al Faraón?", options: ["Dame oro", "Deja ir a mi pueblo", "Quiero ser rey", "Hola"], correctAnswer: 1 }
        ]
      },
      {
        id: "p14",
        name: "Vaerá",
        hebrewName: "וָאֵרָא",
        summary: "Las primeras 7 plagas. El río se vuelve sangre y las ranas invaden Egipto.",
        fullText: "Moshé y Aharón fueron ante el Faraón: '¡Deja ir a mi pueblo!'. Pero él dijo que no. Entonces Hashem mostró su poder con las plagas.\n\nAharón golpeó el Nilo y se convirtió en sangre. Luego vinieron millones de ranas saltarinas. Después piojos, animales salvajes, peste en el ganado, sarna y una tormenta de granizo con fuego. Con cada plaga, el Faraón prometía dejarlos ir, pero luego endurecía su corazón.",
        message: "La naturaleza obedece a Hashem.",
        videoId: "r7fX55dNlqc",
        keyword: { word: "Makot", translation: "Plagas", icon: "🐸" },
        funFact: "Moshé no golpeó el río para las plagas de Sangre y Ranas, ni la tierra para los Piojos. ¿Por qué? Porque el río lo salvó de bebé y la tierra lo ayudó a esconder al egipcio. ¡Gratitud!",
        quiz: [
            { question: "¿Cuál fue la primera plaga?", options: ["Ranas", "Sangre", "Piojos", "Granizo"], correctAnswer: 1 },
            { question: "¿Qué hacía el Faraón cuando paraba la plaga?", options: ["Los dejaba ir", "Endurecía su corazón", "Hacía una fiesta", "Daba regalos"], correctAnswer: 1 },
            { question: "¿Qué tenía el granizo adentro?", options: ["Agua", "Fuego", "Piedras", "Dulces"], correctAnswer: 1 }
        ]
      },
      {
        id: "p15",
        name: "Bo",
        hebrewName: "בֹּא",
        summary: "Las últimas plagas, la oscuridad y la Salida de Egipto.",
        fullText: "Vinieron las Langostas que comieron todo, y luego una Oscuridad tan espesa que no se podía ver nada (¡pero los judíos tenían luz!). Finalmente, la plaga de los primogénitos.\n\nLos judíos prepararon el sacrificio de Pesaj, marcaron sus puertas y comieron matzá listos para salir. A medianoche, Hashem pasó por Egipto. El Faraón se levantó en pijama y gritó: '¡Váyanse!'. Salieron tan rápido que el pan no alcanzó a leudar. ¡Así nacimos como pueblo libre!",
        message: "La libertad es un regalo para usarlo sirviendo a Hashem.",
        videoId: "FAgIYC7KhpU",
        keyword: { word: "Jeros", translation: "Libertad", icon: "🏃" },
        funFact: "Cuando los judíos salieron de Egipto, ni un solo perro ladró. Por eso, la Torá nos manda a darle carne a los perros como recompensa.",
        quiz: [
            { question: "¿Qué comemos para recordar la salida de Egipto?", options: ["Jalá", "Matzá", "Pizza", "Pastel"], correctAnswer: 1 },
            { question: "¿Qué plaga convenció al Faraón?", options: ["Langostas", "Oscuridad", "Primogénitos", "Sangre"], correctAnswer: 2 },
            { question: "¿Qué fiesta celebramos por esto?", options: ["Jánuca", "Purim", "Pesaj", "Shavuot"], correctAnswer: 2 }
        ]
      },
      {
        id: "p16",
        name: "Beshalaj",
        hebrewName: "בְּשַׁלַּח",
        summary: "Cruce del Mar Rojo, el Maná y la guerra con Amalek.",
        fullText: "El Faraón persiguió a los judíos hasta el mar. No había salida. Pero Hashem partió el mar y cruzaron en seco. Al otro lado cantaron la 'Shirá'.\n\nEn el desierto, Hashem les mandó Maná, pan del cielo que sabía a lo que uno más le gustaba, y agua de la roca. Pero tuvieron que luchar contra Amalek, que los atacó sin razón. Moshé levantaba las manos y el pueblo ganaba.",
        message: "La fe (Emuná) nos ayuda a cruzar cualquier mar de problemas.",
        videoId: "AwKQLzKyW5s",
        keyword: { word: "Shirá", translation: "Cántico", icon: "🎶" },
        funFact: "¿Sabías que los judíos salieron de Egipto llevando los huesos de Yosef con ellos? Moshé se encargó personalmente de cargarlos.",
        quiz: [
            { question: "¿Qué pasó en el Mar Rojo?", options: ["Se secó", "Se partió en dos", "Se congeló", "Se puso rojo"], correctAnswer: 1 },
            { question: "¿Qué comían en el desierto?", options: ["Pizza", "Maná", "Frutas", "Pescado"], correctAnswer: 1 },
            { question: "¿Quién cantó con las mujeres?", options: ["Sará", "Miriam", "Rajel", "Leá"], correctAnswer: 1 }
        ]
      },
      {
        id: "p17",
        name: "Itró",
        hebrewName: "יִתְרוֹ",
        summary: "La entrega de la Torá en el Monte Sinaí. Los 10 Mandamientos.",
        fullText: "Itró, suegro de Moshé, vino y le aconsejó nombrar jueces para ayudarlo. Luego, el pueblo llegó al Monte Sinaí. Hubo truenos, relámpagos y el sonido del Shofar.\n\nHashem bajó sobre la montaña y nos dio los 10 Mandamientos: 'Yo soy Hashem', 'No tendrás otros dioses', 'Respeta a tus padres', 'No robes', etc. Todo el pueblo prometió: 'Naasé Venishmá' (Haremos y escucharemos). ¡Fue como una boda entre Hashem e Israel!",
        message: "La Torá es nuestro mapa para vivir una vida buena y feliz.",
        videoId: "sHnaggaoroY",
        keyword: { word: "Torá", translation: "Instrucción / Ley", icon: "📜" },
        funFact: "En el Monte Sinaí ocurrió un milagro sensorial: el pueblo podía 'ver los sonidos' y 'escuchar los relámpagos'. ¡Fue una experiencia sobrenatural!",
        quiz: [
            { question: "¿Qué recibimos en el Monte Sinaí?", options: ["Maná", "La Torá", "Agua", "Ropa"], correctAnswer: 1 },
            { question: "¿Cuántos mandamientos escuchamos?", options: ["5", "10", "613", "12"], correctAnswer: 1 },
            { question: "¿Quién aconsejó a Moshé?", options: ["Aharón", "Itró", "Yehoshúa", "Calev"], correctAnswer: 1 }
        ]
      },
      {
        id: "p18",
        name: "Mishpatim",
        hebrewName: "מִשְׁפָּטִים",
        summary: "Leyes de justicia y bondad entre las personas.",
        fullText: "Después de los 10 Mandamientos, Hashem dio muchas reglas para la vida diaria (Mishpatim). Leyes sobre cómo tratar a los trabajadores, qué hacer si tu buey lastima a otro, la prohibición de maltratar a huérfanos y viudas.\n\nTambién aprendemos sobre no cocinar carne con leche. Estas leyes nos enseñan que ser 'santo' no es solo rezar, sino ser justo y bueno con las demás personas.",
        message: "Ser buena persona es tan importante como rezar.",
        videoId: "8UBu-rCS5sA",
        keyword: { word: "Tzedek", translation: "Justicia", icon: "⚖️" },
        funFact: "Esta parashá enseña que si alguien roba algo y lo pillan, ¡tiene que pagar el doble! Así aprende a no quitar lo que no es suyo.",
        quiz: [
            { question: "¿De qué trata Mishpatim?", options: ["De las fiestas", "De leyes sociales y justicia", "De sacrificios", "Del Tabernáculo"], correctAnswer: 1 },
            { question: "¿Qué no podemos mezclar en la comida?", options: ["Carne y Leche", "Pan y Agua", "Frutas y Verduras", "Sal y Pimienta"], correctAnswer: 0 },
            { question: "¿Cómo debemos tratar a los huérfanos?", options: ["Ignorarlos", "Con mucho cuidado y cariño", "Como a todos", "Mal"], correctAnswer: 1 }
        ]
      },
      {
        id: "p19",
        name: "Terumá",
        hebrewName: "תְּרוּמָה",
        summary: "Hashem pide construir el Mishkán (Santuario). Todos dan regalos.",
        fullText: "Hashem dijo: 'Hagan para mí un Santuario y habitaré entre ustedes'. Pidió que todos dieran una 'Terumá' (ofrenda) de corazón.\n\nTrajeron oro, plata, cobre, lana azul, púrpura y roja, lino, pieles, madera de acacia y piedras preciosas. Con esto construyeron el Arca para la Torá (con querubines encima), la Menorá de oro puro, la Mesa y el Altar. ¡Cada detalle era importante!",
        message: "Cada uno pone su granito de arena para construir cosas sagradas.",
        videoId: "VdY9Giv2laY",
        keyword: { word: "Mikdash", translation: "Santuario", icon: "⛺" },
        funFact: "El Mishkán era como un rompecabezas gigante. Las tablas de madera eran enormes, pero milagrosamente se mantenían unidas y podían desarmarse para viajar.",
        quiz: [
            { question: "¿Qué pidió Hashem que construyeran?", options: ["Un palacio", "Un Santuario (Mishkán)", "Una escuela", "Un parque"], correctAnswer: 1 },
            { question: "¿Qué había sobre el Arca?", options: ["Flores", "Querubines (ángeles)", "Una corona", "Fuego"], correctAnswer: 1 },
            { question: "¿Cómo debían dar la ofrenda?", options: ["Obligados", "De corazón", "Con tristeza", "Rápido"], correctAnswer: 1 }
        ]
      },
      {
        id: "p20",
        name: "Tetzavé",
        hebrewName: "תְּצַוֶּה",
        summary: "Ropas de los Kohanim y el aceite puro de oliva.",
        fullText: "Hashem ordenó usar aceite de oliva puro para mantener la Menorá siempre encendida (Ner Tamid).\n\nTambién describió la ropa especial para Aharón y sus hijos: el Efod (delantal), el Joshen (pectoral con 12 piedras brillantes por las 12 tribus), la túnica, el turbante y una placa de oro en la frente que decía 'Santo para Hashem'. Esta ropa les daba honor y esplendor para servir en el Mishkán.",
        message: "Nuestra ropa y comportamiento muestran respeto por quienes somos.",
        videoId: "g2akTy5BB0Q",
        keyword: { word: "Ner Tamid", translation: "Luz Eterna", icon: "🕯️" },
        funFact: "Esta es la única Parashá (desde que nace Moshé) donde no aparece el nombre de 'Moshé'. Es un honor para él, porque él pidió ser borrado del libro para salvar al pueblo.",
        quiz: [
            { question: "¿Qué aceite se usaba para la Menorá?", options: ["Aceite de maíz", "Aceite de oliva puro", "Aceite de coco", "Aceite de girasol"], correctAnswer: 1 },
            { question: "¿Quiénes usaban ropa especial?", options: ["Moshé", "Los Kohanim", "Todos", "Los niños"], correctAnswer: 1 },
            { question: "¿Cuántas piedras tenía el Pectoral?", options: ["10", "12", "7", "1"], correctAnswer: 1 }
        ]
      },
      {
        id: "p21",
        name: "Ki Tisá",
        hebrewName: "כִּי תִשָּׂא",
        summary: "El Becerro de Oro, las segundas Tablas y los 13 Atributos de Misericordia.",
        fullText: "Moshé tardaba en bajar de la montaña. El pueblo se puso nervioso y construyeron un Becerro de Oro para adorarlo. ¡Hashem se enojó mucho!\n\nMoshé bajó, vio el ídolo, y rompió las tablas de la ley. Pero luego, Moshé rezó con mucha fuerza pidiendo perdón por su pueblo. Hashem perdonó y le enseñó los 13 Atributos de Misericordia. Moshé bajó con las segundas tablas y su rostro brillaba con luz divina.",
        message: "El perdón de Hashem es infinito si nos arrepentimos de verdad.",
        videoId: "Bd4lU_MYILU",
        keyword: { word: "Slijá", translation: "Perdón", icon: "🙏" },
        funFact: "Hashem pidió que todos dieran una moneda de 'Medio Shekel'. ¡Así nadie podía decir 'yo di más que tú'! Todos somos iguales.",
        quiz: [
            { question: "¿Qué ídolo construyó el pueblo?", options: ["Un león de plata", "Un becerro de oro", "Un águila de bronce", "Una serpiente"], correctAnswer: 1 },
            { question: "¿Qué hizo Moshé con las tablas?", options: ["Las guardó", "Las rompió", "Las leyó", "Las regaló"], correctAnswer: 1 },
            { question: "¿Qué brillaba en la cara de Moshé?", options: ["Sudor", "Luz divina", "Oro", "Agua"], correctAnswer: 1 }
        ]
      },
      {
        id: "p22",
        name: "Vayakel",
        hebrewName: "וַיַּקְהֵל",
        summary: "El pueblo da tanto para el Mishkán que Moshé dice '¡Basta!'.",
        fullText: "Moshé reunió al pueblo y les recordó cuidar el Shabat. Luego, hombres y mujeres trajeron tantas donaciones para el Mishkán que sobraron materiales.\n\nLos artesanos Betzalel y Oholiav hicieron las cortinas, los tablones y los utensilios con gran sabiduría y arte.",
        message: "El entusiasmo por las mitzvot debe ser contagioso.",
        videoId: "DfeuzcRBfto",
        keyword: { word: "Shabat", translation: "Descanso", icon: "🕯️" },
        funFact: "Las mujeres fueron las primeras en dar sus joyas y sus espejos de cobre. ¡Se negaron a dar para el Becerro de Oro, pero corrieron a dar para el Mishkán!",
        quiz: [
            { question: "¿Qué recordaron antes de construir?", options: ["Comer", "El Shabat", "Dormir", "Jugar"], correctAnswer: 1 },
            { question: "¿Qué pasó con las donaciones?", options: ["Faltaron", "Sobraron", "Se perdieron", "Nadie trajo nada"], correctAnswer: 1 },
            { question: "¿Quiénes eran los artesanos principales?", options: ["Moshé y Aharón", "Betzalel y Oholiav", "Nadav y Avihú", "Calev y Yehoshúa"], correctAnswer: 1 }
        ]
      },
      {
        id: "p23",
        name: "Pekudéi",
        hebrewName: "פְקוּדֵי",
        summary: "Inauguración del Mishkán. La Nube de Gloria desciende.",
        fullText: "Se hicieron las cuentas de todo el oro y plata usados. Moshé bendijo el trabajo.\n\nArmaron el Mishkán y la Nube de Gloria de Hashem llenó el lugar. ¡La presencia de D-s estaba con ellos! Así termina el libro de Shemot: ¡Jazak, Jazak V'nitchazek!",
        message: "La transparencia y el orden son parte de la santidad.",
        videoId: "yk8hXQzolOM",
        keyword: { word: "Kavod", translation: "Gloria / Honor", icon: "☁️" },
        funFact: "Moshé dio una cuenta exacta de cada gramo de oro y plata. Así nadie podía pensar mal de él. ¡Ser honesto es muy importante!",
        quiz: [
            { question: "¿Qué hizo Moshé con las donaciones?", options: ["Las guardó", "Hizo las cuentas (inventario)", "Las devolvió", "Las perdió"], correctAnswer: 1 },
            { question: "¿Qué llenó el Mishkán al final?", options: ["Agua", "La Nube de Gloria", "Humo", "Gente"], correctAnswer: 1 },
            { question: "¿Qué gritamos al terminar un libro de la Torá?", options: ["¡Adiós!", "¡Jazak, Jazak, V'nitchazek!", "¡Bravo!", "¡Fin!"], correctAnswer: 1 }
        ]
      }
    ]
  },
  {
    id: "vayikra",
    name: "Vayikrá (Levítico)",
    icon: "⚖️",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    parashot: [
       { id: "p24", name: "Vayikrá", hebrewName: "וַיִּקְרָא", summary: "¡Hashem llama! El libro de la Santidad y los Korbanot.", fullText: "Hashem llamó (Vayikrá) a Moshé desde la Tienda del Encuentro para enseñarle sobre los Korbanot (sacrificios). Había ofrendas para pedir perdón, para agradecer o para celebrar.\n\nLo importante no era el tamaño del animal, sino el corazón de quien lo traía. Incluso un poco de harina (Minjá) ofrecida con sinceridad era muy valiosa. Todos los sacrificios debían tener sal, símbolo de un pacto eterno.", message: "La oración (Tefilá) sincera es el regalo que hoy le damos a Hashem.", videoId: "NwwUrSSDRvQ", keyword: { word: "Korbán", translation: "Acercamiento", icon: "🔥" }, funFact: "La palabra 'Vayikrá' termina con una letra Álef (א) muy pequeñita. Esto nos enseña que Moshé era muy humilde y no se creía importante.", quiz: [{ question: "¿Qué significa Vayikrá?", options: ["Y escuchó", "Y llamó", "Y dijo", "Y caminó"], correctAnswer: 1 }, { question: "¿Qué reemplaza hoy a los sacrificios?", options: ["La comida", "Los rezos (Tefilá)", "El sueño", "Los juegos"], correctAnswer: 1 }, { question: "¿Qué letra es pequeñita en la Torá?", options: ["Bet", "Álef", "Shin", "Mem"], correctAnswer: 1 }] },
       { id: "p25", name: "Tzav", hebrewName: "צַו", summary: "El fuego eterno del altar nunca debe apagarse.", fullText: "Moshé ordenó (Tzav) a Aharón y sus hijos mantener el fuego del altar encendido siempre, día y noche. ¡Nunca debía apagarse! Esto nos enseña a mantener siempre encendida nuestra chispa de amor por Hashem en el corazón.\n\nTambién se realizó la ceremonia de inauguración de los Kohanim, que duró 7 días. Moshé los vistió con sus ropas especiales y los ungió con aceite, preparándolos para su servicio sagrado.", message: "Mantén encendido el entusiasmo por hacer Mitzvot cada día.", videoId: "1mDsNbou-Eg", keyword: { word: "Esh Tamid", translation: "Fuego Continuo", icon: "🔥" }, funFact: "Ocurrió un milagro en el Altar: aunque el fuego ardía siempre y llovía a veces, ¡la columna de humo nunca se movía y el fuego nunca se apagaba!", quiz: [{ question: "¿Qué debía estar siempre encendido?", options: ["La luz de la casa", "El fuego del altar", "La estufa", "La linterna"], correctAnswer: 1 }, { question: "¿Cuántos días duró la inauguración?", options: ["3 días", "7 días", "1 día", "10 días"], correctAnswer: 1 }, { question: "¿Qué significa Tzav?", options: ["Ordena", "Habla", "Camina", "Canta"], correctAnswer: 0 }] },
       { id: "p26", name: "Sheminí", hebrewName: "שְּׁמִינִי", summary: "El octavo día y los animales que podemos comer (Kasher).", fullText: "En el octavo (Sheminí) día de inauguración, la gloria de Hashem apareció. Pero ocurrió algo triste: Nadav y Avihú ofrecieron un fuego que no se les pidió. Aharón aceptó lo ocurrido con silencio y fe.\n\nLuego, Hashem dio las leyes de Kashrut: solo podemos comer animales con pezuña partida y que rumian (como la vaca), y peces con aletas y escamas. ¡Cuidar lo que comemos cuida nuestra alma!", message: "Somos lo que comemos: la comida Kasher nos hace especiales.", videoId: "9Nhcw27C7fU", keyword: { word: "Kasher", translation: "Apto / Correcto", icon: "🐟" }, funFact: "¿Sabías que la jirafa es un animal Kasher? Tiene pezuña partida y rumia. ¡Pero no la comemos porque no sabemos en qué parte de su cuello largo hacer la Shejitá!", quiz: [{ question: "¿Qué significa Sheminí?", options: ["Séptimo", "Octavo", "Primero", "Último"], correctAnswer: 1 }, { question: "¿Qué deben tener los peces Kasher?", options: ["Dientes grandes", "Aletas y escamas", "Colores bonitos", "Patas"], correctAnswer: 1 }, { question: "¿Qué animales terrestres son Kasher?", options: ["Los que vuelan", "Los rápidos", "Pezuña partida y rumiantes", "Los grandes"], correctAnswer: 2 }] },
       { id: "p27", name: "Tazría", hebrewName: "תַזְרִיעַ", summary: "Cuidando nuestras palabras para no tener Tzaráat.", fullText: "La parashá habla sobre la pureza al nacer un bebé. Luego describe la Tzaráat, una mancha en la piel que venía por hablar mal de los demás (Lashón Hará).\n\nQuien tenía esta marca debía ir al Cohén (no al médico, ¡porque era algo espiritual!). Tenía que aislarse un tiempo para pensar en cómo usar mejor sus palabras. Esto nos enseña que las palabras tienen poder y pueden lastimar o curar.", message: "¡Usa tus palabras para decir cosas bonitas y hacer sentir bien a otros!", videoId: "-ORflM1R4H4", keyword: { word: "Lashón Hará", translation: "Lengua Mala / Chisme", icon: "👅" }, funFact: "El Lashón Hará es tan grave que se compara con luchar contra tres personas a la vez: el que habla, el que escucha y de quien se habla. ¡Mejor hablemos bien!", quiz: [{ question: "¿Por qué salía la Tzaráat?", options: ["Por comer mucho", "Por hablar mal (Lashón Hará)", "Por no dormir", "Por correr"], correctAnswer: 1 }, { question: "¿A quién debía ir a ver la persona?", options: ["Al médico", "Al Cohén", "Al amigo", "Al rey"], correctAnswer: 1 }, { question: "¿Qué aprendemos de esto?", options: ["A correr rápido", "A cuidar nuestras palabras", "A comer sano", "A dormir más"], correctAnswer: 1 }] },
       { id: "p28", name: "Metzorá", hebrewName: "מְּצֹרָע", summary: "La purificación y la importancia de ser humildes.", fullText: "Cuando la persona con Tzaráat se arrepentía, el Cohén hacía una ceremonia especial para purificarla. Usaba madera de cedro (un árbol alto y orgulloso) y una planta de hisopo (bajita y humilde).\n\nEsto le recordaba que debía dejar el orgullo y ser humilde como el hisopo. Al final, la persona se sumergía en la Mikve y podía volver feliz al campamento con sus amigos.", message: "La humildad es la medicina que nos acerca a los demás.", videoId: "7LN0uQYABmU", keyword: { word: "Teshuvá", translation: "Retorno / Arrepentimiento", icon: "🔄" }, funFact: "El nombre 'Metzorá' viene de las palabras 'Motzí Ra', que significa 'El que saca el mal' (hablando cosas malas de otros).", quiz: [{ question: "¿Qué planta representaba la humildad?", options: ["El cedro", "El hisopo", "La rosa", "El pino"], correctAnswer: 1 }, { question: "¿Qué árbol representaba el orgullo?", options: ["El cedro", "El hisopo", "El olivo", "La palmera"], correctAnswer: 0 }, { question: "¿Qué hacía la persona al final?", options: ["Nada", "Se bañaba en la Mikve", "Se iba", "Gritaba"], correctAnswer: 1 }] },
       { 
         id: "p29", 
         name: "Ajaré Mot", 
         hebrewName: "אַחֲרֵי מוֹת", 
         summary: "El servicio sagrado de Yom Kipur en el lugar más santo.", 
         fullText: "Hashem enseñó que el lugar más sagrado, el Kodesh HaKodashim, es muy especial. Solo el Cohen Gadol podía entrar allí una vez al año: en Yom Kipur.\n\nEse día, se vestía con ropas blancas sencillas, como un ángel, para mostrar humildad ante Hashem. Pedía perdón por todo el pueblo de Israel. Es el día más santo del año, donde Hashem nos da la oportunidad de limpiar nuestro corazón y empezar de nuevo.", 
         message: "Siempre podemos pedir perdón y tener un nuevo comienzo.", 
         videoId: "",
         keyword: { word: "Kipur", translation: "Expiación / Perdón", icon: "⚖️" },
         funFact: "La gente cuenta que el Cohen Gadol entraba con una cuerda atada al pie por si algo le pasaba, ¡porque nadie más podía entrar a rescatarlo!",
         quiz: [
            { question: "¿Quién entraba al lugar más santo?", options: ["Cualquier persona", "El Cohén Gadol", "El Rey", "Moshé"], correctAnswer: 1 },
            { question: "¿Qué día entraba?", options: ["En Pesaj", "En Shabat", "En Yom Kipur", "Todos los días"], correctAnswer: 2 },
            { question: "¿De qué color se vestía?", options: ["De oro", "De blanco puro", "De azul", "De rojo"], correctAnswer: 1 }
        ]
       },
       { 
         id: "p30", 
         name: "Kedoshim", 
         hebrewName: "קְדֹשִׁים", 
         summary: "¡Sean Santos! 'Ama a tu prójimo como a ti mismo'.", 
         fullText: "Hashem dijo a todo el pueblo: 'Sean santos (Kedoshim), porque Yo soy Santo'. ¿Cómo? Siendo buenas personas. Respetando a los padres, dando caridad, no robando y no mintiendo.\n\nLa regla de oro de la Torá está aquí: 'Veahavta LeReaja Kamoja' (Amarás a tu prójimo como a ti mismo). Rabí Akiva dijo que este es el principio más importante. Si no te gusta que te hagan algo, ¡no se lo hagas a los demás!", 
         message: "La verdadera santidad está en tratar bien a las personas.", 
         videoId: "",
         keyword: { word: "Kadosh", translation: "Santo / Especial", icon: "🌟" },
         funFact: "¡Dato asombroso! La mitzvá de 'Amar al prójimo' se encuentra exactamente en la mitad física de los cinco libros de la Torá. ¡Es el corazón de todo!",
         quiz: [
            { question: "¿Qué significa ser Kadosh?", options: ["Ser aburrido", "Ser santo y especial", "Ser rápido", "Ser alto"], correctAnswer: 1 },
            { question: "¿Cuál es la gran regla de la Torá?", options: ["Comer mucho", "Amar al prójimo como a ti mismo", "Dormir temprano", "Ganar siempre"], correctAnswer: 1 },
            { question: "¿Cómo debemos tratar a los mayores?", options: ["Con respeto (poniéndonos de pie)", "Ignorarlos", "Correr", "Gritar"], correctAnswer: 0 }
        ]
       },
       { 
         id: "p31", 
         name: "Emor", 
         hebrewName: "אֱמֹר", 
         summary: "El calendario de las fiestas judías (Moadim).", 
         fullText: "Emor significa 'Diles'. La Torá nos presenta el ciclo de las fiestas para celebrar con Hashem:\n1. Shabat (cada semana).\n2. Pésaj (Libertad).\n3. Shavuot (Entrega de la Torá).\n4. Rosh Hashaná (El Shofar).\n5. Yom Kipur (El Perdón).\n6. Sucot (La alegría y las cabañas).\n\nTambién nos enseña sobre la Cuenta del Omer: contamos 49 días desde Pésaj hasta Shavuot, preparándonos para recibir la Torá.", 
         message: "El tiempo es un regalo, celebrémoslo con alegría.", 
         videoId: "",
         keyword: { word: "Moadim", translation: "Tiempos Señalados / Fiestas", icon: "📅" },
         funFact: "En Sucot tomamos 4 especies (Etrog, Lulav, Hadás, Aravá). Representan a 4 tipos de judíos (los que estudian, los que hacen buenas acciones, los dos y ninguno). ¡Todos somos necesarios para el pueblo!",
         quiz: [
            { question: "¿Qué fiesta es la de las cabañas?", options: ["Pésaj", "Sucot", "Purim", "Jánuca"], correctAnswer: 1 },
            { question: "¿Qué fiesta celebramos con Matzá?", options: ["Sucot", "Pésaj", "Shavuot", "Jánuca"], correctAnswer: 1 },
            { question: "¿Qué contamos hasta Shavuot?", options: ["El dinero", "El Omer", "Las ovejas", "Las estrellas"], correctAnswer: 1 }
        ]
       },
       { 
        id: "p32", 
        name: "Behar", 
        hebrewName: "בְּהַר", 
        summary: "Shemitá: La tierra de Israel descansa cada 7 años.", 
        fullText: "Hashem dio una ley increíble en el Monte (Behar) Sinaí: así como nosotros descansamos en Shabat, la tierra de Israel debe descansar cada 7 años. Esto se llama Shemitá. Durante ese año, no se siembra ni se cosecha para vender.\n\nTodo lo que crece solito es 'Hefker' (de nadie), para que coman los pobres y los animales. Esto nos enseña a confiar en que Hashem nos cuida y que la tierra en realidad es Suya.", 
        message: "Confía en Hashem y comparte lo que tienes.", 
        videoId: "",
        keyword: { word: "Shemitá", translation: "Descanso de la tierra", icon: "🌾" },
        funFact: "Hashem promete un milagro económico: si cuidas la Shemitá en el año 7, ¡Él te dará una cosecha TRIPLE en el año 6 para que tengas comida por tres años!",
        quiz: [
            { question: "¿Cada cuántos años es la Shemitá?", options: ["Cada 10 años", "Cada 7 años", "Cada 50 años", "Cada año"], correctAnswer: 1 },
            { question: "¿Qué hace la tierra en Shemitá?", options: ["Descansa", "Trabaja más", "Viaja", "Se vende"], correctAnswer: 0 },
            { question: "¿De quién es realmente la tierra?", options: ["Del rey", "De Hashem", "De nadie", "De los vecinos"], correctAnswer: 1 }
        ]
       },
       { 
        id: "p33", 
        name: "Bejukotai", 
        hebrewName: "בְּחֻקֹּתַי", 
        summary: "Bendiciones de lluvia y paz si seguimos el buen camino.", 
        fullText: "Terminamos el libro de Vayikrá con promesas hermosas. Si seguimos las leyes de Hashem (Bejukotai), tendremos lluvia a su tiempo, frutas deliciosas y paz para dormir tranquilos.\n\nPero si nos olvidamos de Él, cosas difíciles pueden pasar. Aún así, Hashem promete nunca abandonarnos. Al terminar de leer, todos gritamos fuerte: '¡Jazak, Jazak, V'nitchazek!' (¡Sé fuerte, sé fuerte y nos fortaleceremos!).", 
        message: "Hacer lo correcto trae bendición al mundo entero.", 
        videoId: "",
        keyword: { word: "Berajá", translation: "Bendición", icon: "🌧️" },
        funFact: "Al terminar este libro hemos leído exactamente 859 versículos sobre cómo ser santos. ¡Ya eres un experto en santidad!",
        quiz: [
            { question: "¿Qué promete Hashem si cumplimos la Torá?", options: ["Lluvia y paz", "Solo juguetes", "Frio", "Oscuridad"], correctAnswer: 0 },
            { question: "¿Qué decimos al terminar el libro?", options: ["Adiós", "Jazak Jazak V'nitchazek", "Hola", "Gracias"], correctAnswer: 1 },
            { question: "¿Qué libro terminamos hoy?", options: ["Bereshit", "Shemot", "Vayikrá", "Bamidbar"], correctAnswer: 2 }
        ]
       }
    ]
  },
  {
    id: "bamidbar",
    name: "Bamidbar (Números)",
    icon: "🕍",
    color: "bg-orange-100 border-orange-300 text-orange-800",
    parashot: [
        { id: "p34", name: "Bamidbar", hebrewName: "בְּמִדְבַּר", summary: "Contando al pueblo en el desierto.", message: "Todos somos importantes para Hashem.", videoId: "" },
        { id: "p35", name: "Nasó", hebrewName: "נָשֹׂא", summary: "La bendición de los Kohanim.", message: "Que Hashem te ilumine y te de paz.", videoId: "" },
        { id: "p36", name: "Behalotejá", hebrewName: "בְּהַעֲלֹתְךָ", summary: "La Menorá brilla. Viajamos siguiendo la nube de Hashem.", message: "Seguimos la luz de la Torá.", videoId: "" },
        { id: "p37", name: "Shelaj", hebrewName: "שְׁלַח-לְךָ", summary: "Los espías van a Israel. Calev y Yehoshúa confían en Hashem.", message: "¡Sí se puede! Con ayuda de Hashem.", videoId: "" },
        { id: "p38", name: "Kóraj", hebrewName: "קֹרַח", summary: "Kóraj pelea contra Moshé.", message: "Estar contentos con lo que somos evita peleas.", videoId: "" },
        { id: "p39", name: "Jukat", hebrewName: "חֻקַּת", summary: "Moshé golpea la roca.", message: "Confiamos en Hashem.", videoId: "" },
        { id: "p40", name: "Balak", hebrewName: "בָּלָק", summary: "El burro que habló. Bilaam quería maldecir pero solo salieron bendiciones.", message: "Nadie puede ir contra Hashem.", videoId: "" },
        { id: "p41", name: "Pinjás", hebrewName: "פִּינְחָס", summary: "Pinjás defiende el honor de Hashem.", message: "Ser valiente trae paz.", videoId: "" },
        { id: "p42", name: "Matot", hebrewName: "מַטּוֹת", summary: "La importancia de las promesas. Las tribus que se quedan fuera de Israel.", message: "Nuestra palabra es sagrada.", videoId: "" },
        { id: "p43", name: "Maséi", hebrewName: "מַסְעֵי", summary: "El resumen de todos los viajes en el desierto.", message: "Cada paso es un viaje guiado por Hashem.", videoId: "" }
    ]
  },
  {
    id: "devarim",
    name: "Devarim (Deuteronomio)",
    icon: "📜",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    parashot: [
        { id: "p44", name: "Devarim", hebrewName: "דְּבָרִים", summary: "Moshé recuerda la historia al pueblo.", message: "Recordar el pasado ayuda al futuro.", videoId: "" },
        { id: "p45", name: "Vaetjanán", hebrewName: "וָאֶתְחַנַּן", summary: "El Shemá Israel y los 10 Mandamientos.", message: "Hashem es Uno.", videoId: "" },
        { id: "p46", name: "Ékev", hebrewName: "עֵקֶב", summary: "Si escuchamos a Hashem, nos irá bien.", message: "Agradecer nos hace humildes.", videoId: "" },
        { id: "p47", name: "Reé", hebrewName: "רְאֵה", summary: "¡Elige el bien!", message: "Tenemos el poder de elegir.", videoId: "" },
        { id: "p48", name: "Shoftim", hebrewName: "שֹׁפְטִים", summary: "Jueces y policías. Justicia perseguirás.", message: "Ser justos es lo que Hashem pide.", videoId: "" },
        { id: "p49", name: "Ki Tetzé", hebrewName: "כִּי-תֵצֵא", summary: "Muchas mitzvot de bondad.", message: "Pequeños actos de bondad hacen un mundo mejor.", videoId: "" },
        { id: "p50", name: "Ki Tavó", hebrewName: "כִּי-תָבוֹא", summary: "Traer las primicias con alegría.", message: "Dar gracias con alegría.", videoId: "" },
        { id: "p51", name: "Nitzavim", hebrewName: "נִצָּבִים", summary: "Todos estamos parados ante Hashem.", message: "La Torá está muy cerca.", videoId: "" },
        { id: "p52", name: "Vaielaj", hebrewName: "וַיֵּלֶךְ", summary: "Moshé se despide.", message: "Pasar la antorcha es parte de la vida.", videoId: "" },
        { id: "p53", name: "Haazinu", hebrewName: "הַאֲזִינוּ", summary: "Una canción final de Moshé.", message: "La Torá es como lluvia que da vida.", videoId: "" },
        { id: "p54", name: "Vezot Haberajá", hebrewName: "וְזֹאת הַבְּרָכָה", summary: "La bendición final. Simjat Torá.", message: "La Torá nunca termina, ¡empezamos de nuevo!", videoId: "" }
    ]
  }
];

// Re-export constants needed by other components
export const HOLIDAY_DB: Record<string, string> = {
    "Rosh Hashaná": "¡Es el cumpleaños del mundo! Comemos manzana con miel para tener un año dulce y escuchamos el Shofar para despertar nuestro corazón.",
    "Yom Kipur": "Es el día del perdón. Nos vestimos de blanco como ángeles y prometemos ser mejores amigos y personas el próximo año.",
    "Sucot": "¡La fiesta de las cabañas! Salimos de casa para comer bajo las estrellas y recordar que Hashem siempre nos protege con su abrazo.",
    "Jánuca": "¡Milagro! Una pequeña vasija de aceite duró 8 días. Encendemos la Januquiá para traer luz a la oscuridad y comemos sufganiot ricas.",
    "Tu Bishvat": "Es el año nuevo de los árboles. Agradecemos por las frutas deliciosas y cuidamos la naturaleza que Hashem creó.",
    "Purim": "¡A disfrazarse! Recordamos cómo la Reina Ester salvó al pueblo. Comemos Orejas de Hamán y damos regalos a los amigos.",
    "Pésaj": "¡Salimos de Egipto! Comemos Matzá que es pan plano y contamos la historia de la libertad en una gran cena llamada Séder.",
    "Shavuot": "Recibimos el regalo más grande: ¡La Torá! Decoramos con flores y comemos cosas lácteas ricas como pastel de queso."
};

export const QUIZ_DB: Record<string, QuizData> = {
    "Parashá Semanal": {
        title: "Reto: Estructura de la Torá",
        questions: [
            {
                question: "¿Cuántos libros tiene la Torá (Jumash)?",
                options: ["10", "3", "5", "1"],
                correctIndex: 2,
                explanation: "Son 5 libros sagrados: Bereshit, Shemot, Vayikrá, Bamidbar y Devarim."
            },
            {
                question: "¿En cuántas partes (Aliyot) se divide la lectura de la Torá en Shabat?",
                options: ["3 partes", "7 partes", "5 partes", "10 partes"],
                correctIndex: 1,
                explanation: "En Shabat por la mañana llamamos a 7 personas para subir a la Torá."
            },
            {
                question: "¿Qué usamos para seguir la lectura y no tocar el pergamino?",
                options: ["Un lápiz", "El dedo", "Un Yad (Puntero)", "Una regla"],
                correctIndex: 2,
                explanation: "Usamos un 'Yad' (que significa mano) de plata o madera para respetar las letras sagradas."
            },
            {
                question: "¿Cómo se llama la fiesta donde terminamos y volvemos a empezar la Torá?",
                options: ["Pésaj", "Jánuca", "Simjat Torá", "Purim"],
                correctIndex: 2,
                explanation: "¡Simjat Torá! Bailamos con los rollos porque estamos felices de completarla."
            },
            {
                question: "¿Cuál es el primer libro de la Torá?",
                options: ["Shemot", "Bereshit", "Vayikrá", "Devarim"],
                correctIndex: 1,
                explanation: "Bereshit es el comienzo, donde leemos sobre la Creación del mundo."
            },
            {
                question: "¿En qué idioma está escrita la Torá?",
                options: ["Español", "Inglés", "Lashón Hakodesh (Hebreo)", "Francés"],
                correctIndex: 2,
                explanation: "Está escrita en Hebreo Sagrado, el idioma con el que Hashem creó el mundo."
            },
            {
                question: "¿Qué decimos todos juntos al terminar un libro de la Torá?",
                options: ["¡Abracadabra!", "¡Jazak, Jazak, V'nitchazek!", "¡Shalom!", "¡Gracias!"],
                correctIndex: 1,
                explanation: "Decimos '¡Sé fuerte, sé fuerte y nos fortaleceremos!' para seguir estudiando con ganas."
            },
            {
                question: "¿Quién recibió la Torá en el Monte Sinaí?",
                options: ["Avraham", "Moshé", "David", "Noaj"],
                correctIndex: 1,
                explanation: "Moshé subió al Monte Sinaí y permaneció allí 40 días y 40 noches."
            },
            {
                question: "¿Qué es una Parashá?",
                options: ["Una canción", "Una porción semanal de la Torá", "Un tipo de comida", "Un sombrero"],
                correctIndex: 1,
                explanation: "Leemos una porción (Parashá) cada semana para completar la Torá en un año."
            },
            {
                question: "¿Qué libro cuenta la salida de Egipto?",
                options: ["Bereshit", "Vayikrá", "Shemot", "Bamidbar"],
                correctIndex: 2,
                explanation: "Shemot (Éxodo) narra la esclavitud y la libertad del pueblo judío."
            }
        ]
    },
    "Fiestas Judías": {
        title: "Reto: Celebraciones del Año",
        questions: [
            {
                question: "¿Qué tocamos en Rosh Hashaná?",
                options: ["La guitarra", "El Shofar", "La trompeta", "El piano"],
                correctIndex: 1,
                explanation: "El sonido del Shofar nos despierta para mejorar nuestras acciones."
            },
            {
                question: "¿Qué comemos en Pésaj en lugar de pan?",
                options: ["Jalá", "Matzá", "Bagels", "Galletas"],
                correctIndex: 1,
                explanation: "Comemos Matzá, el pan plano, para recordar que salimos rápido de Egipto."
            },
            {
                question: "¿Cuántos días dura Janucá?",
                options: ["1 día", "8 días", "3 días", "12 días"],
                correctIndex: 1,
                explanation: "Celebramos el milagro del aceite que duró 8 días."
            },
            {
                question: "¿En qué fiesta vivimos en cabañas?",
                options: ["Sucot", "Purim", "Shavuot", "Yom Kipur"],
                correctIndex: 0,
                explanation: "En Sucot comemos y dormimos en la Sucá bajo las estrellas."
            },
            {
                question: "¿Quién es la reina valiente de Purim?",
                options: ["Sará", "Ester", "Rajel", "Leá"],
                correctIndex: 1,
                explanation: "La Reina Ester salvó al pueblo judío del malvado Hamán."
            },
            {
                question: "¿Qué día ayunamos para pedir perdón?",
                options: ["Purim", "Simjat Torá", "Yom Kipur", "Tu Bishvat"],
                correctIndex: 2,
                explanation: "Yom Kipur es el Día del Perdón, el día más sagrado del año."
            },
            {
                question: "¿Qué celebramos en Shavuot?",
                options: ["La creación del mundo", "La entrega de la Torá", "Los árboles", "El aceite"],
                correctIndex: 1,
                explanation: "En Shavuot recibimos el regalo más grande: La Torá."
            },
            {
                question: "¿Qué comemos en Rosh Hashaná para un año dulce?",
                options: ["Limón con sal", "Manzana con miel", "Pan con ajo", "Aceitunas"],
                correctIndex: 1,
                explanation: "La manzana con miel simboliza nuestro deseo de un año dulce y bueno."
            },
            {
                question: "¿Qué fiesta es el cumpleaños de los árboles?",
                options: ["Tu Bishvat", "Lag Baomer", "Pesaj", "Shabat"],
                correctIndex: 0,
                explanation: "Tu Bishvat es el Año Nuevo de los Árboles."
            },
            {
                question: "¿Qué encendemos en Shabat?",
                options: ["Una fogata", "Velas de Shabat", "Fuegos artificiales", "Linternas"],
                correctIndex: 1,
                explanation: "Encendemos velas (generalmente dos) antes de que entre el Shabat para traer luz y paz."
            }
        ]
    },
    "Personajes Bíblicos": {
        title: "Reto: ¿Quién es quién?",
        questions: [
            {
                question: "¿Quién construyó el Arca para salvar a los animales?",
                options: ["Avraham", "Moshé", "Noaj", "David"],
                correctIndex: 2,
                explanation: "Noaj construyó el arca siguiendo las instrucciones de Hashem."
            },
            {
                question: "¿Quién fue el primer patriarca del pueblo judío?",
                options: ["Itzjak", "Avraham", "Yaakov", "Yosef"],
                correctIndex: 1,
                explanation: "Avraham Avinu fue el primero en reconocer a un solo Dios."
            },
            {
                question: "¿Quién tenía una túnica de colores y soñaba sueños?",
                options: ["Yehudá", "Biniamín", "Yosef", "Leví"],
                correctIndex: 2,
                explanation: "Yosef recibió la túnica de su padre Yaakov y se convirtió en virrey de Egipto."
            },
            {
                question: "¿Quién sacó al pueblo de Israel de Egipto?",
                options: ["Aharón", "Moshé", "Miriam", "Najshón"],
                correctIndex: 1,
                explanation: "Moshé fue el líder elegido por Hashem para liberar a los esclavos."
            },
            {
                question: "¿Quién era el hermano de Moshé y primer Gran Sacerdote?",
                options: ["Calev", "Aharón", "Yehoshúa", "Eleazar"],
                correctIndex: 1,
                explanation: "Aharón fue el primer Cohen Gadol y amaba la paz."
            },
            {
                question: "¿Quién luchó contra el gigante Goliat?",
                options: ["El Rey Saúl", "El Rey David", "El Rey Salomón", "Sansón"],
                correctIndex: 1,
                explanation: "David, siendo joven, venció a Goliat con una honda y fe en Hashem."
            },
            {
                question: "¿Quién era la esposa de Avraham?",
                options: ["Rivká", "Sará", "Rajel", "Leá"],
                correctIndex: 1,
                explanation: "Sará Imenu fue la primera matriarca."
            },
            {
                question: "¿Quién tuvo 12 hijos que formaron las Tribus?",
                options: ["Avraham", "Itzjak", "Yaakov", "Esav"],
                correctIndex: 2,
                explanation: "Yaakov (Israel) tuvo 12 hijos, las tribus de Israel."
            },
            {
                question: "¿Quién era el hombre más fuerte de la Biblia?",
                options: ["David", "Shimshón (Sansón)", "Goliat", "Yosef"],
                correctIndex: 1,
                explanation: "Shimshón tenía una fuerza sobrenatural dada por Hashem."
            },
            {
                question: "¿Quién fue tragado por un gran pez?",
                options: ["Yoná", "Noaj", "Moshé", "Eliyahu"],
                correctIndex: 0,
                explanation: "Yoná estuvo en el vientre del pez por 3 días por huir de su misión."
            }
        ]
    },
    "Valores (Middot)": {
        title: "Reto: Middot Tovot",
        questions: [
            {
                question: "¿Qué es Tzedaká?",
                options: ["Jugar fútbol", "Dar caridad/ayuda", "Comer dulces", "Dormir"],
                correctIndex: 1,
                explanation: "Tzedaká es justicia: compartir lo que tenemos con quien lo necesita."
            },
            {
                question: "¿Qué mitzvá aprendemos de la tienda abierta de Avraham?",
                options: ["Hachnasat Orjim (Recibir invitados)", "Kibud Av (Respeto a padres)", "Tefilá (Rezo)", "Estudio"],
                correctIndex: 0,
                explanation: "Avraham corría a recibir a los invitados con alegría."
            },
            {
                question: "¿Qué significa 'Kibud Av VaEm'?",
                options: ["Comer sano", "Honrar a padre y madre", "Cuidar la naturaleza", "Decir la verdad"],
                correctIndex: 1,
                explanation: "Es la mitzvá de respetar y honrar a nuestros papás."
            },
            {
                question: "¿Qué debemos evitar decir sobre otros?",
                options: ["Halagos", "Lashón Hará (Chismes malos)", "Saludos", "Bendiciones"],
                correctIndex: 1,
                explanation: "Lashón Hará lastima a las personas; debemos cuidar nuestras palabras."
            },
            {
                question: "¿Qué hacemos si encontramos algo que alguien perdió?",
                options: ["Nos lo quedamos", "Hashavat Avedá (Devolverlo)", "Lo tiramos", "Lo escondemos"],
                correctIndex: 1,
                explanation: "Debemos tratar de encontrar al dueño y devolverlo."
            },
            {
                question: "¿Qué es 'Bikur Jolim'?",
                options: ["Visitar a los enfermos", "Ir de vacaciones", "Jugar pelota", "Leer libros"],
                correctIndex: 0,
                explanation: "Visitar y animar a los enfermos es una gran mitzvá."
            },
            {
                question: "¿Cuál es la regla de oro de la Torá?",
                options: ["Gana siempre", "Ama a tu prójimo como a ti mismo", "Duerme mucho", "Come rápido"],
                correctIndex: 1,
                explanation: "Tratar a los demás como queremos ser tratados."
            },
            {
                question: "¿Qué significa 'Emet'?",
                options: ["Mentira", "Verdad", "Secreto", "Broma"],
                correctIndex: 1,
                explanation: "El sello de Hashem es la Verdad (Emet)."
            },
            {
                question: "¿Qué hacemos si lastimamos a alguien?",
                options: ["Nos reímos", "Pedimos perdón (Teshuvá)", "Corremos", "Lo ignoramos"],
                correctIndex: 1,
                explanation: "Debemos pedir perdón y tratar de arreglar lo que hicimos."
            },
            {
                question: "¿Qué es 'Bal Tashjit'?",
                options: ["No desperdiciar/destruir", "No cantar", "No correr", "No saltar"],
                correctIndex: 0,
                explanation: "Cuidamos el mundo no desperdiciando comida ni destruyendo cosas sin razón."
            }
        ]
    },
    "Israel": {
        title: "Reto: Eretz Israel",
        questions: [
            {
                question: "¿Cuál es la capital de Israel?",
                options: ["Tel Aviv", "Haifa", "Jerusalén", "Eilat"],
                correctIndex: 2,
                explanation: "Jerusalén es el corazón y la capital eterna de Israel."
            },
            {
                question: "¿Qué muro sagrado está en Jerusalén?",
                options: ["La Muralla China", "El Kotel (Muro de los Lamentos)", "El Muro de Berlín", "Un muro de ladrillos"],
                correctIndex: 1,
                explanation: "El Kotel es lo que queda del muro que rodeaba el Templo Sagrado."
            },
            {
                question: "¿Qué idioma se habla principalmente en Israel?",
                options: ["Español", "Inglés", "Hebreo (Ivrit)", "Francés"],
                correctIndex: 2,
                explanation: "El Hebreo es el idioma de la Biblia y del Israel moderno."
            },
            {
                question: "¿Cuáles son los colores de la bandera de Israel?",
                options: ["Rojo y Blanco", "Azul y Blanco", "Verde y Amarillo", "Negro y Naranja"],
                correctIndex: 1,
                explanation: "Azul y blanco, como el Talit."
            },
            {
                question: "¿Qué símbolo hay en el centro de la bandera?",
                options: ["Una estrella de cinco puntas", "Un león", "El Maguén David (Estrella de David)", "Una Menorá"],
                correctIndex: 2,
                explanation: "El Maguén David es el símbolo judío por excelencia."
            },
            {
                question: "¿Cómo se llama el himno nacional de Israel?",
                options: ["Hava Nagila", "Hatikvah (La Esperanza)", "Shalom Aleijem", "Am Yisrael Jai"],
                correctIndex: 1,
                explanation: "Hatikvah significa 'La Esperanza' de ser un pueblo libre en nuestra tierra."
            },
            {
                question: "¿Cuál es el lugar más bajo de la tierra que está en Israel?",
                options: ["El Monte Hermón", "El Mar Muerto (Iam HaMelaj)", "El Río Jordán", "El Kineret"],
                correctIndex: 1,
                explanation: "El Mar Muerto es el punto más bajo y su agua es muy salada."
            },
            {
                question: "¿Cuál es la moneda de Israel?",
                options: ["Dólar", "Euro", "Shekel", "Peso"],
                correctIndex: 2,
                explanation: "El Nuevo Shekel Israelí (NIS)."
            },
            {
                question: "¿Hacia qué ciudad rezamos los judíos?",
                options: ["Hacia el Este", "Hacia Jerusalén", "Hacia el Norte", "Hacia Roma"],
                correctIndex: 1,
                explanation: "Todas las sinagogas apuntan hacia Jerusalén."
            },
            {
                question: "¿Cuántas especies especiales de frutos tiene Israel?",
                options: ["3", "5", "7", "10"],
                correctIndex: 2,
                explanation: "Las 7 especies son: Trigo, Cebada, Uva, Higo, Granada, Aceituna y Dátil (miel)."
            }
        ]
    },
    "Shabat": {
        title: "Reto: Día de Descanso",
        questions: [
            {
                question: "¿Cuándo empieza el Shabat?",
                options: ["El sábado por la mañana", "El viernes al atardecer", "El domingo", "El lunes"],
                correctIndex: 1,
                explanation: "Shabat comienza cuando se pone el sol el viernes."
            },
            {
                question: "¿Qué pan especial comemos en Shabat?",
                options: ["Bagel", "Matzá", "Jalá", "Pita"],
                correctIndex: 2,
                explanation: "Comemos Jalá trenzada, generalmente dos, para recordar la doble porción de maná."
            },
            {
                question: "¿Qué hacemos con una copa de vino para santificar el día?",
                options: ["Havdalá", "Kidush", "Lejaim", "Brindis"],
                correctIndex: 1,
                explanation: "Hacemos Kidush para declarar que el día de Shabat es santo."
            },
            {
                question: "¿Qué ceremonia marca el final de Shabat?",
                options: ["Kidush", "Havdalá", "Boda", "Bar Mitzvá"],
                correctIndex: 1,
                explanation: "Havdalá separa lo santo (Shabat) de lo cotidiano (la semana)."
            },
            {
                question: "¿Qué saludo decimos en Shabat?",
                options: ["Hola", "Shabat Shalom", "Buenos días", "Mazel Tov"],
                correctIndex: 1,
                explanation: "Deseamos 'Shabat Shalom', un sábado de paz."
            },
            {
                question: "¿Cuántas velas encendemos como mínimo?",
                options: ["1", "2", "3", "8"],
                correctIndex: 1,
                explanation: "Generalmente encendemos 2 velas: una por 'Zajor' (recuerda) y otra por 'Shamor' (cuida)."
            },
            {
                question: "¿Qué día creó Hashem el Shabat?",
                options: ["El primer día", "El cuarto día", "El séptimo día", "El sexto día"],
                correctIndex: 2,
                explanation: "Hashem descansó el séptimo día y lo hizo santo."
            },
            {
                question: "¿Qué especia solemos oler en Havdalá?",
                options: ["Pimienta", "Besamim (Clavo/Especias dulces)", "Sal", "Ajo"],
                correctIndex: 1,
                explanation: "Olemos especias dulces para reconfortar el alma al irse el Shabat."
            },
            {
                question: "¿Qué cantamos para recibir el Shabat?",
                options: ["Hatikva", "Lejá Dodí", "Maoz Tzur", "Dayenu"],
                correctIndex: 1,
                explanation: "Lejá Dodí da la bienvenida a la 'Novia Shabat'."
            },
            {
                question: "¿Qué está prohibido hacer en Shabat?",
                options: ["Cantar", "Dormir", "Melajá (Trabajos creativos)", "Comer"],
                correctIndex: 2,
                explanation: "Nos abstenemos de 39 tipos de trabajos (Melajot) para descansar verdaderamente."
            }
        ]
    },
    "DEFAULT": {
        title: "Mix de Torá Kids",
        questions: [
            {
                question: "¿Qué decimos cuando saludamos en Shabat?",
                options: ["Hola", "Shabat Shalom", "Buenos días", "Mazel Tov"],
                correctIndex: 1,
                explanation: "Decimos 'Shabat Shalom', deseando paz en el día de descanso."
            }
        ]
    }
};

export const getHolidayInfo = async (holiday: string): Promise<string> => {
    return HOLIDAY_DB[holiday] || "Benny está investigando sobre esta fiesta...";
};

export const generateQuiz = async (topic: string): Promise<QuizData | null> => {
    return QUIZ_DB[topic] || QUIZ_DB["DEFAULT"];
};
