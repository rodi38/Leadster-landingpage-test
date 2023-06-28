import React from "react";
import styles from "./HeroComponent.module.css";
import Image from "next/image";
import Icon from "../../../../public/assets/asset-header.png";
function HeroComponent() {
  return (
    <div
      className={`${styles.herobg} flex justify-center flex-col items-center pt-[50px] pb-3 `}
    >
      <button className="rounded-t-full rounded-r-full border-2 border-sky-500 p-1 pl-5 pr-5 text-[#007EFF] font-bold text-1xl">
        WEBINARS EXCLUSIVOS
      </button>
      <p className="font-medium sm:text-5xl pt-5 pb-3">Menos Conversinha,</p>
      <h1 className="font-bold sm:text-8xl  text-[#0077F4] not-italic border-b-2 border-slate-300 p-7 pt-1 pr-5 pb-6 relative ">
        Mais Conversão
        <Image className="absolute right-0 top-0" src={Icon} alt="sadsasa" />
      </h1>
      <p className="sm:text-xl sm:font-medium pb-[100px]">
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu
        negócio
      </p>
    </div>
  );
}

export default HeroComponent;
