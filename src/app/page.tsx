"use client";
import { useCounterStore } from "@/lib/store";
import { useQueryState } from "nuqs";

export default function Home() {
  const { count, increment, decrement } = useCounterStore();
  const [name, setName] = useQueryState("name");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 container bg-accent">
      <div className="bg-secondary w-full">
        <h1>Zustand Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="mt-8">
        <h1>nuqs Query State</h1>
        <p>Name from URL: {name || "Not set"}</p>
        <input
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
    </main>
  );
}
