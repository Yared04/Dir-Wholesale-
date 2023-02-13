import axios from 'axios';
import React from 'react'
import SideBar from '../../components/SideBar'

export async function getStaticProps(){
    const res = await axios.get('https://dirwholesale.onrender.com/api/user/all', {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzU1N2RmZDQ1NWYwZjdmMjQyNWQiLCJpYXQiOjE2NzYyOTM0NjMsImV4cCI6MTY3NjM3OTg2M30.YGTCKKD-ndLciuJms6Dvvh_hlc6nVKqYcwNt0ElYI_s'}
    });
    const users = res.data;

    return {
        props:{
            users
        }
    }

}

const index = ( {users}:any ) => {
    const deleteUser =async  (id:string) =>{
        const res = await axios.delete(`https://dirwholesale.onrender.com/api/user/${id}`, {
            headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzU1N2RmZDQ1NWYwZjdmMjQyNWQiLCJpYXQiOjE2NzYyOTM0NjMsImV4cCI6MTY3NjM3OTg2M30.YGTCKKD-ndLciuJms6Dvvh_hlc6nVKqYcwNt0ElYI_s'}
        });
        console.log(res);

    }
  return (
    <div className='bg-gray-200'>
        <main className='flex'>
            <SideBar />
            <div className='w-full'>
                <h1 className='uppercase text-5xl text-blue-500 font-bold m-12 '>users</h1>
                <div className='bg-white shadow-xl m-10 p-8'>
                    <div className='flex justify-between'>
                        <form className="flex basis-1/2">   
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
                    </div>
                    <br /><br />
                    <table className='w-full'>
                                <tbody>
                                <tr className='text-left pl-3 shadow-sm bg-gray-200'>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                
                                {
                                users.map((user, index):any => {
                                    return (
                                    <tr key={index} className="shadow-md">
                                        <td>
                                            <h1 className='font-bold text-black py-5'>{user.firstName + user.lastName}</h1>
                                        </td>
                                        <td>{user.role}</td>
                                        <td>
                                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                            </button>

                                            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                <li>
                                                    <a href="#" onClick={() => deleteUser(user._id)} className="block px-4 py-2 hover:bg-gray-100 text-red-500 dark:hover:bg-gray-600 dark:hover:text-white">Delete user</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit user</a>
                                                </li>
                                                
                                                </ul>
                                            </div>
                                        </td>
                                        
                                    </tr>)
                                })}
                                
                                </tbody>
                                
                            </table>

                    

                </div>
            </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>

    </div>
  )
}

export default index