import { useState } from "react";
import data from "../../data.json";
import { Card } from "./card";

export const CardsContainer = ({ filter }) => {
  const [extensions, setExtensions] = useState(data);

  let filteredExtensions = [];
  if (filter === "Inactive") {
    filteredExtensions = extensions.filter((extension) => !extension.isActive); // el .filter pregunta en cada extension si esque hay un "isActive"
  } else if (filter === "Active") {
    filteredExtensions = extensions.filter((extension) => extension.isActive);
  } else {
    filteredExtensions = extensions;
  }
  console.log(data);
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {filteredExtensions.map((extension) => (
        <Card
          key={extension.name}
          {...extension}
          extensions={extensions}
          setExtensions={setExtensions}
        />
      ))}
    </div>
  );
};
