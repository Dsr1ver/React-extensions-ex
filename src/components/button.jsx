export const Button = ({ children, textSmall, handleClick, active }) => {
  return (
    <button
      onClick={handleClick}
      className={`border border-neutral-300 px-5 py-2 rounded-full hover:bg-neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 ${active ? "bg-neutral-600 text-white" : "bg-transparent"} ${
        active ? "dark:bg-Red-500" : "dark:bg-neutral-800"
      } dark:hover:bg-red-500 ${textSmall ? "text-base" : "text-[.85rem]"}`}
    >
      {children}
    </button>
  );
};
