import clsx from 'clsx'
import React from 'react'

const Card = ({title, amount, percent}: any) => {
  return (
    <div className='m-8 bg-white border h-fit w-1/2 p-12 rounded-lg shadow-xl font-medium'>
        <h1 className='text-2xl text-gray-500'>{title}</h1>
        <h1 className='text-blue-500 text-6xl my-4'>{amount} ETB</h1>
        <p className='text-2xl'>Information</p>
        <p className={clsx(percent > 0 ? 'text-green-500': 'text-red-500')}>{percent} %</p>
    </div>
  )
}

export default Card