import Image from "next/image";
import data from "../data.json";
import SocialsBar from "../components/SocialsBar";

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

function LinkCard({title, href, image}:{title:string; href: string; image?:string;}){
  return (
    <a href={href}
    className="flex items-center p-1 w-full rounded-md 
                hover:scale-105 transition-all border border-yellow-300 
                mb-3 max-w-4xl" 
    >
      <div className="flex text-center w-full ">
        <div className="flex w-20 h-10 items-center">
          <Image 
          className="rounded-sm"
          alt={title}
          src={image!}
          width={80}
          height={80}
        />
      </div>
        <h2 className="flex font-semibold w-full justify-center items-center text-teal-400 -ml-20">
          {title}
        </h2>
      </div>
    </a>
  )
}
