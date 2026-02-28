import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedAnswer: number | null;
  onSelect: (answerIndex: number) => void;
}

type TabType = 'viz' | 'sol';

const QuestionCard: React.FC<QuestionCardProps> = ({ question, index, selectedAnswer, onSelect }) => {
  const [activeTab, setActiveTab] = useState<TabType>('viz');
  const [isCorrectAnim, setIsCorrectAnim] = useState(false);

  useEffect(() => {
    if (selectedAnswer !== null) {
      // Auto switch to explanation on answer, similar to the provided code
      const timer = setTimeout(() => setActiveTab('sol'), 300);
      
      if (selectedAnswer === question.correcta) {
        setIsCorrectAnim(true);
        setTimeout(() => setIsCorrectAnim(false), 500);
      }
      
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, question.correcta]);

  const getTabButtonClass = (tab: TabType) => {
    const baseClass = "flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer";
    if (activeTab === tab) {
      return `${baseClass} bg-blue-600 text-white shadow-lg shadow-blue-200`;
    }
    return `${baseClass} text-slate-400 hover:text-blue-600`;
  };

  return (
    <motion.div 
      className={`bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden ${isCorrectAnim ? 'animate-[celebrate_0.5s_ease]' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest uppercase italic">
            Matemáticas
          </span>
          <span className="text-gray-300 font-bold text-sm">
            / {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-snug">
          {question.enun}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {question.opts.map((opt, oIdx) => {
              let stateClass = "border-gray-100 bg-white hover:border-blue-300 hover:shadow-md";
              let iconClass = "border-gray-100 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600";
              let iconContent = <span className="font-black text-xs">{String.fromCharCode(65 + oIdx)}</span>;

              if (selectedAnswer !== null) {
                if (oIdx === question.correcta) {
                  stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
                  iconClass = "bg-emerald-500 border-emerald-500 text-white";
                  iconContent = <Check size={12} strokeWidth={4} />;
                } else if (oIdx === selectedAnswer) {
                  stateClass = "border-rose-400 bg-rose-50 text-rose-900";
                  iconClass = "bg-rose-500 border-rose-500 text-white";
                  iconContent = <X size={12} strokeWidth={4} />;
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => onSelect(oIdx)}
                  disabled={selectedAnswer !== null}
                  className={`group w-full flex items-center p-4 border-2 rounded-2xl transition-all text-left ${stateClass}`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${iconClass}`}>
                    {iconContent}
                  </div>
                  <span className="font-bold text-sm">{opt}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <div className="flex gap-2 mb-6 bg-white p-1 rounded-2xl shadow-sm">
              <button onClick={() => setActiveTab('viz')} className={getTabButtonClass('viz')}>
                VISUAL
              </button>
              <button onClick={() => setActiveTab('sol')} className={getTabButtonClass('sol')}>
                EXPLICACIÓN
              </button>
            </div>

            <div className="min-h-[150px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab === 'viz' && (
                  <motion.div
                    key="viz"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full text-center"
                  >
                    {question.dibujo ? (
                      <div dangerouslySetInnerHTML={{ __html: question.dibujo }} />
                    ) : (
                      <div className="h-32 flex items-center justify-center text-gray-300 italic">
                        No requiere ayuda visual
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'sol' && (
                  <motion.div
                    key="sol"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full text-left"
                  >
                    <h4 className="text-blue-900 font-bold text-sm mb-2 italic">Procedimiento:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{question.sol}</p>
                    {question.veri && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <h4 className="text-emerald-700 font-bold text-xs mb-1 uppercase tracking-wide">Concepto Clave:</h4>
                            <p className="text-emerald-600 text-xs">{question.veri}</p>
                        </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
