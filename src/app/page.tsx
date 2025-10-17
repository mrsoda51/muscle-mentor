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
            {["Beginner", "Intermediate", "Advanced"].map((opt) => (
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

      <pre className="mt-6 text-xs bg-white border rounded-lg p-3">
        {JSON.stringify({ goal: goalFinal, experience, days }, null, 2)}
      </pre>
    </main>
  );
}
