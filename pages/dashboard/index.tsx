import axios from 'axios'
import type { NextPage } from 'next'
import Card from '../../components/Card'
import SideBar from '../../components/SideBar'
import SmallCard from '../../components/SmallCard'
import TopSelling from '../../components/TopSelling'

export async function getStaticProps(){
  const res = await axios.get('https://dirwholesale.onrender.com/api/product');
  const res2 = await axios.get('https://dirwholesale.onrender.com/api/user/all');
  const res3 = await axios.get('https://dirwholesale.onrender.com/api/order',  {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzU1N2RmZDQ1NWYwZjdmMjQyNWQiLCJpYXQiOjE2NzYyOTM0NjMsImV4cCI6MTY3NjM3OTg2M30.YGTCKKD-ndLciuJms6Dvvh_hlc6nVKqYcwNt0ElYI_s'}
});

  const users = await res2.data;
  const orders = await res3.data;
  const products = await res.data;

  return {
      props :{
          products,
          users, 
          orders
      }

  }
}
const Home: NextPage = ({
 users,
 orders,
 Profit = 3000,
 purchase=12, 
 products}: any) => {

let sortedProducts = products.sort(
    (p1:any, p2:any) => (p1.price < p2.price) ? -1 : (p1.price > p2.price) ? 1 : 0);
 
  return (
    <div className='bg-gray-200'>
      <main className='flex'>
        <SideBar />
        <div className='w-full'>
          <h1 className='uppercase text-5xl text-blue-500 font-bold m-12 '>Dashboard</h1>
          <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Company Valuation</h1>
          <div className='flex w-5/6'>
            <Card title="Last month" amount="30000" percent="14"/>
            <Card title="This month" amount="20000" percent="-14"/>
          </div>
          <div className='w-full'>
            <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Total Statistics</h1>
            <div className='flex'>
              <SmallCard title="Users" amount={users.length}/>
              <SmallCard title="Orders Placed" amount={orders.length}/>
              <SmallCard title="Profit" amount={Profit}/>
              {/* <SmallCard title="Sales Return" amount={Sales_return}/> */}
              <SmallCard title="Purchase" amount={purchase}/>
            </div>
          </div>
          <div>
            <h1 className='text-gray-400 ml-10 mt-5 text-3xl font-bold'>Top Sellings</h1>
            <TopSelling topSellingProducts={sortedProducts.slice(5)}/>
          </div>
        </div>

        
       
        
      </main>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      </div>
  )
}

export default Home

