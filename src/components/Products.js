import products from '../products';
import CounterApp from './CounterApp';
import ProductCard from './ProductCard';
import  ShoppingCard from './shoppingButton';
import './productCard.css'

const Products = () => {

  

  return (
    <>
      
      <div className='cards'>
      { 
      
      
      products.map(product => (
        
        <ProductCard key={product.id} onAdd={onAdd}>
          <div>{product.title}</div>
          <div>{product.price}€</div>
          <img className='product__img' src={product.img} alt={product.title} />
        <CounterApp className="counter" />
        <ShoppingCard />
        </ProductCard>
        ))
        }
        </div>
    </>
  )
}

export default Products;