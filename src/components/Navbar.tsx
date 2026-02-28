import React from 'react';
import { Calculator } from 'lucide-react';

interface NavbarProps {
  scorePercentage: number;
  progressPercentage: number;
}

export default function Navbar({ scorePercentage, progressPercentage }: NavbarProps) {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Calculator size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-blue-900">
            Repaso <span className="text-blue-500">Cálculo</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className="hidden md:inline text-gray-400">EFECTIVIDAD:</span>
          <span className="text-2xl text-blue-600">{scorePercentage}%</span>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-1.5">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </nav>
  );
}
