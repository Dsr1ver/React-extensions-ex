import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";
import { Button } from "./button";

export const Card = ({ logo, name, description, isActive }) => {
  return (
    <div className=" bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-600 dark:text-Neutral-0">
      <div className="flex  gap-4 items-start mb-6 ">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h2 className="text-[1.25rem] font-bold mb-2 dark:text-Neutral-0">
          {name}
        </h2>
        <p className="text-neutral-600 text-[.9375rem] p-4 dark:text-neutral-300">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button textSmall>Remove</Button>

        <Toggle checked={isActive} color="red" />
      </div>
    </div>
  );
};
