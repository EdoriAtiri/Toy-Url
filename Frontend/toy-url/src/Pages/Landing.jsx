import React from 'react'
// import Recent from '../Components/Recent'
import InputBar from '../Components/InputBar'
import Result from '../Components/Result'

function Landing() {
  return (
    <div>
      {/* Body */}
      <section className="flex flex-col items-center  gap-8 py-8 md:flex-row md:items-start md:justify-between md:gap-0">
        <h2 className="space-x-4 font-mont text-[calc(1rem+2vw)] font-medium uppercase leading-tight md:space-x-0 md:leading-10 lg:leading-none">
          <span className="inline-block p-0 text-gray-500 md:block">
            Miniaturize
          </span>
          <span className="inline-block p-0 md:block"> long links</span>
        </h2>

        <div className="relative flex w-[22.5rem] flex-wrap place-items-center  gap-2  text-center text-xl">
          <div className="relative flex h-32 w-44 items-center justify-center rounded-lg  bg-purple-600 text-white before:absolute before:inset-0 before:z-10 before:rounded-lg before:bg-black before:opacity-25">
            <span className="z-20 font-bold">
              Paste <br />
              Your Link
            </span>
          </div>
          <div className="relative flex h-32 w-44 items-center justify-center rounded-lg bg-orange-600 text-white before:absolute before:inset-0 before:z-10 before:rounded-lg before:bg-black before:opacity-25">
            <span className="z-20 font-bold">
              Click <br />
              Button
            </span>
          </div>
          <div className="h-32 w-44 rounded-lg bg-yellow-600"></div>
          <div className="h-32 w-44 rounded-lg bg-slate-100"></div>
          <div className="absolute bottom-4 left-5 z-30 flex h-32 w-44 place-items-center justify-center rounded-lg bg-white text-xl shadow-2xl shadow-black">
            <span className="font-bold">
              Get Your <br /> Toy Url
            </span>
          </div>
        </div>
      </section>
      <main>
        <InputBar />
        <Result />
      </main>
    </div>
  )
}

export default Landing
