import { useEffect } from 'react'
import ProductsHero from '../components/products/ProductsHero.jsx'
import ProductsList from '../components/products/ProductsList.jsx'
import UpcomingProducts from '../components/products/UpcomingProducts.jsx'
import CTA from '../components/home/CTA.jsx'

const Products = () => {
  useEffect(() => {
    document.title = 'Our Products - HD Globe Trade'
  }, [])

  return (
    <>
      <ProductsHero />
      <ProductsList />
      <UpcomingProducts />
      <CTA />
    </>
  )
}

export default Products