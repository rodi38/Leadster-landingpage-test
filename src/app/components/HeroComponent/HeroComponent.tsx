import React from "react";
import styles from "./HeroComponent.module.css";
import Image from "next/image";
import Icon from "../../../../public/assets/asset-header.png";
function HeroComponent() {
  return (
    <div
      className={`${styles.herobg} flex justify-center flex-col items-center pt-3 pb-3`}
    >
      <button className="rounded-es border-2 border-sky-500 p-2 ">
        WEBINARS EXCLUSIVOS
      </button>
      <p className="font-medium text-4xl pt-5">Menos Conversinha,</p>
      <h1 className="font-bold text-6xl text-[#0077F4] not-italic p-3 ">
        Mais Conversão
        <Image className="icon-image absolute right-0" src={Icon} alt="sadsasa" />
      </h1>
      <p>
        Conheça as estratégias que mudaram o jogo e como aplicá-las no seu
        negócio
      </p>
    </div>
  );
}

export default HeroComponent;
