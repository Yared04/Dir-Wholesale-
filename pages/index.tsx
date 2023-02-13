import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import SmallCard from '../components/SmallCard'
import TopSelling from '../components/TopSelling'

const Home: NextPage = ({
 new_users=25,
 orders_placed = 40,
 Profit = 3000,
 Sales_return = 323,
 purchase=2344}: any) => {
 const products = [{
  name:'Nike air 20',
  price:'1400',
  category: 'Shoes',
  percent: 1,
 }]
  return (
    <div className='bg-gray-200'>
      <main className='flex'>
        <SideBar />
        <div className='w-full'>
          <h1 className='uppercase text-5xl text-blue-500 font-bold m-12 '>Dashboard</h1>
          <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Company Valuation</h1>
          <div className='flex w-5/6'>
            <Card title="Last month" amount="2345634" percent="14"/>
            <Card title="This month" amount="2345" percent="-14"/>
          </div>
          <div className='w-full'>
            <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Total Statistics</h1>
            <div className='flex'>
              <SmallCard title="New Users" amount={new_users}/>
              <SmallCard title="Orders Placed" amount={orders_placed}/>
              <SmallCard title="Profit" amount={Profit}/>
              <SmallCard title="Sales Return" amount={Sales_return}/>
              <SmallCard title="Purchase" amount={purchase}/>
            </div>
          </div>
          <div>
            <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Top Sellings</h1>
            <TopSelling topSellingProducts={products}/>
          </div>
          <div className='w-full'>
            <h1 className='text-gray-400 ml-10 text-3xl font-bold'>Today's Statistics</h1>
            <div className='flex'>
              <SmallCard title="New Users" amount={new_users}/>
              <SmallCard title="Orders Placed" amount={orders_placed}/>
              <SmallCard title="Profit" amount={Profit}/>
              <SmallCard title="Sales Return" amount={Sales_return}/>
              <SmallCard title="Purchase" amount={purchase}/>
            </div>
          </div>
        </div>

        
       
        
      </main>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      </div>
  )
}

export default Home
