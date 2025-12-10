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
        summary: "¡Todo comienza aquí! Antes de que hubiera mundo, solo estaba Hashem. En esta Parashá aprendemos cómo Él creó todo lo que conocemos con mucho amor en seis días y cómo nos regaló el Shabat para descansar.",
        fullText: "Al principio, no había nada: ni cielo, ni tierra, ni luz. Solo Hashem. Entonces Hashem dijo: '¡Que haya luz!', y hubo luz. Eso fue el primer día.\n\nLuego Hashem separó las aguas de arriba de las de abajo, creando el cielo azul. Después hizo que la tierra seca apareciera entre los mares y la llenó de árboles, flores y frutas deliciosas. Puso el sol, la luna y las estrellas brillantes en el cielo para iluminarnos.\n\nLlenó el mar de peces grandes y pequeños, y el cielo de pájaros de colores. Luego creó a los animales: leones, elefantes, perritos y gatitos. Y finalmente, el sexto día, Hashem creó a la persona: Adán y Javá, para que cuidaran de Su hermoso mundo.\n\nCuando terminó todo este trabajo maravilloso, Hashem vio que era muy bueno. Y el séptimo día, Hashem descansó y lo llamó Shabat Kodesh.",
        message: "Hashem nos dio un mundo precioso y somos sus socios para cuidarlo.",
        videoId: "8rAPAkIKRHE", 
        activity: "Hashem creó el mundo con palabras (Dijo 'Haya luz' y hubo luz). Piensa: ¿Cómo usaste tus palabras hoy? ¿Creaste sonrisas o lastimaste a alguien? Misión: Di 3 cosas bonitas a tu familia para 'crear' un ambiente de alegría.",
        quiz: [
            {
                question: "¿Qué creó Hashem el primer día?",
                options: ["Los animales", "La Luz y la Oscuridad", "El Sol y la Luna", "Las plantas"],
                correctAnswer: 1
            },
            {
                question: "¿Cómo llamó Hashem al día de descanso?",
                options: ["Domingo", "Yom Kipur", "Shabat", "Purim"],
                correctAnswer: 2
            },
            {
                question: "¿Quiénes fueron las primeras personas?",
                options: ["Avraham y Sará", "Adán y Javá", "Yosef y Benny", "Moshé y Aharón"],
                correctAnswer: 1
            }
        ]
      },
      {
        id: "p2",
        name: "Nóaj",
        hebrewName: "נֹחַ",
        summary: "El mundo se había llenado de gente que peleaba y robaba. Hashem decidió empezar de nuevo con un diluvio, pero salvó a Nóaj, el único hombre justo (Tzadik), quien construyó un Arca gigante.",
        fullText: "La gente en el mundo se había olvidado de ser buena. Se peleaban y tomaban cosas que no eran suyas. Hashem estaba muy triste. Pero había un hombre llamado Nóaj que era diferente; él era bueno y honesto.\n\nHashem le dijo a Nóaj: 'Voy a traer mucha lluvia para limpiar el mundo. Construye un barco gigante, un Arca'. La gente se burlaba de Nóaj, pero él siguió construyendo. Cuando empezó a llover, Nóaj, su familia y parejas de todos los animales del mundo entraron al Arca.\n\nLlovió por 40 días y 40 noches. Todo se cubrió de agua. Pero dentro del Arca, Nóaj trabajaba día y noche alimentando a los animales. ¡El león tenía hambre a las 2 AM y el elefante a las 5 AM! Nóaj aprendió a cuidar a otros antes que a sí mismo.\n\nAl final, salió el sol y Hashem puso un Arcoíris en el cielo como una promesa de paz para siempre.",
        message: "Ser bueno cuando todos los demás se portan mal requiere mucha valentía.",
        videoId: "sMd0opDs2Ss", 
        activity: "Nóaj se ocupó de alimentar a los animales antes de comer él mismo (Jesed). Reflexiona: ¿Qué necesidades tienen las personas que viven contigo? ¿Puedes ayudar a alguien antes de que te lo pidan?",
        quiz: [
            { question: "¿Qué construyó Nóaj?", options: ["Una casa", "Un templo", "Un arca (barco)", "Una torre"], correctAnswer: 2 },
            { question: "¿Qué señal puso Hashem en el cielo?", options: ["Un rayo", "Un arcoíris", "Una estrella fugaz", "Una nube rosa"], correctAnswer: 1 }
        ]
      },
      {
        id: "p3",
        name: "Lej Lejá",
        hebrewName: "לֶךְ-לְךָ",
        summary: "El primer viaje de nuestra historia. Avraham escucha la voz de Hashem diciéndole que deje todo lo que conoce para ir a una tierra especial, confiando plenamente en Él.",
        fullText: "Imagina tener que dejar tu casa, tu ciudad y tus amigos sin saber a dónde vas. Eso hizo Avraham Avinu. Hashem le dijo 'Lej Lejá' (Vete para ti) hacia la tierra que Yo te mostraré.\n\nAvraham no preguntó '¿Por qué?' ni '¿A dónde?'. Él confiaba tanto en Hashem que empacó sus cosas, tomó a su esposa Sará y a su sobrino Lot, y comenzó a caminar. En el camino, enseñaba a todos sobre el único Dios.\n\nHashem le prometió a Avraham: 'Mira las estrellas del cielo. ¡Así de numerosos serán tus hijos!'. Aunque Avraham y Sará eran viejitos y no tenían hijos, Avraham creyó. Por esa confianza, Hashem lo eligió para ser el padre de todo el pueblo judío.",
        message: "A veces los cambios dan miedo, pero son oportunidades para crecer y confiar.",
        videoId: "ve0VT8f00fY", 
        activity: "Avraham se fue 'para sí mismo' (para encontrar su mejor versión). Pregúntate: ¿Hay algún hábito o comportamiento tuyo que deberías 'dejar atrás' para ser mejor persona? ¿Qué te gustaría cambiar de ti mismo?",
      },
      {
        id: "p4",
        name: "Vaierá",
        hebrewName: "וַיֵּרָא",
        summary: "Avraham recibe visitas de ángeles y les da de comer con mucha alegría (Hajnasa Orjim). Luego, Hashem salva a Lot de la ciudad de Sodoma.",
        message: "Recibir invitados con una sonrisa es una mitzvá gigante.",
        videoId: "--Z6J-rIgrk" // ID Real
      },
      { id: "p5", name: "Jaié Sará", hebrewName: "חַיֵּי שָׂרָה", summary: "Avraham busca una esposa para Itzjak y encuentra a Rivká, quien es muy bondadosa.", message: "La bondad (Jesed) es lo más importante al elegir amigos.", videoId: "zkBk1z0u5-Q" },
      { id: "p6", name: "Toldot", hebrewName: "תּוֹלְדֹת", summary: "Nacen Yaakov y Esav. Son muy diferentes. Yaakov recibe las bendiciones especiales.", message: "Cada hermano es diferente, pero todos somos especiales para Hashem.", videoId: "5GJFMWdIGbo" },
      { id: "p7", name: "Vaietzé", hebrewName: "וַיֵּצֵא", summary: "Yaakov sueña con una escalera que llega al cielo con ángeles subiendo y bajando.", message: "Hashem está en todos lados, incluso cuando estamos de viaje.", videoId: "biWskHeVKpU" },
      { id: "p8", name: "Vaishlaj", hebrewName: "וַיִּשְׁלַח", summary: "Yaakov se prepara para encontrarse con Esav y reza a Hashem. Su nombre cambia a Israel.", message: "Rezar nos da fuerza para enfrentar nuestros miedos.", videoId: "GOfB9q9vb_8" },
      { id: "p9", name: "Vaieshev", hebrewName: "וַיֵּשֶׁב", summary: "Yosef recibe una túnica de colores, pero sus hermanos se ponen celosos. Termina en Egipto.", message: "Los celos son malos, debemos estar felices por lo que tienen los demás.", videoId: "LeF_n_OXbNo" },
      { id: "p10", name: "Miketz", hebrewName: "מִקֵּץ", summary: "Yosef interpreta los sueños del Faraón sobre las vacas flacas y gordas.", message: "Hashem nos da talentos para ayudar a los demás.", videoId: "C3NQV3plamY" },
      { id: "p11", name: "Vaigash", hebrewName: "וַיִּגַּשׁ", summary: "Yosef revela su identidad a sus hermanos: '¡Yo soy Yosef!'. La familia se reúne.", message: "El perdón une a la familia y sana los corazones.", videoId: "VfLg8ivtdFU" },
      { id: "p12", name: "Vaiejí", hebrewName: "וַיְחִי", summary: "Yaakov bendice a sus hijos y a sus nietos Efraín y Menashé antes de partir.", message: "Las bendiciones de los padres y abuelos son un tesoro eterno.", videoId: "WsR2TAyVZoY" }
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
        summary: "El pueblo de Israel es esclavo en Egipto. Moshé nace y es salvado en una canasta en el río Nilo. Hashem lo elige en la zarza ardiente para liberar a su pueblo.",
        message: "Hashem escucha nuestros rezos y nunca nos olvida, incluso en los momentos difíciles.",
        videoId: "wWVrrqyVRls" // ID Real
      },
      {
        id: "p14",
        name: "Vaerá",
        hebrewName: "וָאֵרָא",
        summary: "Moshé le pide al Faraón que deje ir al pueblo, pero él dice que no. ¡Entonces empiezan las 10 plagas! Sangre, ranas, piojos...",
        message: "Debemos escuchar a Hashem a la primera, no como el Faraón que era muy terco.",
        videoId: "r7fX55dNlqc" // ID Real
      },
      { id: "p15", name: "Bo", hebrewName: "בֹּא", summary: "Las últimas plagas. Preparamos la salida de Egipto con la ofrenda de Pésaj.", message: "La libertad es un regalo para usarlo sirviendo a Hashem.", videoId: "FAgIYC7KhpU" },
      { id: "p16", name: "Beshalaj", hebrewName: "בְּשַׁלַּח", summary: "¡El mar se abre! Cruzamos el Iam Suf en seco y cantamos la Shirá. Cae el Maná del cielo.", message: "Hashem hace milagros todos los días, solo hay que abrir los ojos.", videoId: "AwKQLzKyW5s" },
      { id: "p17", name: "Itró", hebrewName: "יִתְרוֹ", summary: "Recibimos la Torá en el Monte Sinaí. ¡Escuchamos los 10 Mandamientos!", message: "La Torá es nuestro mapa para vivir una vida buena y feliz.", videoId: "sHnaggaoroY" },
      { id: "p18", name: "Mishpatim", hebrewName: "מִשְׁפָּטִים", summary: "Leyes sobre cómo tratar a los demás: no lastimar, devolver cosas perdidas, ayudar.", message: "Ser buena persona es tan importante como rezar.", videoId: "8UBu-rCS5sA" },
      { id: "p19", name: "Terumá", hebrewName: "תְּרוּמָה", summary: "Construimos el Mishkán (Tabernáculo) para que Hashem habite entre nosotros.", message: "Cada uno pone su granito de arena para construir cosas sagradas.", videoId: "VdY9Giv2laY" },
      { id: "p20", name: "Tetzavé", hebrewName: "תְּצַוֶּה", summary: "La ropa especial de los Kohanim y el encendido de la Menorá.", message: "Nuestra ropa y comportamiento muestran respeto por quienes somos.", videoId: "g2akTy5BB0Q" },
      { id: "p21", name: "Ki Tisá", hebrewName: "כִּי תִשָּׂא", summary: "El error del Becerro de Oro y el perdón de Hashem con las segundas tablas.", message: "Siempre hay una segunda oportunidad si pedimos perdón de corazón.", videoId: "Bd4lU_MYILU" },
      { id: "p22", name: "Vaiakel", hebrewName: "וַיַּקְהֵל", summary: "El pueblo se reúne para dar regalos para el Mishkán. ¡Había tanto que tuvieron que decir 'Basta'!", message: "Dar tzedaká y compartir nos llena de alegría.", videoId: "DfeuzcRBfto" },
      { id: "p23", name: "Pekudéi", hebrewName: "פְקוּדֵי", summary: "El Mishkán está terminado. La nube de Hashem baja y llena el lugar.", message: "Cuando hacemos las cosas bien y con amor, Hashem está con nosotros.", videoId: "yk8hXQzolOM" }
    ]
  },
  {
    id: "vayikra",
    name: "Vayikrá (Levítico)",
    icon: "⚖️",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    parashot: [
       {
        id: "p24",
        name: "Vayikrá",
        hebrewName: "וַיִּקְרָא",
        summary: "Aprendemos sobre los Korbanot (ofrendas) en el Mishkán. Se trata de acercarnos a Hashem con el corazón.",
        message: "Hoy no tenemos ofrendas, pero nuestras palabras dulces y rezos son el mejor regalo para Hashem.",
        videoId: "NwwUrSSDRvQ" // ID Real
       },
       {
        id: "p25",
        name: "Tzav",
        hebrewName: "צַו",
        summary: "Hashem da instrucciones especiales a los Kohanim sobre cómo mantener el fuego del altar siempre encendido.",
        message: "Siempre debemos mantener encendida la chispita de amor por Hashem en nuestro corazón.",
        videoId: "1mDsNbou-Eg" // ID Real
       },
       { id: "p26", name: "Sheminí", hebrewName: "שְּׁמִינִי", summary: "Inauguración del Mishkán. Aprendemos qué animales son Kasher.", message: "Cuidar lo que comemos nos ayuda a ser santos y especiales.", videoId: "9Nhcw27C7fU" },
       { id: "p27", name: "Tazría", hebrewName: "תַזְרִיעַ", summary: "Leyes sobre la pureza y el cuidado de nuestras palabras (Lashón Hará).", message: "Las palabras pueden lastimar como ronchas en la piel. ¡Hablemos bonito!", videoId: "-ORflM1R4H4" },
       { id: "p28", name: "Metzorá", hebrewName: "מְּצֹרָע", summary: "Cómo curarse y purificarse. La importancia de la Teshuvá.", message: "Pedir perdón nos limpia y nos hace sentir mejor.", videoId: "7LN0uQYABmU" },
       { id: "p29", name: "Ajaré Mot", hebrewName: "אַחֲרֵי מוֹת", summary: "El servicio del Kohen Gadol en Iom Kipur, el día más sagrado.", message: "Todos podemos empezar de nuevo y ser mejores.", videoId: "" },
       { id: "p30", name: "Kedoshim", hebrewName: "קְדֹשִׁים", summary: "'Ama a tu prójimo como a ti mismo'. ¡La regla de oro de la Torá!", message: "Trata a los demás como te gustaría que te traten a ti.", videoId: "" },
       { id: "p31", name: "Emor", hebrewName: "אֱמֹר", summary: "Las fiestas judías (Pésaj, Shavuot, Sucot) y el Shabat.", message: "El tiempo es sagrado, celebrémoslo con alegría.", videoId: "" },
       { id: "p32", name: "Behar", hebrewName: "בְּהַר", summary: "El año de Shemitá: la tierra descansa cada 7 años.", message: "La tierra es de Hashem, nosotros la cuidamos.", videoId: "" },
       { id: "p33", name: "Bejukotai", hebrewName: "בְּחֻקֹּתַי", summary: "Las bendiciones que recibimos si seguimos el camino de la Torá.", message: "Hacer el bien trae cosas buenas a nuestra vida.", videoId: "" }
    ]
  },
  {
    id: "bamidbar",
    name: "Bamidbar (Números)",
    icon: "🕍",
    color: "bg-orange-100 border-orange-300 text-orange-800",
    parashot: [
        { id: "p34", name: "Bamidbar", hebrewName: "בְּמִדְבַּר", summary: "Contando al pueblo en el desierto. Cada uno tiene su lugar especial alrededor del Mishkán.", message: "Todos somos importantes y contamos para Hashem.", videoId: "" },
        { id: "p35", name: "Nasó", hebrewName: "נָשֹׂא", summary: "La bendición de los Kohanim y los regalos de los príncipes.", message: "Que Hashem te ilumine y te de paz.", videoId: "" },
        { id: "p36", name: "Behalotejá", hebrewName: "בְּהַעֲלֹתְךָ", summary: "La Menorá brilla. Viajamos siguiendo la nube de Hashem.", message: "Seguimos la luz de la Torá en nuestro camino.", videoId: "" },
        { id: "p37", name: "Shelaj", hebrewName: "שְׁלַח-לְךָ", summary: "Los espías van a Israel. Calev y Yehoshúa confían en Hashem.", message: "¡Sí se puede! Con ayuda de Hashem podemos lograrlo.", videoId: "" },
        { id: "p38", name: "Kóraj", hebrewName: "קֹרַח", summary: "Kóraj pelea contra Moshé. Aprendemos a no buscar peleas.", message: "Estar contentos con lo que somos evita peleas tontas.", videoId: "" },
        { id: "p39", name: "Jukat", hebrewName: "חֻקַּת", summary: "La vaca roja y la serpiente de cobre. Moshé golpea la roca.", message: "A veces no entendemos todo, pero confiamos en Hashem.", videoId: "" },
        { id: "p40", name: "Balak", hebrewName: "בָּלָק", summary: "El burro que habló. Bilaam quería maldecir pero solo salieron bendiciones.", message: "Lo que Hashem quiere es lo que pasa, nadie puede ir contra Él.", videoId: "" },
        { id: "p41", name: "Pinjás", hebrewName: "פִּינְחָס", summary: "Pinjás defiende el honor de Hashem. Las fiestas se repiten.", message: "Ser valiente por las cosas correctas trae paz.", videoId: "" },
        { id: "p42", name: "Matot", hebrewName: "מַטּוֹת", summary: "Cumplir las promesas es muy importante.", message: "Nuestra palabra es sagrada, ¡cúmplela!", videoId: "" },
        { id: "p43", name: "Maséi", hebrewName: "מַסְעֵי", summary: "El resumen de todos los viajes en el desierto.", message: "Cada paso de nuestra vida es un viaje guiado por Hashem.", videoId: "" }
    ]
  },
  {
    id: "devarim",
    name: "Devarim (Deuteronomio)",
    icon: "📜",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    parashot: [
        { id: "p44", name: "Devarim", hebrewName: "דְּבָרִים", summary: "Moshé comienza a recordar la historia al pueblo antes de entrar a la tierra.", message: "Recordar el pasado nos ayuda a construir un buen futuro.", videoId: "" },
        { id: "p45", name: "Vaetjanán", hebrewName: "וָאֶתְחַנַּן", summary: "El Shemá Israel y repetir los 10 Mandamientos.", message: "Hashem es Uno y lo amamos con todo el corazón.", videoId: "" },
        { id: "p46", name: "Ékev", hebrewName: "עֵקֶב", summary: "Si escuchamos a Hashem, nos irá bien en la tierra buena.", message: "Agradecer por la comida (Birkat Hamazón) nos hace humildes.", videoId: "" },
        { id: "p47", name: "Reé", hebrewName: "רְאֵה", summary: "Mira, pongo ante ti la bendición. ¡Elige el bien!", message: "Tenemos el poder de elegir hacer lo correcto cada día.", videoId: "" },
        { id: "p48", name: "Shoftim", hebrewName: "שֹׁפְטִים", summary: "Jueces y policías. Justicia, justicia perseguirás.", message: "Ser justos y honestos es lo que Hashem pide de nosotros.", videoId: "" },
        { id: "p49", name: "Ki Tetzé", hebrewName: "כִּי-תֵצֵא", summary: "Muchas mitzvot de bondad: devolver cosas perdidas, ayudar al animal caído.", message: "Pequeños actos de bondad hacen un mundo mejor.", videoId: "" },
        { id: "p50", name: "Ki Tavó", hebrewName: "כִּי-תָבוֹא", summary: "Traer las primicias (Bikurim) con alegría.", message: "Dar gracias a Hashem con alegría trae más bendiciones.", videoId: "" },
        { id: "p51", name: "Nitzavim", hebrewName: "נִצָּבִים", summary: "Todos estamos parados hoy ante Hashem. La Torá no está lejos, está en tu corazón.", message: "La Torá es para ti, para mí y para todos, ¡está muy cerca!", videoId: "" },
        { id: "p52", name: "Vaielaj", hebrewName: "וַיֵּלֶךְ", summary: "Moshé se despide y anima a Yehoshúa. Escribe la Torá.", message: "Pasar la antorcha a los nuevos líderes es parte de la vida.", videoId: "" },
        { id: "p53", name: "Haazinu", hebrewName: "הַאֲזִינוּ", summary: "Una canción final de Moshé para que el cielo y la tierra escuchen.", message: "La Torá es como lluvia que da vida a nuestra alma.", videoId: "" },
        { id: "p54", name: "Vezot Haberajá", hebrewName: "וְזֹאת הַבְּרָכָה", summary: "La bendición final a cada tribu. Simjat Torá.", message: "La Torá nunca termina, ¡volvemos a empezar con alegría!", videoId: "" }
    ]
  }
];

