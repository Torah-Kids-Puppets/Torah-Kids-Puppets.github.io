
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
        activity: "Hashem creó el mundo con palabras. Piensa: ¿Cómo usaste tus palabras hoy? ¿Creaste sonrisas o lastimaste a alguien?",
        funFact: "La letra 'Bet' de Bereshit es la primera de la Torá. Está cerrada por tres lados y abierta hacia adelante, enseñándonos que debemos mirar hacia el futuro.",
        keyword: { word: "Bereshit", translation: "En el comienzo", icon: "🌱" },
        quiz: [
            { question: "¿Qué creó Hashem el primer día?", options: ["Los animales", "La Luz y la Oscuridad", "El Sol y la Luna", "Las plantas"], correctAnswer: 1 },
            { question: "¿Cómo llamó Hashem al día de descanso?", options: ["Domingo", "Yom Kipur", "Shabat", "Purim"], correctAnswer: 2 },
            { question: "¿Quiénes fueron las primeras personas?", options: ["Avraham y Sará", "Adán y Javá", "Yosef y Benny", "Moshé y Aharón"], correctAnswer: 1 }
        ]
      },
      {
        id: "p2",
        name: "Nóaj",
        hebrewName: "נֹחַ",
        summary: "El mundo se había llenado de gente que peleaba. Hashem decidió empezar de nuevo con un diluvio, pero salvó a Nóaj, el único hombre justo, quien construyó un Arca gigante.",
        fullText: "La gente en el mundo se había olvidado de ser buena. Se peleaban y tomaban cosas que no eran suyas. Hashem estaba muy triste. Pero había un hombre llamado Nóaj que era diferente; él era bueno y honesto.\n\nHashem le dijo a Nóaj: 'Voy a traer mucha lluvia para limpiar el mundo. Construye un barco gigante, un Arca'. La gente se burlaba de Nóaj, pero él siguió construyendo. Cuando empezó a llover, Nóaj, su familia y parejas de todos los animales del mundo entraron al Arca.\n\nLlovió por 40 días y 40 noches. Todo se cubrió de agua. Pero dentro del Arca, Nóaj trabajaba día y noche alimentando a los animales. ¡El león tenía hambre a las 2 AM y el elefante a las 5 AM! Nóaj aprendió a cuidar a otros antes que a sí mismo.\n\nAl final, salió el sol y Hashem puso un Arcoíris en el cielo como una promesa de paz para siempre.",
        message: "Ser bueno cuando todos los demás se portan mal requiere mucha valentía.",
        videoId: "sMd0opDs2Ss", 
        activity: "Nóaj alimentó a los animales antes de comer él mismo. ¿Puedes ayudar a alguien antes de que te lo pidan?",
        funFact: "En el Arca no había día ni noche porque las nubes tapaban el sol. Nóaj usaba piedras preciosas brillantes para saber la hora.",
        keyword: { word: "Teivá", translation: "Arca / Palabra", icon: "⛵" },
        quiz: [
            { question: "¿Qué construyó Nóaj?", options: ["Una casa", "Un templo", "Un arca (barco)", "Una torre"], correctAnswer: 2 },
            { question: "¿Qué señal puso Hashem en el cielo?", options: ["Un rayo", "Un arcoíris", "Una estrella fugaz", "Una nube rosa"], correctAnswer: 1 },
            { question: "¿Cuántos días llovió?", options: ["7 días", "40 días y 40 noches", "100 días", "1 año"], correctAnswer: 1 }
        ]
      },
      {
        id: "p3",
        name: "Lej Lejá",
        hebrewName: "לֶךְ-לְךָ",
        summary: "Avraham escucha la voz de Hashem diciéndole que deje todo para ir a una tierra especial, confiando plenamente en Él.",
        fullText: "Hashem le dijo a Avraham: 'Lej Lejá', que significa 'vete para ti'. Deja tu país, la casa de tu padre y ve a la tierra que Yo te mostraré. Avraham no sabía a dónde iba, pero confiaba mucho en Hashem.\n\nÉl y su esposa Sará empacaron todo y comenzaron un viaje muy largo. Por el camino, Avraham enseñaba a todos que solo hay un Hashem que creó el mundo. Hashem le prometió a Avraham que sus hijos serían tan numerosos como las estrellas del cielo.\n\nAvraham siempre fue muy valiente. Incluso cuando hubo peleas entre sus pastores y los de su sobrino Lot, él eligió la paz. ¡Así comenzó la historia de nuestro pueblo!",
        message: "A veces los cambios dan miedo, pero son oportunidades para crecer.",
        videoId: "ve0VT8f00fY", 
        activity: "¿Hay algún mal hábito tuyo que deberías 'dejar atrás' para ser mejor persona?",
        funFact: "Avraham tenía la tienda abierta por los 4 lados para ver si venían invitados desde cualquier dirección.",
        keyword: { word: "Emuná", translation: "Fe / Confianza", icon: "🌟" },
        quiz: [
            { question: "¿Qué significa Lej Lejá?", options: ["Corre rápido", "Vete para ti", "Quédate aquí", "Canta fuerte"], correctAnswer: 1 },
            { question: "¿A dónde le pidió Hashem a Avraham que fuera?", options: ["A Egipto", "A la tierra de Canaán", "A la luna", "A un desierto"], correctAnswer: 1 },
            { question: "¿Con qué comparó Hashem a los hijos de Avraham?", options: ["Con las rocas", "Con las flores", "Con las estrellas", "Con los peces"], correctAnswer: 2 }
        ]
      },
      {
        id: "p4",
        name: "Vaierá",
        hebrewName: "וַיֵּרָא",
        summary: "Avraham recibe visitas de ángeles y les da de comer con mucha alegría. Luego, Hashem salva a Lot.",
        fullText: "Hacía mucho calor en el desierto, y Avraham, aunque estaba dolorido, estaba sentado afuera de su tienda esperando invitados. De repente vio a tres hombres. Corrió a recibirlos, les dio agua para sus pies y les preparó un gran banquete.\n\nEsos hombres eran en realidad ángeles enviados por Hashem para darle una noticia maravillosa: Sará tendría un bebé, aunque ya era viejita. Sará se rió de alegría, por eso el bebé se llamó Itzjak (risa).\n\nEn esta parashá también aprendemos cómo Avraham rezó para intentar salvar a la gente de Sodoma y cómo fue probado por Hashem con su hijo Itzjak, demostrando su amor infinito por D-s.",
        message: "Recibir invitados con una sonrisa es una mitzvá gigante.",
        videoId: "--Z6J-rIgrk",
        keyword: { word: "Hajnasa Orjim", translation: "Recibir invitados", icon: "⛺" },
        quiz: [
            { question: "¿A quiénes recibió Avraham en su tienda?", options: ["A tres reyes", "A tres ángeles", "A tres soldados", "A tres pastores"], correctAnswer: 1 },
            { question: "¿Cómo se llamó el hijo de Sará?", options: ["Yosef", "Itzjak", "Yaakov", "Esav"], correctAnswer: 1 },
            { question: "¿Qué significa el nombre Itzjak?", options: ["Fuerza", "Risa", "Amor", "Paz"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p5", 
        name: "Jaié Sará", 
        hebrewName: "חַיֵּי שָׂרָה", 
        summary: "Avraham busca una esposa para Itzjak y encuentra a Rivká, quien es muy bondadosa.", 
        fullText: "Después de que Sará falleció, Avraham quería encontrar a la mejor esposa para su hijo Itzjak. Envió a su fiel sirviente Eliezer a un viaje muy largo con 10 camellos cargados de regalos.\n\nEliezer rezó a Hashem: 'La chica que me dé agua a mí y también ofrezca agua a mis camellos, esa será la elegida'. En ese momento apareció Rivká. Ella no solo fue amable con Eliezer, sino que corrió muchas veces al pozo para dar de beber a los camellos sedientos.\n\nEliezer supo que su bondad era especial. Rivká aceptó viajar con él y se convirtió en la esposa de Itzjak, trayendo alegría de nuevo a la tienda de Avraham.",
        message: "La bondad (Jesed) es lo más importante al elegir amigos.", 
        videoId: "zkBk1z0u5-Q",
        keyword: { word: "Jesed", translation: "Bondad", icon: "❤️" },
        quiz: [
            { question: "¿A quién envió Avraham a buscar esposa?", options: ["A Lot", "A Eliezer", "A Itzjak", "A Yosef"], correctAnswer: 1 },
            { question: "¿Qué hizo Rivká que demostró su bondad?", options: ["Cantó una canción", "Dio agua a los camellos", "Cocinó pan", "Bailó"], correctAnswer: 1 },
            { question: "¿A quién se eligió como esposa?", options: ["A Rajel", "A Leá", "A Rivká", "A Dina"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p6", 
        name: "Toldot", 
        hebrewName: "תּוֹלְדֹת", 
        summary: "Nacen Yaakov y Esav. Son muy diferentes. Yaakov recibe las bendiciones especiales.", 
        fullText: "Itzjak y Rivká tuvieron mellizos: Esav y Yaakov. Esav era peludo y le gustaba cazar en el campo. Yaakov era tranquilo y le gustaba estudiar Torá en la tienda.\n\nUn día, Esav llegó muy cansado y hambriento. Yaakov estaba cocinando un guiso de lentejas rojas. Esav le vendió su derecho de primogénito a Yaakov por un plato de comida, demostrando que no le importaban las cosas espirituales.\n\nCuando Itzjak fue viejito, quiso bendecir a sus hijos. Gracias al consejo de Rivká, Yaakov recibió la bendición principal, pues él valoraba más la conexión con Hashem. Esav se enojó mucho y Yaakov tuvo que irse de casa por un tiempo.",
        message: "Cada hermano es diferente, pero todos somos especiales para Hashem.", 
        videoId: "5GJFMWdIGbo",
        keyword: { word: "Toldot", translation: "Generaciones", icon: "🌳" },
        quiz: [
            { question: "¿Qué cocinaba Yaakov?", options: ["Pizza", "Guiso de lentejas", "Sopa de pollo", "Arroz"], correctAnswer: 1 },
            { question: "¿Quién era el hermano que le gustaba cazar?", options: ["Yaakov", "Esav", "Yosef", "Biniamín"], correctAnswer: 1 },
            { question: "¿A quién prefirió bendecir Hashem por su espiritualidad?", options: ["A Esav", "A Labán", "A Yaakov", "Al Faraón"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p7", 
        name: "Vaietzé", 
        hebrewName: "וַיֵּצֵא", 
        summary: "Yaakov sueña con una escalera que llega al cielo con ángeles subiendo y bajando.", 
        fullText: "Escapando de Esav, Yaakov viajó hacia Jarán. Una noche, durmió con una piedra como almohada y tuvo un sueño increíble: una escalera apoyada en la tierra que llegaba hasta el cielo, y ángeles de Hashem subían y bajaban por ella.\n\nHashem le prometió: 'Yo estoy contigo y te protegeré dondequiera que vayas'. Cuando despertó, Yaakov supo que ese lugar era santo. Siguió su viaje y llegó a Jarán, donde conoció a Rajel en un pozo.\n\nTrabajó durante muchos años para su tío Labán para poder casarse con Rajel y formar su familia. Allí nacieron casi todos sus hijos, quienes serían las 12 tribus de Israel.",
        message: "Hashem está en todos lados, incluso cuando estamos de viaje.", 
        videoId: "biWskHeVKpU",
        keyword: { word: "Sulam", translation: "Escalera", icon: "🪜" },
        quiz: [
            { question: "¿Qué vio Yaakov en su sueño?", options: ["Un barco", "Una escalera al cielo", "Un árbol gigante", "Un río de oro"], correctAnswer: 1 },
            { question: "¿Quiénes subían y bajaban por la escalera?", options: ["Niños", "Animales", "Ángeles", "Pájaros"], correctAnswer: 2 },
            { question: "¿Qué usó Yaakov como almohada?", options: ["Una piedra", "Una pluma", "Pasto", "Su bolso"], correctAnswer: 0 }
        ]
      },
      { 
        id: "p8", 
        name: "Vaishlaj", 
        hebrewName: "וַיִּשְׁלַח", 
        summary: "Yaakov se prepara para encontrarse con Esav y reza a Hashem. Su nombre cambia a Israel.", 
        fullText: "Después de muchos años, Yaakov regresó a casa para reencontrarse con su hermano Esav. Tenía un poco de miedo, así que hizo tres cosas: envió regalos, preparó a su familia y rezó con mucha fuerza a Hashem.\n\nLa noche antes del encuentro, Yaakov luchó con un ángel misterioso hasta el amanecer. El ángel lo bendijo y le cambió el nombre a 'Israel', que significa 'el que lucha con lo Divino y vence'.\n\nAl día siguiente, cuando vio a Esav, los dos hermanos corrieron a abrazarse y lloraron de alegría. Hicieron la paz y cada uno siguió su camino. Yaakov finalmente regresó a la tierra de Israel.",
        message: "Rezar nos da fuerza para enfrentar nuestros miedos.", 
        videoId: "GOfB9q9vb_8",
        keyword: { word: "Israel", translation: "Lucha con Dios", icon: "🇮🇱" },
        quiz: [
            { question: "¿Con quién luchó Yaakov por la noche?", options: ["Con Esav", "Con un oso", "Con un ángel", "Con Labán"], correctAnswer: 2 },
            { question: "¿Qué nuevo nombre recibió Yaakov?", options: ["Avraham", "Itzjak", "Israel", "Moshé"], correctAnswer: 2 },
            { question: "¿Cómo terminó el encuentro con Esav?", options: ["Con una pelea", "Haciendo la paz con un abrazo", "Corriendo", "Sin hablar"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p9", 
        name: "Vaieshev", 
        hebrewName: "וַיֵּשֶׁב", 
        summary: "Yosef recibe una túnica de colores, pero sus hermanos se ponen celosos. Termina en Egipto.", 
        fullText: "Yaakov amaba mucho a su hijo Yosef y le regaló una túnica especial de muchos colores. Yosef también tenía sueños donde sus hermanos se inclinaban ante él, lo que hizo que sus hermanos sintieran muchos celos.\n\nUn día, cuando Yosef fue a ver a sus hermanos al campo, ellos lo arrojaron a un pozo y luego lo vendieron a unos comerciantes que iban hacia Egipto. Le dijeron a su padre que Yosef había desaparecido.\n\nEn Egipto, Yosef comenzó una nueva vida. Aunque pasó por momentos difíciles, Hashem siempre estaba con él y le daba éxito en todo lo que hacía.",
        message: "Los celos son malos, debemos estar felices por lo que tienen los demás.", 
        videoId: "LeF_n_OXbNo",
        keyword: { word: "Ketonet", translation: "Túnica", icon: "🧥" },
        quiz: [
            { question: "¿Qué regalo especial le dio Yaakov a Yosef?", options: ["Un sombrero", "Una túnica de colores", "Un caballo", "Un anillo"], correctAnswer: 1 },
            { question: "¿A dónde fue llevado Yosef?", options: ["A Israel", "A Egipto", "A Jarán", "A Sodoma"], correctAnswer: 1 },
            { question: "¿Qué sentían los hermanos por Yosef?", options: ["Amor", "Celos", "Orgullo", "Indiferencia"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p10", 
        name: "Miketz", 
        hebrewName: "מִקֵּץ", 
        summary: "Yosef interpreta los sueños del Faraón sobre las vacas flacas y gordas.", 
        fullText: "El Faraón de Egipto tuvo sueños muy extraños que nadie podía explicar: 7 vacas gordas eran comidas por 7 vacas flacas. El copero del rey recordó que Yosef sabía interpretar sueños.\n\nLlamaron a Yosef de la cárcel y él explicó: 'Hashem te avisa que vendrán 7 años de mucha comida y 7 años de hambre. Debes guardar comida ahora'. El Faraón quedó tan impresionado que nombró a Yosef Gobernador de todo Egipto.\n\nYosef trabajó duro guardando granos. Cuando llegó el hambre, gente de todos lados, incluidos sus propios hermanos, fueron a Egipto a comprar comida.",
        message: "Hashem nos da talentos para ayudar a los demás.", 
        videoId: "C3NQV3plamY",
        keyword: { word: "Jalom", translation: "Sueño", icon: "💭" },
        quiz: [
            { question: "¿Qué soñó el Faraón?", options: ["7 leones", "7 vacas gordas y 7 flacas", "7 pájaros", "7 estrellas"], correctAnswer: 1 },
            { question: "¿A quién nombró el Faraón como Gobernador?", options: ["A Moshé", "A Yosef", "A Aharón", "A Esav"], correctAnswer: 1 },
            { question: "¿Qué guardó Yosef para los años de hambre?", options: ["Oro", "Agua", "Granos (Comida)", "Ropa"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p11", 
        name: "Vaigash", 
        hebrewName: "וַיִּגַּשׁ", 
        summary: "Yosef revela su identidad a sus hermanos: '¡Yo soy Yosef!'. La familia se reúne.", 
        fullText: "Yehudá se acercó valientemente a Yosef para defender a su hermano pequeño Biniamín, ofreciéndose a quedarse como esclavo en su lugar. Al ver este gran cambio en sus hermanos, Yosef no pudo aguantar más.\n\nLloró de emotion y gritó: '¡Ani Yosef! (¡Yo soy Yosef!) ¿Mi padre vive todavía?'. Los hermanos estaban asustados, pero Yosef los perdonó de todo corazón y les dijo que Hashem lo envió allí para salvar vidas.\n\nLes pidió que trajeran a su padre Yaakov y a todas sus familias a vivir a Egipto, donde habría comida para todos. ¡Fue una reunión llena de lágrimas y abrazos!",
        message: "El perdón une a la familia y sana los corazones.", 
        videoId: "VfLg8ivtdFU",
        keyword: { word: "Vaigash", translation: "Y se acercó", icon: "🤝" },
        quiz: [
            { question: "¿Qué significa 'Ani Yosef'?", options: ["Hola Yosef", "Yo soy Yosef", "Adiós Yosef", "Gracias Yosef"], correctAnswer: 1 },
            { question: "¿Quién defendió a Biniamín ante Yosef?", options: ["Reuvén", "Yehudá", "Leví", "Shimón"], correctAnswer: 1 },
            { question: "¿Qué hizo Yosef con sus hermanos?", options: ["Los castigó", "Los perdonó", "Los ignoró", "Los envió lejos"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p12", 
        name: "Vaiejí", 
        hebrewName: "וַיְחִי", 
        summary: "Yaakov bendice a sus hijos y a sus nietos Efraín y Menashé antes de partir.", 
        fullText: "Yaakov vivió sus últimos 17 años muy feliz en Egipto junto a toda su familia. Antes de morir, llamó a sus nietos, los hijos de Yosef: Efraín y Menashé, y los bendijo de una manera especial.\n\nLuego reunió a sus 12 hijos y les dio a cada uno una bendición según su personalidad, enseñándoles a mantenerse unidos. Yaakov pidió ser enterrado en la Cueva de Majpelá, en Israel, con sus padres.\n\nAl terminar esta parashá, también terminamos el primer libro de la Torá. Todos decimos juntos: ¡Jazak, Jazak V'nitchazek! (¡Sé fuerte, sé fuerte y nos fortaleceremos!)",
        message: "Las bendiciones de los padres y abuelos son un tesoro eterno.", 
        videoId: "WsR2TAyVZoY",
        keyword: { word: "Jazak", translation: "Sé fuerte", icon: "💪" },
        quiz: [
            { question: "¿A quiénes bendijo Yaakov primero?", options: ["A sus hijos", "A sus nietos Efraín y Menashé", "Al Faraón", "A sus sirvientes"], correctAnswer: 1 },
            { question: "¿Dónde pidió ser enterrado Yaakov?", options: ["En Egipto", "En el Nilo", "En la Cueva de Majpelá", "En el desierto"], correctAnswer: 2 },
            { question: "¿Qué decimos al terminar un libro de la Torá?", options: ["¡Adiós!", "¡Jazak, Jazak, V'nitchazek!", "¡Buen viaje!", "¡Shalom!"], correctAnswer: 1 }
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
        summary: "El pueblo de Israel es esclavo en Egipto. Moshé nace y es salvado en una canasta. Hashem lo elige en la zarza ardiente.",
        fullText: "Muchos años después de Yosef, un nuevo Faraón gobernaba Egipto y no recordaba lo bueno que fue Yosef. Trató mal a los hijos de Israel y los hizo trabajar muy duro.\n\nEn ese tiempo nació Moshé. Su mamá lo puso en una canasta en el río Nilo para protegerlo. La hija del Faraón lo encontró y lo crió en el palacio como un príncipe. Un día, Moshé vio la injusticia y tuvo que huir al desierto de Midián.\n\nAllí, mientras cuidaba ovejas, vio una zarza que ardía pero no se quemaba. Hashem le habló desde el fuego: 'Moshé, ve ante el Faraón y saca a mi pueblo de Egipto'. Moshé, con humildad, aceptó la gran misión.",
        message: "Hashem escucha nuestros rezos y nunca nos olvida.",
        videoId: "wWVrrqyVRls",
        keyword: { word: "Geulá", translation: "Redención", icon: "🔓" },
        funFact: "Moshé significa 'Extraído de las aguas', porque la hija del Faraón lo sacó del río.",
        quiz: [
            { question: "¿Dónde encontró la hija del Faraón a Moshé?", options: ["En una casa", "En una canasta en el río", "En el bosque", "En un barco"], correctAnswer: 1 },
            { question: "¿Qué planta vio Moshé ardiendo sin quemarse?", options: ["Un pino", "Una zarza (Sné)", "Una flor", "Un árbol frutal"], correctAnswer: 1 },
            { question: "¿Quién le habló a Moshé desde la zarza?", options: ["Un pájaro", "Hashem", "Un soldado", "Su hermano"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p14", 
        name: "Vaerá", 
        hebrewName: "וָאֵרָא", 
        summary: "Moshé le pide al Faraón que deje ir al pueblo, pero él dice que no. ¡Entonces empiezan las 10 plagas!", 
        fullText: "Moshé y Aharón fueron ante el Faraón con un mensaje de Hashem: '¡Deja ir a mi pueblo!'. Pero el Faraón era muy orgulloso y dijo que no. Entonces, Hashem comenzó a enviar las plagas para mostrar Su gran poder.\n\nPrimero, el agua del Nilo se convirtió en sangre. Luego vinieron millones de ranas que saltaban por todas partes, hasta en las camas de los egipcios. Después piojos, animales salvajes, peste en los animales, sarna y una tormenta de granizo con fuego por dentro. A pesar de todo esto, el Faraón seguía endureciendo su corazón y no dejaba ir a los judíos.",
        message: "Debemos escuchar a Hashem a la primera.", 
        videoId: "r7fX55dNlqc",
        keyword: { word: "Makot", translation: "Plagas", icon: "🐸" },
        funFact: "A pesar de las plagas, los judíos en la tierra de Goshén estaban protegidos y no les pasaba nada.",
        quiz: [
            { question: "¿Cuál fue la primera plaga?", options: ["Ranas", "Sangre", "Piojos", "Sarna"], correctAnswer: 1 },
            { question: "¿Qué animal saltaba por todo Egipto?", options: ["Leones", "Grillos", "Ranas", "Canguros"], correctAnswer: 2 },
            { question: "¿Cómo se llamaba el hermano de Moshé que lo ayudaba?", options: ["Yosef", "Itzjak", "Aharón", "Levi"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p15", 
        name: "Bo", 
        hebrewName: "בֹּא", 
        summary: "Las últimas plagas. Preparamos la salida de Egipto con la ofrenda de Pésaj.", 
        fullText: "Llegaron las últimas tres plagas. Primero, una nube gigante de langostas que se comieron todas las plantas de Egipto. Luego, una oscuridad tan espesa que los egipcios no podían ni moverse de sus sillas, ¡pero los judíos tenían luz en sus casas!\n\nFinalmente, Hashem envió la plaga de los primogénitos. Los judíos marcaron sus puertas para que Hashem 'pasara por alto' sus casas. Comieron Matzá y se prepararon. A medianoche, el Faraón asustado gritó: '¡Váyanse ya!'. Salieron tan rápido que no hubo tiempo para que el pan leudara. ¡Era el comienzo de la gran libertad!",
        message: "La libertad es un regalo para usarlo sirviendo a Hashem.", 
        videoId: "FAgIYC7KhpU",
        keyword: { word: "Jeros", translation: "Libertad", icon: "🏃" },
        funFact: "La palabra Pésaj significa 'Pasar por alto', porque Hashem saltó las casas de los judíos.",
        quiz: [
            { question: "¿Qué comieron los judíos antes de salir?", options: ["Pastel", "Pan con miel", "Matzá", "Frutas"], correctAnswer: 2 },
            { question: "¿Cuántas plagas hubo en total?", options: ["5", "10", "7", "12"], correctAnswer: 1 },
            { question: "¿Qué plaga trajo oscuridad total?", options: ["La novena", "La primera", "La quinta", "La décima"], correctAnswer: 0 }
        ]
      },
      { 
        id: "p16", 
        name: "Beshalaj", 
        hebrewName: "בְּשַׁלַּח", 
        summary: "¡El mar se abre! Cruzamos el Iam Suf en seco y cantamos la Shirá.", 
        fullText: "El Faraón se arrepintió de dejar ir a los judíos y los persiguió con sus carros hasta el Mar Rojo. ¡El pueblo estaba atrapado! Pero Hashem le dijo a Moshé que levantara su vara. ¡El mar se partió en dos y los judíos cruzaron por tierra seca!\n\nAl otro lado, Miriam y las mujeres tocaron panderetas y bailaron de alegría cantando la 'Shirá'. En el desierto, Hashem les mandó el Maná, un pan del cielo que caía cada mañana. También les dio agua de una roca. El pueblo aprendió que Hashem siempre cuida de Sus hijos.",
        message: "Hashem hace milagros todos los días, solo hay que abrir los ojos.", 
        videoId: "AwKQLzKyW5s",
        keyword: { word: "Man", translation: "Maná", icon: "🥪" },
        funFact: "El Maná sabía a lo que cada persona más le gustaba: ¡podía saber a pizza o a helado!",
        quiz: [
            { question: "¿Qué objeto usó Moshé para abrir el mar?", options: ["Una espada", "Una vara", "Un libro", "Una llave"], correctAnswer: 1 },
            { question: "¿Qué instrumento tocó Miriam?", options: ["La flauta", "El arpa", "La pandereta", "El tambor"], correctAnswer: 2 },
            { question: "¿Cómo se llamaba el pan que caía del cielo?", options: ["Jalá", "Pita", "Maná", "Galleta"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p17", 
        name: "Itró", 
        hebrewName: "יִתְרוֹ", 
        summary: "Recibimos la Torá en el Monte Sinaí. ¡Escuchamos los 10 Mandamientos!", 
        fullText: "Itró, el suegro de Moshé, llegó al campamento y vio que Moshé trabajaba demasiado ayudando a todos. Le aconsejó nombrar jueces para que lo ayudaran. ¡Fue un gran consejo!\n\nLuego, el pueblo se preparó para el momento más importante de la historia. Llegaron al Monte Sinaí. Hubo truenos, relámpagos y el sonido de un Shofar muy fuerte. Hashem bajó sobre la montaña y nos dio los 10 Mandamientos: 'Yo soy Hashem tu Dios', 'Honra a tu padre y a tu madre', 'No robes'... Todo el pueblo dijo: '¡Haremos y escucharemos!'.",
        message: "La Torá es nuestro mapa para vivir una vida buena y feliz.", 
        videoId: "sHnaggaoroY",
        keyword: { word: "Mitzvá", translation: "Mandamiento / Conexión", icon: "✨" },
        funFact: "El Monte Sinaí era el más pequeño de todos, enseñándonos que Hashem ama la humildad.",
        quiz: [
            { question: "¿En qué montaña recibimos la Torá?", options: ["Monte Everest", "Monte Sinaí", "Monte Ararat", "Monte Hermón"], correctAnswer: 1 },
            { question: "¿Quién era Itró?", options: ["El hermano de Moshé", "El suegro de Moshé", "Un rey de Egipto", "Un pastor"], correctAnswer: 1 },
            { question: "¿Cuántos mandamientos principales escuchamos?", options: ["5", "10", "613", "1"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p18", 
        name: "Mishpatim", 
        hebrewName: "מִשְׁפָּטִים", 
        summary: "Leyes sobre cómo tratar a los demás: no lastimar, devolver cosas perdidas, ayudar.", 
        fullText: "Después de los grandes mandamientos, Hashem le dio a Moshé muchas leyes para la vida diaria llamadas 'Mishpatim'. Estas leyes nos enseñan a ser justos y buenos con todos.\n\nPor ejemplo: si encuentras algo que se le perdió a otra persona, debes devolvérselo. Si ves al animal de tu enemigo sufriendo, debes ayudarlo. También aprendemos a no decir mentiras y a tratar con mucho cariño a las personas que no tienen familia o que son extranjeras. ¡Ser santo significa ser una excelente persona con los demás!",
        message: "Ser buena persona es tan importante como rezar.", 
        videoId: "8UBu-rCS5sA",
        keyword: { word: "Tzedek", translation: "Justicia", icon: "⚖️" },
        funFact: "Esta Parashá tiene 53 mitzvot, ¡muchísimas formas de hacer el bien!",
        quiz: [
            { question: "¿Qué debemos hacer si encontramos algo perdido?", options: ["Quedárnoslo", "Esconderlo", "Devolverlo al dueño", "Ignorarlo"], correctAnswer: 2 },
            { question: "¿Cómo debemos tratar a los extranjeros?", options: ["Con miedo", "Con amor y respeto", "Sin hablarles", "Ignorándolos"], correctAnswer: 1 },
            { question: "¿Qué significa ser justo?", options: ["Hacer lo correcto siempre", "Ganar todos los juegos", "Ser el más fuerte", "Tener más juguetes"], correctAnswer: 0 }
        ]
      },
      { 
        id: "p19", 
        name: "Terumá", 
        hebrewName: "תְּרוּמָה", 
        summary: "Construimos el Mishkán (Tabernáculo) para que Hashem habite entre nosotros.", 
        fullText: "Hashem le dijo a Moshé: 'Dile a los hijos de Israel que traigan una ofrenda (Terumá) de corazón'. Todos trajeron cosas hermosas: oro, plata, telas de colores azul y púrpura, y madera de acacia.\n\nCon estos materiales comenzaron a construir el Mishkán, que era como una tienda sagrada que viajaría con ellos por el desierto. Adentro pusieron el Arca de la Alianza con las tablas de la Torá, que tenía dos querubines (ángeles con cara de niños) de oro encima. ¡Hashem quería tener un lugar especial para estar cerca de Su pueblo!",
        message: "Cada uno pone su granito de arena para construir cosas sagradas.", 
        videoId: "VdY9Giv2laY",
        keyword: { word: "Terumá", translation: "Ofrenda", icon: "🎁" },
        funFact: "Los querubines tenían caras de niños para recordarnos que la Torá comienza con el aprendizaje de los más pequeños.",
        quiz: [
            { question: "¿Qué significa Terumá?", options: ["Cantar", "Regalo u Ofrenda", "Viajar", "Dormir"], correctAnswer: 1 },
            { question: "¿Qué metal brillante trajeron para el Mishkán?", options: ["Hierro", "Oro", "Plomo", "Aluminio"], correctAnswer: 1 },
            { question: "¿Qué había encima del Arca?", options: ["Una corona", "Dos querubines", "Una vela", "Flores"], correctAnswer: 1 }
        ]
      },
      { 
        id: "p20", 
        name: "Tetzavé", 
        hebrewName: "תְּצַוֶּה", 
        summary: "La ropa especial de los Kohanim y el encendido de la Menorá.", 
        fullText: "Hashem dio instrucciones sobre el aceite de oliva puro que debía usarse para mantener encendida la Menorá siempre. Luego, describió la ropa tan especial que debían usar Aharón y sus hijos para trabajar en el Mishkán.\n\nAharón, como Sumo Sacerdote, usaba un pectoral con 12 piedras preciosas, una por cada tribu de Israel. También usaba una placa de oro en la frente que decía 'Santo para Hashem'. Esta ropa era para dar honor y belleza al servicio divino. Es la única parashá donde no aparece el nombre de Moshé, para mostrar su gran humildad.",
        message: "Nuestra ropa y comportamiento muestran respeto por quienes somos.", 
        videoId: "g2akTy5BB0Q",
        keyword: { word: "Kohén", translation: "Sacerdote", icon: "⛪" },
        funFact: "El Pectoral de Aharón se llamaba 'Joshen' y las piedras brillaban cuando Hashem respondía una pregunta.",
        quiz: [
            { question: "¿Cuántas piedras tenía el pectoral de Aharón?", options: ["5", "10", "12", "7"], correctAnswer: 2 },
            { question: "¿Qué tipo de aceite se usaba para la Menorá?", options: ["Aceite de maíz", "Aceite de oliva", "Aceite de coco", "Aceite de girasol"], correctAnswer: 1 },
            { question: "¿De qué metal era la placa que Aharón usaba en la frente?", options: ["Plata", "Cobre", "Oro", "Bronce"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p21", 
        name: "Ki Tisá", 
        hebrewName: "כִּי תִשָּׂא", 
        summary: "El error del Becerro de Oro y el perdón de Hashem con las segundas tablas.", 
        fullText: "Moshé tardaba en bajar del Monte Sinaí y el pueblo se puso muy nervioso. Lamentablemente, hicieron un becerro de oro para adorarlo. Cuando Moshé bajó y vio esto, se puso tan triste que rompió las tablas de piedra.\n\nPero Moshé no se rindió. Volvió a subir a la montaña y le pidió a Hashem con todo su corazón que perdonara al pueblo. Hashem, que es muy misericordioso, perdonó a Israel. Moshé bajó con unas segundas tablas nuevas y su cara brillaba con una luz especial porque había estado hablando con Hashem.",
        message: "Siempre hay una segunda oportunidad si pedimos perdón de corazón.", 
        videoId: "Bd4lU_MYILU",
        keyword: { word: "Slijá", translation: "Perdón", icon: "❤️" },
        funFact: "El rostro de Moshé brillaba tanto que tuvo que ponerse un velo para que la gente pudiera mirarlo.",
        quiz: [
            { question: "¿Qué animal de oro hizo el pueblo?", options: ["Un león", "Un cordero", "Un becerro", "Un águila"], correctAnswer: 2 },
            { question: "¿Qué hizo Moshé con las primeras tablas?", options: ["Las guardó", "Las regaló", "Las rompió", "Las leyó"], correctAnswer: 2 },
            { question: "¿Cómo perdonó Hashem al pueblo?", options: ["Con segundas tablas", "Con una fiesta", "Con lluvia", "Con comida"], correctAnswer: 0 }
        ]
      },
      { 
        id: "p22", 
        name: "Vaiakel", 
        hebrewName: "וַיַּקְהֵל", 
        summary: "El pueblo se reúne para dar regalos para el Mishkán.", 
        fullText: "Moshé reunió (Vaiakel) a todo el pueblo. Primero les recordó lo importante que es descansar en Shabat. Luego les pidió materiales para terminar el Mishkán.\n\n¡Fue increíble! Hombres y mujeres trajeron tantas joyas, telas preciosas y madera que Moshé tuvo que decir: '¡Paren, ya tenemos suficiente!'. Los artistas sabios, Betzalel y Oholiav, empezaron a construir todo con mucho detalle. Esta parashá nos enseña que cuando trabajamos juntos con alegría, podemos hacer cosas maravillosas.",
        message: "Dar tzedaká y compartir nos llena de alegría.", 
        videoId: "DfeuzcRBfto",
        keyword: { word: "Nedavá", translation: "Donación voluntaria", icon: "🤝" },
        funFact: "Betzalel tenía solo 13 años pero era el arquitecto más sabio porque Hashem le dio un espíritu especial.",
        quiz: [
            { question: "¿Qué significa Vaiakel?", options: ["Viajar", "Reunir", "Cantar", "Estudiar"], correctAnswer: 1 },
            { question: "¿Qué día recordó Moshé que debemos descansar?", options: ["Lunes", "Viernes", "Shabat", "Domingo"], correctAnswer: 2 },
            { question: "¿Quién fue el arquitecto principal?", options: ["Yosef", "Moshé", "Betzalel", "Aharón"], correctAnswer: 2 }
        ]
      },
      { 
        id: "p23", 
        name: "Pekudéi", 
        hebrewName: "פְקוּדֵי", 
        summary: "El Mishkán está terminado. La nube de Hashem baja y llena el lugar.", 
        fullText: "En esta parashá, Moshé hace las cuentas (Pekudéi) de todo el oro, plata y cobre que se usó, para que todos vieran que se usó honestamente. Revisaron que cada parte del Mishkán estuviera perfecta.\n\nFinalmente, armaron todo el Santuario. En ese momento, una Nube de Gloria bajó del cielo y llenó el Mishkán. ¡Hashem aceptó Su nueva casa! Cuando la nube se levantaba, el pueblo viajaba; cuando se quedaba quieta, ellos acampaban. Así termina el libro de Shemot. ¡Jazak, Jazak, Venitchazek!",
        message: "Cuando hacemos las cosas bien y con amor, Hashem está con nosotros.", 
        videoId: "yk8hXQzolOM",
        keyword: { word: "Mishkán", translation: "Santuario / Morada", icon: "🏕️" },
        funFact: "El libro de Shemot termina con el pueblo de Israel unido y con la presencia de Hashem guiándolos.",
        quiz: [
            { question: "¿Qué llenó el Mishkán al terminar?", options: ["Agua", "Fuego", "La Nube de Gloria", "Gente"], correctAnswer: 2 },
            { question: "¿Qué hizo Moshé con los materiales?", options: ["Los tiró", "Hizo las cuentas (inventario)", "Los escondió", "Los vendió"], correctAnswer: 1 },
            { question: "¿Qué gritamos al terminar un libro de la Torá?", options: ["¡Adiós!", "¡Jazak, Jazak, Venitchazek!", "¡Bravo!", "¡Hasta luego!"], correctAnswer: 1 }
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
       { 
         id: "p24", 
         name: "Vayikrá", 
         hebrewName: "וַיִּקְרָא", 
         summary: "¡Hashem llama! Aprendemos cómo acercarnos a Él a través de los Korbanot (ofrendas) en el Mishkán.", 
         fullText: "Hashem llamó (Vayikrá) a Moshé desde la Tienda del Encuentro. Quería enseñarle cómo el pueblo podía acercarse a Su presencia. El libro de Vayikrá es el libro de la santidad.\n\nAprendemos sobre los Korbanot, que no son solo sacrificios, sino formas de 'acercarse'. Había ofrendas para decir gracias, para pedir perdón o para celebrar. Lo más importante no era el regalo, sino el corazón de quien lo traía. Incluso un poquito de harina ofrecida con amor valía tanto como una ofrenda grande. Todos los sacrificios debían tener sal, símbolo de un pacto que nunca se echa a perder.", 
         message: "Hoy no tenemos ofrendas físicas, pero nuestros rezos sinceros son el mejor regalo para Hashem.", 
         videoId: "NwwUrSSDRvQ",
         keyword: { word: "Korbán", translation: "Acercamiento", icon: "🔥" },
         funFact: "La palabra Vayikrá termina con una letra 'Alef' pequeñita, enseñándonos la gran humildad de Moshé.",
         quiz: [
            { question: "¿Qué significa la palabra Vayikrá?", options: ["Y escuchó", "Y llamó", "Y caminó", "Y leyó"], correctAnswer: 1 },
            { question: "¿Qué ingrediente debían tener todos los sacrificios?", options: ["Azúcar", "Pimienta", "Sal", "Aceite"], correctAnswer: 2 },
            { question: "¿De qué trata principalmente el libro de Vayikrá?", options: ["De la salida de Egipto", "De la Creación", "De la Santidad y el servicio", "De los viajes"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p25", 
         name: "Tzav", 
         hebrewName: "צַו", 
         summary: "Instrucciones especiales para los Kohanim. ¡El fuego del altar nunca debe apagarse!", 
         fullText: "Hashem le ordena (Tzav) a Moshé dar instrucciones precisas a Aharón y sus hijos, los Kohanim. Una de las reglas más hermosas era sobre el fuego del altar: 'Un fuego continuo arderá en el altar; no se apagará'.\n\nEsto nos enseña que nuestra conexión con Hashem y nuestro entusiasmo por hacer el bien deben ser como ese fuego: constantes y brillantes, incluso cuando dormimos o estamos cansados. También aprendemos sobre las vestiduras de los sacerdotes y cómo se preparaban para su trabajo sagrado durante siete días.", 
         message: "Mantén encendida la chispita de amor por Hashem en tu corazón todos los días.", 
         videoId: "1mDsNbou-Eg",
         keyword: { word: "Esh", translation: "Fuego", icon: "🔥" },
         funFact: "Los Kohanim trabajaban descalzos en el Mishkán para sentir la santidad del suelo.",
         quiz: [
            { question: "¿Qué debía pasar con el fuego del altar?", options: ["Apagarse de noche", "Arder continuamente", "Usarse solo en Shabat", "Ser de colores"], correctAnswer: 1 },
            { question: "¿Quiénes eran los ayudantes especiales en el Mishkán?", options: ["Los reyes", "Los Kohanim", "Los soldados", "Los pastores"], correctAnswer: 1 },
            { question: "¿Cuántos días duró la preparación de los sacerdotes?", options: ["1 día", "7 días", "40 días", "12 días"], correctAnswer: 1 }
        ]
       },
       { 
         id: "p26", 
         name: "Sheminí", 
         hebrewName: "שְּׁמִינִי", 
         summary: "El octavo día de inauguración. Hashem nos enseña qué animales son Kasher para nosotros.", 
         fullText: "Llegó el octavo (Sheminí) día, el gran momento de inaugurar el Mishkán. Hubo mucha alegría, pero también un momento triste cuando los hijos de Aharón trajeron un fuego que no se les pidió. Esto nos enseña a seguir las reglas con cuidado.\n\nLuego, Hashem nos dio las leyes de la alimentación (Kashrut). Para que un animal terrestre sea Kasher, debe tener pezuña partida y rumiar (como la vaca). Los peces deben tener aletas y escamas. Esto nos ayuda a recordar que somos un pueblo santo y que lo que comemos también afecta nuestra alma.", 
         message: "Cuidar lo que comemos nos ayuda a mantener nuestra alma limpia y conectada con Hashem.", 
         videoId: "9Nhcw27C7fU",
         keyword: { word: "Kasher", translation: "Apto / Correcto", icon: "🐟" },
         funFact: "Los peces Kasher son los únicos que pueden vivir en aguas muy movidas gracias a sus aletas y escamas.",
         quiz: [
            { question: "¿Qué significa Sheminí?", options: ["Séptimo", "Octavo", "Primero", "Último"], correctAnswer: 1 },
            { question: "¿Qué dos cosas debe tener un animal para ser Kasher?", options: ["Alas y pico", "Aletas y escamas", "Pezuña partida y rumiar", "Cola larga y manchas"], correctAnswer: 2 },
            { question: "¿Qué deben tener los peces para ser aptos para comer?", options: ["Dientes", "Colores brillantes", "Aletas y escamas", "Piel lisa"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p27", 
         name: "Tazría", 
         hebrewName: "תַזְרִיעַ", 
         summary: "Leyes de pureza y la enfermedad espiritual llamada Tzaráat, que viene por hablar mal.", 
         fullText: "Esta parashá habla sobre la pureza y el milagro del nacimiento. Luego, nos cuenta sobre la Tzaráat. No era una enfermedad médica de la piel, sino una señal espiritual. Si alguien hablaba mal de otros (Lashón Hará) o era muy orgulloso, le salían manchas blancas en la piel.\n\nLa persona tenía que ir al Cohén (¡no al médico!). El Cohén lo ayudaba a entender que debía mejorar su forma de hablar. Esto nos recuerda que nuestras palabras tienen mucho poder: pueden construir o pueden destruir. ¡Usa tus palabras para decir cosas bonitas!", 
         message: "¡Hablemos bonito de los demás! El cuidado de nuestras palabras es salud para nuestra alma.", 
         videoId: "-ORflM1R4H4",
         keyword: { word: "Tahor", translation: "Puro", icon: "✨" },
         funFact: "En los tiempos de la Torá, si alguien hablaba mal, hasta las paredes de su casa podían mancharse para avisarle.",
         quiz: [
            { question: "¿Por qué salía la Tzaráat?", options: ["Por no bañarse", "Por hablar mal de otros", "Por comer mucho", "Por correr rápido"], correctAnswer: 1 },
            { question: "¿A quién debía ir a ver la persona con manchas?", options: ["Al médico", "Al zapatero", "Al Cohén", "Al rey"], correctAnswer: 2 },
            { question: "¿Qué órgano de nuestro cuerpo debemos cuidar en esta parashá?", options: ["Los pies", "La lengua", "Las manos", "El cabello"], correctAnswer: 1 }
        ]
       },
       { 
         id: "p28", 
         name: "Metzorá", 
         hebrewName: "מְּצֹרָע", 
         summary: "Cómo se purificaba la persona después de aprender su lección y ser humilde.", 
         fullText: "Cuando la persona que tuvo Tzaráat se curaba, el Cohén hacía una ceremonia especial para que pudiera volver al campamento. Usaba dos pájaros, madera de cedro (un árbol muy alto) e hisopo (una planta muy bajita).\n\n¿Por qué? El cedro representaba el orgullo del que se cree superior, y el hisopo representaba la humildad que debía aprender. La ceremonia nos enseña que para estar bien con los demás y con Hashem, debemos ser humildes y reconocer nuestros errores. Después, la persona se sumergía en la Mikve y quedaba pura de nuevo.", 
         message: "La humildad es la medicina que cura el orgullo y nos acerca a los demás.", 
         videoId: "7LN0uQYABmU",
         keyword: { word: "Teshuvá", translation: "Retorno / Mejora", icon: "🔄" },
         funFact: "Los pájaros se usaban porque el que chismea pía mucho como un pajarito sin pensar lo que dice.",
         quiz: [
            { question: "¿Qué planta representaba la humildad?", options: ["El cedro", "El hisopo", "La rosa", "El pino"], correctAnswer: 1 },
            { question: "¿Qué árbol representaba el orgullo?", options: ["El cedro", "El hisopo", "El olivo", "La palmera"], correctAnswer: 0 },
            { question: "¿Cómo se llama el baño ritual para purificarse?", options: ["Piscina", "Río", "Mikve", "Ducha"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p29", 
         name: "Ajaré Mot", 
         hebrewName: "אַחֲרֵי מוֹת", 
         summary: "El servicio de Yom Kipur. El Cohen Gadol entra al lugar más sagrado.", 
         fullText: "Después de la muerte de los hijos de Aharón, Hashem advirtió que nadie podía entrar al lugar más santo (Kodesh HaKodashim) en cualquier momento. Solo el Cohen Gadol, una vez al año, en el día de Yom Kipur.\n\nEse día es el más solemne del año. El Cohen Gadol se quitaba sus ropas de oro y se vestía con ropas blancas de lino, sencillas como las de un ángel. Pedía perdón por él, por su familia y por todo el pueblo de Israel. Es un día para dejar atrás lo malo y empezar de nuevo con el corazón limpio.", 
         message: "Siempre tenemos la oportunidad de pedir perdón y comenzar una nueva página en nuestra vida.", 
         videoId: "",
         keyword: { word: "Kipur", translation: "Expiación / Perdón", icon: "⚖️" },
         funFact: "En Yom Kipur, el Cohen Gadol cambiaba su ropa 5 veces para mostrar respeto por cada parte del servicio.",
         quiz: [
            { question: "¿Qué día entraba el Cohen Gadol al lugar más santo?", options: ["Pesaj", "Yom Kipur", "Shabat", "Purim"], correctAnswer: 1 },
            { question: "¿De qué color era la ropa especial de ese día?", options: ["Oro", "Azul", "Blanco", "Rojo"], correctAnswer: 2 },
            { question: "¿Quién entraba al Kodesh HaKodashim?", options: ["Cualquier persona", "El Rey", "El Cohen Gadol", "Moshé"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p30", 
         name: "Kedoshim", 
         hebrewName: "קְדֹשִׁים", 
         summary: "¡Sean santos! Hashem nos da la regla de oro: 'Ama a tu prójimo como a ti mismo'.", 
         fullText: "Hashem le dijo a Moshé: 'Dile a todo el pueblo: ¡Sean santos (Kedoshim)!'. Pero, ¿cómo se es santo? Hashem nos dio una lista: respetando a papá y mamá, dejando comida de la cosecha para los pobres, no robando, no mintiendo y no guardando rencor.\n\nLa mitzvá más famosa de esta parashá es: 'Veahavta LeReaja Kamoja' (Amarás a tu prójimo como a ti mismo). Si tratamos a los demás con el mismo amor y cuidado con el que nos tratamos a nosotros, ¡estamos haciendo el mundo un lugar sagrado!", 
         message: "La verdadera santidad se demuestra en cómo tratamos a las personas aquí en la tierra.", 
         videoId: "",
         keyword: { word: "Kadosh", translation: "Santo / Especial", icon: "🌟" },
         funFact: "La frase 'Amar al prójimo' está justo en el centro de toda la Torá, ¡porque es el corazón de todo!",
         quiz: [
            { question: "¿Cuál es el gran principio de la Torá?", options: ["Comer rico", "Amar al prójimo como a ti mismo", "Dormir mucho", "Correr rápido"], correctAnswer: 1 },
            { question: "¿Qué significa ser Kedoshim?", options: ["Ser aburrido", "Ser santos y especiales", "Ser invisibles", "Vivir en una cueva"], correctAnswer: 1 },
            { question: "¿A quiénes debemos respetar según esta parashá?", options: ["Solo a los amigos", "A papá y mamá", "Solo a los maestros", "A nadie"], correctAnswer: 1 }
        ]
       },
       { 
         id: "p31", 
         name: "Emor", 
         hebrewName: "אֱמֹר", 
         summary: "Las fiestas de Hashem. Santificamos el tiempo celebrando Shabat y las festividades.", 
         fullText: "Emor significa 'Diles'. Hashem nos enseña que el tiempo es un regalo y hay días especiales para estar con Él. En esta parashá aprendemos el calendario de las fiestas: el Shabat semanal, Pesaj (libertad), Shavuot (Torá), Rosh Hashaná (año nuevo), Yom Kipur (perdón) y Sucot (alegría).\n\nTambién aprendemos sobre la Menorá que debía brillar siempre y los panes especiales que se ponían en la mesa del Mishkán. Cada fiesta tiene su sabor y su enseñanza especial para nosotros.", 
         message: "El tiempo es sagrado, celebrémoslo con alegría y en familia.", 
         videoId: "",
         keyword: { word: "Moed", translation: "Fiesta / Cita", icon: "📅" },
         funFact: "En esta parashá aprendemos a contar los 49 días del Omer, ¡como una cuenta regresiva para recibir la Torá!",
         quiz: [
            { question: "¿Qué objeto debía estar siempre encendido?", options: ["La estufa", "La Menorá", "La linterna", "El sol"], correctAnswer: 1 },
            { question: "¿Qué significa el nombre de la parashá 'Emor'?", options: ["Camina", "Diles", "Escucha", "Salta"], correctAnswer: 1 },
            { question: "¿Cuántos panes se ponían en la mesa cada Shabat?", options: ["2", "7", "12", "10"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p32", 
         name: "Behar", 
         hebrewName: "בְּהַר", 
         summary: "La tierra también descansa. Hashem nos enseña sobre la Shemitá cada 7 años.", 
         fullText: "En el Monte (Behar) Sinaí, Hashem dio una ley increíble: así como nosotros descansamos en Shabat, la tierra de Israel debe descansar cada siete años. Esto se llama Shemitá. Durante ese año, los agricultores no siembran ni cosechan.\n\nTodo lo que crece solito es para compartir con todos: pobres, ricos e incluso los animales. Esto nos enseña a confiar en Hashem y a recordar que la tierra le pertenece a Él, nosotros solo somos sus invitados y cuidadores.", 
         message: "Confía en Hashem y comparte lo que tienes, ¡Él siempre proveerá lo necesario!", 
         videoId: "",
         keyword: { word: "Shemitá", translation: "Descanso de la tierra", icon: "🌾" },
         funFact: "¡Hashem promete que en el sexto año la cosecha será triple para que alcance para todos durante el descanso!",
         quiz: [
            { question: "¿Cada cuántos años descansa la tierra de Israel?", options: ["Cada 2 años", "Cada 7 años", "Cada 10 años", "Nunca"], correctAnswer: 1 },
            { question: "¿Cómo se llama el año de descanso de la tierra?", options: ["Shabat", "Shemitá", "Pesaj", "Jánuca"], correctAnswer: 1 },
            { question: "¿Para quién es la comida que crece en Shemitá?", options: ["Solo el dueño", "Nadie", "Para todos (pobres y animales también)", "Solo los reyes"], correctAnswer: 2 }
        ]
       },
       { 
         id: "p33", 
         name: "Bejukotai", 
         hebrewName: "בְּחֻקֹּתַי", 
         summary: "Bendiciones y promesas. Si seguimos el camino de la Torá, ¡el mundo será maravilloso!", 
         fullText: "Al final del libro de Vayikrá, Hashem nos da una hermosa promesa: Si caminamos en Sus leyes (Bejukotai), Él nos dará lluvias a tiempo para que las frutas sean dulces, paz en nuestras casas para que durmamos sin miedo y mucha alegría.\n\nAl terminar de leer este libro, todos nos ponemos de pie y gritamos con mucha fuerza: '¡Jazak, Jazak, Venitchazek!'. Significa que nos hacemos fuertes para empezar el siguiente libro con más ganas de aprender.", 
         message: "Hacer lo correcto trae bendición para nosotros y para todo el mundo.", 
         videoId: "",
         keyword: { word: "Berajá", translation: "Bendición", icon: "🌧️" },
         funFact: "Al terminar el libro de Vayikrá, habremos aprendido casi todas las leyes de cómo vivir como un pueblo santo.",
         quiz: [
            { question: "¿Qué promete Hashem si seguimos la Torá?", options: ["Paz y lluvia", "Mucho frío", "Solo juguetes", "Oscuridad"], correctAnswer: 0 },
            { question: "¿Qué libro de la Torá terminamos hoy?", options: ["Bereshit", "Shemot", "Vayikrá", "Bamidbar"], correctAnswer: 2 },
            { question: "¿Qué decimos al terminar un libro de la Torá?", options: ["¡Adiós!", "¡Jazak, Jazak, Venitchazek!", "¡Bravo!", "¡Hasta luego!"], correctAnswer: 1 }
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
