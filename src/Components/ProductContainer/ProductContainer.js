import products from "../../Data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.css"
export default function ProductContainer({ addProduct }) {
  return (
    <section className="row row-cols-1 cardStyle">
      {/* hacer el map de json */}
      {products.map((product) => (
        <ProductCard className="product"
          product={product}
          key={product.id}
          addProduct={addProduct}
        />
      ))}
    </section>
  );
}