
import Image from "next/image"

export default function App() {
  return (
    <div className="w-full text-lg text-neutral-950  relative h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-green-50 overflow-none font-content">
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
      <div className="max-w-4xl min-h-screen relative mx-auto flex flex-col gap-10 items-center justify-end py-10">
        <div className="top-10 inset-x-0 absolute flex items-center justify-center gap-4 text-xl font-extralight lg:top-5 lg:right-2 lg:left-auto">
          <button>About</button>
          <button>Portfolio</button>
        </div>
        <div className="hidden lg:block fixed text-4ßxl left-4 right-auto top-2">
          <button className="transition-all text-5xl font-gothic text-shadow-sm text-blue-400 hover:text-red-400 pb-4">Feri Sebestyén</button>
        </div>
        <Image 
          src={"portfolio/portrait.png"}
          alt="portfolio portrait"
          width={400}
          height={400}
          className="object-contain drop-shadow-sm drop-shadow-black pointer-events-none touch-none w-auto h-auto max-w-[400px] max-h-[400px] p-1"
        />
        <div className="lg:hidden text-center lg:fixed lg:text-3xl lg:left-4 lg:right-auto lg:top-2">
          <button className="transition-all text-5xl font-gothic text-shadow-sm text-blue-400 hover:text-red-400 pb-4">Feri Sebestyén</button>
          <div className="max-w-lg mx-auto pl-8 pr-4 text-left transition-all text-lg text-shadow-sm text-blue-400">Hi! I&apos;m Slovakia based web developer, that loves to create everything from interaction-heavy PWA&apos;s through complex admin interfaces.</div>
        </div>
        <p className="hidden lg:block max-w-lg mx-auto pl-8 pr-4 text-center  text-lg text-shadow-sm text-blue-400">Hi!<br></br> I&apos;m Slovakia based web developer, that loves to create everything from interaction-heavy PWA&apos;s through complex admin interfaces.</p>
        <button className="transition-all hidden lg:block absolute bottom-10 inset-x-0 text-5xl drop-shadow-2xl drop-shadow-neutral-950 text-neutral-50  hover:text-red-400 hover:scale-105">show more</button>
      </div>
      <div className="w-full bg-green-50">
        <div className="max-w-2/3 h-0.5 bg-blue-200 rounded mx-auto px-4"></div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white  py-10 flex flex-col items-center gap-8">
        <h1 className="font-gothic text-5xl mx-auto">Portfolio</h1>
        <div className="-translate-z-2 bg-neutral-50 hover:scale-110 rotate-x-10 rotate-z-12 rotate-y-12 hover:translate-z-6 hover:rotate-z-6 transition-all  w-32 flex flex-col items-center border drop-shadow-neutral-500 drop-shadow rounded">
            <Image
              src={"portfolio/atlas-card.png"}
              alt="atlas portfolio card"
              width={512}
              height={733}
              className="object-contain"
            />
            <h2>Atlas</h2>
        </div>
        <div className="text-5xl font-gothic font-bold">***</div>
      </div>
    </div>
  )
}