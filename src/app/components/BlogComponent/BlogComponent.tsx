import React from "react";

function BlogComponent() {
  return (
    <nav className="flex">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 border-b-2">
        <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-[#2F495A]">
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-full">
              Agências
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-full">
              Chatbot
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-full">
              Marketing Digital
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-full">
              Geração de Leads
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-full">
              Mídia Paga
            </a>
          </li>
          <li className="">
            <label htmlFor="#">Ordenar por</label>
            <select name="#" id="" className="ml-2 p-1 pl-4 pr-4 border-[1px] border-[#2F495A] rounded-[6px] text-[#2F495A]">
              <option className="flex text-black">Data de Publicação</option>
              <option className="flex text-black">Data de Publicação</option>
              <option className="flex text-black">Data de Publicação</option>
            </select>
          </li>
        </ul>
      </div>

    </nav>
    
  );
}

export default BlogComponent;
