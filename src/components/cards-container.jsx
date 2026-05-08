import data from "../../data.json";
import { Card } from "./card";

export const CardsContainer = () => {
  console.log(data);
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {data.map((extension) => (
        <Card key={extension.name} {...extension} />
      ))}
    </div>
  );
};
