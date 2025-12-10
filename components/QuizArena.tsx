import React, { useState } from 'react';
import { Button } from './Button';
import { generateQuiz } from '../services/geminiService';
import { QuizData } from '../types';

interface QuizArenaProps {
  onBack: () => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({ onBack }) => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  // Setup
  const [topic, setTopic] = useState("");

  const startQuiz = async () => {
    if (!topic) return;
    setLoading(true);
    setGameFinished(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    const data = await generateQuiz(topic);
    setQuizData(data);
    setLoading(false);
  };

  const handleOptionClick = (index: number) => {
    if (showFeedback) return; // Prevent clicking during feedback
    setSelectedOption(index);
    setShowFeedback(true);

    if (index === quizData?.questions[currentQuestionIndex].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);

    if (quizData && currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  if (!quizData && !gameFinished) {
    return (
      <div className="flex flex-col items-center max-w-3xl mx-auto w-full p-4">
        <div className="w-full flex justify-start mb-6">
          <Button onClick={onBack} variant="outline" size="sm">← Volver</Button>
        </div>
        <div className="bg-torah-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-torah-blue-light w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-torah-blue-light"></div>
          
          <h2 className="text-5xl font-display font-bold text-torah-blue-deep mb-6">Trivia de la Torá 🧠</h2>
          <p className="text-xl text-gray-600 mb-10 font-body">¿Cuánto sabes sobre nuestra historia y valores?</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              'Parashá Semanal', 
              'Fiestas Judías', 
              'Personajes Bíblicos', 
              'Valores (Middot)', 
              'Israel', 
              'Shabat'
            ].map(t => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`p-4 rounded-2xl text-lg font-display font-bold transition-all transform ${
                  topic === t
                  ? 'bg-torah-blue-light text-white scale-105 shadow-lg ring-4 ring-blue-200'
                  : 'bg-blue-50 text-torah-blue-deep hover:bg-blue-100 hover:scale-105'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <Button
            onClick={startQuiz}
            disabled={loading || !topic}
            size="lg"
            className="w-full text-xl py-4 shadow-xl"
            variant="primary"
          >
            {loading ? 'Benny está buscando preguntas...' : '🚀 ¡Empezar Reto!'}
          </Button>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="flex flex-col items-center max-w-2xl mx-auto w-full p-4">
        <div className="bg-torah-white p-12 rounded-[3rem] shadow-2xl border-8 border-torah-gold w-full text-center animate-pop">
          <h2 className="text-6xl font-display font-extrabold text-torah-blue-deep mb-6">🎉 ¡Mazel Tov! 🎉</h2>
          <p className="text-3xl font-display font-bold text-gray-700 mb-6">
            Tu Puntuación: <br/><span className="text-torah-gold text-6xl">{score}</span> / {quizData?.questions.length}
          </p>
          <div className="mb-10 text-8xl animate-bounce-slow">
            {score === quizData?.questions.length ? '🕍' : score > 0 ? '⭐' : '🕯️'}
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => setQuizData(null)} variant="secondary">Jugar de Nuevo</Button>
            <Button onClick={onBack} variant="outline">Ir al Inicio</Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizData?.questions[currentQuestionIndex];
  
  if (!currentQ) return null;

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto w-full p-4">
      <div className="w-full flex justify-between items-center mb-6">
          <Button onClick={() => setQuizData(null)} variant="outline" size="sm">Salir</Button>
          <div className="bg-white px-6 py-2 rounded-full font-display font-bold text-torah-blue-deep shadow-md border-2 border-torah-blue-light">
            Pregunta {currentQuestionIndex + 1} / {quizData?.questions.length}
          </div>
      </div>

      <div className="bg-torah-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border-b-8 border-r-8 border-torah-blue-light w-full relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-10 text-center leading-tight">
          {currentQ?.question}
        </h3>

        <div className="grid grid-cols-1 gap-5 mb-8">
          {currentQ?.options.map((opt, idx) => {
            let btnClass = "bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 text-gray-700 shadow-sm";
            if (showFeedback) {
              if (idx === currentQ.correctIndex) btnClass = "bg-green-100 border-green-500 text-green-800 scale-105 shadow-md";
              else if (idx === selectedOption) btnClass = "bg-red-100 border-red-500 text-red-800 opacity-80";
              else btnClass = "opacity-50 bg-gray-100 border-gray-200";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                disabled={showFeedback}
                className={`w-full p-5 rounded-2xl text-left text-xl font-bold font-body transition-all transform active:scale-95 ${btnClass}`}
              >
                <span className="inline-block w-10 h-10 bg-white rounded-full text-center leading-9 mr-4 text-base border-2 shadow-sm text-torah-blue-deep font-display">
                  {['א', 'ב', 'ג', 'ד'][idx]}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-400 mb-6 animate-pop shadow-md">
            <p className="font-display font-bold text-2xl text-gray-800 mb-2">
              {selectedOption === currentQ.correctIndex ? "¡Correcto! 🌟" : "¡Casi! 😅"}
            </p>
            <p className="text-lg text-gray-700 font-body">{currentQ?.explanation}</p>
          </div>
        )}

        {showFeedback && (
          <div className="flex justify-end">
            <Button onClick={nextQuestion} variant="primary" size="lg" className="shadow-lg">Siguiente →</Button>
          </div>
        )}
      </div>
    </div>
  );
};