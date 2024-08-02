import React from "react";
import "./Home.css";
import Header from "../layouts/Header";
import Hero from "./Hero";
import Donate from "../donate/Donate";

export default function HomeComponent() {
  return (
    <div>
      <header className="container home-header">
        <Header />
      </header>
      <main className="container">
        <Hero />
      </main>
      <footer className="container footer">
        <p>All right reserved &copy; {new Date(Date.now()).getFullYear()}</p>
      </footer>
      <Donate />
    </div>
  );
}
