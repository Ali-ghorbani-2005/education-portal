import { useTheme } from "./themeContext";

export default function SidebarTemSwicher() {
  const { theme, toggleTheme } = useTheme();

  return ( 
    <> 
      <div className="ml-5 flex justify-end gap-3"> 
      <span className="text-lg mt-2 font-medium text-gray-700 dark:text-gray-300">
          {theme === "light" ? "تم تیره" : "تم روشن"}
        </span>
        <button
          onClick={toggleTheme}
          className="w-11 h-11 rounded-full flex justify-center items-center"
        >
          <img
            src={theme === "light" ? "/imgs/icons/moon-2.png" : "/imgs/icons/sunshine.png"}
            className="w-9"
            alt="Toggle Theme"
          />
        </button>  
      </div>
    </>
  );
}
