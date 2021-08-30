import React from "react";

export default function Navbar() {
  return (
    <header className="bg-indigo-400 py-2 px-5 shadow-xl">
      <nav className="flex justify-between items-center container mx-auto px-28">
        <div className="flex justify-evenly items-center gap-2">
          <span className="font-bold text-xl">V</span>
          <a href="#">
            <img src="/vercel.svg" />
          </a>
        </div>
        <ul className="flex justify-evenly items-center gap-5 ">
          <li className="hover:underline hover:font-bold">
            <a href="#">About</a>
          </li>
          <li className="hover:underline hover:font-bold">
            <a href="#">Contact</a>
          </li>
          <li className="hover:underline hover:font-bold">
            <a href="#">Misal</a>
          </li>
          <li className="hover:underline hover:font-bold">
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
