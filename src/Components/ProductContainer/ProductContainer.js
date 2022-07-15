import products from "../../Data/products.json";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductContainer({ addProduct }) {
  return (
    <section className="row row-cols-4">
      {/* hacer el map de json */}
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          addProduct={addProduct}
        />
      ))}
    </section>
  );
}