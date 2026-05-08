export const Button = ({ children, textSmall }) => {
  return (
    <button
      className={`border border-neutral-300 px-5 py-2 rounded-full hover:bg-neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 dark:bg-neutral-600 dark:hover:bg-red-500} ${textSmall ? "text-base" : "text-[.85rem]"}`}
    >
      {children}
    </button>
  );
};
