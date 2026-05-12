import { useState } from "react";

import { Header } from "./components/header";
import { Filters } from "./components/filters";
import { CardsContainer } from "./components/cards-container";

function App() {
  const [filter, setFilter] = useState("All"); // 'All' - 'Active' - 'Inactive'
  console.log("FILTRO ACTUAL: ", filter);
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters filter={filter} setFilter={setFilter} />
        <CardsContainer filter={filter} />
      </section>
    </main>
  );
}

export default App;
