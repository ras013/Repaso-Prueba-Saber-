/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionCard from './components/QuestionCard';
import { questions } from './data/questions';

export default function App() {
  // Store answers as a map of question index -> selected option index
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = useMemo(() => {
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correcta) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / (answeredCount || 1)) * 100);
    const totalScorePercentage = Math.round((correctCount / questions.length) * 100);
    const progressPercentage = (answeredCount / questions.length) * 100;

    return { answeredCount, scorePercentage, totalScorePercentage, progressPercentage };
  }, [userAnswers]);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <Navbar 
        scorePercentage={stats.totalScorePercentage} 
        progressPercentage={stats.progressPercentage} 
      />
      
      <Header 
        answeredCount={stats.answeredCount} 
        totalQuestions={questions.length} 
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {questions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx}
              selectedAnswer={userAnswers[idx] ?? null}
              onSelect={(optIdx) => handleSelectAnswer(idx, optIdx)}
            />
          ))}
        </div>
      </main>

      <Footer onScrollTop={scrollToTop} />
    </div>
  );
}