// ==========================================
// 2. BASE DE DATOS DE FIESTAS
// ==========================================
const HOLIDAY_DB: Record<string, string> = {
    "Rosh Hashaná": "¡Es el cumpleaños del mundo! Comemos manzana con miel para tener un año dulce y escuchamos el Shofar para despertar nuestro corazón.",
    "Yom Kipur": "Es el día del perdón. Nos vestimos de blanco como ángeles y prometemos ser mejores amigos y personas el próximo año.",
    "Sucot": "¡La fiesta de las cabañas! Salimos de casa para comer bajo las estrellas y recordar que Hashem siempre nos protege con su abrazo.",
    "Jánuca": "¡Milagro! Una pequeña vasija de aceite duró 8 días. Encendemos la Januquiá para traer luz a la oscuridad y comemos sufganiot ricas.",
    "Tu Bishvat": "Es el año nuevo de los árboles. Agradecemos por las frutas deliciosas y cuidamos la naturaleza que Hashem creó.",
    "Purim": "¡A disfrazarse! Recordamos cómo la Reina Ester salvó al pueblo. Comemos Orejas de Hamán y damos regalos a los amigos.",
    "Pésaj": "¡Salimos de Egipto! Comemos Matzá que es pan plano y contamos la historia de la libertad en una gran cena llamada Séder.",
    "Shavuot": "Recibimos el regalo más grande: ¡La Torá! Decoramos con flores y comemos cosas lácteas ricas como pastel de queso."
};

