import { Suspense, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Players from "./Components/Players/Players";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Footer/Copyright";


const fetchPlayers = async () => {
  const res = await fetch("/PlayersData.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [dollar, setDollar] = useState(500);

  return (
    <>
      <header>
        <section className="mb-6 py-1 md:py-4 container mx-auto px-5 border-b border-[#131313]/20">
          <NavBar dollar={dollar} />
        </section>
      </header>

      <main className="relative">
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

        <section className="container mx-auto px-5 absolute z-50 -bottom-160 sm:-bottom-120">
          <Subscribe/>
        </section>
      </main>
      
      <footer className="relative mt-115 sm:mt-75">
        <section className="pt-52 container mx-auto px-5 bg-[#06091A]">
          <Footer />
        </section>

        <section className="py-8 container mx-auto px-5 bg-[#06091A] border-t border-[#FFFFFF]/15">
          <Copyright />
        </section>
      </footer>

      <ToastContainer />
    </>
  );
}

export default App;
