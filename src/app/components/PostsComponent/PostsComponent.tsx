import React from "react";
import Image from "next/image";
import Thumbnail from "../../../../public/assets/thumbnail.png";
// import { catchVideosOrVideoById } from "../../services/DataService";
import { videos } from "../../Data/db.json";

interface ModalData {
  setId(id: number): void;
  setIsVideoOpen(value: boolean): void;
}

export function PostsComponent(props: ModalData) {
  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-3 w-[60%] mx-auto gap-5  mt-4 border-b-2 pb-9">
        {videos
          ? videos
              .filter((video) => video.id <= 9)
              .map((video) => (
                // <div key={item.id} className="flex flex-col rounded border-2 w-52 ">
                <div
                  key={video.id}
                  onClick={() => {
                    props.setIsVideoOpen(true);
                    props.setId(video.id);
                  }}
                  className="cursor-pointer rounded-s-lg rounded-lg border-2 mx-auto w-[90%] shadow-lg shadow-gray-300 font-bold text-[#2F495A]"
                >
                  <Image src={Thumbnail} className="cover" alt="asdasd"></Image>
                  <p className="justify-center bg-white ml-2">Como aumentar sua geração de Leads feat. Traktor</p>
                </div>
              ))
          : ""}
      </div>
      <ul className="flex justify-center items-center font-medium text-2xl pt-7 pb-9 text-[#2F495A]">
        <p>Página</p>
        <li className="pl-2 pr-2">1</li>
        <li className="pl-2 pr-2">2</li>
        <li className="border-[#027AF3] border-[1px] rounded-[4px] pl-2 pr-2">3</li>
        <li className="pl-2 pr-2">4</li>

      </ul>
    </section>
  );
}

export default PostsComponent;
