import './App.css'
import Navbar from './components/home_page/Navbar/Navbar'
import Banner from './components/home_page/Banner/Banner'
import { useState, useEffect } from 'react'
import MainSection from './components/home_page/MainSection/MainSection'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Steps_Section from './components/home_page/Steps_section/Steps_Section'
import Pricing_Section from './components/home_page/Pricing_section/Pricing_Section'
import CtaBanner from './components/home_page/Cta_Banner/Cta_Banner'
import Footer from './components/home_page/Footer/Footer'

const fetchProducts = async () => {
  const res = await fetch('/data.json') // ✅ fixed path
  return res.json()
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  const handleCartClick = () => {
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    fetchProducts().then(data => setProducts(data))
  }, [])

  return (
    <>
      <Navbar onCartClick={handleCartClick} />
      <Banner />

      <MainSection
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    <ToastContainer />
   <Steps_Section />
    <Pricing_Section />
    <CtaBanner />
   
    </>
  )
}

export default App