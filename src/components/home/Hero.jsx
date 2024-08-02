import React from "react";
import home from "../../data/home";

export default function Hero() {
  
  return (
    <section className={styles.homeContainer}>
      <div className="w-full h-full md:w-[400px] text-center md:text-left mt-5 md:mt-0">
        <p>{home.hero.title}</p>
        <h2 className="text-2xl font-semibold">{home.hero.subTitle}</h2>
      </div>
      <div className="w-full h-full md:w-[500px]">
        <img src="./consultation1.png" alt="consultation image" />
      </div>
    </section>
  );
}


const styles = {
  homeContainer: `h-screen md:h-full md:max-h-full w-full flex items-center justify-between md:justify-center mx-auto flex-col-reverse md:flex-row gap-5`
}