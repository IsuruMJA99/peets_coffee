import React from 'react'
import Navbar from './component/Navbar'
import Page from './component/Page'
import Footer from './component/Footer'
import Catagory from './component/Catagory'
import HomeDelivery from './component/HomeDelivery'
import CoffeeQuiz from './component/CoffeeQuiz'
import FeaturedMenu from './component/FeaturedMenu'
import BestSellers from './component/BestSellers'
import CoffeeRevolution from './component/CoffeeRevolution'

function App() {
  return (
    <>
    <Navbar/>
    <Page/>
    <Catagory/>
    <BestSellers/>
    <HomeDelivery/>
    <CoffeeQuiz/>
    <FeaturedMenu/>
    <CoffeeRevolution/>
    <Footer/>
    </>
  )
}

export default App
