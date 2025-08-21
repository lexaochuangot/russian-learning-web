import { Link } from "react-router-dom";

const decks = [
  { id: 1, title: "Russian Basics", cards: 50 },
  { id: 2, title: "IELTS Vocab", cards: 120 },
];

export default function DeckList() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {decks.map((deck) => (
        <Link
          to={`/study/${deck.id}`}
          key={deck.id}
          className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6 hover:shadow-xl transition-all"
        >
          <h2 className="text-xl font-bold">{deck.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {deck.cards} cards
          </p>
        </Link>
      ))}
    </div>
  );
}
