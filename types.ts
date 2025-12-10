
export enum View {
  HOME = 'HOME',
  ALEFBET = 'ALEFBET', // Nueva vista para aprender hebreo
  QUIZ = 'QUIZ',
  PARASHA = 'PARASHA',
  HOLIDAYS = 'HOLIDAYS',
  VIDEOS = 'VIDEOS',
  CHARACTERS = 'CHARACTERS',
}

// --- TIPOS DEL QUIZ GLOBAL ---
export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizData {
  title: string;
  questions: QuizQuestion[];
}

// --- TIPOS DE PERSONAJES ---
export type PuppetCharacter = 'Yosef' | 'Benny' | 'Aharón' | 'Ezra' | 'Avraham' | 'Keter' | 'Doctor' | 'Arush';

// --- TIPOS DE LA BASE DE DATOS DE PARASHÁ ---
export interface ParashaQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
}

export interface ParashaContent {
  id: string; // "bereshit", "noaj"
  name: string; // "Bereshit", "Nóaj"
  hebrewName?: string;
  summary: string; // Resumen infantil corto
  fullText?: string; // Texto narrativo largo para leer
  message: string; // Mensaje de Avraham/Valores
  videoId: string; // ID de YouTube
  activity?: string; // Reflexión filosófica/Middot
  
  // Nuevos campos inspirados en el sitio antiguo
  quiz?: ParashaQuizQuestion[]; 
}

export interface TorahBook {
  id: string; // "bereshit"
  name: string; // "Bereshit (Génesis)"
  icon: string;
  color: string;
  parashot: ParashaContent[];
}

// --- TIPOS DE STORYTIME ---
export interface Sticker {
  id: number;
  type: 'character' | 'prop';
  content: string;
  x: number;
  y: number;
  scale: number;
}