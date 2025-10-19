"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [goal, setGoal] = useState("");
  const [goalOther, setGoalOther] = useState("");
  const goalFinal = goal === "Other" ? goalOther.trim() : goal;
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState("");
  const canNext1 = !!goal && !(goal === "Other" && !goalOther.trim());
  const canNext2 = !!experience;
  const [days, setDays] = useState<number | "">("");
  const canNext3 = typeof days === "number" && days >= 1 && days <= 7;
  const [preferredTime, setPreferredTime] = useState("");
  const canNext4 = !!preferredTime;
  const [equipment, setEquipment] = useState("");
  const [equipmentOther, setEquipmentOther] = useState("");
  const equipmentFinal =
    equipment === "Other" ? equipmentOther.trim() : equipment;
  const canNext5 =
    !!equipment && !(equipment === "Other" && !equipmentOther.trim());
  const [hasInjury, setHasInjury] = useState<"" | "Yes" | "No">("");
  const [injuryDetails, setInjuryDetails] = useState("");
  const canNext6 =
    !!hasInjury && !(hasInjury === "Yes" && !injuryDetails.trim());
  const [sleepQuality, setSleepQuality] = useState("");
  const canNext7 = !!sleepQuality;
  const [nutrition, setNutrition] = useState<number | "">("");
  const canNext8 =
    typeof nutrition === "number" && nutrition >= 1 && nutrition <= 10;
  const [availabilityNotes, setAvailabilityNotes] = useState("");
  const canNext9 = !!availabilityNotes.trim();
  const [coachStyle, setCoachStyle] = useState("");
  const canNext10 = !!coachStyle;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello Trainee</h1>
      <p className="mt-2 text-gray-600">Welcome to the app</p>

      <h1 className="text-2xl font-bold">Client Intake</h1>
      <p className="text-gray-600 mt-1">Question {step} of 10</p>

      {step === 1 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            What’s your main fitness goal?
          </legend>

          <div className="mt-3 grid gap-3">
            {[
              "Lose fat",
              "Gain muscle",
              "Improve strength",
              "Boost energy",
              "Other",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="goal"
                  value={opt}
                  checked={goal === opt}
                  onChange={(e) => {
                    const v = e.target.value;
                    setGoal(v);
                    if (v !== "Other") setGoalOther("");
                  }}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {goal === "Other" && (
            <input
              className="mt-3 w-full max-w-sm rounded-md border px-3 py-2 text-sm"
              placeholder="Type your goal..."
              value={goalOther}
              onChange={(e) => setGoalOther(e.target.value)}
            />
          )}
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext1}
            className={`mt-6 px-4 py-2 rounded-lg ${canNext1 ? "bg-black text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
          >
            Next
          </button>
        </fieldset>
      )}
      {step === 2 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            How would you describe your training experience?
          </legend>

          <div className="mt-3 grid gap-3">
            {[
              "Beginner (<1 Year)",
              "Intermediate (2 - 5 Years)",
              "Advanced (5 Years)",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="experience"
                  value={opt}
                  checked={experience === opt}
                  onChange={(e) => setExperience(e.target.value)}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext2}
              className={`px-4 py-2 rounded-lg ${canNext2 ? "bg-black text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 3 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            How many days per week can you train?
          </legend>

          <div className="mt-3 flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={7}
              inputMode="numeric"
              className="w-24 rounded-md border px-3 py-2 text-sm"
              placeholder="1–7"
              value={days}
              onChange={(e) => {
                const v = e.target.value;
                // allow empty while typing; otherwise parse number
                setDays(v === "" ? "" : Math.max(1, Math.min(7, Number(v))));
              }}
            />
            <span className="text-xs text-gray-500">Allowed: 1–7</span>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext3}
              className={`px-4 py-2 rounded-lg ${
                canNext3
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 4 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            When do you prefer to train?
          </legend>

          <div className="mt-3 grid gap-3">
            {["Morning", "Afternoon", "Evening"].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="preferredTime"
                  value={opt}
                  checked={preferredTime === opt}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext4}
              className={`px-4 py-2 rounded-lg ${
                canNext4
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 5 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            What equipment do you have access to?
          </legend>

          <div className="mt-3 grid gap-3">
            {[
              "Gym",
              "Minimal equipment",
              "None (bodyweight only)",
              "Other",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="equipment"
                  value={opt}
                  checked={equipment === opt}
                  onChange={(e) => {
                    const v = e.target.value;
                    setEquipment(v);
                    if (v !== "Other") setEquipmentOther("");
                  }}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          {equipment === "Other" && (
            <input
              className="mt-3 w-full max-w-sm rounded-md border px-3 py-2 text-sm"
              placeholder="Describe your equipment…"
              value={equipmentOther}
              onChange={(e) => setEquipmentOther(e.target.value)}
            />
          )}

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext5}
              className={`px-4 py-2 rounded-lg ${
                canNext5
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 6 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            Any injuries, pain, or mobility issues?
          </legend>

          <div className="mt-3 grid gap-3">
            {["No", "Yes"].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="hasInjury"
                  value={opt}
                  checked={hasInjury === opt}
                  onChange={(e) => {
                    const v = e.target.value as "Yes" | "No";
                    setHasInjury(v);
                    if (v === "No") setInjuryDetails("");
                  }}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          {hasInjury === "Yes" && (
            <textarea
              className="mt-3 w-full max-w-xl rounded-md border px-3 py-2 text-sm"
              rows={4}
              placeholder="Describe the issue (e.g., left knee pain, shoulder impingement, what movements hurt)…"
              value={injuryDetails}
              onChange={(e) => setInjuryDetails(e.target.value)}
            />
          )}

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext6}
              className={`px-4 py-2 rounded-lg ${
                canNext6
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 7 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            How’s your sleep on average?
          </legend>

          <div className="mt-3 grid gap-3">
            {[
              "Poor (<5 hours)",
              "Okay (5–6 hours)",
              "Good (~7 hours)",
              "Excellent (7–9 hours)",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sleepQuality"
                  value={opt}
                  checked={sleepQuality === opt}
                  onChange={(e) => setSleepQuality(e.target.value)}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext7}
              className={`px-4 py-2 rounded-lg ${
                canNext7
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 8 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            How consistent is your nutrition?
          </legend>

          {/* slider + live value */}
          <div className="mt-4">
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={nutrition === "" ? 5 : nutrition}
              onChange={(e) => setNutrition(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1 (i dont care about calories and macros)</span>
              <span className="font-medium">
                {nutrition === "" ? 5 : nutrition}/10
              </span>
              <span>10 (i track my macro and daily calorie intake)</span>
            </div>
          </div>

          {/* alt numeric input if you prefer */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={10}
              inputMode="numeric"
              className="w-20 rounded-md border px-3 py-2 text-sm"
              value={nutrition}
              placeholder="1–10"
              onChange={(e) => {
                const v = e.target.value;
                setNutrition(
                  v === "" ? "" : Math.max(1, Math.min(10, Number(v)))
                );
              }}
            />
            <span className="text-xs text-gray-500">
              You can type a number too
            </span>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext8}
              className={`px-4 py-2 rounded-lg ${
                canNext8
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 9 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            When can you realistically train during the week?
          </legend>

          <textarea
            className="mt-3 w-full max-w-xl rounded-md border px-3 py-2 text-sm"
            rows={4}
            placeholder="e.g., Mon/Wed/Fri evenings, Sat mornings"
            value={availabilityNotes}
            onChange={(e) => setAvailabilityNotes(e.target.value)}
          />

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext9}
              className={`px-4 py-2 rounded-lg ${
                canNext9
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}
      {step === 10 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-gray-800">
            What coaching style helps you most?
          </legend>

          <div className="mt-3 grid gap-3">
            {[
              "Strict accountability (Push me hard — I want maximum results)",
              "Balanced support (Challenge me — but keep it sustainable)",
              "Easy-going guidance (Help me stay active and enjoy the process)",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="coachStyle"
                  value={opt}
                  checked={coachStyle === opt}
                  onChange={(e) => setCoachStyle(e.target.value)}
                  className="h-4 w-4"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg border"
            >
              Back
            </button>
            <button
              type="button"
              disabled={!canNext10}
              onClick={() => {
                const payload = {
                  goal: goalFinal,
                  experience,
                  days,
                  preferredTime,
                  equipment: equipmentFinal,
                  has_injury: hasInjury === "Yes",
                  injury_details:
                    hasInjury === "Yes" ? injuryDetails.trim() : "",
                  sleep_quality: sleepQuality,
                  nutrition_consistency: nutrition === "" ? null : nutrition,
                  availability_notes: availabilityNotes.trim(),
                  coaching_style: coachStyle,
                };
                console.log("SUBMIT", payload);
                alert("Submitted! Check console for payload.");
              }}
              className={`px-4 py-2 rounded-lg ${
                canNext10
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Finish
            </button>
          </div>
        </fieldset>
      )}

      <pre className="mt-6 text-xs bg-white border rounded-lg p-3">
        {JSON.stringify(
          {
            goal: goalFinal,
            experience,
            days,
            preferredTime,
            equipment: equipmentFinal,
            has_injury: hasInjury === "Yes",
            injury_details: hasInjury === "Yes" ? injuryDetails.trim() : "",
            sleep_quality: sleepQuality,
            nutrition_consistency: nutrition === "" ? null : nutrition,
            availability_notes: availabilityNotes.trim(),
            coaching_style: coachStyle,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}
