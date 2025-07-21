
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
      <div className="max-w-4xl min-h-screen relative mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="top-10 inset-x-0 absolute flex items-center justify-center gap-4 text-xl font-extralight lg:top-5 lg:right-2 lg:left-auto">
          <button>About</button>
          <button>Portfolio</button>
        </div>
        <div className="hidden lg:block fixed text-4ßxl left-4 right-auto top-2">
          <button className="transition-all text-5xl font-gothic text-shadow-sm text-blue-400 hover:text-red-400 pb-4">Feri Sebestyén</button>
        </div>
        <Image 
          src={"portfolio/portrait.png"}
          alt=""
          width={400}
          height={400}
          className="object-contain drop-shadow-sm drop-shadow-black pointer-events-none touch-none w-auto h-auto max-w-[400px] max-h-[400px] p-1"
        />
        <div className="lg:hidden text-center lg:fixed lg:text-3xl lg:left-4 lg:right-auto lg:top-2">
          <button className="transition-all text-5xl font-gothic text-shadow-sm text-blue-400 hover:text-red-400 pb-4">Feri Sebestyén</button>
          <div className="max-w-lg mx-auto pl-8 pr-4 text-left transition-all text-lg text-shadow-sm text-blue-400">Hi! I'm Slovakia based web developer, that loves to create everything from interaction-heavy PWA's through complex admin interfaces.</div>
        </div>
        <p className="hidden lg:block max-w-lg mx-auto pl-8 pr-4 text-center  text-lg text-shadow-sm text-blue-400">Hi!<br></br> I'm Slovakia based web developer, that loves to create everything from interaction-heavy PWA's through complex admin interfaces.</p>
        <button className="transition-all hidden lg:block absolute bottom-10 inset-x-0 text-5xl drop-shadow-2xl drop-shadow-neutral-950 text-neutral-50  hover:text-red-400 hover:scale-105">show more</button>
      </div>
    </div>
  )
}