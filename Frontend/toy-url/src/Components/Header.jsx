import React from 'react'
import { ReactComponent as MoonIcon } from '../Assets/SVG/Moon.svg'
import CarToy from '../Assets/SVG/CarToy.svg'

function Header() {
  return (
    <div className="flex h-24 items-center justify-between  py-4">
      <div className="flex items-center gap-2 overflow-hidden rounded bg-[#35C3EE] pr-2 ">
        <figure className="grid w-fit place-content-center rounded-r-full bg-blue-700 pl-2 pr-4">
          <img src={CarToy} alt="Car toy" className="h-12 w-12" />
        </figure>
        <p className="text-xl font-bold">Toy Url</p>
      </div>

      <div className="flex gap-8 text-xl">
        <button>About</button>
        <button>Contact</button>
      </div>

      <button className="flex items-center justify-center gap-4">
        <MoonIcon className="h-5 w-5 gap-4" />
        <p className="text-xl font-bold">Choose</p>
      </button>
    </div>
  )
}

export default Header
