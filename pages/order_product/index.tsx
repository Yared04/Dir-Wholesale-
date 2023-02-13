import axios from 'axios';
import React, { useState } from 'react'

export async function getStaticProps(){
    const res = await axios.get('https://dirwholesale.onrender.com/api/category');
    const res2 = await axios.get('https://dirwholesale.onrender.com/api/product');
    const categories =await res.data;
    const products = await res2.data;

    return {
        props :{
            categories,
            products
        }

    }
}


const index = ({products }:any) => {
    let [cart, setCart] = useState(null)
    console.log(cart);
 
  return (
    <div className='mx-56 my-10'>
        <table className='w-full'>
                                <tbody>
                                <tr className='text-left pl-3 shadow-sm bg-gray-200'>
                                    <th className='py-3'>Inv. Id</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                                
                                {
                                products.map((product, index):any => {
                                    return (
                                        
                                    <tr key={index} className="shadow-md">
                                        <td className='truncate '>{product._id}</td>
                                        <td>
                                            <img src={product.img} className="w-36" alt="item image" /></td>
                                        <td className='text-gray-500 mt-4'>
                                            <h1 className='font-bold text-black'>{product.name}</h1>
                                            <p>Category: {product.category}</p> 
                                            <p> Size: {product.sizes}</p>
                                        </td>
                                        <td>
                                        <button className="bg-blue-100 border border-blue-500 px-6 py-2 focus:bg-blue-500"
                                         data-modal-target="staticModal" data-modal-toggle="staticModal"> Order</button>
                                        <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                                            <div className="relative  h-full bg-white rounded-lg max-w-5xl md:h-auto">
                                                <div className="relative flex bg-blue-500 dark:bg-gray-700">
                                                    <h1 className='px-8 py-4 text-white font-bold text-xl '>Place an Order</h1>
                                                    <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                                    </button>
                                                </div>
                                                <div>
                                                    <span className='inline-flex p-5'>item id: <p className='font-bold'> {product._id}</p></span>
                                                    <hr />
                                                    <span className='inline-flex p-5'>item name: <p className='font-bold'> {product.name}</p></span>
                                                    
                                                    <hr />
                                                </div>
                                                 <label htmlFor='qty' className='p-5 font-medium'>Quantity: </label>
                                                 <input className="m-5 w-16" type="number" name="quantity" id="qty" />
                                                <br />
                                                <button onClick={()=> setCart(cart.push(product.name))} className='m-5 bg-blue-500 px-5 py-2 rounded-lg focus:shadow-xl focus:px-6 focus:py-3 text-white font-medium'>Place Order</button>
                                                 
                                            </div>
                                        </div>
                                        </td>
                                    </tr>)
                                })}
                                
                                </tbody>
                                
                            </table>
        <button data-modal-target="staticModa" data-modal-toggle="staticModa" className='rounded-full border bg-blue-500 text-white p-5 focus:p-6 fixed bottom-10 right-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
            <div id="staticModa" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative  h-full bg-white rounded-lg max-w-5xl md:h-auto">
                    <div className="relative flex bg-blue-500 dark:bg-gray-700">
                        <h1 className='pl-5 text-white font-bold text-xl '>Place an Order</h1>
                        <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModa">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className='p-5'>
                            <span className='inline-flex'>item id: <p className='font-bold'>{}</p></span>
                            
                        <hr />
                        <span className='inline-flex'>item name: <p className='font-bold'>{}</p></span>
                        <hr />
                    </div>
                        <label htmlFor='qty' className='p-5 font-medium'>Quantity: </label>
                        <input className="m-5 w-18" type="number" name="quantity" id="qty" />
                    <br />
                    <button className='m-5 bg-blue-500 px-5 py-2 rounded-lg focus:shadow-xl focus:px-6 focus:py-3 text-white font-medium'>Place Order</button>
                        
                </div>
            </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>

    </div>
  )
}

export default index