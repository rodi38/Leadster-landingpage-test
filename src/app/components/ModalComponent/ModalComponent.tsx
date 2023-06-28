import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { catchVideosOrVideoById } from "../../services/DataService";
import { videos } from "../../Data/db.json";

interface ModalData {
  id: number;
  setIsVideoOpen(value: boolean): void;
}

export function ModalComponent(props: ModalData) {
  const video = videos.filter((video) => video.id === props.id);
  return (
    <div className="fixed flex items-center justify-center z-20 w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-[#7c8c98c6]">
      <div className="flex w-[40%]  h-[80%] bg-white justify-center flex-col relative border-t-[4px] border-[#188AFF] rounded-[15px]  ">
        <div
          onClick={() => {
            props.setIsVideoOpen(false);
          }}
          className="cursor-pointer absolute right-0 top-0 mr-2 mt-3"
        >
          <AiOutlineClose  className="text-[#627397] text-2xl"/>
        </div>
        <div className="flex flex-col justify-center items-center p-8 font-bold text-2xl text-[#2F495A]">
          <p className="">
            <span className="text-[#188AFF]">Webinar:</span> Como aumentar sua
          </p>
          <p> Geração de Leads feat. Traktor</p>
        </div>

        <iframe src={`${video[0].embedLink}`} className="w-full h-[60%]"></iframe>
        <div className="justify-center ml-4 mr-4 p-5 text-[#2F495A]">
          <p className=" border-b-2 font-bold">Descrição</p>
          <p>{video[0].description}</p>
        </div>
        <div className="justify-center ml-4 mr-4 p-5 text-[#2F495A]">
          <p className="border-b-2 font-bold">Downloads</p>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
