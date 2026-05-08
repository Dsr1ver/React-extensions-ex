import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconSun from "../assets/images/icon-sun.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import IconMoon from "../assets/images/icon-moon.svg";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle("dark");

    setIsDark(isDarkChanged);
  };
  return (
    <div className=" bg-Neutral-0 dark:bg-neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6">
      <img src={isDark ? LogoDark : Logo} alt="logo" />
      <button
        onClick={handleClick}
        className="bg-Neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200"
      >
        <img src={isDark ? IconSun : IconMoon} alt="Icon Button" />
      </button>
    </div>
  );
};
