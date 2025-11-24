import { useDarkMode } from "../hooks/useDarkMode";

export const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-gray-800 dark:to-gray-700 text-white p-6 mb-6 rounded-xl shadow-lg flex justify-between items-center transition">
      <h1 className="text-3xl font-bold">Coffee by BookBug</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/40 rounded-lg backdrop-blur-md transition"
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </header>
  );
};
