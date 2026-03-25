import React, { useState } from "react";
import NavLogo from "../../assets/logo.png";
import CoinLogo from "../../assets/coin.png";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Fixture", "Teams", "Schedules"];

const NavBar = () => {
  const [status, setStatus] = useState(false);

  const handleMenu = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="relative flex items-center gap-2">
        <button onClick={handleMenu} className="btn px-2 lg:hidden">
          {status ? <X /> : <Menu />}
        </button>

        <ul
          className={`
              absolute top-18 -left-5 z-50 bg-amber-600 rounded-sm space-y-1 duration-300 transition-all transform ${status ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-4 pointer-events-none"}
            `}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                className="inline-block w-full py-1 px-2 text-sm text-base-200 font-medium hover:bg-[gray]"
                href="/"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <img className="w-10 sm:w-14 md:w-18" src={NavLogo} alt="Navbar Logo" />
        </div>
      </div>

      <div className="py-2.5 flex items-center gap-12">
        <div className="hidden lg:block">
          <ul className="flex gap-12">
            {navItems.map((item) => (
              <li key={item}>
                <a className="text-[#131313]/70 hover:text-[#F6B647]" href="/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="btn flex gap-2">
            <span className="mt-0.5 flex items-center">
              <span>500</span>
              <span>M</span>
            </span>

            <img src={CoinLogo} alt="Coin Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
