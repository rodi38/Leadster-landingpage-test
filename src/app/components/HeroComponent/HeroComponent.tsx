import React from "react";
import styles from './HeroComponent.module.css'

function HeroComponent() {
  return (
    <div className={`${styles.herobg} flex justify-center flex-col items-center pt-3 pb-3`} >
      <button className="rounded-es border-2 border-sky-500 p-2 bg-red-600">
        WEBINARS EXCLUSIVOS
        </button>
        <h2>Menos conversinha,</h2>
        <h1>Mais Conversão</h1>
        <p>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</p>
    </div>
  );
}

export default HeroComponent;
