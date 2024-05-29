"use client"
import {useContext, useEffect, useState} from "react";
import ProductCard from "./productCard/ProductCard";
import SortFilterContext from "@/lib/SortFilterProvider";

const ProductsPanel = ({ products }) => {
  const {sort} = useContext(SortFilterContext)
  const [outducts, setOutducts] = useState([])
  useEffect(() =>{
    if(sort===20){
      setOutducts(products.sort((a, b) => a.price - b.price))
    } else if(sort===10){
      setOutducts(products.sort((a, b) => b.price - a.price))
    } else if(sort===0){
      setOutducts(products.sort((a, b) => b.createdAt - a.createdAt))
    }
  },[sort])
   
  return (
    <div className="grid gap-10 grid-cols-3">
      {outducts.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPanel;
