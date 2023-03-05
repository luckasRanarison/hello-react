import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ThemeButton = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="w-12 p-2 duration-200 absolute bottom-10 right-10 rounded-full shadow-md text-white bg-primary dark:text-primary dark:bg-light hover:bg-white hover:text-primary dark:hover:bg-primary dark:hover:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;
