import clsx from 'clsx'
import React from 'react'

const TopSelling = ( {topSellingProducts}:any ) => {
  return (
    <div className='ml-10 my-8'>
        <table className='w-1/2 text-xl text-left bg-white shadow-xl rounded-lg text-gray-500'>
            <tbody>
            <tr>
                <th className='p-4'>Product name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Data</th>
            </tr>
            {topSellingProducts.map((product: any)=>{
                return (<tr className=' px-12 py-4'>
                    <td className='p-4'>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                    <td className='pr-4 py-4'>
                        <div className="w-full bg-gray-200 self-start rounded-full h-2.5 dark:bg-gray-700">
                            <div className={clsx(`bg-blue-600 h-2.5 rounded-full w-[${product.Quantity}%]`)}></div>
                        </div>
                    </td>

                </tr>)

            })}

            </tbody>
            
        </table>
    </div>
  )
}

export default TopSelling