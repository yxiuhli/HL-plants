"use client"
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ProductsPanel from "@/components/productsPanel/ProductsPanel";
import SortMenu from "@/components/sortMenu/SortMenu";
import Filters from "@/components/filterMenu/FilterMenu";
import { getAccessories } from "@/lib/action";

const AccessoriesPage = () => {

  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    try {
      getAccessories().then((data) => {
        setProducts(data);
        setDisplayProducts(
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-10 py-6">
        <Typography variant="h3" className="font-serif">
          Plants
        </Typography>
        <SortMenu products={products} setDisplayProducts={setDisplayProducts} />
      </div>
      <div className="flex gap-10 px-10 mt-4">
        <div className="w-1/5 ">
          <Filters />
        </div>
        <div className="w-4/5">
          {}
          <ProductsPanel products={displayProducts} />
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
