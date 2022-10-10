import React from 'react'
import InputBar from '../Components/InputBar'

function Landing() {
  return (
    <div>
      {/* Body */}
      <section className="flex justify-between py-8">
        <div className="font-mont text-[calc(1rem+2vw)] font-medium uppercase leading-tight md:leading-10 lg:leading-none">
          <p className="p-0 text-gray-400">Miniaturize</p>
          <p className="p-0"> long links into Toy URLS</p>
        </div>

        <div className="relative flex w-[22.5rem] flex-wrap place-items-center  gap-2  text-center text-xl">
          <div className="flex h-32 w-44 items-center justify-center rounded-lg bg-purple-600  text-white">
            <p>
              Paste <br />
              Your Link
            </p>
          </div>
          <div className="flex h-32 w-44 items-center justify-center rounded-lg bg-orange-600 text-white">
            <p>
              Click <br />
              Button
            </p>
          </div>
          <div className="h-32 w-44 rounded-lg bg-yellow-600"></div>
          <div className="h-32 w-44 rounded-lg bg-slate-100"></div>
          <div className="absolute bottom-4 left-5 flex h-32 w-44 place-items-center justify-center rounded-lg bg-white text-xl shadow-2xl shadow-black">
            <p>
              Get Your <br /> Toy Url
            </p>
          </div>
        </div>
      </section>
      <main>
        <InputBar />
      </main>
    </div>
  )
}

export default Landing
