import React from 'react'
// import Recent from '../Components/Recent'
import InputBar from '../Components/InputBar'
import Result from '../Components/Result'

function Landing() {
  return (
    <div>
      {/* Body */}
      <section className="flex flex-col items-center  gap-8 py-8 md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="space-x-4 font-mont text-[calc(1rem+2vw)] font-medium uppercase leading-tight md:space-x-0 md:leading-10 lg:leading-none">
          <p className="inline-block p-0 text-gray-400 md:block">Miniaturize</p>
          <p className="inline-block p-0 md:block"> long links</p>
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
        <Result />
      </main>
    </div>
  )
}

export default Landing
