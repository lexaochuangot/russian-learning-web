import { useState } from "react";
import Card from "../components/Card";
import sampleDeck from "../data/sampleDeck.json";

export default function Study() {
  const [index, setIndex] = useState(0);
  const deck = sampleDeck[0].words;

  return (
    <div className="flex flex-col items-center space-y-6">
      <Card front={deck[index].ru} back={deck[index].en} />
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => setIndex((i) => (i > 0 ? i - 1 : deck.length - 1))}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => setIndex((i) => (i + 1) % deck.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

