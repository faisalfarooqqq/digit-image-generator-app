"use client";

import { useState } from "react";

export default function Home() {
  const [digit, setDigit] = useState("0");
  const [images, setImages] = useState<string[]>([]);

  const generate = async () => {
    const res = await fetch(`/api/generate?digit=${digit}`);
    const data = await res.json();
    setImages(data.images);
  };

  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">MNIST Digit Generator</h1>

      <div className="space-x-2">
        <select
          value={digit}
          onChange={(e) => setDigit(e.target.value)}
          className="p-2 border rounded"
        >
          {[...Array(10).keys()].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <button
          onClick={generate}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Generate
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-8 justify-center">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Digit ${digit}`}
            className="w-28 h-28 border mx-auto"
          />
        ))}
      </div>
    </main>
  );
}
