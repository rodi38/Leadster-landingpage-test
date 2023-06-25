import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";

async function getPublicationData() {
  const res = await fetch(`http://localhost:3004/videos`);
  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
}
// async function getVideosData(arr: Array<string>, loopNumber: number) {
//   arr.map((item) =>{
//     return (
//     <p key={item}>
//       {item}
//     </p>
//     )
//   })

// }
export default async function Home() {
  const data = await getPublicationData();
  const data2 = await Promise.all(data);

  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <BlogComponent></BlogComponent>
      <ul>
        {data2.map((item) => (
          <li key={item.id}>
            <p>{item.descripgittion}</p>
            <a href="#">{item.link}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
