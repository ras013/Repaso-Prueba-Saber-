import React from 'react';

interface HeaderProps {
  answeredCount: number;
  totalQuestions: number;
}

export default function Header({ answeredCount, totalQuestions }: HeaderProps) {
  return (
    <header className="bg-white py-10 px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
            Repaso para la prueba saber <br />
            <span className="text-blue-600">del 1 periodo, cálculo.</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Repasa para la prueba Saber de Matemáticas: resuelve la pregunta eligiendo una de las opciones, y luego analiza tanto la respuesta como la explicación proporcionada.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
          <div className="text-blue-600 text-4xl font-black mb-1">
            {answeredCount}/{totalQuestions}
          </div>
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">
            Preguntas Resueltas
          </div>
        </div>
      </div>
    </header>
  );
}
