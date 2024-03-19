import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Documentation from "@/components/main/Documentation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

        <Encryption />
        <Projects />
        <Documentation />
      </div>
    </main>
  );
}
