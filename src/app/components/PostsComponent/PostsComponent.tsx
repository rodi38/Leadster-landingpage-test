import React from 'react'
import Image from "next/image";
import Thumbnail from "../../../../public/assets/thumbnail.png";
import { fetchData, updateData } from "../../services/DataService"
export async function PostsComponent() {
    const data = await updateData();
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[60%] mx-auto gap-2  mt-4">
      {data
        .filter((item) => item.id <= 9)
        .map((item) => (
          // <div key={item.id} className="flex flex-col rounded border-2 w-52 ">
          <a href="#" key={item.id} className="rounded-s-lg rounded-lg border-2 mx-auto w-[90%]">
            <div className="">
              <Image src={Thumbnail} className="cover" alt="asdasd"></Image>
              <p className="bg-white">Como aumentar sua geração de Leads feat. Traktor</p>
            </div>
          </a>
        ))}
    </div>
  )
}

export default PostsComponent