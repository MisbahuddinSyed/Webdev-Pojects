import Image from "next/image";
import PhotoReel from "./components/PhotoReel";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden min-h-full min-w-full bg-[#d2e823] grid grid-cols-2 gap-4">
        <div className="title">TITLE</div>
        <div className="photoreel flex justify-center">
        <PhotoReel />
        </div>
      </section>

      <section className="min-h-4/5 min-w-full bg-blue-500">hellow</section>
    
  
    </>
  );
}
