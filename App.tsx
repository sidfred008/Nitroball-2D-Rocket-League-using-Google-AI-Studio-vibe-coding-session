import React, { useState } from 'react';
import { ViewState, Car, CarClass } from './types';
import { Hangar } from './components/Hangar';
import { MatchDay } from './components/MatchDay';

// Mock initial data
const STARTER_STRIKER: Car = {
  id: 'starter-1',
  name: 'Rookie Runner',
  class: CarClass.STRIKER,
  stats: { speed: 90, handling: 80, armor: 30, firepower: 40 },
  specialAbility: 'Turbo Boost',
  description: 'A standard issue league vehicle. Reliable but basic.',
  weaponType: 'Machine Gun',
  color: '#00f3ff'
};

const STARTER_JUGGERNAUT: Car = {
  id: 'starter-2',
  name: 'Heavy Metal',
  class: CarClass.JUGGERNAUT,
  stats: { speed: 45, handling: 40, armor: 90, firepower: 70 },
  specialAbility: 'Kinetic Shield',
  description: 'An up-armored mining vehicle repurprosed for arena combat.',
  weaponType: 'Impact Ram',
  color: '#ff4500'
};

const STARTER_SPECIALIST: Car = {
  id: 'starter-3',
  name: 'Viper',
  class: CarClass.SPECIALIST,
  stats: { speed: 65, handling: 65, armor: 50, firepower: 80 },
  specialAbility: 'EMP Blast',
  description: 'Experimental tech chassis with electronic warfare capabilities.',
  weaponType: 'Railgun',
  color: '#00ff9d'
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HANGAR');
  const [garage, setGarage] = useState<Car[]>([STARTER_STRIKER, STARTER_JUGGERNAUT, STARTER_SPECIALIST]);

  const addToGarage = (car: Car) => {
    setGarage(prev => [...prev, car]);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-hell-red selection:text-white flex flex-col font-sans">
      
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a12]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-hell-orange to-hell-red rounded rotate-45 shadow-[0_0_15px_rgba(255,69,0,0.6)] animate-pulse"></div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic">
              <span className="text-white">Nitro</span>
              <span className="text-hell-red">Ball</span>
            </h1>
          </div>

          <nav className="flex gap-2">
            <button 
              onClick={() => setView('HANGAR')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all skew-x-[-10deg] border-b-2 ${
                view === 'HANGAR' 
                  ? 'border-neon-blue text-neon-blue bg-neon-blue/5' 
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              Hangar
            </button>
            <button 
              onClick={() => setView('MATCH')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all skew-x-[-10deg] border-b-2 ${
                view === 'MATCH' 
                  ? 'border-hell-orange text-hell-orange bg-hell-orange/10 shadow-[0_0_10px_rgba(255,69,0,0.2)]' 
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              Inferno Dome
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {view === 'HANGAR' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
             <div className="mb-6 border-b border-gray-800 pb-4">
                <h2 className="text-3xl font-light text-white uppercase tracking-tight">Fleet Hangar</h2>
                <p className="text-gray-500 max-w-2xl mt-2 text-sm">
                   Design and manufacture your combat fleet. Use the AI fabricator to generate specialized vehicles based on your tactical needs.
                </p>
             </div>
             <Hangar myGarage={garage} addToGarage={addToGarage} />
          </div>
        )}

        {view === 'MATCH' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
             <div className="mb-6 border-b border-hell-red/30 pb-4">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight italic">
                    <span className="text-hell-red">Inferno</span> Dome
                </h2>
                <p className="text-gray-400 max-w-2xl mt-2 text-sm">
                   Deploy your squad into the magma-filled arena. The Neo-Sphere V9 awaits. Survive the heat, demolish the enemy, score the goals.
                </p>
             </div>
             <MatchDay roster={garage} />
           </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-6 text-center text-gray-700 text-[10px] uppercase tracking-[0.3em]">
        NitroBall Combat League • System Status: ONLINE
      </footer>
    </div>
  );
};

export default App;