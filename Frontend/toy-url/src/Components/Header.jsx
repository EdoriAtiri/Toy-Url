import React from 'react'
// import { ReactComponent as MoonIcon } from '../Assets/SVG/Moon.svg'
import CarToy from '../Assets/SVG/CarToy.svg'

function Header() {
  return (
    <div className="flex h-24 items-center justify-between  pb-4">
      <div className="flex items-center gap-2 overflow-hidden rounded bg-[#35C3EE] pr-2 ">
        <figure className="grid w-fit place-content-center rounded-r-full bg-blue-700 pl-2 pr-4">
          <img src={CarToy} alt="Car toy" className="h-12 w-12" />
        </figure>
        <h1 className="text-xl font-bold">Toy Url</h1>
      </div>

      <div className="flex gap-4 text-base font-bold md:gap-8 md:text-xl">
        <button className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          About
        </button>
        <button className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </button>
      </div>
      {/* 
      <button className="flex items-center justify-center gap-4">
        <MoonIcon className="h-5 w-5 gap-4" />
        <p className="text-xl font-bold">Choose</p>
      </button> */}
    </div>
  )
}

export default Header
