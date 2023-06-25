import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";
export default function Home() {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <BlogComponent></BlogComponent>
    </main>
  );
}
