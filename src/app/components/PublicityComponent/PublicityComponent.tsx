import React from "react";
import Image from "next/image";
import ComparativeCTA from "/public/assets/comparativo_img_CTA.png";
import RDStamp from "/public/assets/selo_RD.png"

function PublicityComponent() {
  return (
    // <div className="mt-5 grid grid-cols-2 gap-8 bg-[#E5EDF3] w-full mx-auto">
    <div className="flex justify-center items-center bg-[#E5EDF3] w-full mx-auto mt-5">

      <section className="">
        <Image src={ComparativeCTA} alt="Imagem comparativa do CTA"></Image>
      </section>

      <section className="">
        <h2>Pronto para triplicar sua <b>Geração de Leads?</b></h2>
        <p>Criação e ativação em <b>4 minutos.</b></p>
        <button className="rounded-full bg-blue-500 p-5 pl-8 pr-8 text-white inline">VER DEMONSTRAÇÃO</button>
        <Image src={RDStamp} alt="Selo de qualidade RD" className="inline"></Image>
      </section>
    </div>
  );
}

export default PublicityComponent;
