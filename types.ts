
export enum CarClass {
  STRIKER = 'Striker',
  JUGGERNAUT = 'Juggernaut',
  SPECIALIST = 'Specialist'
}

export interface CarStats {
  speed: number;
  handling: number;
  armor: number;
  firepower: number;
}

export const CLASS_INFO: Record<CarClass, { description: string; stats: CarStats; strengths: string; weakness: string }> = {
  [CarClass.STRIKER]: {
    description: "A lightweight, high-speed chassis designed for ball control and rapid assaults. Relies on evasion rather than durability.",
    stats: { speed: 90, handling: 85, armor: 30, firepower: 40 },
    strengths: "Speed, Agility, Aerials",
    weakness: "Fragile Chassis"
  },
  [CarClass.JUGGERNAUT]: {
    description: "A massive, heavily plated defensive unit. Capable of tanking heavy fire and demolishing opponents through sheer kinetic force.",
    stats: { speed: 40, handling: 35, armor: 95, firepower: 75 },
    strengths: "Armor, Demolitions, Blocking",
    weakness: "Poor Acceleration"
  },
  [CarClass.SPECIALIST]: {
    description: "A balanced technical unit equipped with advanced experimental weaponry. excels at mid-range engagements and support.",
    stats: { speed: 60, handling: 60, armor: 55, firepower: 85 },
    strengths: "Firepower, Utility, Range",
    weakness: "No specialized physical traits"
  }
};

export interface Car {
  id: string;
  name: string;
  class: CarClass;
  stats: CarStats;
  specialAbility: string;
  description: string;
  weaponType: string;
  color: string;
}

export interface MatchEvent {
  timestamp: string; // e.g., "01:24"
  description: string;
  type: 'GOAL' | 'DEMOLITION' | 'SAVE' | 'SHOT' | 'INFO';
  team: 'BLUE' | 'ORANGE' | 'NEUTRAL';
  scoreBlue: number;
  scoreOrange: number;
}

export interface MatchSimulationResult {
  winner: 'BLUE' | 'ORANGE' | 'DRAW';
  finalScoreBlue: number;
  finalScoreOrange: number;
  events: MatchEvent[];
  analysis: string;
}

export type ViewState = 'HANGAR' | 'MATCH' | 'TACTICS';
