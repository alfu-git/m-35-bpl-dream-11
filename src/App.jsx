import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Players from "./Components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/PlayersData.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [dollar, setDollar] = useState(500);

  return (
    <>
      <header className=" sticky top-0 z-50 bg-base-100">
        <section className="mb-6 py-1 md:py-4 container mx-auto px-5 border-b border-[#131313]/20">
          <NavBar dollar={dollar} />
        </section>
      </header>

      <main>
        <section className="mb-22 container mx-auto px-5">
          <Banner />
        </section>

        <section className="container mx-auto px-5">
          <Suspense
            fallback={
              <div className="mt-20 flex justify-center">
                <span className="loading loading-spinner text-neutral"></span>
              </div>
            }
          >
            <Players playersPromise={playersPromise} dollar={dollar} setDollar={setDollar} />
          </Suspense>
        </section>
      </main>
    </>
  );
}

export default App;
