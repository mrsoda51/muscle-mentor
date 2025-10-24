"use client";

export function RadioList({
  name, value, onChange, options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="mt-3 grid gap-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
            className="h-4 w-4"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}
