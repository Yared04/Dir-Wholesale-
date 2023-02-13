import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-500 flex justify-between'>
        <div className='font-bold text-white text-5xl p-5'>
            <h1>DIR Ethiopia</h1>
        </div>
        <div className='inline-flex'>
        <Link href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-4 text-white w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </Link>
        <Link href='/'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="m-4 text-white w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        </Link>
        


        </div>
    </div>
  )
}

export default Header