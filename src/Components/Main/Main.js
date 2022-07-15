
import ProductContainer from "../ProductContainer/ProductContainer";

export default function Main({ addProduct }) {
  return (
    <main>
      <ProductContainer addProduct={addProduct} />
    </main>
  );
}