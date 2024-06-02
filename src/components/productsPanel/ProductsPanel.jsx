"use client";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./productCard/ProductCard";
import SortFilterContext from "@/lib/ControlProvider";

const ProductsPanel = ({ products }) => {
  const { sort } = useContext(SortFilterContext);
  const [sorted, setSorted] = useState(products);
  useEffect(() => {
    if (sort === "descending") {
      setSorted(products.sort((a, b) => a.price - b.price));
    } else if (sort === "ascending") {
      setSorted(products.sort((a, b) => b.price - a.price));
    } else {
      setSorted(products.sort((a, b) => b.createdAt - a.createdAt));
    }
  }, [sort]);

  return (
    <div className="grid gap-10 grid-cols-3">
      {sorted.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPanel;
