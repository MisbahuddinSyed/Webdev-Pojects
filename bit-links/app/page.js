import Image from "next/image";
import localfont from 'next/font/local';
import Link from "next/link";

const boldPoppins = localfont({
  src: './fonts/Poppins-Bold.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});
const medPoppins = localfont({
  src: './fonts/Poppins-Medium.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});

export default function Home() {
  return (
    <>
      <div className="m-20 container mx-auto w-[50%] flex flex-col gap-8 justify-center items-center">
        <h1 className={`${boldPoppins.className} text-4xl`}>Best URL shortner in the market</h1>
        <h2 className={`${medPoppins.className} text-3xl`}>We are the most straight forward URL shortner in the world </h2>
        <Link href={'/shorten'}><button className="bg-green-700 text-white font-bold hover:bg-green-400 p-4 px-10 rounded-lg">Try Now</button></Link>
        <div className="size-[600px]"><img src="/office.svg" alt="" /></div>
      </div>
    </>
  );
}
