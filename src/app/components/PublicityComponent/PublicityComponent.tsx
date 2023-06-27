import React from "react";
import Image from "next/image";
import ComparativeCTA from "/public/assets/comparativo_img_CTA.png";
import RDStamp from "/public/assets/selo_RD.png"
import CreditIcon from '../../../../public/assets/no-card-dark.webp';
import Rating from '../../../../public/assets/rating.webp'

function PublicityComponent() {
  return (
    // <div className="mt-5 grid grid-cols-2 gap-8 bg-[#E5EDF3] w-full mx-auto">
    <section className="flex md:flex-row max-sm:flex-col items-center bg-[#E5EDF3] max-sm:[100%] max-md:w-[100%] gap-5 sm:h-auto mt-5">
      <div className="relative overflow-hidden sm:w-[50%] sm:h-[100%] flex justify-end items-center">
        <Image src={ComparativeCTA} alt="Imagem comparativa do CTA" className="z-10 w-[80%] h-auto"></Image>
        <div className="absolute z-[0] rounded-[50px] top-[50%] left-[-45%] w-[150%] h-[200%] bg-[#f2f9ff96] origin-center rotate-45 "></div>
      </div>

      <div className="relative max-sm:w-[50%] max-md:w-[50%] max-sm:h-[100%] max-md:h-[100%]">
        <p className="text-4xl">Pronto para triplicar sua <span className="flex"><b>Geração de Leads?</b></span></p>
        <p className="">Criação e ativação em <b>4 minutos.</b></p>
        <div className="border-t-2 border-[#9ca3af] mt-2">
          <button className="rounded-full bg-blue-500 p-5 pl-8 pr-8 text-white inline mr-3 mt-4">VER DEMONSTRAÇÃO</button>
          <Image src={RDStamp} alt="Selo de qualidade RD" className="inline"></Image>
          <p className="flex justify-center items-center mt-5 gap-1"> 
            <Image src={CreditIcon} alt="A imagem diz que não é necessário cartão de crédito." className="inline mr-2"></Image>
             <b>Não</b>é necessário Cartão de Crédito <span className="pl-2 pr-2">|</span>
            <Image src={Rating} alt="avaliação" className="inline mr-2"></Image> 
            4.9/5 média de satisfação
          </p>
        </div>
       
      </div>
    </section>
  );
}

export default PublicityComponent;
