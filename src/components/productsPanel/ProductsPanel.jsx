"use client";
import ProductCard from "./productCard/ProductCard";

const ProductsPanel = ({ products }) => {
  return (
    <div className="grid gap-10 grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPanel;
