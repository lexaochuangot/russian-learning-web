import sampleDeck from "../data/sampleDeck.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Decks</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sampleDeck.map((deck: any, idx: number) => (
          <Link
            to="/study"
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{deck.name}</h2>
            <p className="text-sm text-gray-500">{deck.words.length} words</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

