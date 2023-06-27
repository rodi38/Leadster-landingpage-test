import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import PublicityComponent from "./components/PublicityComponent/PublicityComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
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
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <BlogComponent></BlogComponent>
      <PostsComponent></PostsComponent>
      <PublicityComponent></PublicityComponent>
      <FooterComponent></FooterComponent>
    </main>
  );
}
