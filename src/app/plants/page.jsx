import { Typography } from "@mui/material";
import React from "react";
import ProductsPanel from "@/components/productsPanel/ProductsPanel";
import { getPlants } from "@/lib/data";
import SortMenu from "@/components/sortMenu/SortMenu";
import Filters from "@/components/filterMenu/FilterMenu";

const PlantsPage = async () => {
  const plants = await getPlants();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-10 py-6">
        <Typography variant="h3">Plants</Typography>

        <SortMenu />
      </div>
      <div className="flex gap-10 px-10 mt-4">
        <div className="w-1/5 bg-blue-300">
          <Filters />
        </div>
        <div className="w-4/5 bg-yellow-300">
          <ProductsPanel products={plants} />
        </div>
      </div>
    </div>
  );
};

export default PlantsPage;
