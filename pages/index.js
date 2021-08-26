import ProductCard from '../components/product/ProductCard';
import productData from '../data/productData';

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-8 md:grid-cols-6 sm:grid-cols-2 gap-3">
      {
        productData.map(
          (product, index)=>(
            product.categories.find(category=>category.slug === 'fruits') ? 
            <ProductCard product={product} key={index}/> : ''
          )
        )
      }
    </div>
    </>
  )
}
