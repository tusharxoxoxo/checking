"use client";

import { useState } from "react";

export default function Counter() {
  const [countc, setCount] = useState(0);
  const [countm, setCountm] = useState(0);

  return (
    <div className="flex flex-col text-2xl p-8 w-full items-center">
      <div>Count Click: {countc}</div>
      <div>Count MouseDown: {countm}</div>
      <button onMouseDown={() => setCountm(countm + 1)}>Increment onMouseDown</button>
      <button onClick={() => setCount(countc + 1)}>Increment onClick</button>
    </div>
  );
}
