import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className='flex'>
        <SideBar />
        <div>
          <h1 className='text-gray-500'>Company Valuation</h1>
           <div className='flex w-3/4'>
          <Card title="Last month" amount="2345634" percent="14"/>
          <Card title="This month" amount="2345" percent="-14"/>
        </div>
        </div>
       
        
      </main>

      </div>
  )
}

export default Home
