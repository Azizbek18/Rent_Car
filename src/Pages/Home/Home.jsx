import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Card from '../../Components/Card/Card'
import Cards from '../../Components/Cards/Cards'

function Home() {
  return (
    <div >
      <Header/>
      <main className='bg-[#F6F7F9]'>
          <Hero/>
          <Card/>
          <Cards/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home