// ==========================================
// 3. BANCO DE QUIZZES
// ==========================================
const QUIZ_DB: Record<string, QuizData> = {
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
            }
        ]
    },
    "Fiestas Judías": {
        title: "Experto en Jaguim",
        questions: [
            {
                question: "¿Qué comemos en Rosh Hashaná para un año dulce?",
                options: ["Limón con sal", "Manzana con miel", "Pan con queso", "Cebolla"],
                correctIndex: 1,
                explanation: "Comemos manzana con miel para desear un Shana Tova Umetuká (año bueno y dulce)."
            },
            {
                question: "¿Cuántos días dura Jánuca?",
                options: ["1 día", "7 días", "8 días", "12 días"],
                correctIndex: 2,
                explanation: "Jánuca dura 8 días porque el aceite del Templo duró milagrosamente 8 días."
            },
            {
                question: "¿Qué NO comemos en Pésaj?",
                options: ["Verduras", "Matzá", "Jametz (cosas leudadas)", "Carne"],
                correctIndex: 2,
                explanation: "En Pésaj no comemos Jametz (como pan, pasta o galletas normales) porque salimos rápido de Egipto."
            },
            {
                question: "¿En qué fiesta nos disfrazamos?",
                options: ["Purim", "Sucot", "Shavuot", "Yom Kipur"],
                correctIndex: 0,
                explanation: "¡En Purim! Para recordar que el milagro de Hashem estaba 'disfrazado' (oculto) en la historia."
            },
            {
                question: "¿Qué construimos en Sucot?",
                options: ["Un edificio", "Una pirámide", "Una Sucá (cabaña)", "Una tienda"],
                correctIndex: 2,
                explanation: "Construimos una Sucá y comemos en ella para recordar las Nubes de Gloria en el desierto."
            },
            {
                question: "¿Qué escuchamos en Rosh Hashaná?",
                options: ["La guitarra", "El Shofar", "El violín", "La trompeta"],
                correctIndex: 1,
                explanation: "Escuchamos el Shofar (cuerno de carnero) para despertar nuestro corazón."
            },
            {
                question: "¿Qué día es el más sagrado del año (Día del Perdón)?",
                options: ["Yom Kipur", "Tu Bishvat", "Jánuca", "Lag Baomer"],
                correctIndex: 0,
                explanation: "Yom Kipur es el día donde ayunamos y pedimos perdón a Hashem."
            }
        ]
    },
    "Personajes Bíblicos": {
        title: "Héroes de la Torá",
        questions: [
            {
                question: "¿Quién fue el primer hombre?",
                options: ["Noaj", "Adam", "Avraham", "Moshé"],
                correctIndex: 1,
                explanation: "Hashem creó a Adam (Adán) el sexto día de la creación."
            },
            {
                question: "¿Quién construyó el Arca?",
                options: ["Moshé", "David", "Nóaj", "Yoná"],
                correctIndex: 2,
                explanation: "Nóaj construyó el Arca para salvar a su familia y a los animales del diluvio."
            },
            {
                question: "¿Quién fue la esposa de Avraham?",
                options: ["Rivká", "Rajel", "Sará", "Lea"],
                correctIndex: 2,
                explanation: "Sará Imenu fue la primera matriarca y esposa de Avraham."
            },
            {
                question: "¿Quién peleó contra el gigante Goliat?",
                options: ["El Rey David", "El Rey Saúl", "Shimshon", "Shlomo"],
                correctIndex: 0,
                explanation: "David, siendo joven, venció al gigante Goliat con una pequeña piedra y mucha fe."
            },
            {
                question: "¿Quién fue el hombre más fuerte?",
                options: ["Moshé", "Shimshon", "Aharón", "Yosef"],
                correctIndex: 1,
                explanation: "Shimshon (Sansón) era muy fuerte, y su fuerza estaba relacionada con su pelo largo."
            },
            {
                question: "¿Qué reina salvó al pueblo judío en Purim?",
                options: ["Reina Ester", "Reina Vashti", "Reina Sheba", "Sará"],
                correctIndex: 0,
                explanation: "La Reina Ester fue valiente y habló con el Rey Ajashverosh para salvar a los judíos."
            },
            {
                question: "¿Quién fue tragado por un gran pez?",
                options: ["Moshé", "Yoná", "Nóaj", "Daniel"],
                correctIndex: 1,
                explanation: "Yoná trató de escapar, pero un gran pez lo tragó y allí rezó a Hashem."
            }
        ]
    },
    "Valores (Middot)": {
        title: "Middot Tovot",
        questions: [
            {
                question: "La Torá dice: Ama a tu prójimo como...",
                options: ["A tu mascota", "A ti mismo", "A tu juguete", "A tu vecino"],
                correctIndex: 1,
                explanation: "¡Veahavta LeReaja Kamoja! Trata a los demás como te gustaría que te traten a ti."
            },
            {
                question: "¿Qué mitzvá es visitar a los enfermos?",
                options: ["Bikur Jolim", "Tzedaká", "Kibud Av VaEm", "Shabat"],
                correctIndex: 0,
                explanation: "Bikur Jolim es visitar a quien no se siente bien para animarlo."
            },
            {
                question: "¿Qué hacemos cuando encontramos algo que no es nuestro?",
                options: ["Nos lo quedamos", "Lo tiramos", "Hashavat Avedá (Devolverlo)", "Lo escondemos"],
                correctIndex: 2,
                explanation: "Hashavat Avedá es la mitzvá de devolver objetos perdidos a su dueño."
            },
            {
                question: "¿Qué significa Kibud Av VaEm?",
                options: ["Comer Kosher", "Respetar a Padres", "Estudiar Torá", "Dar dinero"],
                correctIndex: 1,
                explanation: "Significa honrar y respetar a nuestro papá y a nuestra mamá."
            },
            {
                question: "¿Qué es Tzedaká?",
                options: ["Jugar fútbol", "Dar ayuda/dinero a quien necesita", "Comer rápido", "Dormir mucho"],
                correctIndex: 1,
                explanation: "Tzedaká es justicia: ayudar a los demás con lo que Hashem nos da."
            },
            {
                question: "¿Qué es Hajnasa Orjim?",
                options: ["Cerrar la puerta", "Invitar huéspedes", "Viajar lejos", "Cocinar solo"],
                correctIndex: 1,
                explanation: "Es recibir invitados en nuestra casa con alegría, como hacía Avraham."
            },
            {
                question: "¿Por qué no hablamos Lashón Hará (cosas malas de otros)?",
                options: ["Porque duele como una herida", "Porque es aburrido", "Porque nos cansamos", "No importa"],
                correctIndex: 0,
                explanation: "Las palabras tienen poder. Hablar mal de otros lastima mucho, ¡hay que cuidar lo que decimos!"
            }
        ]
    },
    "Israel": {
        title: "Viaje a Israel",
        questions: [
            {
                question: "¿Cuál es la capital de Israel?",
                options: ["Tel Aviv", "Haifa", "Yerushalayim", "Eilat"],
                correctIndex: 2,
                explanation: "Yerushalayim (Jerusalén) es la capital eterna y la ciudad más sagrada."
            },
            {
                question: "¿Qué lugar sagrado es un muro de piedras grandes?",
                options: ["El Kotel (Muro de los Lamentos)", "La Torre Eiffel", "Las Pirámides", "El Muro Chino"],
                correctIndex: 0,
                explanation: "El Kotel es lo que queda del Templo Sagrado y es donde rezamos."
            },
            {
                question: "¿Qué idioma se habla en Israel?",
                options: ["Español", "Inglés", "Hebreo (Ivrit)", "Francés"],
                correctIndex: 2,
                explanation: "En Israel se habla Hebreo, el mismo idioma de la Torá."
            },
            {
                question: "¿En qué mar flotas sin nadar porque es muy salado?",
                options: ["Mar Mediterráneo", "Mar Muerto (Iam Hamelaj)", "Mar Rojo", "Lago Kineret"],
                correctIndex: 1,
                explanation: "El Mar Muerto tiene tanta sal que flotas como un corcho."
            },
            {
                question: "¿Hacia qué ciudad rezamos los judíos?",
                options: ["Nueva York", "Madrid", "Yerushalayim", "Londres"],
                correctIndex: 2,
                explanation: "Donde sea que estemos en el mundo, siempre miramos hacia Yerushalayim."
            },
            {
                question: "¿De qué colores es la bandera de Israel?",
                options: ["Rojo y Blanco", "Azul y Blanco", "Verde y Amarillo", "Negro y Rojo"],
                correctIndex: 1,
                explanation: "Es azul y blanca, como el Talit."
            },
            {
                question: "¿Qué ciudad está en el sur y tiene mar y corales?",
                options: ["Tzfat", "Eilat", "Tiberias", "Hebrón"],
                correctIndex: 1,
                explanation: "Eilat está en el sur de Israel y es famosa por su mar hermoso."
            }
        ]
    },
    "Shabat": {
        title: "Shabat Shalom",
        questions: [
            {
                question: "¿Qué decimos para saludar en Shabat?",
                options: ["Hola", "Shabat Shalom", "Buenos días", "Mazel Tov"],
                correctIndex: 1,
                explanation: "Decimos 'Shabat Shalom', deseando que tengas un sábado de paz."
            },
            {
                question: "¿Cuántas velas encendemos como mínimo antes de Shabat?",
                options: ["1", "2", "5", "8"],
                correctIndex: 1,
                explanation: "Encendemos mínimo 2 velas: una por 'Zajor' (recuerda) y otra por 'Shamor' (cuida)."
            },
            {
                question: "¿Qué pan especial comemos en Shabat?",
                options: ["Matzá", "Bagel", "Jalá", "Pita"],
                correctIndex: 2,
                explanation: "Comemos Jalá, un pan trenzado muy rico."
            },
            {
                question: "¿Con qué bebida hacemos Kidush?",
                options: ["Agua", "Jugo de Naranja", "Vino o Jugo de Uva", "Leche"],
                correctIndex: 2,
                explanation: "Hacemos Kidush sobre vino o jugo de uva para santificar el día."
            },
            {
                question: "¿Cuándo empieza Shabat?",
                options: ["Sábado en la mañana", "Viernes al atardecer", "Domingo", "Lunes"],
                correctIndex: 1,
                explanation: "Shabat empieza el viernes cuando se pone el sol y prendemos las velas."
            },
            {
                question: "¿Qué ceremonia hacemos cuando termina Shabat?",
                options: ["Kidush", "Havdalá", "Boda", "Bar Mitzvá"],
                correctIndex: 1,
                explanation: "Hacemos Havdalá para separar el día sagrado de la semana normal."
            },
            {
                question: "¿Qué está prohibido hacer en Shabat?",
                options: ["Cantar", "Comer", "Dormir", "Melajá (Trabajos creativos)"],
                correctIndex: 3,
                explanation: "En Shabat descansamos de crear cosas (Melajá), como escribir, cocinar o encender fuego."
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

// ==========================================
// 4. GETTERS (SIN IA)
// ==========================================

export const getHolidayInfo = async (holiday: string): Promise<string> => {
    return HOLIDAY_DB[holiday] || "Benny está investigando sobre esta fiesta...";
};

export const generateQuiz = async (topic: string): Promise<QuizData | null> => {
    return QUIZ_DB[topic] || QUIZ_DB["DEFAULT"];
};