import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white p-12 flex flex-col gap-14 h-screen w-fit text-4xl text-gray-400 font-medium'>
        <Link className="visited:text-blue-600" href="/">Dashboard</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/">Users</Link>
        <Link href="/">Orders</Link>
        <Link href="/">Payments</Link>

    </div>
  )
}

export default SideBar