import FloatingImages from "@/components/FloatingImages";
import { ArrowCircleDownIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

export default function App() {
  return (
    <div className="max-w-4xl min-h-screen relative mx-auto flex flex-col gap-10 items-center justify-center">
      <div className="font-gothic text-xl fixed top-1/3 left-2 lg:left-10 text-neutral-300 lg:text-2xl">
        <ul>
          <li>
            <h2>Hemlo</h2>
          </li>
          <li>
            <h2>About</h2>
          </li>
          <li>
            <h2 className="scale-105 text-blue-500">Portfolio</h2>
          </li>
          <li>
            <h2>Bye!</h2>
          </li>
        </ul>
      </div>

      <Image
        src={"portfolio/portrait.png"}
        alt=""
        width={400}
        height={400}
        className="object-contain drop-shadow-sm drop-shadow-black pointer-events-none touch-none w-auto h-auto max-w-[400px] max-h-[250px] p-1"
      />
      <div className="lg:hidden text-center lg:fixed lg:text-3xl lg:left-4 lg:right-auto lg:top-2">
        <button className="transition-all text-5xl font-gothic text-shadow-sm text-blue-400 hover:text-red-400 pb-4">
          Feri Sebestyén
        </button>
        <div className="max-w-lg mx-auto pl-8 pr-4 text-left transition-all text-lg text-shadow-sm text-blue-400">
          Hi! I&apos;m Slovakia based web developer, that loves to create
          everything from interaction-heavy PWA&apos;s through complex admin
          interfaces.
        </div>
      </div>
      <p className="hidden lg:block max-w-lg mx-auto pl-8 pr-4 text-center  text-lg text-shadow-sm text-blue-400">
        Hi!<br></br> I&apos;m Slovakia based web developer, that loves to create
        everything from interaction-heavy PWA&apos;s through complex admin
        interfaces.
      </p>
      <div className="absolute bottom-10 transition-all inset-x-0 text-5xl flex flex-col items-center gap-4 text-neutral-50  hover:text-red-400">
        <button className=" hidden lg:block drop-shadow-2xl drop-shadow-neutral-950  hover:scale-105">
          show more
        </button>
        <ArrowCircleDownIcon className="drop-shadow-2xl drop-shadow-neutral-950 " />
      </div>

    </div>
  );
}
