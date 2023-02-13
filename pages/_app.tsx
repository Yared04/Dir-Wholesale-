import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import LogIn from '../components/Login';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />
      </Head>
      <header>
        <Header />
      </header>
    <Component {...pageProps}/>

    <LogIn/>
    {/* <SignUp/> */}
    
    </>
 )
}

export default MyApp
