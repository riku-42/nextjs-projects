import React from 'react'
import Menuitem from './Menuitem'
import Link from 'next/link';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center'>
      <div className="flex">
        <Menuitem title="HOME" address="/" Icon={AiFillHome} />
        <Menuitem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className=''>
        <Link href="/">
          <h2 className="text-2xl">
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
