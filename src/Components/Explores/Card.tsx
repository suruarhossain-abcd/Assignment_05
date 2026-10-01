import React, { useState, useEffect, useRef } from 'react';
import { toast, Bounce } from 'react-toastify';

interface Itechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface CardProps {
  ExploreCard: Itechnology[];
}

const Card = ({ ExploreCard }: CardProps) => {
  const [stack, setStack] = useState<Itechnology[]>([]);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsFlashing(true);
    const timer = setTimeout(() => {
      setIsFlashing(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [stack]);

  const handleAddToStack = (technology: Itechnology) => {
    const isSelected = stack.some(item => item.id === technology.id);

    if (isSelected) {
      setStack(prev => prev.filter(item => item.id !== technology.id));
      toast.info(`${technology.name} removed from stack!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      setStack(prev => [...prev, technology]);
      toast.success(`${technology.name} added to stack!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {ExploreCard.map(card => {
              const isSelected = stack.some(item => item.id === card.id);

              return (
                <div
                  key={card.id}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-between items-center mb-5">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:bg-indigo-50 transition-colors">
                      <img
                        src={card.icon}
                        alt={card.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {card.badge && (
                      <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {card.name}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mt-3 line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-5">
                    <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">
                      {card.category}
                    </span>

                    <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg">
                      {card.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-400 text-lg">★</span>
                      <span className="text-sm font-bold text-slate-700">
                        {card.rating}
                      </span>
                      <span className="text-xs text-slate-400">/ 5.0</span>
                    </div>

                    <span className="text-xs text-slate-400">Technology</span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(card)}
                    className={`w-full mt-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <span>✓</span>
                        Added to Stack
                      </>
                    ) : (
                      <>
                        <span className="text-lg leading-none">+</span>
                        Add to Stack
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside
          className={`w-full lg:w-80 shrink-0 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24 border transition-all duration-500 ${
            isFlashing
              ? 'bg-indigo-100/70 border-indigo-400 ring-2 ring-indigo-300'
              : stack.length > 0
                ? 'bg-slate-50/60 border-indigo-200'
                : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>

            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full transition-all">
              {stack.length} Selected
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-6">
            Your selected technologies in one place.
          </p>

          {stack.length === 0 ? (
            <div className="border-2 border-dashed border-slate-200 rounded-xl py-10 px-4 flex flex-col items-center text-center bg-white/50">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl"></span>
              </div>
              <p className="text-sm font-semibold text-slate-700">
                Your stack is empty
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Add technologies to build your stack.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {stack.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-100 transition-all group"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 p-2 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">{item.category}</p>
                  </div>

                  <button
                    onClick={() => handleAddToStack(item)}
                    aria-label={`Remove ${item.name}`}
                    className="text-slate-400 hover:text-red-500 transition-colors text-xl leading-none px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {stack.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-slate-500">
                  Total technologies
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {stack.length}
                </span>
              </div>

              <button
                onClick={() => {
                  setStack([]);
                  toast.warn('All items removed from stack!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                    transition: Bounce,
                  });
                }}
                className="w-full py-3 rounded-xl border border-red-200 bg-white text-red-500 text-sm font-semibold hover:bg-red-50 hover:border-red-300 transition-all"
              >
                Clear Stack
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Card;
