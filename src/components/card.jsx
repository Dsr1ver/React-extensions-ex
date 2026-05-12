import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";
import { Button } from "./button";

export const Card = ({
  logo,
  name,
  description,
  isActive,
  extensions,
  setExtensions,
}) => {
  const onToggle = () => {
    const currentExtension = extensions.filter(
      (extensions) => extensions.name === name,
    )[0];

    const updateExtension = {
      ...currentExtension,
      isActive: !currentExtension.isActive,
    };

    const newExtensions = extensions.map((extension) => {
      if (extension.name === name) {
        extension = { ...updateExtension };
      }
      return extension;
    });

    setExtensions(newExtensions);
  };

  const onRemove = () => {
    const filteredExtension = extensions.filter(
      (extension) => extension.name !== name,
    );
    console.log(filteredExtension);
    setExtensions(filteredExtension);
  };

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
        <Button handleClick={onRemove} textSmall>
          Remove
        </Button>

        <Toggle onClick={onToggle} checked={isActive} color="red" />
      </div>
    </div>
  );
};
