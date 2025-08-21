import DeckList from "../components/DeckList";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Choose Your Deck</h1>
      <DeckList />
    </div>
  );
}
