import React from 'react'
import cover_img from "../public/shopping.png"
import Image from 'next/image'



const LogIn= ()=>{
    
    const MyImage = () => {
        return (

          <Image
 
            src={cover_img}
            alt="Picture of the signup"
            width={500}
            height={500}
          />
        )
      }
    return(
        <div className="py-24  bg-bgMain flex-row gap-6 justify-center">
            <div className='mx-auto flex justify-center pl-4'>
                <MyImage/>
            </div>

            <div className='py-10 flex flex-col '>
                <form className=''>
                    <div className=''>
                        <h3 className='text-2xl font-semibold mb-4 mx-auto flex justify-center'>Log in!</h3>
                    </div>

                    <div className='w-96 m-auto '>
                        

                            <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full text-black my-4 bg-transparent py-2 border-b border-black focus:outline-none'
                            >
                                
                            </input>

                            

                            <input
                            type='password'
                            placeholder='Enter your Password'
                            className='w-full text-black my-4  bg-transparent py-2 border-b border-black focus:outline-none'
                            >
                                
                            </input>
                            <div className='py-4 flex mx-auto justify-center'>
                                <button className=" flex w-full   rounded-xl md: bg-main py-2 w-36 bg-blue-500 text-base gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 r">Log in</button>

                            </div>

                            <div className='w-full flex flex-col items-center '>
                                <p className='text-sm font-normal text-black'>Don't have an accont? <span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign Up</span></p>
                            </div>
                    </div>
                </form>
                
            </div>
            
        </div>

    )
}

export default LogIn