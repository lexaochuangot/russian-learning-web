import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow-md">
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/study">Study</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

