import React from "react";
import Image from "next/image";
import FooterLogo from "../../../../public/assets/leadster_logo.gif";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi"

function FooterComponent() {
  return (
    <footer className="pt-12 w-full bg-[#F3F3F3]">
      <div className="flex flex-col h-[400px] items-center w-full pb-12 border-b-2">

        <Image src={FooterLogo} alt="footer logo gif"></Image>
        <p className="text-[#658996]">Transformando visitantes em clientes.</p>
        <div className="flex flex-row justify-center gap-[5%] w-full mt-5">
          <div className="flex flex-col gap-2">
            <p className="font-bold pb-5">Links Principais</p>
            <ul className="flex flex-col gap-2 text-[#658996]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Ferramenta</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold pb-5">Cases</p>
            <ul className="flex flex-col gap-2 text-[#658996]">
              <li><a href="#">Geração de Leads B2B</a></li>
              <li><a href="#">Geração de Leads em Software</a></li>
              <li><a href="#">Geração de Leads em Imobiliária</a></li>
              <li><a href="#">Cases de Sucesso</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold pb-5">Materiais</p>
            <ul className="flex flex-col gap-2 text-[#658996]">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Parceria com Agência</a></li>
              <li><a href="#">Guia Definitivo do Marketing</a></li>
              <li><a href="#">Materiais Gratuitos</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold pb-5">Siga a Leadster </p>
            <section className="flex flex-row gap-3 ">
              <a href="#" className="rounded-full bg-[#ebeef5] p-2"><FaLinkedinIn color="#9fa5bb"/></a>
              <a href="#" className="rounded-full bg-[#ECEDEF] p-2"><FaFacebookF color="#9fa5bb"/></a>
              <a href="#" className="rounded-full bg-[#ECEDEF] p-2"><TfiInstagram color="#9fa5bb"/></a>  
              
            </section>
            <ul className="flex flex-col gap-2 text-[#658996]">
              <li><a href="#">E-mail: contato@leadster.com.br</a></li>
              <li><a href="#">Telefone: (42) 98828-9851</a></li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center w-full h-[100px] bg-[#F3F3F3]">
        <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href="#">Leadster</a></p>
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |<a href="#"> Termos de uso </a></p>
      </div>
    </footer>
  );
}

export default FooterComponent;
