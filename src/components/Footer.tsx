import React from 'react';

interface FooterProps {
  onScrollTop: () => void;
}

export default function Footer({ onScrollTop }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 mb-4 italic text-sm">
          "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
        </p>
        <button
          onClick={onScrollTop}
          className="bg-slate-800 hover:bg-slate-700 px-6 py-2 rounded-full transition-colors text-sm cursor-pointer"
        >
          Volver arriba
        </button>
      </div>
    </footer>
  );
}
