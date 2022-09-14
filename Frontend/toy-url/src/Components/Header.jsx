import React from 'react'
import { ReactComponent as MoonIcon } from '../Assets/SVG/Moon.svg'
import CarToy from '../Assets/SVG/CarToy.svg'

function Header() {
  return (
    <div className="flex h-24 items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2 overflow-hidden rounded bg-[#35C3EE] pr-2 text-xl">
        <figure className="grid w-fit place-content-center rounded-r-full bg-blue-700 pl-2 pr-4">
          <img src={CarToy} alt="Car toy" className="h-12 w-12" />
        </figure>
        <p className="font-bold">Toy Url</p>
      </div>

      <div className="flex gap-8">
        <button>About</button>
        <button>Contact</button>
      </div>

      <button className="flex items-center justify-center">
        <MoonIcon className=" h-5 w-5 gap-4" /> <p>Choose</p>
      </button>
    </div>
  )
}

export default Header
