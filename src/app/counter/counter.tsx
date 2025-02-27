"use client";
import { useState } from "react";

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>the count is:</h4>
      <h1>{count}</h1>

      <div className="mt-4 flex gap-5">
        <button onClick={() => setCount(count + 1)}>increment</button>

        <button onClick={() => setCount(count - 1)}>decrement</button>

        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
}
