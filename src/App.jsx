import './App.css'
import Navbar from './components/home_page/Navbar/Navbar'
import Banner from './components/home_page/Banner/Banner'
import ProductCard from './components/home_page/ProductsCard/ProductCard'
import { Suspense } from 'react'
import MainSection from './components/home_page/MainSection/MainSection'
import { ToastContainer } from 'react-toastify';


const fetchProducts = async () => {

  const res = await fetch('./data.json');
  return res.json();
}




function App() {

 const handleCartClick = () => {
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const productsPromise = fetchProducts();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        toastStyle={{ background: '#1a2535', border: '1px solid #2a3545', color: '#fff' }}
      />
      <Navbar onCartClick={handleCartClick}></Navbar>

      <Banner></Banner>
      
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <ProductCard productsPromise={productsPromise}></ProductCard>
      </Suspense>


    </>
  )
}

export default App
