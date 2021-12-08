import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="brand-name">
      <Image src="/chroma_beauty.png" alt="chroma beauty label" width="211" height="41" />
    </div>
   <Navbar /> 
   <div>
     <Homepage />
   </div>

   </>
  )
}
