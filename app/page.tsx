import Search from "@/components/Search";
import Slider from "@/components/Slider";
import Type from "@/components/Type";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <Slider />

      <Type/>

      <Search/>
    </main>
  );
}
