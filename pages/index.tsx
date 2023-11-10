import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image 
      className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link}/>
      ))}
      
    </div>
  )
}

function LinkCard({title, href, image}:{title:string; href: string; image?:string;}){
  return (
    <a href={href}
    className="flex items-center p-4 w-full rounded-md 
                hover:scale-105 transition-all border border-gray-300 
                mb-3" 
    >
      <div className="flex flex-col">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </a>
  )
}
