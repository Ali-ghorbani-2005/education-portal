

import { useTheme } from "./themeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 w-11 h-11 rounded-full mt-5 flex justify-center items-center"
    >
      <img
        src={theme === "light" ? "/imgs/icons/moon.png" : "/imgs/icons/sun.png"}
        className="w-7"
        alt="Toggle Theme"
      />
    </button>
  );
}

