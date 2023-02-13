import React from 'react'
import SideBar from '../../components/SideBar'

const index = () => {
    const products = [{
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 1,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 21,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 1,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 1,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 12,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        category: 'Shoes',
        quantity: 12,
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       },
       {
        name:'Nike air 20',
        price:'1400',
        quantity: 12,
        category: 'Shoes',
        id: 1,
        imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
        size: 33-44,
       }];
     return (
        <div className='bg-gray-200'>
            <main className='flex'>
                <SideBar />
                <div className='w-full'>
                    <h1 className='uppercase text-5xl text-blue-500 font-bold m-12 '>inventory</h1>
                    <div className='grid grid-cols-4 gap-3'>
                        <div className='col-span-3 rounded-lg bg-white shadow-xl ml-10 p-8'>
                            <div className='flex justify-around'>
                                <form className="flex">   
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                                    </div>
                                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                                <button className='rounded-sm border border-blue-700 bg-blue-100 p-3 font-medium text-blue-700'>Export Data</button>
                                <button className='rounded-sm border border-blue-700 bg-blue-100 p-3 font-medium text-blue-700 focus:bg-blue-500'
                                 data-modal-target="staticModal" data-modal-toggle="staticModal" type='button'>Add New</button>

                                <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                                  <div className="relative w-full h-full max-w-5xl md:h-auto">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <div className="flex items-start justify-between p-4 bg-blue-500 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-xl font-semibold  text-white">
                                                Add Product
                                            </h3>
                                            <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                            </button>
                                        </div>
                                        <form>
                                            <div className="relative z-0 w-full m-6">
                                                <input type="text"  id="floating_name" className="block py-2.5 px-5 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                                            </div>
                                            <div className="relative z-0 w-full m-6">
                                                <input type="text"  id="floating_name" className="block py-2.5 px-5 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size</label>
                                            </div>
                                            <div className='m-6'>
                                            <h1> Select Category</h1>
                                            <ul className="text-sm w-1/2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
                                                </div>
                                            </li>
                                            <li className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
                                                </div>
                                            </li>
                                            <li className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
                                                </div>
                                            </li>
                                            <li className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
                                                </div>
                                            </li>
                                            </ul>
                                            </div>
                                            <div className="relative z-0 w-full m-6">
                                                <input type="number"  id="floating_num" className="block py-2.5 px-5 w-1/6 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_num" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                            </div>
                                            <div className="relative z-0 w-full m-6">
                                                <input type="number"  id="floating_num" className="block py-2.5 px-5 w-1/6 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_num" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity Available</label>
                                            </div>
                                            <div className="relative z-0 w-full my-8 mx-6">
                                                <input type="file"  id="floating_num" className="block py-2.5 px-5 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_num" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                                            </div>

                                            <input type="button" className='p-3 bg-blue-500 text-white font-medium rounded-lg m-6' value="Add" />
                                        </form>
                                        <div>

                                        </div>
                                    </div>
                                 </div>  
                                </div>                              

                            </div>
                            <br /><br />
                            <table className='w-full'>
                                <tbody>
                                <tr className='text-left pl-3 shadow-sm bg-gray-200'>
                                    <th className='py-3'>Inv. Id</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                                
                                {
                                products.map((product, index):any => {
                                    return (
                                    <tr key={index} className="shadow-md">
                                        <td>{product.id}</td>
                                        <td>
                                            <img src={product.imageUrl} className="w-36" alt="item image" /></td>
                                        <td className='text-gray-500 mt-4'>
                                            <h1 className='font-bold text-black'>{product.name}</h1>
                                            <p>Category: {product.category}</p> 
                                            <p> Size: {product.size}</p>
                                        </td>
                                        <td>{product.quantity}</td>
                                        <td>
                                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                            </button>

                                            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-red-500 dark:hover:bg-gray-600 dark:hover:text-white">Delete Product</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Product</a>
                                                </li>
                                                
                                                </ul>
                                            </div>
                                        </td>
                                        
                                    </tr>)
                                })}
                                
                                </tbody>
                                
                            </table>


                        </div>
                        <div className='col-span-1 bg-white shadow-xl rounded-lg mr-10 h-fit' >
                            <h1 className='bg-green-500 text-white font-medium p-3'>Filter By Category</h1>
                            <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
                                    </div>
                                </li>
                                {/* <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                                    </div>
                                </li> */}
                            </ul>
                                        

                        </div>

                    </div>


                </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
            </main>

        </div>
        
  )
}

export default index