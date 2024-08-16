import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-[2.8rem] h-[1.3rem] flex items-center justify-between bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-900 font-semibold px-1 py-0.5 rounded-3xl relative"
    >
      <IoSunnyOutline />
      <span
        className={`absolute ${
          theme === "dark"
            ? "left-[calc(2.8rem-1.1rem-0.2rem)]"
            : "left-[0.2rem]"
        } w-[1.1rem] h-[1.1rem] inline-block dark:bg-slate-900 bg-slate-300 rounded-full transition-all`}
      ></span>
      <FiMoon />
    </button>
  );
};

export default ThemeButton;
