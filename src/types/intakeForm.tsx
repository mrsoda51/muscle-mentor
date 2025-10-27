export type IntakeData = {
  goal: string;
  goalOther: string;
  experience: string; // categorize based on muscle group priority (overload progression etc)
  days: number | ""; // optimize for frequency and recovery (prevent plateu)
  preferredTime: string; // prevent fatigue optimize energy levels
  equipment: string;
  equipmentOther: string;
  hasInjury: "" | "Yes" | "No";
  injuryDetails: string;
  sleepQuality: string; // affects recovery and performance 
  nutrition: number | ""; // prioritize eating for recovery high macros etc 
  availabilityNotes: string;
  coachStyle: string;
};
// aim to improve adherence and results weekly (progress is important)