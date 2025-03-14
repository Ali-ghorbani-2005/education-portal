import { useTheme } from "./themeContext";

export default function HomeThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return ( 
    <> 
    <div className="ml-5">
    <button
      onClick={toggleTheme}
      className=" w-11 h-11 rounded-full mt-5 flex justify-center items-center"
    >
      <img
        src={theme === "light" ? "/imgs/icons/moon-96.png" : "/imgs/icons/sunshine.png"}
        className="w-9"
        alt="Toggle Theme"
      />
    </button>  
    </div>
    </>
  );
}