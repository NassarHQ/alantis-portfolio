import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Exhibits from "../components/Exhibits";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Exhibits />
    </main>
  );
}
