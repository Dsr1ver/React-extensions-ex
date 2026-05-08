import { Button } from "./button";

export const Filters = () => {
  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 text-center text-[2.125 rem] font-bold mb-6 md:mb-0">
        Extensions List
      </h2>
      <div className="flex justify-between md:gap-4">
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </div>
  );
};
