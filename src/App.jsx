import { Header } from "./components/header";
import { Filters } from "./components/filters";
import { CardsContainer } from "./components/cards-container";

function App() {
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
