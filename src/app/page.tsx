"use client";
import { useMemo, useState } from "react";
import type { IntakeData } from "@/types/intake";
import { RadioList } from "@/components/ui/RadioList";

const initial: IntakeData = {
  goal: "", goalOther: "", experience: "", days: "",
  preferredTime: "", equipment: "", equipmentOther: "",
  hasInjury: "", injuryDetails: "", sleepQuality: "",
  nutrition: "", availabilityNotes: "", coachStyle: "",
};

export default function Page() {
  const [data, setData] = useState<IntakeData>(initial);
  const [step, setStep] = useState(1);

  const goalFinal = data.goal === "Other" ? data.goalOther.trim() : data.goal;
  const equipmentFinal =
    data.equipment === "Other" ? data.equipmentOther.trim() : data.equipment;

  const canNext = useMemo(() => {
    switch (step) {
      case 1: return !!data.goal && !(data.goal === "Other" && !data.goalOther.trim());
      case 2: return !!data.experience;
      case 3: return typeof data.days === "number" && data.days >= 1 && data.days <= 7;
      case 4: return !!data.preferredTime;
      case 5: return !!data.equipment && !(data.equipment === "Other" && !data.equipmentOther.trim());
      case 6: return !!data.hasInjury && !(data.hasInjury === "Yes" && !data.injuryDetails.trim());
      case 7: return !!data.sleepQuality;
      case 8: return typeof data.nutrition === "number" && data.nutrition >= 1 && data.nutrition <= 10;
      case 9: return !!data.availabilityNotes.trim();
      case 10: return !!data.coachStyle;
      default: return false;
    }
  }, [step, data]);

  const next = () => setStep((s) => Math.min(10, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const Steps = [
    // 1 goal
    <fieldset key={1} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">What’s your main fitness goal?</legend>
      <RadioList
        name="goal"
        value={data.goal}
        onChange={(v) => setData(d => ({ ...d, goal: v, goalOther: v==="Other" ? d.goalOther : "" }))}
        options={["Lose fat","Gain muscle","Improve strength","Boost energy","Other"]}
      />
      {data.goal === "Other" && (
        <input
          className="mt-3 w-full max-w-sm rounded-md border px-3 py-2 text-sm"
          placeholder="Type your goal…"
          value={data.goalOther}
          onChange={(e)=>setData(d=>({...d, goalOther: e.target.value}))}
        />
      )}
    </fieldset>,

    // 2 experience
    <fieldset key={2} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">How would you describe your training experience?</legend>
      <RadioList
        name="experience"
        value={data.experience}
        onChange={(v)=>setData(d=>({...d, experience: v}))}
        options={["Beginner (<1 Year)","Intermediate (2 - 5 Years)","Advanced (5+ Years)"]}
      />
    </fieldset>,

    // 3 days
    <fieldset key={3} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">How many days per week can you train?</legend>
      <div className="mt-3 flex items-center gap-3">
        <input
          type="number" min={1} max={7} className="w-24 rounded-md border px-3 py-2 text-sm"
          placeholder="1–7" value={data.days}
          onChange={(e)=> {
            const v = e.target.value;
            setData(d=>({...d, days: v==="" ? "" : Math.max(1, Math.min(7, Number(v)))}));
          }}
        />
        <span className="text-xs text-gray-500">Allowed: 1–7</span>
      </div>
    </fieldset>,

    // 4 time
    <fieldset key={4} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">When do you prefer to train?</legend>
      <RadioList
        name="preferredTime" value={data.preferredTime}
        onChange={(v)=>setData(d=>({...d, preferredTime: v}))}
        options={["Morning","Afternoon","Evening"]}
      />
    </fieldset>,

    // 5 equipment
    <fieldset key={5} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">What equipment do you have access to?</legend>
      <RadioList
        name="equipment" value={data.equipment}
        onChange={(v)=>setData(d=>({...d, equipment: v, equipmentOther: v==="Other"? d.equipmentOther : ""}))}
        options={["Gym","Minimal equipment","None (bodyweight only)","Other"]}
      />
      {data.equipment === "Other" && (
        <input
          className="mt-3 w-full max-w-sm rounded-md border px-3 py-2 text-sm"
          placeholder="Describe your equipment…"
          value={data.equipmentOther}
          onChange={(e)=>setData(d=>({...d, equipmentOther: e.target.value}))}
        />
      )}
    </fieldset>,

    // 6 injury
    <fieldset key={6} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">Any injuries, pain, or mobility issues?</legend>
      <RadioList
        name="hasInjury" value={data.hasInjury}
        onChange={(v)=>setData(d=>({...d, hasInjury: v as any, injuryDetails: v==="No" ? "" : d.injuryDetails}))}
        options={["No","Yes"]}
      />
      {data.hasInjury === "Yes" && (
        <textarea
          className="mt-3 w-full max-w-xl rounded-md border px-3 py-2 text-sm"
          rows={4}
          placeholder="Describe the issue…"
          value={data.injuryDetails}
          onChange={(e)=>setData(d=>({...d, injuryDetails: e.target.value}))}
        />
      )}
    </fieldset>,

    // 7 sleep
    <fieldset key={7} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">How’s your sleep on average?</legend>
      <RadioList
        name="sleepQuality" value={data.sleepQuality}
        onChange={(v)=>setData(d=>({...d, sleepQuality: v}))}
        options={["Poor (<5 hours)","Okay (5–6 hours)","Good (~7 hours)","Excellent (7–9 hours)"]}
      />
    </fieldset>,

    // 8 nutrition
    <fieldset key={8} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">How consistent is your nutrition?</legend>
      <input
        type="range" min={1} max={10} step={1} className="w-full"
        value={data.nutrition === "" ? 5 : data.nutrition}
        onChange={(e)=>setData(d=>({...d, nutrition: Number(e.target.value)}))}
      />
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>1 (don’t track)</span>
        <span className="font-medium">{data.nutrition === "" ? 5 : data.nutrition}/10</span>
        <span>10 (track macros & calories)</span>
      </div>
    </fieldset>,

    // 9 availability
    <fieldset key={9} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">When can you realistically train?</legend>
      <textarea rows={4} className="mt-3 w-full max-w-xl rounded-md border px-3 py-2 text-sm"
        placeholder="e.g., Mon/Wed/Fri evenings, Sat mornings"
        value={data.availabilityNotes}
        onChange={(e)=>setData(d=>({...d, availabilityNotes: e.target.value}))}
      />
    </fieldset>,

    // 10 coaching style
    <fieldset key={10} className="mt-6">
      <legend className="text-sm font-medium text-gray-800">What coaching style helps you most?</legend>
      <RadioList
        name="coachStyle" value={data.coachStyle}
        onChange={(v)=>setData(d=>({...d, coachStyle: v}))}
        options={[
          "Strict accountability (Push me hard — maximum results)",
          "Balanced support (Challenge me, but sustainable)",
          "Easy-going guidance (Keep me active & enjoy it)",
        ]}
      />
    </fieldset>,
  ];

  const payload = {
    ...data,
    goal: goalFinal,
    equipment: equipmentFinal,
    has_injury: data.hasInjury === "Yes",
    injury_details: data.hasInjury === "Yes" ? data.injuryDetails.trim() : "",
    nutrition_consistency: data.nutrition === "" ? null : data.nutrition,
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello Trainee</h1>
      <p className="mt-2 text-gray-600">Welcome to the app</p>

      <h2 className="text-2xl font-bold">Client Intake</h2>
      <p className="text-gray-600 mt-1">Question {step} of 10</p>

      {Steps[step - 1]}

      <div className="mt-6 flex gap-2">
        <button type="button" onClick={back} disabled={step===1} className="px-4 py-2 rounded-lg border disabled:opacity-50">Back</button>
        {step < 10 ? (
          <button type="button" onClick={next} disabled={!canNext}
            className={`px-4 py-2 rounded-lg ${canNext ? "bg-black text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}>
            Next
          </button>
        ) : (
          <button type="button" disabled={!canNext}
            onClick={() => { console.log("SUBMIT", payload); alert("Submitted! Check console."); }}
            className={`px-4 py-2 rounded-lg ${canNext ? "bg-black text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}>
            Finish
          </button>
        )}
      </div>

      <pre className="mt-6 text-xs bg-white border rounded-lg p-3">{JSON.stringify(payload, null, 2)}</pre>
    </main>
  );
}
