import products from '../products';
import CounterApp from './CounterApp';
import ProductCard from './ProductCard';
import './productCard.css'
import onAdd from '../App'
import ShoppingButton from './ShoppingButton';

const Products = ( {cartItems, setCartItems}) => {

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
        <ShoppingButton cartItems={cartItems} setCartItems={setCartItems} product={product}/>
        </ProductCard>
        ))
        }
        </div>
    </>
  )
}

export default Products;