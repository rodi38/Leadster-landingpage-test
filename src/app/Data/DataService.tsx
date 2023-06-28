// import { videos } from './db.json'

// export function catchVideosOrVideoById(id?: number) {
//   if(id !== undefined) {
//     return videos.filter((video) => video.id === id);
//   } else {
//     return videos;
//   }
// }

// export async function fetchData(id?: number) {
  // let res: any;
  // if (id != undefined) {
  //   res = await fetch(`https://json-server-dbtestevercel.vercel.app/videos/${id}`);
  // } else {
  //   res = await fetch(`https://json-server-dbtestevercel.vercel.app/videos`);
  // }
  // if (!res.ok) {
  //   throw new Error("failed to fetch");
  // }
  // return res.json();
// }
// export async function updateData(id?: number) {
//   let data: any;
//   if (id != undefined) {
//     data = await fetchData(id);
//   } else {
//     data = await fetchData();
//   }
//   console.log("deu certo");
//   return await Promise.all(data);
// }
