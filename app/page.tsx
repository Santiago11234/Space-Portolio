import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Documentation from "@/components/main/Documentation";
import Image from "next/image";
import {GlobeDemo} from "@/components/main/GlobeComponent";

import {MacbookScrollDemo } from "@/components/main/MacBookScrollDemo";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Encryption />
        <Projects />
        <GlobeDemo />
        <MacbookScrollDemo/>
        <Documentation />
      </div>
    </main>
  );
}
