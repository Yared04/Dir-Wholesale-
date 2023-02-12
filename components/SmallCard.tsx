import React from 'react'

const SmallCard = ({amount, title}:any) => {
  return (
    
        <div className='my-6 ml-10'>
              <div className=' bg-white shadow-xl rounded-lg'>
                <h1 className='text-gray-400 px-5 pt-5'>{title}</h1>
                <div className='inline-flex px-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-6 w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <h1 className='text-blue-500 text-6xl my-4'> <span className='text-3xl'>+</span>{amount}</h1>
                </div>
              </div>
            </div>

    
  )
}

export default SmallCard