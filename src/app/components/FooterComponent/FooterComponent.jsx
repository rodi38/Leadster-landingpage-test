import React from "react";
import Image from "next/image";
import FooterLogo from "../../../../public/assets/leadster_logo.gif";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi"

function FooterComponent() {
  return (
    <footer className="flex flex-col  items-center bg-[#F3F3F3] w-full pb-7">
      <Image src={FooterLogo}></Image>
      <p className="">Transformando visitantes em clientes.</p>
      <div className="flex flex-row justify-around w-full mt-5">
        <div className="flex flex-col gap-2">
          <p>Links Principais</p>
          <ul className="flex flex-col ml-3 gap-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Ferramenta</a></li>
            <li><a href="#">Preços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p>Cases</p>
          <ul className="flex flex-col gap-2">
            <li><a href="#">Geração de Leads B2B</a></li>
            <li><a href="#">Geração de Leads em Software</a></li>
            <li><a href="#">Geração de Leads em Imobiliária</a></li>
            <li><a href="#">Cases de Sucesso</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p>Materiais</p>
          <ul className="flex flex-col gap-2">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Parceria com Agência</a></li>
            <li><a href="#">Guia Definitivo do Marketing</a></li>
            <li><a href="#">Materiais Gratuitos</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p>Siga a Leadster </p>
          <section className="flex flex-row gap-3">
            <a href="#" className="rounded-full bg-[#ebeef5] p-2"><FaLinkedinIn color="#9fa5bb"/></a>
            <a href="#" className="rounded-full bg-[#ECEDEF] p-2"><FaFacebookF color="#9fa5bb"/></a>
            <a href="#" className="rounded-full bg-[#ECEDEF] p-2"><TfiInstagram color="#9fa5bb"/></a>  
          </section>
          

          <ul className="flex flex-col gap-2 ml-3">
            <li><a href="#">E-mail: contato@leadster.com.br</a></li>
            <li><a href="#">Telefone: (42) 98828-9851</a></li>
          
          </ul>

        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
