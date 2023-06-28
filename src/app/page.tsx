'use client'
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import PublicityComponent from "./components/PublicityComponent/PublicityComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import ModalComponent from '../app/components/ModalComponent/ModalComponent'
import { useState } from "react";


export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <BlogComponent></BlogComponent>
      <PostsComponent setId={setId} setIsVideoOpen={setIsVideoOpen}></PostsComponent>
      {isVideoOpen ? <ModalComponent id={id} setIsVideoOpen={setIsVideoOpen}></ModalComponent> : '' }
      <PublicityComponent></PublicityComponent>
      <FooterComponent></FooterComponent>
    </main>
  );
}
