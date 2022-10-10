import React from 'react'
import Search from '../Assets/SVG/Search.svg'

function InputBar() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-center gap-3 py-8">
        <div className="flex h-14 w-6/12 items-center rounded-3xl border-[0.5px]  px-6 shadow-xl">
          <figure className="h-1/2">
            <img
              src={Search}
              alt="Search"
              className="mr-5 h-full w-7 border-r-2  pr-2"
            />
          </figure>
          <input
            className="h-1/2 w-full focus:outline-none"
            type="text"
            placeholder="Enter Link Here ..."
          />
        </div>
        <button className="h-14 rounded-3xl bg-blue-600 px-6 font-bold text-white">
          Process
        </button>
      </div>

      {/* Results */}
      <div className="flex w-full justify-center gap-2">
        <p className="text-xl font-bold text-blue-600 underline">
          Lorem, ipsum dolor.
        </p>
        <button className="rounded bg-blue-600 px-2 font-bold text-white">
          copy
        </button>
      </div>
    </div>
  )
}

export default InputBar
