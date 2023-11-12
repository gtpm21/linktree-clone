import Image from "next/image";
import data from "../data.json";
import SocialsBar from "../components/SocialsBar";
import LinkCard from "../components/LinkCard";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image 
      className="rounded" //border-yellow-300
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl mb-8 text-teal-400">{data.name}</h1>
      <div className="flex flex-col w-full items-center">
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link}/>
          ))}
      </div>
      <SocialsBar/>
    </div>
  )
}

