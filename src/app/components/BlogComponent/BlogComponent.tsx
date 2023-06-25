import React from "react";

function BlogComponent() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 border-b-2">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-2 border-black rounded-full">
              Agências
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-2 border-black rounded-full">
              Chatbot
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-2 border-black rounded-full">
              Marketing Digital
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-2 border-black rounded-full">
              Geração de Leads
            </a>
          </li>
          <li>
            <a href="#" className="p-1 pl-4 pr-4 border-2 border-black rounded-full">
              Mídia Paga
            </a>
          </li>
          <li className="">
            <label htmlFor="#">Ordenar por</label>
            <select name="#" id="" className=" ml-2 p-1 pl-4 pr-4 border-2 border-black rounded">
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
