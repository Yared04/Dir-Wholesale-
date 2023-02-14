import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setState] = useState(false)
  useEffect(() => {
    const user = window.localStorage.getItem("user")
    if(user){
        setState(true)
  }
  })
  
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />
      </Head>
      <header>
        <Header loggedIn={loggedIn} />
      </header>
    <Component {...pageProps}/>
    </>
 )
}

export default MyApp
