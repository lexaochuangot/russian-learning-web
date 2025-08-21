import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <h1 className="font-bold text-xl">VocabFlash</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}
